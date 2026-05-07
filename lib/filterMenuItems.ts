import type { Allergen, Diet, MenuItem } from './types'

export function filterMenuItems(
  items: MenuItem[],
  allergenFilters: Set<Allergen>,
  dietFilters: Set<Diet>,
): MenuItem[] {
  return items.filter((item) => {
    for (const allergen of allergenFilters) {
      if (item.allergens.includes(allergen)) return false
    }
    for (const diet of dietFilters) {
      if (!item.diets.includes(diet)) return false
    }
    return true
  })
}
