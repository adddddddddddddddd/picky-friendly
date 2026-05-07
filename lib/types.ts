export type Language = 'fr' | 'en' | 'it' | 'es'

export type Category = string

export type Allergen =
  | 'gluten'
  | 'crustaces'
  | 'oeufs'
  | 'poissons'
  | 'arachides'
  | 'soja'
  | 'lait'
  | 'fruits-a-coque'
  | 'celeri'
  | 'moutarde'
  | 'sesame'
  | 'so2'
  | 'lupin'
  | 'mollusques'

export type Diet = 'vegan' | 'vegetarien' | 'halal' | 'casher' | 'sans-gluten' | 'sans-lactose'

export interface Macros {
  calories: number
  proteines: number
  glucides: number
  lipides: number
}

export interface MenuItem {
  id: string
  category: Category
  subcategory: string | null
  translations: Record<Language, { name: string; description: string }>
  price: number
  allergens: Allergen[]
  diets: Diet[]
  macros: Macros
  image: string
}

export interface Review {
  author: string
  rating: number
  text: string
  date: string
}

export interface RestaurantSocials {
  instagram?: string
  tiktok?: string
  website?: string
  menu?: string
}

export interface Restaurant {
  id: string
  name: string
  address?: string
  coordinates: [number, number]
  rating: number
  reviewCount: number
  photos: string[]
  reviews: Review[]
  socials?: RestaurantSocials
  tags: {
    macronutrients: {
      energy: boolean
      proteins: boolean
      lipids: boolean
      carbs: boolean
    }
    allergens: Allergen[]
    dietary: Record<Diet, boolean>
  }
}

export interface FilterState {
  macronutrients: {
    energy: boolean
    proteins: boolean
    lipids: boolean
    carbs: boolean
  }
  allergens: Allergen[]
  dietary: Partial<Record<Diet, boolean>>
}