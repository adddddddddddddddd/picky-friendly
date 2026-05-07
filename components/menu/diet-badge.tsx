import type { Diet, Language } from '@/lib/types'
import { uiTranslations } from '@/lib/data/translations'
import { Badge } from '@/components/ui/badge'

const DIET_ICONS: Record<Diet, string> = {
  vegan: 'VE',
  vegetarien: 'VG',
  halal: 'HL',
  casher: 'KS',
  'sans-gluten': 'SG',
  'sans-lactose': 'SL',
}

interface DietBadgeProps {
  diet: Diet
  language: Language
  restaurantId: string
}

export function DietBadge({ diet, language, restaurantId }: DietBadgeProps) {
  const label = uiTranslations[restaurantId][language].dietLabels[diet]
  const icon = DIET_ICONS[diet]

  return (
    <Badge variant="outline" className="gap-1 text-xs border-green-600/30 bg-green-50 text-green-700 dark:border-green-500/30 dark:bg-green-950 dark:text-green-400">
      <span aria-hidden>{icon}</span>
      {label}
    </Badge>
  )
}
