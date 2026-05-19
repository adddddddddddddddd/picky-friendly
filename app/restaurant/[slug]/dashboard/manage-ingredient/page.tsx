"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
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
import { Search, Plus, Pencil, Package, PackageX, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Allergen, Diet } from "@/lib/types"
import {
  INITIAL_INGREDIENTS,
  ALL_ALLERGENS,
  ALL_DIETS,
  ALLERGEN_LABELS,
  DIET_LABELS,
  STOCK_CONFIG,
  type StockStatus,
  type Ingredient,
} from "@/lib/data/ingredients"


export default function ManageIngredientPage() {
  const { slug } = useParams<{ slug: string }>()
  const [ingredients, setIngredients] = useState<Ingredient[]>(INITIAL_INGREDIENTS)
  const [draft, setDraft] = useState<Ingredient | null>(null)
  const [search, setSearch] = useState("")
  const [stockFilter, setStockFilter] = useState<StockStatus | null>(null)

  const filtered = useMemo(() => {
    return ingredients.filter((ing) => {
      if (stockFilter && ing.stock !== stockFilter) return false
      if (search && !ing.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [ingredients, search, stockFilter])

  const counts = useMemo(
    () => ({
      "en-stock": ingredients.filter((i) => i.stock === "en-stock").length,
      faible: ingredients.filter((i) => i.stock === "faible").length,
      rupture: ingredients.filter((i) => i.stock === "rupture").length,
    }),
    [ingredients],
  )

  function openEdit(ing: Ingredient) {
    setDraft({
      ...ing,
      allergens: [...ing.allergens],
      mayContain: [...ing.mayContain],
      diets: [...ing.diets],
    })
  }

  function toggleAllergen(allergen: Allergen) {
    if (!draft) return
    const has = draft.allergens.includes(allergen)
    setDraft({
      ...draft,
      allergens: has
        ? draft.allergens.filter((a) => a !== allergen)
        : [...draft.allergens, allergen],
      mayContain: has
        ? draft.mayContain
        : draft.mayContain.filter((a) => a !== allergen),
    })
  }

  function toggleMayContain(allergen: Allergen) {
    if (!draft) return
    const has = draft.mayContain.includes(allergen)
    setDraft({
      ...draft,
      mayContain: has
        ? draft.mayContain.filter((a) => a !== allergen)
        : [...draft.mayContain, allergen],
      allergens: has
        ? draft.allergens
        : draft.allergens.filter((a) => a !== allergen),
    })
  }

  function toggleDiet(diet: Diet) {
    if (!draft) return
    const has = draft.diets.includes(diet)
    setDraft({
      ...draft,
      diets: has ? draft.diets.filter((d) => d !== diet) : [...draft.diets, diet],
    })
  }

  function setStockDraft(status: StockStatus) {
    if (!draft) return
    setDraft({ ...draft, stock: status })
  }

  function saveChanges() {
    if (!draft) return
    setIngredients((prev) => prev.map((ing) => (ing.id === draft.id ? draft : ing)))
    setDraft(null)
  }

  const STOCK_ICONS = {
    "en-stock": Package,
    faible: AlertTriangle,
    rupture: PackageX,
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Stocks & Ingrédients</h1>
        <Button>
          <Plus data-icon="inline-start" />
          Ajouter un ingrédient
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-3">
        {(["en-stock", "faible", "rupture"] as StockStatus[]).map((status) => {
          const cfg = STOCK_CONFIG[status]
          const Icon = STOCK_ICONS[status]
          const isActive = stockFilter === status
          return (
            <button
              key={status}
              onClick={() => setStockFilter(isActive ? null : status)}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                isActive ? "bg-muted ring-1 ring-border" : "hover:bg-muted/50",
              )}
            >
              <Icon className={cn("size-4 shrink-0", cfg.textClass)} />
              <div>
                <p className="text-xl font-bold">{counts[status]}</p>
                <p className="text-xs text-muted-foreground">{cfg.label}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Rechercher un ingrédient…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ingrédient</TableHead>
              <TableHead>Quantité</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Allergènes (contient)</TableHead>
              <TableHead>Peut contenir</TableHead>
              <TableHead>Régimes</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-24 text-center text-muted-foreground"
                >
                  Aucun ingrédient trouvé
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((ing) => {
                const cfg = STOCK_CONFIG[ing.stock]
                return (
                  <TableRow
                    key={ing.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => openEdit(ing)}
                  >
                    <TableCell className="font-medium">{ing.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {ing.quantity}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn("whitespace-nowrap", cfg.badgeClass)}
                      >
                        {cfg.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex max-w-52 flex-wrap gap-1">
                        {ing.allergens.length > 0 ? (
                          ing.allergens.map((a) => (
                            <AllergenBadge
                              key={a}
                              allergen={a}
                              language="fr"
                              restaurantId={slug}
                            />
                          ))
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex max-w-44 flex-wrap gap-1">
                        {ing.mayContain.length > 0 ? (
                          ing.mayContain.map((a) => (
                            <Badge
                              key={a}
                              variant="outline"
                              className="gap-1 border-orange-600/20 bg-orange-50/60 text-xs text-orange-600"
                            >
                              ~ {ALLERGEN_LABELS[a]}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex max-w-44 flex-wrap gap-1">
                        {ing.diets.length > 0 ? (
                          ing.diets.map((d) => (
                            <DietBadge
                              key={d}
                              diet={d}
                              language="fr"
                              restaurantId={slug}
                            />
                          ))
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          openEdit(ing)
                        }}
                      >
                        <Pencil data-icon="inline-start" />
                        Modifier
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Sheet */}
      <Sheet
        open={!!draft}
        onOpenChange={(open) => {
          if (!open) setDraft(null)
        }}
      >
        <SheetContent className="flex flex-col gap-0 sm:max-w-lg">
          <div className="flex flex-1 flex-col overflow-y-auto">
            <SheetHeader className="px-6 pb-4 pt-6">
              <SheetTitle>{draft?.name}</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 px-6 pb-6">
              {/* Stock status */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  État du stock
                </p>
                <div className="flex gap-2">
                  {(["en-stock", "faible", "rupture"] as StockStatus[]).map(
                    (status) => {
                      const cfg = STOCK_CONFIG[status]
                      const isActive = draft?.stock === status
                      return (
                        <button
                          key={status}
                          onClick={() => setStockDraft(status)}
                          className={cn(
                            "flex-1 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
                            isActive
                              ? cn(cfg.badgeClass, "ring-2 ring-offset-1 ring-current")
                              : "hover:bg-muted/50",
                          )}
                        >
                          {cfg.label}
                        </button>
                      )
                    },
                  )}
                </div>
              </div>

              <Separator />

              {/* Allergens table */}
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Allergènes
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    &ldquo;Contient&rdquo; = présent dans l&apos;ingrédient ·
                    &ldquo;Peut contenir&rdquo; = traces possibles
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border">
                  {/* Header row */}
                  <div className="grid grid-cols-[1fr_88px_108px] bg-muted/30">
                    <div className="px-3 py-2 text-xs font-medium text-muted-foreground">
                      Allergène
                    </div>
                    <div className="px-3 py-2 text-center text-xs font-medium text-muted-foreground">
                      Contient
                    </div>
                    <div className="px-3 py-2 text-center text-xs font-medium text-muted-foreground">
                      Peut contenir
                    </div>
                  </div>
                  {/* Allergen rows */}
                  {ALL_ALLERGENS.map((allergen, i) => {
                    const hasAllergen = draft?.allergens.includes(allergen) ?? false
                    const hasMayContain = draft?.mayContain.includes(allergen) ?? false
                    return (
                      <div
                        key={allergen}
                        className={cn(
                          "grid grid-cols-[1fr_88px_108px] items-center border-t",
                          i % 2 !== 0 ? "bg-muted/20" : "",
                        )}
                      >
                        <div className="px-3 py-2">
                          <AllergenBadge
                            allergen={allergen}
                            language="fr"
                            restaurantId={slug}
                          />
                        </div>
                        <div className="flex justify-center px-3 py-2">
                          <Checkbox
                            checked={hasAllergen}
                            onCheckedChange={() => toggleAllergen(allergen)}
                          />
                        </div>
                        <div className="flex justify-center px-3 py-2">
                          <Checkbox
                            checked={hasMayContain}
                            onCheckedChange={() => toggleMayContain(allergen)}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <Separator />

              {/* Diets */}
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Régimes compatibles
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Cochez les régimes auxquels cet ingrédient est compatible
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {ALL_DIETS.map((diet) => {
                    const hasDiet = draft?.diets.includes(diet) ?? false
                    return (
                      <label
                        key={diet}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 transition-colors hover:bg-muted/50"
                      >
                        <Checkbox
                          checked={hasDiet}
                          onCheckedChange={() => toggleDiet(diet)}
                        />
                        <div className="flex items-center gap-2">
                          <DietBadge diet={diet} language="fr" restaurantId={slug} />
                          <span className="text-sm">{DIET_LABELS[diet]}</span>
                        </div>
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <SheetFooter className="shrink-0 border-t px-6 pb-6 pt-4">
            <Button className="w-full" onClick={saveChanges}>
              Enregistrer les modifications
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
