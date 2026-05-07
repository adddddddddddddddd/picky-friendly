'use client'

import type { Allergen, Diet, Language } from '@/lib/types'
import { uiTranslations } from '@/lib/data/translations'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const ALL_ALLERGENS: Allergen[] = [
  'gluten', 'crustaces', 'oeufs', 'poissons', 'arachides', 'soja',
  'lait', 'fruits-a-coque', 'celeri', 'moutarde', 'sesame', 'so2', 'lupin', 'mollusques',
]

const ALL_DIETS: Diet[] = ['vegan', 'vegetarien', 'halal', 'casher', 'sans-gluten', 'sans-lactose']

interface FilterPanelProps {
  language: Language
  allergenFilters: Set<Allergen>
  dietFilters: Set<Diet>
  onAllergenToggle: (a: Allergen) => void
  onDietToggle: (d: Diet) => void
  onClear: () => void
  restaurantId: string
}

function FilterContent({
  language,
  allergenFilters,
  dietFilters,
  onAllergenToggle,
  onDietToggle,
  onClear,
  restaurantId,
}: FilterPanelProps) {
  const t = uiTranslations[restaurantId][language]
  const totalActive = allergenFilters.size + dietFilters.size

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {totalActive > 0 && (
          <Button variant="ghost" size="sm" onClick={onClear} className="h-7 gap-1 text-xs">
            <X className="size-3" />
            {t.clearFilters}
          </Button>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{t.allergens}</p>
        <div className="flex flex-wrap gap-1.5">
          {ALL_ALLERGENS.map((a) => (
            <button
              key={a}
              onClick={() => onAllergenToggle(a)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <Badge
                variant="outline"
                className={cn(
                  'cursor-pointer text-xs',
                  allergenFilters.has(a)
                    ? 'border-orange-500 bg-orange-500 text-white dark:border-orange-500 dark:bg-orange-500 dark:text-white'
                    : 'border-orange-600/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-950 dark:text-orange-400'
                )}
              >
                {t.allergenLabels[a]}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{t.diets}</p>
        <div className="flex flex-wrap gap-1.5">
          {ALL_DIETS.map((d) => (
            <button
              key={d}
              onClick={() => onDietToggle(d)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <Badge
                variant="outline"
                className={cn(
                  'cursor-pointer text-xs',
                  dietFilters.has(d)
                    ? 'border-green-600 bg-green-500 text-white dark:border-green-500 dark:bg-green-500 dark:text-white'
                    : 'border-green-600/30 bg-green-50 text-green-700 dark:border-green-500/30 dark:bg-green-950 dark:text-green-400'
                )}
              >
                {t.dietLabels[d]}
              </Badge>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FilterPanel(props: FilterPanelProps) {
  const { language, allergenFilters, dietFilters, restaurantId } = props
  const t = uiTranslations[restaurantId][language]
  const totalActive = allergenFilters.size + dietFilters.size

  return (
    <>
      {/* Mobile: Sheet */}
      <div className="flex items-center gap-2 px-4 py-3 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <SlidersHorizontal className="size-4" />
              {t.filters}
              {totalActive > 0 && (
                <Badge className="ml-1 h-4 w-4 justify-center p-0 text-[10px]">{totalActive}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto rounded-t-xl">
            <SheetHeader className="mb-4">
              <SheetTitle>{t.filters}</SheetTitle>
            </SheetHeader>
            <div className="px-4 pb-6">
              <FilterContent {...props} />
            </div>
          </SheetContent>
        </Sheet>

        {totalActive > 0 && (
          <span className="text-muted-foreground text-xs">
            {totalActive} {t.filtersActive}
          </span>
        )}
      </div>

      {/* Desktop: inline */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <FilterContent {...props} />
        </div>
        <Separator />
      </div>
    </>
  )
}
