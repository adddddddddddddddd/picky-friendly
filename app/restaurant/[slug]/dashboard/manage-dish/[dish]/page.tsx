"use client"

import { useState, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import { menuItems as allMenuItemsMap } from "@/lib/data/menu"
import type { Allergen, Diet } from "@/lib/types"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronLeft, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

// ─── Types ───────────────────────────────────────────────────────────────────

interface MockIngredient {
  id: string
  name: string
  allergens: Allergen[]
  diets: Diet[]
  mayContain: Allergen[]
  supplier: string
  lastDelivery: string
  macros: { calories: number; proteines: number; glucides: number; lipides: number }
}

interface SelectedIngredient {
  ingredient: MockIngredient
  quantity: string
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_INGREDIENTS: MockIngredient[] = [
  {
    id: "farine-ble",
    name: "Farine de blé T55",
    allergens: ["gluten"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["soja"],
    supplier: "Moulin de Chars",
    lastDelivery: "2026-05-12",
    macros: { calories: 364, proteines: 10.3, glucides: 74.5, lipides: 1.2 },
  },
  {
    id: "beurre-doux",
    name: "Beurre doux AOP",
    allergens: ["lait"],
    diets: ["vegetarien"],
    mayContain: [],
    supplier: "Maison Dupont",
    lastDelivery: "2026-05-15",
    macros: { calories: 717, proteines: 0.9, glucides: 0.1, lipides: 81 },
  },
  {
    id: "oeufs-frais",
    name: "Œufs frais plein air",
    allergens: ["oeufs"],
    diets: ["vegetarien"],
    mayContain: [],
    supplier: "Ferme du Val",
    lastDelivery: "2026-05-16",
    macros: { calories: 155, proteines: 13, glucides: 1.1, lipides: 11 },
  },
  {
    id: "creme-fraiche",
    name: "Crème fraîche épaisse 30%",
    allergens: ["lait"],
    diets: ["vegetarien"],
    mayContain: [],
    supplier: "Maison Dupont",
    lastDelivery: "2026-05-14",
    macros: { calories: 292, proteines: 2.4, glucides: 3.7, lipides: 30 },
  },
  {
    id: "saumon-frais",
    name: "Saumon Atlantique frais",
    allergens: ["poissons"],
    diets: [],
    mayContain: [],
    supplier: "Marché de Rungis",
    lastDelivery: "2026-05-16",
    macros: { calories: 208, proteines: 20, glucides: 0, lipides: 13 },
  },
  {
    id: "crevettes-roses",
    name: "Crevettes roses décortiquées",
    allergens: ["crustaces"],
    diets: [],
    mayContain: ["mollusques"],
    supplier: "Marché de Rungis",
    lastDelivery: "2026-05-15",
    macros: { calories: 99, proteines: 21, glucides: 0, lipides: 1.4 },
  },
  {
    id: "tomates-cerises",
    name: "Tomates cerises grappe",
    allergens: [],
    diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
    mayContain: [],
    supplier: "Ferme du Val",
    lastDelivery: "2026-05-16",
    macros: { calories: 18, proteines: 0.9, glucides: 3.6, lipides: 0.2 },
  },
  {
    id: "noix-cajou",
    name: "Noix de cajou grillées",
    allergens: ["fruits-a-coque"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["arachides"],
    supplier: "Épicerie Orientale Benali",
    lastDelivery: "2026-05-10",
    macros: { calories: 553, proteines: 18, glucides: 30, lipides: 44 },
  },
  {
    id: "sauce-soja",
    name: "Sauce soja Tamari",
    allergens: ["soja"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["gluten"],
    supplier: "Épicerie Orientale Benali",
    lastDelivery: "2026-05-08",
    macros: { calories: 53, proteines: 8.1, glucides: 5, lipides: 0.1 },
  },
  {
    id: "moutarde-dijon",
    name: "Moutarde de Dijon fine",
    allergens: ["moutarde"],
    diets: ["vegan", "vegetarien"],
    mayContain: [],
    supplier: "Maison Fallot",
    lastDelivery: "2026-05-11",
    macros: { calories: 66, proteines: 4.4, glucides: 5.3, lipides: 3.3 },
  },
  {
    id: "sesame-blanc",
    name: "Graines de sésame blanc",
    allergens: ["sesame"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["fruits-a-coque"],
    supplier: "Épicerie Orientale Benali",
    lastDelivery: "2026-05-09",
    macros: { calories: 573, proteines: 17, glucides: 23, lipides: 50 },
  },
  {
    id: "celeri-branche",
    name: "Céleri branche bio",
    allergens: ["celeri"],
    diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
    mayContain: [],
    supplier: "Ferme du Val",
    lastDelivery: "2026-05-16",
    macros: { calories: 14, proteines: 0.7, glucides: 2.4, lipides: 0.2 },
  },
  {
    id: "lupin-poudre",
    name: "Farine de lupin",
    allergens: ["lupin"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["arachides"],
    supplier: "Bio Provence",
    lastDelivery: "2026-05-07",
    macros: { calories: 370, proteines: 38, glucides: 28, lipides: 9 },
  },
  {
    id: "huitres",
    name: "Huîtres creuses n°3",
    allergens: ["mollusques"],
    diets: [],
    mayContain: ["crustaces"],
    supplier: "Marché de Rungis",
    lastDelivery: "2026-05-17",
    macros: { calories: 68, proteines: 7.1, glucides: 4.7, lipides: 2.5 },
  },
  {
    id: "vin-blanc",
    name: "Vin blanc sec de cuisine",
    allergens: ["so2"],
    diets: ["vegan", "vegetarien"],
    mayContain: [],
    supplier: "Cave des Vignerons",
    lastDelivery: "2026-05-01",
    macros: { calories: 82, proteines: 0.1, glucides: 2.6, lipides: 0 },
  },
  {
    id: "amandes-effilees",
    name: "Amandes effilées grillées",
    allergens: ["fruits-a-coque"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["arachides", "sesame"],
    supplier: "Bio Provence",
    lastDelivery: "2026-05-10",
    macros: { calories: 607, proteines: 22, glucides: 16, lipides: 55 },
  },
  {
    id: "arachides-grillees",
    name: "Arachides grillées salées",
    allergens: ["arachides"],
    diets: ["vegan", "vegetarien"],
    mayContain: ["fruits-a-coque"],
    supplier: "Épicerie Orientale Benali",
    lastDelivery: "2026-05-08",
    macros: { calories: 585, proteines: 26, glucides: 20, lipides: 50 },
  },
  {
    id: "truite-fumee",
    name: "Truite fumée des Alpes",
    allergens: ["poissons"],
    diets: [],
    mayContain: ["crustaces"],
    supplier: "Marché de Rungis",
    lastDelivery: "2026-05-13",
    macros: { calories: 174, proteines: 22, glucides: 0, lipides: 9.5 },
  },
  {
    id: "parmesan",
    name: "Parmesan Reggiano 24 mois",
    allergens: ["lait"],
    diets: ["vegetarien"],
    mayContain: [],
    supplier: "Fromagerie Mons",
    lastDelivery: "2026-05-12",
    macros: { calories: 431, proteines: 38, glucides: 0, lipides: 29 },
  },
  {
    id: "lait-entier",
    name: "Lait entier fermier bio",
    allergens: ["lait"],
    diets: ["vegetarien"],
    mayContain: [],
    supplier: "Ferme du Val",
    lastDelivery: "2026-05-17",
    macros: { calories: 61, proteines: 3.2, glucides: 4.8, lipides: 3.5 },
  },
]

const ALL_ALLERGENS: Allergen[] = [
  "gluten", "crustaces", "oeufs", "poissons", "arachides", "soja",
  "lait", "fruits-a-coque", "celeri", "moutarde", "sesame", "so2", "lupin", "mollusques",
]

const ALL_DIETS: Diet[] = [
  "vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose",
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EditDishPage() {
  const { slug, dish: dishId } = useParams<{ slug: string; dish: string }>()
  const router = useRouter()

  const allDishes = allMenuItemsMap[slug as string] ?? allMenuItemsMap["judy"] ?? []
  const original = allDishes.find((d) => d.id === dishId) ?? allDishes[0]

  const [image, setImage] = useState(original?.image ?? "")
  const [name, setName] = useState(original?.translations.fr.name ?? "")
  const [description, setDescription] = useState(original?.translations.fr.description ?? "")
  const [allergens, setAllergens] = useState<Allergen[]>(original?.allergens ?? [])
  const [diets, setDiets] = useState<Diet[]>(original?.diets ?? [])
  const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredient[]>([])
  const [search, setSearch] = useState("")

  const filteredIngredients = useMemo(
    () =>
      MOCK_INGREDIENTS.filter((i) =>
        i.name?.toLowerCase().includes((search ?? "").toLowerCase())
      ),
    [search]
  )

  const toggleAllergen = (a: Allergen) =>
    setAllergens((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    )

  const toggleDiet = (d: Diet) =>
    setDiets((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )

  const addIngredient = (ingredient: MockIngredient) => {
    if (selectedIngredients.some((s) => s.ingredient.id === ingredient.id)) return
    setSelectedIngredients((prev) => [...prev, { ingredient, quantity: "" }])
  }

  const removeIngredient = (id: string) =>
    setSelectedIngredients((prev) => prev.filter((s) => s.ingredient.id !== id))

  const updateQuantity = (id: string, value: string) =>
    setSelectedIngredients((prev) =>
      prev.map((s) => (s.ingredient.id === id ? { ...s, quantity: value } : s))
    )

  const allQuantitiesFilled =
    selectedIngredients.length > 0 &&
    selectedIngredients.every((s) => {
      const n = parseFloat(s.quantity)
      return !isNaN(n) && n > 0
    })

  const computedMacros = useMemo(() => {
    if (!allQuantitiesFilled) return null
    return selectedIngredients.reduce(
      (acc, { ingredient, quantity }) => {
        const qty = parseFloat(quantity)
        acc.calories += (ingredient.macros.calories * qty) / 100
        acc.proteines += (ingredient.macros.proteines * qty) / 100
        acc.glucides += (ingredient.macros.glucides * qty) / 100
        acc.lipides += (ingredient.macros.lipides * qty) / 100
        return acc
      },
      { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
    )
  }, [selectedIngredients, allQuantitiesFilled])

  if (!original) return null

  return (
    <div className="flex flex-1 flex-col gap-0">
      {/* Header */}
      <div className="flex items-center gap-2 pb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
        >
          <ChevronLeft data-icon="inline-start" />
          Retour
        </Button>
        <h1 className="text-lg font-bold">Modifier le plat</h1>
      </div>

      <div className="flex flex-1 flex-col gap-8">

        {/* Image */}
        <section className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Photo</p>
          <label className="group relative h-48 w-full cursor-pointer overflow-hidden rounded-xl bg-muted">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="900px"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Pencil className="size-6" />
                  <span className="text-sm">Ajouter une photo</span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex flex-col items-center gap-1.5 text-white">
                <Pencil className="size-5" />
                <span className="text-sm font-medium">Modifier la photo</span>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) setImage(URL.createObjectURL(file))
              }}
            />
          </label>
        </section>

        <Separator />

        {/* Name & description */}
        <section className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Informations générales</p>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="dish-name">Nom</label>
            <Input
              id="dish-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom du plat"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium" htmlFor="dish-description">Description</label>
              <span className="text-xs text-muted-foreground">{description.length}/200</span>
            </div>
            <Textarea
              id="dish-description"
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 200))}
              placeholder="Description du plat"
              rows={3}
            />
          </div>
        </section>

        <Separator />

        {/* Allergens */}
        <section className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Allergènes</p>
          <div className="flex flex-wrap gap-2">
            {ALL_ALLERGENS.map((a) => {
              const active = allergens.includes(a)
              return (
                <button
                  key={a}
                  type="button"
                  onClick={() => toggleAllergen(a)}
                  className={active ? "opacity-100" : "opacity-35"}
                >
                  <AllergenBadge allergen={a} language="fr" restaurantId="judy" />
                </button>
              )
            })}
          </div>
        </section>

        <Separator />

        {/* Diets */}
        <section className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Régimes</p>
          <div className="flex flex-wrap gap-2">
            {ALL_DIETS.map((d) => {
              const active = diets.includes(d)
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => toggleDiet(d)}
                  className={active ? "opacity-100" : "opacity-35"}
                >
                  <DietBadge diet={d} language="fr" restaurantId="judy" />
                </button>
              )
            })}
          </div>
        </section>

        <Separator />

        {/* Ingredients */}
        <section className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ingrédients</p>

          <Input
            placeholder="Rechercher un ingrédient…"
            value={search}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value ?? "")}
          />

          <div className="rounded-xl border overflow-hidden">
            <ScrollArea className="h-80">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Allergènes</TableHead>
                  <TableHead>Régimes</TableHead>
                  <TableHead>Peut contenir</TableHead>
                  <TableHead>Fournisseur</TableHead>
                  <TableHead>Dernier arrivage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIngredients.map((ingredient) => {
                  const isSelected = selectedIngredients.some(
                    (s) => s.ingredient.id === ingredient.id
                  )
                  return (
                    <TableRow
                      key={ingredient.id}
                      className={
                        isSelected
                          ? "cursor-default bg-muted/50"
                          : "cursor-pointer hover:bg-muted/30"
                      }
                      onClick={() => addIngredient(ingredient)}
                    >
                      <TableCell className="font-medium">{ingredient.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {ingredient.allergens.length > 0 ? (
                            ingredient.allergens.map((a) => (
                              <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
                            ))
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {ingredient.diets.length > 0 ? (
                            ingredient.diets.map((d) => (
                              <DietBadge key={d} diet={d} language="fr" restaurantId="judy" />
                            ))
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {ingredient.mayContain.length > 0 ? (
                            ingredient.mayContain.map((a) => (
                              <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
                            ))
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{ingredient.supplier}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(ingredient.lastDelivery).toLocaleDateString("fr-FR")}
                      </TableCell>
                    </TableRow>
                  )
                })}
                {filteredIngredients.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="py-8 text-center text-sm text-muted-foreground">
                      Aucun ingrédient trouvé
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            </ScrollArea>
          </div>

          {/* Selected ingredients list */}
          {selectedIngredients.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Ingrédients sélectionnés</p>
              {selectedIngredients.map(({ ingredient, quantity }) => (
                <div key={ingredient.id} className="flex items-center gap-3 rounded-xl border px-3 py-2">
                  <span className="flex-1 text-sm font-medium">{ingredient.name}</span>
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      min="0"
                      placeholder="Qté"
                      value={quantity}
                      onChange={(e) => updateQuantity(ingredient.id, e.target.value)}
                      className="h-8 w-24 text-sm"
                    />
                    <span className="text-xs text-muted-foreground">g</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeIngredient(ingredient.id)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

        <Separator />

        {/* Macros */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Macronutriments</p>
            {!allQuantitiesFilled && selectedIngredients.length > 0 && (
              <p className="text-xs text-muted-foreground">Renseignez toutes les quantités pour calculer</p>
            )}
            {selectedIngredients.length === 0 && (
              <p className="text-xs text-muted-foreground">Ajoutez des ingrédients avec leurs quantités</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { key: "calories", label: "Calories", unit: "kcal" },
                { key: "proteines", label: "Protéines", unit: "g" },
                { key: "glucides", label: "Glucides", unit: "g" },
                { key: "lipides", label: "Lipides", unit: "g" },
              ] as const
            ).map(({ key, label, unit }) => (
              <div key={key} className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">{label}</label>
                <div className="flex items-center gap-1.5">
                  <Input
                    type="number"
                    disabled={!allQuantitiesFilled}
                    value={
                      computedMacros
                        ? computedMacros[key].toFixed(1)
                        : ""
                    }
                    placeholder="—"
                    readOnly
                    className="text-sm"
                  />
                  <span className="text-xs text-muted-foreground shrink-0">{unit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="pb-6">
          <Button className="w-full">
            Enregistrer les modifications
          </Button>
        </div>
      </div>
    </div>
  )
}
