'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { Allergen, Diet, Language } from '@/lib/types'

interface PreferencesContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  allergenFilters: Set<Allergen>
  dietFilters: Set<Diet>
  toggleAllergen: (a: Allergen) => void
  toggleDiet: (d: Diet) => void
  clearFilters: () => void
  preferencesReady: boolean
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')
  const [allergenFilters, setAllergenFilters] = useState<Set<Allergen>>(new Set())
  const [dietFilters, setDietFilters] = useState<Set<Diet>>(new Set())
  const [preferencesReady, setPreferencesReady] = useState(false)

  useEffect(() => {
    const lang = localStorage.getItem('picky-language') as Language | null
    if (lang && ['fr', 'en', 'it', 'es'].includes(lang)) setLanguageState(lang)

    const allergens = localStorage.getItem('picky-allergen-filters')
    if (allergens) {
      try { setAllergenFilters(new Set(JSON.parse(allergens) as Allergen[])) } catch {}
    }

    const diets = localStorage.getItem('picky-diet-filters')
    if (diets) {
      try { setDietFilters(new Set(JSON.parse(diets) as Diet[])) } catch {}
    }

    setPreferencesReady(true)
  }, [])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    localStorage.setItem('picky-language', lang)
  }

  function toggleAllergen(a: Allergen) {
    setAllergenFilters((prev) => {
      const next = new Set(prev)
      next.has(a) ? next.delete(a) : next.add(a)
      localStorage.setItem('picky-allergen-filters', JSON.stringify([...next]))
      return next
    })
  }

  function toggleDiet(d: Diet) {
    setDietFilters((prev) => {
      const next = new Set(prev)
      next.has(d) ? next.delete(d) : next.add(d)
      localStorage.setItem('picky-diet-filters', JSON.stringify([...next]))
      return next
    })
  }

  function clearFilters() {
    setAllergenFilters(new Set())
    setDietFilters(new Set())
    localStorage.setItem('picky-allergen-filters', '[]')
    localStorage.setItem('picky-diet-filters', '[]')
  }

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, allergenFilters, dietFilters, toggleAllergen, toggleDiet, clearFilters, preferencesReady }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider')
  return ctx
}
