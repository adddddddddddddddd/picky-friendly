import type { Allergen, Diet } from "@/lib/types"

export type StockStatus = "en-stock" | "faible" | "rupture"

export interface Ingredient {
  id: string
  name: string
  stock: StockStatus
  quantity: string
  allergens: Allergen[]
  mayContain: Allergen[]
  diets: Diet[]
}

export const ALL_ALLERGENS: Allergen[] = [
  "gluten", "crustaces", "oeufs", "poissons", "arachides", "soja",
  "lait", "fruits-a-coque", "celeri", "moutarde", "sesame", "so2", "lupin", "mollusques",
]

export const ALL_DIETS: Diet[] = [
  "vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose",
]

export const ALLERGEN_LABELS: Record<Allergen, string> = {
  gluten: "Gluten",
  crustaces: "Crustacés",
  oeufs: "Œufs",
  poissons: "Poissons",
  arachides: "Arachides",
  soja: "Soja",
  lait: "Lait",
  "fruits-a-coque": "Fruits à coque",
  celeri: "Céleri",
  moutarde: "Moutarde",
  sesame: "Sésame",
  so2: "SO₂",
  lupin: "Lupin",
  mollusques: "Mollusques",
}

export const DIET_LABELS: Record<Diet, string> = {
  vegan: "Vegan",
  vegetarien: "Végétarien",
  halal: "Halal",
  casher: "Casher",
  "sans-gluten": "Sans gluten",
  "sans-lactose": "Sans lactose",
}

export const STOCK_CONFIG: Record<StockStatus, { label: string; badgeClass: string; textClass: string }> = {
  "en-stock": {
    label: "En stock",
    badgeClass: "border-green-200 bg-green-50 text-green-700",
    textClass: "text-green-700",
  },
  faible: {
    label: "Stock faible",
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
    textClass: "text-amber-700",
  },
  rupture: {
    label: "Rupture",
    badgeClass: "border-red-200 bg-red-50 text-red-700",
    textClass: "text-red-700",
  },
}

export const INITIAL_INGREDIENTS: Ingredient[] = [
  {
    id: "farine-ble",
    name: "Farine de blé T55",
    stock: "en-stock",
    quantity: "25 kg",
    allergens: ["gluten"],
    mayContain: [],
    diets: ["vegetarien", "vegan"],
  },
  {
    id: "oeufs-frais",
    name: "Œufs frais (calibre M)",
    stock: "faible",
    quantity: "2 douzaines",
    allergens: ["oeufs"],
    mayContain: [],
    diets: ["vegetarien"],
  },
  {
    id: "lait-entier",
    name: "Lait entier",
    stock: "en-stock",
    quantity: "10 L",
    allergens: ["lait"],
    mayContain: [],
    diets: ["vegetarien"],
  },
  {
    id: "beurre",
    name: "Beurre doux",
    stock: "en-stock",
    quantity: "3 kg",
    allergens: ["lait"],
    mayContain: [],
    diets: ["vegetarien"],
  },
  {
    id: "huile-olive",
    name: "Huile d'olive extra vierge",
    stock: "faible",
    quantity: "2 L",
    allergens: [],
    mayContain: [],
    diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose", "halal", "casher"],
  },
  {
    id: "sauce-soja",
    name: "Sauce soja",
    stock: "en-stock",
    quantity: "1 L",
    allergens: ["soja", "gluten"],
    mayContain: [],
    diets: ["vegetarien", "vegan"],
  },
  {
    id: "noix-cajou",
    name: "Noix de cajou",
    stock: "rupture",
    quantity: "0 g",
    allergens: ["fruits-a-coque"],
    mayContain: ["arachides"],
    diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
  },
  {
    id: "saumon-frais",
    name: "Saumon frais (filet)",
    stock: "en-stock",
    quantity: "4 kg",
    allergens: ["poissons"],
    mayContain: [],
    diets: ["sans-gluten", "sans-lactose"],
  },
  {
    id: "moutarde-dijon",
    name: "Moutarde de Dijon",
    stock: "en-stock",
    quantity: "500 g",
    allergens: ["moutarde"],
    mayContain: ["gluten"],
    diets: ["vegetarien", "vegan", "sans-gluten", "sans-lactose"],
  },
  {
    id: "sesame-graines",
    name: "Graines de sésame",
    stock: "faible",
    quantity: "100 g",
    allergens: ["sesame"],
    mayContain: ["fruits-a-coque", "arachides"],
    diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
  },
  {
    id: "vin-blanc",
    name: "Vin blanc de cuisine",
    stock: "en-stock",
    quantity: "3 bouteilles",
    allergens: ["so2"],
    mayContain: [],
    diets: ["vegetarien"],
  },
  {
    id: "celeri-branche",
    name: "Céleri branche",
    stock: "en-stock",
    quantity: "2 bottes",
    allergens: ["celeri"],
    mayContain: [],
    diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
  },
]
