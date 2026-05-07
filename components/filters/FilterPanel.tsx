"use client"

import { SlidersHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { Allergen, Diet, FilterState } from "@/lib/types"

const MACROS: { key: keyof FilterState["macronutrients"]; label: string }[] = [
  { key: "energy", label: "Énergie" },
  { key: "proteins", label: "Protéines" },
  { key: "lipids", label: "Lipides" },
  { key: "carbs", label: "Glucides" },
]

const ALLERGENS: { key: Allergen; label: string }[] = [
  { key: "gluten", label: "Gluten" },
  { key: "lait", label: "Lait" },
  { key: "oeufs", label: "Œufs" },
  { key: "arachides", label: "Arachides" },
  { key: "fruits-a-coque", label: "Fruits à coque" },
  { key: "soja", label: "Soja" },
  { key: "poissons", label: "Poissons" },
  { key: "crustaces", label: "Crustacés" },
  { key: "mollusques", label: "Mollusques" },
  { key: "celeri", label: "Céleri" },
  { key: "moutarde", label: "Moutarde" },
  { key: "sesame", label: "Sésame" },
  { key: "so2", label: "Sulfites" },
  { key: "lupin", label: "Lupin" },
]

const DIETARY: { key: Diet; label: string }[] = [
  { key: "vegan", label: "Vegan" },
  { key: "vegetarien", label: "Végétarien" },
  { key: "sans-gluten", label: "Sans gluten" },
  { key: "sans-lactose", label: "Sans lactose" },
  { key: "halal", label: "Halal" },
  { key: "casher", label: "Casher" },
]

interface FilterPanelProps {
  filters: FilterState
  activeCount: number
  onToggleMacro: (key: keyof FilterState["macronutrients"]) => void
  onToggleAllergen: (allergen: Allergen) => void
  onToggleDietary: (tag: Diet) => void
  onReset: () => void
}

export function FilterPanel({
  filters,
  activeCount,
  onToggleMacro,
  onToggleAllergen,
  onToggleDietary,
  onReset,
}: FilterPanelProps) {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <button className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-md ring-1 ring-border transition-shadow hover:shadow-lg">
          <SlidersHorizontal className="h-4 w-4 text-foreground" />
          <span className="text-sm font-medium">Filtres</span>
          {activeCount > 0 && (
            <Badge className="h-5 min-w-5 rounded-full px-1.5 text-xs">
              {activeCount}
            </Badge>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-80 flex-col gap-0 p-0"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle className="font-heading text-lg">Filtres</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1">
          <div className="space-y-6 px-6 py-4">
            <section>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Macronutriments
              </h3>
              <div className="space-y-2.5">
                {MACROS.map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <Checkbox
                      checked={filters.macronutrients[key]}
                      onCheckedChange={() => onToggleMacro(key)}
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Allergènes à exclure
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {ALLERGENS.map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Checkbox
                      checked={filters.allergens.includes(key)}
                      onCheckedChange={() => onToggleAllergen(key)}
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Régimes spécifiques
              </h3>
              <div className="space-y-2.5">
                {DIETARY.map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <Checkbox
                      checked={!!filters.dietary[key]}
                      onCheckedChange={() => onToggleDietary(key)}
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>

        <SheetFooter className="border-t px-6 py-4">
          <Button
            variant="outline"
            onClick={onReset}
            disabled={activeCount === 0}
            className="flex-1 py-2"
          >
            Réinitialiser
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
