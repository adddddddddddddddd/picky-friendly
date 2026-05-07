"use client"

import { useState } from "react"
import Image from "next/image"
import type { MenuItem, Language } from "@/lib/types"
import { AllergenBadge } from "./allergen-badge"
import { DietBadge } from "./diet-badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check, Plus, ListPlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

type MockVariant = { name: string; priceOffset: number }
type MockSupplement = { id: string; name: string; price: number }
type MockConfig = { variants?: MockVariant[]; supplements?: MockSupplement[] }

const MOCK_CONFIGS: Record<string, MockConfig> = {
  "steak-frites": {
    variants: [
      { name: "Saignant", priceOffset: 0 },
      { name: "À point", priceOffset: 0 },
      { name: "Bien cuit", priceOffset: 0 },
    ],
    supplements: [
      { id: "poivre", name: "Sauce poivre", price: 1.5 },
      { id: "bearnaise", name: "Sauce béarnaise", price: 1.5 },
      { id: "foie-gras", name: "Foie gras", price: 5.0 },
    ],
  },
  "poulet-roti": {
    variants: [
      { name: "Demi", priceOffset: 0 },
      { name: "Entier", priceOffset: 10 },
    ],
    supplements: [
      { id: "jus", name: "Sauce au jus", price: 1.0 },
      { id: "gratin", name: "Gratin dauphinois", price: 3.5 },
    ],
  },
  "plateau-fromages": {
    variants: [
      { name: "3 fromages", priceOffset: -4 },
      { name: "5 fromages", priceOffset: 0 },
      { name: "7 fromages", priceOffset: 5 },
    ],
    supplements: [
      { id: "noix", name: "Noix fraîches", price: 1.0 },
      { id: "confiture", name: "Confiture de figues", price: 1.5 },
    ],
  },
  "jus-fruits": {
    variants: [
      { name: "Orange", priceOffset: 0 },
      { name: "Pomme-gingembre", priceOffset: 0 },
      { name: "Carotte-citron", priceOffset: 0 },
    ],
  },
  "vin-rouge": {
    variants: [
      { name: "Bordeaux", priceOffset: 0 },
      { name: "Bourgogne", priceOffset: 3 },
      { name: "Côtes du Rhône", priceOffset: 1 },
    ],
  },
  "tarte-tatin": {
    variants: [
      { name: "Classique", priceOffset: 0 },
      { name: "Aux poires", priceOffset: 1 },
      { name: "Aux amandes", priceOffset: 1.5 },
    ],
  },
  "salade-cesar": {
    supplements: [
      { id: "poulet", name: "Poulet grillé", price: 3.0 },
      { id: "crevettes", name: "Crevettes", price: 4.5 },
      { id: "anchois", name: "Anchois supplément", price: 2.0 },
    ],
  },
  "risotto-champignons": {
    supplements: [
      { id: "truffe", name: "Copeaux de truffe", price: 8.0 },
      { id: "parmesan", name: "Parmesan supplément", price: 1.5 },
      { id: "burrata", name: "Burrata", price: 4.0 },
    ],
  },
  ratatouille: {
    supplements: [
      { id: "oeuf", name: "Œuf poché", price: 1.5 },
      { id: "fromage", name: "Fromage de brebis", price: 2.0 },
      { id: "croutons", name: "Croûtons", price: 1.0 },
    ],
  },

  "sesame-latte": {
    variants: [
      { name: "Chaud", priceOffset: 0 },
      { name: "Glacé", priceOffset: 0 },
    ],
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "rose-latte": {
    variants: [
      { name: "Chaud", priceOffset: 0 },
      { name: "Glacé", priceOffset: 0 },
    ],
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "matcha-latte": {
    variants: [
      { name: "Chaud", priceOffset: 0 },
      { name: "Glacé", priceOffset: 0 },
    ],
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "golden-mylk": {
    variants: [
      { name: "Chaud", priceOffset: 0 },
      { name: "Glacé", priceOffset: 0 },
    ],
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "chai-latte": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "spicy-choco": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "choco-reishi": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
    espresso: {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },  "cafe-allonge": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },  "double-espresso": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },  "cafe-filtre": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },
  cortado: {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },
  cappuccino: {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },
  "cafe-latte": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },
  "flat-white": {
    supplements: [
      { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
      { id: "collagene", name: "Collagène marin", price: 2 },
    ],
  },
  "almond-butter-latte": {
    supplements: [
            { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
            { id: "collagene", name: "Collagène marin", price: 2 },

    ],
  },
  "sunset-skin-balance": {
    supplements: [
      { id: "collagene", name: "Collagène marin", price: 2 },
      {
        id: "champignon-immunite",
        name: "Champignon médicinal – Immunité",
        price: 2,
      },
      {
        id: "champignon-concentration",
        name: "Champignon médicinal – Concentration",
        price: 2,
      },
      {
        id: "champignon-detente",
        name: "Champignon médicinal – Détente",
        price: 2,
      },
    ],
  },
  "scrambled-eggs": {
    supplements: [
      { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
      { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
      { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
      { id: "halloumi", name: "Halloumi", price: 3 },
      { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
      { id: "oeuf-poche", name: "Œuf poché", price: 2 },
      { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
    ],
  },
  "sweet-pancakes": {
    supplements: [
      { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
      { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
      { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
      { id: "halloumi", name: "Halloumi", price: 3 },
      { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
      { id: "oeuf-poche", name: "Œuf poché", price: 2 },
      { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
    ],
  },
  "savoury-pancakes": {
    supplements: [
      { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
      { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
      { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
      { id: "halloumi", name: "Halloumi", price: 3 },
      { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
      { id: "oeuf-poche", name: "Œuf poché", price: 2 },
      { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
    ],
  },
  "avoloco-bowl": {
    supplements: [
      { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
      { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
      { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
      { id: "halloumi", name: "Halloumi", price: 3 },
      { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
      { id: "oeuf-poche", name: "Œuf poché", price: 2 },
      { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
    ],
  },
  "mediterranean-bowl": {
    supplements: [
      { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
      { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
      { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
      { id: "halloumi", name: "Halloumi", price: 3 },
      { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
      { id: "oeuf-poche", name: "Œuf poché", price: 2 },
      { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
    ],
  },
  "kids-bento": {
    supplements: [
      { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
      { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
      { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
      { id: "halloumi", name: "Halloumi", price: 3 },
      { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
      { id: "oeuf-poche", name: "Œuf poché", price: 2 },
      { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
    ],
  },
  kombucha: {
    variants: [
      { name: "Brut", priceOffset: 0 },
      { name: "Feuille de figuier", priceOffset: 0 },
      { name: "Feuille de framboisier", priceOffset: 0 },
    ],
  },
  "the-vert": {
    variants: [
      { name: "Gampola Green", priceOffset: 0 },
      { name: "Earl Grey", priceOffset: 0 },
    ],
  },
}

interface DishCardProps {
  item: MenuItem
  language: Language
  restaurantId: string
  wide?: boolean
}

export function DishCard({
  item,
  language,
  restaurantId,
  wide = false,
}: DishCardProps) {
  const dish = item.translations[language]
  const config = MOCK_CONFIGS[item.id] ?? {}
  const hasVariants = Boolean(config.variants?.length)
  const hasSupps = Boolean(config.supplements?.length)

  const { addItem } = useCart()
  const [variantIdx, setVariantIdx] = useState(0)
  const [selectedSupps, setSelectedSupps] = useState<Set<string>>(new Set())
  const [added, setAdded] = useState(false)

  const variants = config.variants ?? []
  const supplements = config.supplements ?? []

  const variantOffset = variants[variantIdx]?.priceOffset ?? 0
  const suppsTotal = supplements
    .filter((s) => selectedSupps.has(s.id))
    .reduce((sum, s) => sum + s.price, 0)
  const dishPrice = item.price + variantOffset
  const totalPrice = dishPrice + suppsTotal

  function prevVariant() {
    setVariantIdx((i) => (i - 1 + variants.length) % variants.length)
    setSelectedSupps(new Set())
  }

  function nextVariant() {
    setVariantIdx((i) => (i + 1) % variants.length)
    setSelectedSupps(new Set())
  }

  function toggleSupp(id: string) {
    setSelectedSupps((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const formatPrice = (price: number) =>
    price.toLocaleString(language === "en" ? "en-GB" : language, {
      style: "currency",
      currency: "EUR",
    })

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden transition-shadow hover:shadow-md",
        wide ? "w-full" : "w-72"
      )}
    >
      {/* Image + carrousel */}
      <div
        className={cn(
          "relative w-0 min-w-full shrink-0 overflow-hidden",
          wide ? "h-56" : "h-44"
        )}
      >
        <Image
          src={item.image}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {hasVariants && (
          <>
            <button
              onClick={prevVariant}
              className="absolute top-1/2 left-2 z-10 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-white/88"
              aria-label="Variante précédente"
            >
              <ChevronLeft size={14} />
            </button>

            <button
              onClick={nextVariant}
              className="absolute top-1/2 right-2 z-10 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-white/88"
              aria-label="Variante suivante"
            >
              <ChevronRight size={14} />
            </button>

            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/88 px-3 py-1 whitespace-nowrap">
              <span className="text-xs font-medium text-foreground">
                {variants[variantIdx].name}
              </span>
              {variants.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "size-1.5 rounded-full",
                    i === variantIdx ? "bg-foreground" : "bg-foreground/30"
                  )}
                />
              ))}
            </div>

            <div className="absolute top-2 right-2 z-10 flex size-5.5 items-center justify-center rounded-full border-[0.5px] border-border bg-white">
              <Plus size={12} className="text-foreground" />
            </div>
          </>
        )}
      </div>

      {/* Header : nom + prix réactif */}
      <CardHeader className="w-0 min-w-full pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-base leading-tight font-semibold">
            {dish.name}
          </h3>
          <span className="shrink-0 font-semibold text-primary tabular-nums">
            {formatPrice(dishPrice)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {dish.description}
        </p>
      </CardHeader>

      <CardContent className="flex grow flex-col gap-2 pb-4">
        {item.allergens.length > 0 && (
          <div className="flex w-0 min-w-full flex-wrap gap-1">
            {item.allergens.map((a) => (
              <AllergenBadge
                key={a}
                allergen={a}
                language={language}
                restaurantId={restaurantId}
              />
            ))}
          </div>
        )}
        {item.diets.length > 0 && (
          <div className="flex w-0 min-w-full flex-wrap gap-1">
            {item.diets.map((d) => (
              <DietBadge
                key={d}
                diet={d}
                language={language}
                restaurantId={restaurantId}
              />
            ))}
          </div>
        )}

        {/* Macros */}
        <div className="mt-6 flex gap-1">
          {[
            { value: item.macros.calories, label: "kcal" },
            { value: `${item.macros.proteines}g`, label: "prot" },
            { value: `${item.macros.glucides}g`, label: "gluc" },
            { value: `${item.macros.lipides}g`, label: "lip" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex min-w-0 flex-1 flex-col items-center rounded-[6px] bg-secondary px-1.25 py-1"
            >
              <span className="text-xs leading-none font-semibold text-foreground tabular-nums">
                {value}
              </span>
              <span className="mt-0.5 text-[9px] leading-none text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Suppléments */}
        {hasSupps && (
          <div className="mt-3">
            <p className="mb-1.5 text-[10px] font-medium text-muted-foreground">
              Suppléments
            </p>
            <div className="flex flex-col gap-1.5">
              {supplements.map((s) => {
                const active = selectedSupps.has(s.id)
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleSupp(s.id)}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-full border-[0.5px] px-3 py-1.5 text-left text-xs transition-colors",
                      active
                        ? "border-[#97addd] bg-[#e0f0ff] font-medium text-[#5b5b5b] dark:border-[#4a6fa5] dark:bg-[#1e2d4a] dark:text-[#a8c0e8]"
                        : "border-border bg-white text-muted-foreground dark:bg-background"
                    )}
                  >
                    <span>{s.name}</span>
                    <span
                      className={cn(
                        "ml-2 shrink-0 tabular-nums",
                        active ? "opacity-100" : "opacity-70"
                      )}
                    >
                      +{s.price.toFixed(2).replace(".", ",")}€
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Total + bouton panier */}
        <div className="mt-3 flex items-center justify-between border-t border-border pt-2">
          <span className="text-xs text-muted-foreground">Total</span>
          <span className="text-sm font-semibold text-foreground tabular-nums">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <Button
          className={cn(
            "w-full transition-colors",
            added && "bg-green-600 hover:bg-green-600"
          )}
          size="sm"
          onClick={() => {
            addItem({
              menuItemId: item.id,
              name: dish.name,
              basePrice: item.price,
              variant: variants[variantIdx] ?? null,
              supplements: supplements.filter((s) => selectedSupps.has(s.id)),
              allergens: item.allergens,
              diets: item.diets,
              macros: item.macros,
              totalPrice,
            })
            setAdded(true)
            setTimeout(() => setAdded(false), 1200)
          }}
        >
          {added ? <Check size={14} /> : <ListPlus size={14} />}
          {added ? "Ajouté !" : "Ajouter au résumé"}
        </Button>
      </CardContent>
    </Card>
  )
}
