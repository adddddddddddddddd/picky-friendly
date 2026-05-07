import { describe, it, expect } from 'vitest'
import type { CartItem } from './cart-context'
import type { Allergen, Diet } from './types'

function addItem(items: CartItem[], item: Omit<CartItem, 'id'>): CartItem[] {
  return [...items, { ...item, id: crypto.randomUUID() }]
}

function removeItem(items: CartItem[], id: string): CartItem[] {
  return items.filter((i) => i.id !== id)
}

function clearCart(): CartItem[] {
  return []
}

const base: Omit<CartItem, 'id'> = {
  menuItemId: 'item-1',
  name: 'Burger',
  basePrice: 10,
  variant: null,
  supplements: [],
  allergens: [],
  diets: [],
  macros: { calories: 500, proteines: 30, glucides: 40, lipides: 20 },
  totalPrice: 10,
}

describe('cart — addItem', () => {
  it('ajoute un item au panier vide', () => {
    const result = addItem([], base)
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Burger')
    expect(result[0].id).toBeTruthy()
  })

  it('préserve les macros', () => {
    const item: Omit<CartItem, 'id'> = {
      ...base,
      macros: { calories: 800, proteines: 45, glucides: 60, lipides: 35 },
    }
    const result = addItem([], item)
    expect(result[0].macros).toEqual({ calories: 800, proteines: 45, glucides: 60, lipides: 35 })
  })

  it('préserve les allergènes', () => {
    const item: Omit<CartItem, 'id'> = {
      ...base,
      allergens: ['gluten', 'lait'],
    }
    const result = addItem([], item)
    expect(result[0].allergens).toEqual(['gluten', 'lait'])
  })

  it('préserve les diets autorisées', () => {
    const item: Omit<CartItem, 'id'> = {
      ...base,
      diets: ['vegan', 'sans-gluten'],
    }
    const result = addItem([], item)
    expect(result[0].diets).toEqual(['vegan', 'sans-gluten'])
  })

  it('ajoute un deuxième item sans écraser le premier', () => {
    const first = addItem([], base)
    const second = addItem(first, { ...base, name: 'Pizza' })
    expect(second).toHaveLength(2)
    expect(second[0].name).toBe('Burger')
    expect(second[1].name).toBe('Pizza')
  })

  it('chaque item reçoit un id unique', () => {
    const after = addItem(addItem([], base), base)
    expect(after[0].id).not.toBe(after[1].id)
  })

  it("n'est pas muté — le tableau d'origine reste intact", () => {
    const original: CartItem[] = []
    addItem(original, base)
    expect(original).toHaveLength(0)
  })
})

describe('cart — removeItem', () => {
  it('supprime un item par son id', () => {
    const items = addItem([], base)
    const result = removeItem(items, items[0].id)
    expect(result).toHaveLength(0)
  })

  it('ne supprime que le bon item quand il y en a plusieurs', () => {
    const items = addItem(addItem([], base), { ...base, name: 'Pizza' })
    const result = removeItem(items, items[0].id)
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Pizza')
  })

  it("ne change rien si l'id est inconnu", () => {
    const items = addItem([], base)
    const result = removeItem(items, 'unknown-id')
    expect(result).toHaveLength(1)
  })
})

describe('cart — clearCart', () => {
  it('retourne un tableau vide', () => {
    const items = addItem(addItem([], base), base)
    expect(clearCart()).toHaveLength(0)
  })
})

// Logique de récap (recap-sheet.tsx)

function presentAllergens(items: CartItem[]): Allergen[] {
  return Array.from(new Set(items.flatMap((i) => i.allergens)))
}

function compatibleDiets(items: CartItem[]): Diet[] {
  if (items.length === 0) return []
  return items[0].diets.filter((d) => items.every((i) => i.diets.includes(d))) as Diet[]
}

describe('recap — union des allergènes', () => {
  it('retourne vide si aucun item', () => {
    expect(presentAllergens([])).toEqual([])
  })

  it('retourne les allergènes du seul item', () => {
    const items = addItem([], { ...base, allergens: ['gluten', 'lait'] })
    expect(presentAllergens(items)).toEqual(expect.arrayContaining(['gluten', 'lait']))
    expect(presentAllergens(items)).toHaveLength(2)
  })

  it("fait bien l'union — pas de doublons", () => {
    const items = addItem(
      addItem([], { ...base, allergens: ['gluten', 'oeufs'] }),
      { ...base, allergens: ['gluten', 'lait'] },
    )
    const result = presentAllergens(items)
    expect(result).toEqual(expect.arrayContaining(['gluten', 'oeufs', 'lait']))
    expect(result).toHaveLength(3)
  })

  it('combine des allergens disjoints', () => {
    const items = addItem(
      addItem([], { ...base, allergens: ['arachides'] }),
      { ...base, allergens: ['soja'] },
    )
    expect(presentAllergens(items)).toEqual(expect.arrayContaining(['arachides', 'soja']))
    expect(presentAllergens(items)).toHaveLength(2)
  })
})

describe('recap — intersection des régimes', () => {
  it('retourne vide si aucun item', () => {
    expect(compatibleDiets([])).toEqual([])
  })

  it('retourne les diets du seul item', () => {
    const items = addItem([], { ...base, diets: ['vegan', 'sans-gluten'] })
    expect(compatibleDiets(items)).toEqual(expect.arrayContaining(['vegan', 'sans-gluten']))
    expect(compatibleDiets(items)).toHaveLength(2)
  })

  it('garde uniquement les diets communes aux deux items', () => {
    const items = addItem(
      addItem([], { ...base, diets: ['vegan', 'sans-gluten'] }),
      { ...base, diets: ['vegan', 'halal'] },
    )
    expect(compatibleDiets(items)).toEqual(['vegan'])
  })

  it('retourne vide si aucun régime en commun', () => {
    const items = addItem(
      addItem([], { ...base, diets: ['vegan'] }),
      { ...base, diets: ['halal'] },
    )
    expect(compatibleDiets(items)).toEqual([])
  })

  it('intersection de trois items', () => {
    const items = addItem(
      addItem(
        addItem([], { ...base, diets: ['vegan', 'sans-gluten', 'halal'] }),
        { ...base, diets: ['vegan', 'sans-gluten'] },
      ),
      { ...base, diets: ['vegan', 'halal'] },
    )
    expect(compatibleDiets(items)).toEqual(['vegan'])
  })
})
