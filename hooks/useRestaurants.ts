import { useMemo } from "react"
import { restaurants } from "@/lib/restaurants"
import type { FilterState } from "@/lib/types"

export function useRestaurants(filters: FilterState) {
  return useMemo(() => {
    const anyMacro = Object.values(filters.macronutrients).some(Boolean)
    const anyAllergen = filters.allergens.length > 0
    const anyDietary = Object.values(filters.dietary).some(Boolean)

    if (!anyMacro && !anyAllergen && !anyDietary) return restaurants

    return restaurants.filter((r) => {
      const m = filters.macronutrients
      if (m.energy && !r.tags.macronutrients.energy) return false
      if (m.proteins && !r.tags.macronutrients.proteins) return false
      if (m.lipids && !r.tags.macronutrients.lipids) return false
      if (m.carbs && !r.tags.macronutrients.carbs) return false

      if (anyAllergen) {
        // exclude restaurants that explicitly list any selected allergen
        if (filters.allergens.some((a) => r.tags.allergens.includes(a)))
          return false
      }

      for (const [key, val] of Object.entries(filters.dietary)) {
        if (val && !r.tags.dietary[key as keyof typeof r.tags.dietary])
          return false
      }

      return true
    })
  }, [filters])
}
