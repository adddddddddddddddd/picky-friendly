"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Allergen, Diet, Restaurant } from "@/lib/types"

const ALLERGEN_LABELS: Record<Allergen, string> = {
  gluten: "Gluten",
  lait: "Lait",
  oeufs: "Œufs",
  arachides: "Arachides",
  'fruits-a-coque': "Fruits à coque",
  soja: "Soja",
  poissons: "Poissons",
  crustaces: "Crustacés",
  mollusques: "Mollusques",
  celeri: "Céleri",
  moutarde: "Moutarde",
  sesame: "Sésame",
  so2: "Sulfites",
  lupin: "Lupin",
}

const DIETARY_LABELS: Record<Diet, string> = {
  vegan: "Vegan",
  vegetarien: "Végétarien",
  "sans-gluten": "Sans gluten",
  "sans-lactose": "Sans lactose",
  halal: "Halal",
  casher: "Casher",
}

const MACRO_LABELS: Record<keyof Restaurant["tags"]["macronutrients"], string> =
  {
    energy: "Énergie",
    proteins: "Protéines",
    lipids: "Lipides",
    carbs: "Glucides",
  }

interface Props {
  restaurant: Restaurant
  x: number
  y: number
}

export function RestaurantTooltip({ restaurant, x, y }: Props) {
  const activeMacros = (
    Object.entries(restaurant.tags.macronutrients) as [
      keyof Restaurant["tags"]["macronutrients"],
      boolean,
    ][]
  )
    .filter(([, v]) => v)
    .map(([k]) => MACRO_LABELS[k])

  const activeDietary = (
    Object.entries(restaurant.tags.dietary) as [Diet, boolean][]
  )
    .filter(([, v]) => v)
    .map(([k]) => DIETARY_LABELS[k])

  const left =
    typeof window !== "undefined" && x > window.innerWidth - 260
      ? x - 244
      : x + 16
  const top =
    typeof window !== "undefined" && y > window.innerHeight - 200
      ? y - 180
      : y + 16

  return (
    <div
      className="pointer-events-none absolute z-50 w-56 rounded-lg border bg-popover text-popover-foreground shadow-lg"
      style={{ left, top }}
    >
      <div className="p-3 space-y-2">
        <div>
          <p className="font-heading font-semibold leading-snug text-sm">
            {restaurant.name}
          </p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.round(restaurant.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
            </span>
            <span className="text-xs text-muted-foreground">
              {restaurant.rating.toFixed(1)} · {restaurant.reviewCount} avis
            </span>
          </div>
        </div>

        {activeMacros.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Macros
            </p>
            <p className="mt-0.5 text-xs">{activeMacros.join(", ")}</p>
          </div>
        )}

        {restaurant.tags.allergens.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Allergènes
            </p>
            <p className="mt-0.5 text-xs text-amber-700 dark:text-amber-400">
              {restaurant.tags.allergens
                .map((a) => ALLERGEN_LABELS[a])
                .join(", ")}
            </p>
          </div>
        )}

        {activeDietary.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Régimes
            </p>
            <p className="mt-0.5 text-xs text-green-700 dark:text-green-400">
              {activeDietary.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
