'use client'

import { useState, useMemo, useEffect } from 'react'
import type { Category } from '@/lib/types'
import { menuItems } from '@/lib/data/menu'
import { filterMenuItems } from '@/lib/filterMenuItems'
import { usePreferences } from '@/lib/preferences-context'
import { useCart } from '@/lib/cart-context'
import { MenuHeader } from './menu-header'
import { FilterPanel } from './filter-panel'
import { CategoryTabs, CATEGORIES } from './category-tabs'
import { RecapSheet } from './recap-sheet'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ListCheck } from 'lucide-react'

type MenuPageProps = {
  restaurantId: string
}

function RestaurantNotFound() {
  return (
    <div className="flex min-h-svh items-center justify-center px-6">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <CardTitle>Ce restaurant n&apos;est pas encore disponible</CardTitle>
          <CardDescription>
            Tu veux qu&apos;on l&apos;ajoute ? Envoie-moi un DM sur TikTok et je m&apos;en occupe !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="rounded-full">
            <a
              href="https://www.tiktok.com/@pickyfriendlyapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              M&apos;envoyer un DM sur TikTok
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export function MenuPage({ restaurantId }: MenuPageProps) {
  const { language, setLanguage, allergenFilters, dietFilters, toggleAllergen, toggleDiet, clearFilters } = usePreferences()
  const { items } = useCart()
  const isAvailable = restaurantId in CATEGORIES
  const categories = CATEGORIES[restaurantId] ?? CATEGORIES.default
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0])
  const [recapOpen, setRecapOpen] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 4)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  const filteredItems = useMemo(
    () => filterMenuItems(menuItems[restaurantId] ?? menuItems.default, allergenFilters, dietFilters),
    [allergenFilters, dietFilters, restaurantId],
  )

  if (!isAvailable) return <RestaurantNotFound />

  return (
    <div className="min-h-svh">
      <MenuHeader language={language} onLanguageChange={setLanguage} restaurantId={restaurantId} />
      <FilterPanel
        language={language}
        allergenFilters={allergenFilters}
        dietFilters={dietFilters}
        onAllergenToggle={toggleAllergen}
        onDietToggle={toggleDiet}
        onClear={clearFilters}
        restaurantId={restaurantId}
      />
      <CategoryTabs
        language={language}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        filteredItems={filteredItems}
        restaurantId={restaurantId}
      />

      {!isAtBottom && (
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 z-40 bg-linear-to-t from-background to-transparent" />
      )}

      {items.length > 0 && (
        <button
          onClick={() => setRecapOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Voir ma sélection"
        >
          <ListCheck size={16} />
          <span>{items.length} plat{items.length > 1 ? "s" : ""}</span>
        </button>
      )}

      <RecapSheet
        open={recapOpen}
        onOpenChange={setRecapOpen}
        language={language}
        restaurantId={restaurantId}
      />
    </div>
  )
}
