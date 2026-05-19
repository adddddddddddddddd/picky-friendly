"use client"

import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { menuItems as allMenuItemsMap } from "@/lib/data/menu"
import { uiTranslations } from "@/lib/data/translations"
import type { MenuItem } from "@/lib/types"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Pencil, Plus } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ALL_DISHES: MenuItem[] = allMenuItemsMap.judy ?? []

function computeCompletion(item: MenuItem): number {
  let score = 0
  if (item.image) score += 25
  if (item.price > 0) score += 25
  if (item.allergens.length > 0) score += 25
  if (item.diets.length > 0) score += 25
  return score
}

function computeAlerts(item: MenuItem): number {
  let count = 0
  if (!item.image) count++
  if (!item.price) count++
  if (item.allergens.length === 0) count++
  return count
}

export default function ManageDishPage() {
  const [selected, setSelected] = useState<MenuItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null)
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()

  const t = (uiTranslations as Record<string, typeof uiTranslations.judy>)[slug]?.fr ?? uiTranslations.judy.fr

  const categories = useMemo(
    () => [...new Set(ALL_DISHES.map((d) => d.category))],
    [],
  )

  const subcategories = useMemo(() => {
    const source = activeCategory
      ? ALL_DISHES.filter((d) => d.category === activeCategory)
      : ALL_DISHES
    return [...new Set(source.map((d) => d.subcategory).filter(Boolean))] as string[]
  }, [activeCategory])

  const filteredDishes = useMemo(() => {
    return ALL_DISHES.filter((d) => {
      if (activeCategory && d.category !== activeCategory) return false
      if (activeSubcategory && d.subcategory !== activeSubcategory) return false
      return true
    })
  }, [activeCategory, activeSubcategory])

  function handleCategoryClick(cat: string) {
    if (activeCategory === cat) {
      setActiveCategory(null)
      setActiveSubcategory(null)
    } else {
      setActiveCategory(cat)
      setActiveSubcategory(null)
    }
  }

  function handleSubcategoryClick(sub: string) {
    setActiveSubcategory(activeSubcategory === sub ? null : sub)
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Plats</h1>
        <Button onClick={() => router.push(`/restaurant/${slug}/dashboard/manage-dish/new`)}>
          <Plus data-icon="inline-start" />
          Ajouter un plat
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Filtres</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryClick(cat)}
            >
              {t.categories[cat] ?? cat}
            </Button>
          ))}
        </div>
        {subcategories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {subcategories.map((sub) => (
              <Badge
                key={sub}
                variant={activeSubcategory === sub ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleSubcategoryClick(sub)}
              >
                {t.subcategoryLabels[sub] ?? sub}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Nom</TableHead>
              <TableHead>Ingrédients</TableHead>
              <TableHead>Complétion</TableHead>
              <TableHead>Allergènes</TableHead>
              <TableHead>Régimes</TableHead>
              <TableHead>Alertes</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDishes.map((dish) => {
              const completion = computeCompletion(dish)
              const alerts = computeAlerts(dish)
              return (
                <TableRow
                  key={dish.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelected(dish)}
                >
                  <TableCell>
                    <Avatar className="size-9 rounded-md">
                      <AvatarImage src={dish.image} alt={dish.translations.fr.name} className="object-cover" />
                      <AvatarFallback className="rounded-md text-xs">
                        {dish.translations.fr.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">
                    {dish.translations.fr.name}
                  </TableCell>

                  <TableCell className="text-sm text-muted-foreground">
                    {dish.allergens.length}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={completion} className="h-2 w-20" />
                      <span className="text-xs text-muted-foreground">{completion}%</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex max-w-48 gap-1 overflow-x-auto pb-0.5">
                      {dish.allergens.length > 0 ? (
                        dish.allergens.map((a) => (
                          <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex max-w-40 gap-1 overflow-x-auto pb-0.5">
                      {dish.diets.length > 0 ? (
                        dish.diets.map((d) => (
                          <DietBadge key={d} diet={d} language="fr" restaurantId="judy" />
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    {alerts > 0 ? (
                      <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                        {alerts}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        0
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => { e.stopPropagation(); setSelected(dish) }}
                    >
                      <Pencil data-icon="inline-start" />
                      Modifier
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null) }}>
        <SheetContent className="flex flex-col gap-0 sm:max-w-md">
          <div className="flex flex-1 flex-col overflow-y-auto">
          {selected?.image && (
            <div className="relative h-48 w-full shrink-0 overflow-hidden">
              <Image
                src={selected.image}
                alt={selected.translations.fr.name}
                fill
                className="object-cover"
                sizes="448px"
              />
            </div>
          )}

          <SheetHeader className="px-6 pb-6 pt-6">
            <SheetTitle>{selected?.translations.fr.name}</SheetTitle>
          </SheetHeader>

          <div className="flex flex-1 flex-col gap-6 px-6">
            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Description</p>
              <p className="text-sm">
                {selected?.translations.fr.description || <span className="text-muted-foreground">Aucune description</span>}
              </p>
            </div>

            <Separator />

            {/* Ingredients (placeholder) */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ingrédients</p>
              <p className="text-sm text-muted-foreground italic">À venir</p>
            </div>

            <Separator />

            {/* Allergens */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Allergènes</p>
              {selected && selected.allergens.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {selected.allergens.map((a) => (
                    <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Aucun allergène</p>
              )}
            </div>

            <Separator />

            {/* Diets */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Régimes</p>
              {selected && selected.diets.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {selected.diets.map((d) => (
                    <DietBadge key={d} diet={d} language="fr" restaurantId="judy" />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Aucun régime</p>
              )}
            </div>

            <Separator />

            {/* Macros */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Macronutriments</p>
              {selected && (
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Calories", value: `${selected.macros.calories} kcal` },
                    { label: "Protéines", value: `${selected.macros.proteines} g` },
                    { label: "Glucides", value: `${selected.macros.glucides} g` },
                    { label: "Lipides", value: `${selected.macros.lipides} g` },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg border bg-muted/30 px-3 py-2">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>

          <SheetFooter className="shrink-0 px-6 pb-6 pt-4 border-t">
            <Button
              className="w-full"
              onClick={() => router.push(`/restaurant/${slug}/dashboard/manage-dish/${selected?.id}`)}
            >
              <Pencil data-icon="inline-start" />
              Modifier le plat
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
