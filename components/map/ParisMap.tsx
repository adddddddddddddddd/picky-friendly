"use client"

import { useEffect, useRef, useState } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { restaurants } from "@/lib/restaurants"
import type { Restaurant } from "@/lib/types"
import { useFilters } from "@/hooks/useFilters"
import { useRestaurants } from "@/hooks/useRestaurants"
import { usePreferences } from "@/lib/preferences-context"
import { FilterPanel } from "@/components/filters/FilterPanel"
import { RestaurantPanel } from "@/components/restaurant/RestaurantPanel"
import { RestaurantTooltip } from "@/components/map/RestaurantTooltip"
import { AppBranding } from "@/components/AppBranding"

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
const PARIS_CENTER: [number, number] = [2.3488, 48.8534]

function makeGeoJSON(data: Restaurant[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: data.map((r) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: r.coordinates },
      properties: { id: r.id, name: r.name, rating: r.rating },
    })),
  }
}

export default function ParisMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const [selected, setSelected] = useState<Restaurant | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [hoveredRestaurant, setHoveredRestaurant] = useState<Restaurant | null>(
    null
  )
  const [tooltipPos, setTooltipPos] = useState<{
    x: number
    y: number
  } | null>(null)

  const { allergenFilters, dietFilters, preferencesReady } = usePreferences()
  const { filters, activeCount, reset, toggleMacro, toggleAllergen, toggleDietary, initFromPreferences } =
    useFilters()
  const filteredRestaurants = useRestaurants(filters)

  useEffect(() => {
    if (preferencesReady) {
      initFromPreferences([...allergenFilters], [...dietFilters])
    }
  }, [preferencesReady, allergenFilters, dietFilters, initFromPreferences])
  const filteredRestaurantsRef = useRef(filteredRestaurants)
  useEffect(() => {
    filteredRestaurantsRef.current = filteredRestaurants
  }, [filteredRestaurants])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: PARIS_CENTER,
      zoom: 12,
    })

    mapRef.current = map
    map.addControl(new maplibregl.NavigationControl(), "bottom-right")

    map.on("load", () => {
      map.addSource("restaurants", {
        type: "geojson",
        data: makeGeoJSON(restaurants),
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      })

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "restaurants",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#5C6F46",
            5,
            "#4A5940",
            10,
            "#414F32",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            22,
            5,
            28,
            10,
            34,
          ],
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      })

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "restaurants",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["Noto Sans Bold", "Noto Sans Regular"],
          "text-size": 13,
        },
        paint: { "text-color": "#ffffff" },
      })

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "restaurants",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#738A58",
          "circle-radius": 8,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      })

      map.on("click", "clusters", async (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        })
        if (!features.length) return

        const clusterId = features[0].properties.cluster_id as number
        const source = map.getSource("restaurants") as maplibregl.GeoJSONSource

        try {
          const zoom = await source.getClusterExpansionZoom(clusterId)
          const geometry = features[0].geometry
          if (geometry.type !== "Point") return
          map.easeTo({ center: geometry.coordinates as [number, number], zoom })
        } catch {
          // cluster expansion failed — ignore
        }
      })

      map.on("click", "unclustered-point", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["unclustered-point"],
        })
        if (!features.length) return

        const id = features[0].properties?.id as string
        const restaurant = restaurants.find((r) => r.id === id) ?? null
        setSelected(restaurant)
      })

      map.on("mouseenter", "clusters", () => {
        map.getCanvas().style.cursor = "pointer"
      })
      map.on("mouseleave", "clusters", () => {
        map.getCanvas().style.cursor = ""
      })

      map.on("mouseenter", "unclustered-point", (e) => {
        map.getCanvas().style.cursor = "pointer"
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["unclustered-point"],
        })
        if (!features.length) return
        const id = features[0].properties?.id as string
        const restaurant =
          filteredRestaurantsRef.current.find((r) => r.id === id) ?? null
        setHoveredRestaurant(restaurant)
        setTooltipPos({ x: e.point.x, y: e.point.y })
      })

      map.on("mousemove", "unclustered-point", (e) => {
        setTooltipPos({ x: e.point.x, y: e.point.y })
      })

      map.on("mouseleave", "unclustered-point", () => {
        map.getCanvas().style.cursor = ""
        setHoveredRestaurant(null)
        setTooltipPos(null)
      })

      setMapLoaded(true)
    })

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  // Update map source when filtered restaurants change
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return
    const map = mapRef.current
    const source = map.getSource("restaurants") as maplibregl.GeoJSONSource
    if (!source) return

    source.setData(makeGeoJSON(filteredRestaurants))

    if (activeCount > 0 && filteredRestaurants.length > 0) {
      const bounds = new maplibregl.LngLatBounds()
      filteredRestaurants.forEach((r) =>
        bounds.extend(r.coordinates as [number, number])
      )
      map.fitBounds(bounds, { padding: 80, maxZoom: 15 })
    } else if (activeCount === 0) {
      map.easeTo({ center: PARIS_CENTER, zoom: 12 })
    }
  }, [filteredRestaurants, mapLoaded, activeCount])

  // Deselect if selected restaurant is no longer visible
  useEffect(() => {
    if (selected && !filteredRestaurants.find((r) => r.id === selected.id)) {
      setSelected(null)
    }
  }, [filteredRestaurants, selected])

  return (
    <div className="relative h-screen w-full">
      <div ref={containerRef} className="h-full w-full" />

      <div className="absolute left-4 top-4 z-10 rounded-xl bg-background/80 px-4 py-3 shadow-sm backdrop-blur-sm">
        <AppBranding />
      </div>

      <FilterPanel
        filters={filters}
        activeCount={activeCount}
        onToggleMacro={toggleMacro}
        onToggleAllergen={toggleAllergen}
        onToggleDietary={toggleDietary}
        onReset={reset}
      />

      <RestaurantPanel
        restaurant={selected}
        onClose={() => setSelected(null)}
      />

      {hoveredRestaurant && tooltipPos && (
        <RestaurantTooltip
          restaurant={hoveredRestaurant}
          x={tooltipPos.x}
          y={tooltipPos.y}
        />
      )}
    </div>
  )
}
