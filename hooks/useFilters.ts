"use client"

import { useCallback, useRef, useState } from "react"
import type { Allergen, Diet, FilterState } from "@/lib/types"

const emptyFilters: FilterState = {
  macronutrients: { energy: false, proteins: false, lipids: false, carbs: false },
  allergens: [],
  dietary: {},
}

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>(emptyFilters)
  const initialized = useRef(false)

  const initFromPreferences = useCallback((allergens: Allergen[], diets: Diet[]) => {
    if (initialized.current) return
    initialized.current = true
    if (allergens.length === 0 && diets.length === 0) return
    setFilters((prev) => ({
      ...prev,
      allergens,
      dietary: Object.fromEntries(diets.map((d) => [d, true])) as Partial<Record<Diet, boolean>>,
    }))
  }, [])

  const activeCount =
    Object.values(filters.macronutrients).filter(Boolean).length +
    filters.allergens.length +
    Object.values(filters.dietary).filter(Boolean).length

  const reset = useCallback(() => setFilters(emptyFilters), [])

  const toggleMacro = useCallback((key: keyof FilterState["macronutrients"]) => {
    setFilters((prev) => ({
      ...prev,
      macronutrients: { ...prev.macronutrients, [key]: !prev.macronutrients[key] },
    }))
  }, [])

  const toggleAllergen = useCallback((allergen: Allergen) => {
    setFilters((prev) => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter((a) => a !== allergen)
        : [...prev.allergens, allergen],
    }))
  }, [])

  const toggleDietary = useCallback((tag: Diet) => {
    setFilters((prev) => ({
      ...prev,
      dietary: { ...prev.dietary, [tag]: !prev.dietary[tag] },
    }))
  }, [])

  return { filters, activeCount, reset, toggleMacro, toggleAllergen, toggleDietary, initFromPreferences }
}
