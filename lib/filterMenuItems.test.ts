import { describe, it, expect } from 'vitest'
import { filterMenuItems } from './filterMenuItems'
import { menuItems } from './data/menu'
import type { Allergen, Diet } from './types'

const ALL_ALLERGENS: Allergen[] = [
  'gluten', 'crustaces', 'oeufs', 'poissons', 'arachides', 'soja',
  'lait', 'fruits-a-coque', 'celeri', 'moutarde', 'sesame', 'so2', 'lupin', 'mollusques',
]

const ALL_DIETS: Diet[] = ['vegan', 'vegetarien', 'halal', 'casher', 'sans-gluten', 'sans-lactose']

const items = menuItems['judy'] ?? menuItems['default']

function oracle(item: (typeof items)[0], allergens: Set<Allergen>, diets: Set<Diet>): boolean {
  if ([...allergens].some((a) => item.allergens.includes(a))) return false
  if ([...diets].some((d) => !item.diets.includes(d))) return false
  return true
}

describe('filterMenuItems — exhaustif (2^20 combinaisons)', () => {
  it('chaque plat est inclus ou exclu correctement pour toutes les combinaisons de filtres', () => {
    const allergenCount = ALL_ALLERGENS.length  // 14
    const dietCount = ALL_DIETS.length          // 6

    const totalAllergenCombinations = 1 << allergenCount
    const logEvery = totalAllergenCombinations / 10

    for (let aMask = 0; aMask < totalAllergenCombinations; aMask++) {
      if (aMask % logEvery === 0) {
        const pct = Math.round((aMask / totalAllergenCombinations) * 100)
        process.stdout.write(`\r  progression : ${pct}%`)
      }

      const allergenFilter = new Set(
        ALL_ALLERGENS.filter((_, i) => aMask & (1 << i))
      )

      for (let dMask = 0; dMask < (1 << dietCount); dMask++) {
        const dietFilter = new Set(
          ALL_DIETS.filter((_, i) => dMask & (1 << i))
        )

        const result = filterMenuItems(items, allergenFilter, dietFilter)
        const resultIds = new Set(result.map((item) => item.id))

        for (const item of items) {
          const expected = oracle(item, allergenFilter, dietFilter)
          const actual = resultIds.has(item.id)

          if (actual !== expected) {
            throw new Error(
              `Plat "${item.id}" — allergènes filtrés: [${[...allergenFilter]}], régimes filtrés: [${[...dietFilter]}]\n` +
              `  attendu: ${expected ? 'visible' : 'masqué'}, obtenu: ${actual ? 'visible' : 'masqué'}`
            )
          }
        }
      }
    }
    process.stdout.write(`\r  progression : 100%\n`)
  })
})
