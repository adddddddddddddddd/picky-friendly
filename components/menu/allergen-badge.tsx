import type { Allergen, Language } from '@/lib/types'
import { uiTranslations } from '@/lib/data/translations'
import { Badge } from '@/components/ui/badge'

const ALLERGEN_ICONS: Record<Allergen, string> = {
  gluten: '🌾',
  crustaces: '🦞',
  oeufs: '🥚',
  poissons: '🐟',
  arachides: '🥜',
  soja: '🫘',
  lait: '🥛',
  'fruits-a-coque': '🌰',
  celeri: '🥬',
  moutarde: '🟡',
  sesame: '⚪',
  so2: '🍷',
  lupin: '🌸',
  mollusques: '🐚',
}

interface AllergenBadgeProps {
  allergen: Allergen
  language: Language
  restaurantId: string
}

export function AllergenBadge({ allergen, language, restaurantId }: AllergenBadgeProps) {
  const label = uiTranslations[restaurantId][language].allergenLabels[allergen]
  const icon = ALLERGEN_ICONS[allergen]

  return (
    <Badge variant="outline" className="cursor-default gap-1 text-xs border-orange-600/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-950 dark:text-orange-400">
      <span aria-hidden>{icon}</span>
      {label}
    </Badge>
  )
}
