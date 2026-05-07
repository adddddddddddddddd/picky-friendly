'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Allergen, Diet } from '@/lib/types'
import { uiTranslations, disclaimerTranslations } from '@/lib/data/translations'
import { usePreferences } from '@/lib/preferences-context'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Check, AlertTriangle } from 'lucide-react'
import { use } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const ALL_ALLERGENS: Allergen[] = [
  'gluten', 'crustaces', 'oeufs', 'poissons', 'arachides', 'soja',
  'lait', 'fruits-a-coque', 'celeri', 'moutarde', 'sesame', 'so2',
  'lupin', 'mollusques',
]

const ALL_DIETS: Diet[] = ['vegan', 'vegetarien', 'halal', 'casher', 'sans-gluten', 'sans-lactose']

const ALLERGEN_ICONS: Record<Allergen, string> = {
  gluten: '🌾',
  crustaces: '🦐',
  oeufs: '🥚',
  poissons: '🐟',
  arachides: '🥜',
  soja: '🫘',
  lait: '🥛',
  'fruits-a-coque': '🌰',
  celeri: '🥬',
  moutarde: '🟡',
  sesame: '🌱',
  so2: '🍷',
  lupin: '🌸',
  mollusques: '🐚',
}

const DIET_ICONS: Record<Diet, string> = {
  vegan: 'VE',
  vegetarien: 'VG',
  halal: 'HL',
  casher: 'KS',
  'sans-gluten': 'SG',
  'sans-lactose': 'SL',
}

export default function OnboardingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const router = useRouter()
  const { slug } = use(params)
  const restaurantId = slug // Assuming slug is the restaurant ID, adjust if needed
  const [step, setStep] = useState(1)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const { language, allergenFilters, dietFilters, toggleAllergen, toggleDiet } = usePreferences()
  const t = uiTranslations[restaurantId ?? 'default'][language]
  const td = disclaimerTranslations[language]

  return (
    <div className="min-h-svh bg-background">
      {/* Header */}
      <header className="bg-background/95 sticky top-0 z-30 border-b backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Link
            href={`/restaurant/${restaurantId}`}
            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" />
            {t.backToMenu}
          </Link>
          <span className="text-muted-foreground text-xs font-medium">
            {step} / 2
          </span>
        </div>
      </header>

      {/* Step indicator */}
      <div className="mx-auto max-w-2xl px-4 pt-6">
        <div className="mb-8 flex gap-2">
          <div className={cn('h-1 flex-1 rounded-full transition-colors', step >= 1 ? 'bg-foreground' : 'bg-muted')} />
          <div className={cn('h-1 flex-1 rounded-full transition-colors', step >= 2 ? 'bg-foreground' : 'bg-muted')} />
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 pb-24">
        {step === 1 ? (
          <div>
            <h1 className="font-heading mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {t.onboardingStep1Title}
            </h1>
            <p className="text-muted-foreground mb-8 text-sm">{t.onboardingStep1Subtitle}</p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ALL_ALLERGENS.map((a) => {
                const active = allergenFilters.has(a)
                return (
                  <button
                    key={a}
                    onClick={() => toggleAllergen(a)}
                    className={cn(
                      'relative flex flex-col items-start gap-1.5 rounded-xl border px-4 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      active
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-orange-200 bg-orange-50 text-orange-700 hover:border-orange-400 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300 dark:hover:border-orange-600'
                    )}
                  >
                    <span className="text-xl">{ALLERGEN_ICONS[a]}</span>
                    <span className="text-sm font-medium leading-tight">{t.allergenLabels[a]}</span>
                    {active && (
                      <span className="absolute right-2 top-2">
                        <Check className="size-3.5" />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-heading mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {t.onboardingStep2Title}
            </h1>
            <p className="text-muted-foreground mb-8 text-sm">{t.onboardingStep2Subtitle}</p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ALL_DIETS.map((d) => {
                const active = dietFilters.has(d)
                return (
                  <button
                    key={d}
                    onClick={() => toggleDiet(d)}
                    className={cn(
                      'relative flex flex-col items-start gap-1.5 rounded-xl border px-4 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      active
                        ? 'border-green-600 bg-green-500 text-white'
                        : 'border-green-200 bg-green-50 text-green-700 hover:border-green-400 dark:border-green-800 dark:bg-green-950 dark:text-green-300 dark:hover:border-green-600'
                    )}
                  >
                    <span className="text-xl">{DIET_ICONS[d]}</span>
                    <span className="text-sm font-medium leading-tight">{t.dietLabels[d]}</span>
                    {active && (
                      <span className="absolute right-2 top-2">
                        <Check className="size-3.5" />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer actions */}
      <div className="bg-background/95 fixed bottom-0 left-0 right-0 border-t px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-2xl justify-end">
          {step === 1 ? (
            <button
              onClick={() => setStep(2)}
              className="bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors"
            >
              {t.nextStep}
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <div className="flex w-full items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
              >
                <ArrowLeft className="size-4" />
                {t.previousStep}
              </button>
              <button
                onClick={() => setShowDisclaimer(true)}
                className="bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors"
              >
                {t.savePreferences}
                <Check className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-500 shrink-0" />
              {td.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>{td.body1}</p>
            <p>{td.body2}</p>
            <p>{td.body3}</p>
            <p>{td.body4}</p>
          </div>
          <button
            onClick={() => router.push('/map')}
            className="bg-foreground text-background hover:bg-foreground/90 mt-4 w-full rounded-xl px-6 py-3 text-sm font-medium transition-colors"
          >
            {td.confirm}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
