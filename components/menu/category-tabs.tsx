'use client'

import { useRef, useState, useEffect } from 'react'
import type { Category, Language, MenuItem } from '@/lib/types'
import { uiTranslations } from '@/lib/data/translations'
import { DishCard } from './dish-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export const CATEGORIES: Record<string, Category[]> = {
  default: ['entrees', 'plats', 'desserts', 'boissons', 'feelGoodDrinks'],
  judy: Object.keys(uiTranslations.judy.en.categories) as Category[],
  noglu: Object.keys(uiTranslations.noglu.en.categories) as Category[],
  thaisil: Object.keys(uiTranslations.thaisil.en.categories) as Category[],
  "cafe-mareva": Object.keys(uiTranslations['cafe-mareva'].en.categories) as Category[],
  "su-misura": Object.keys(uiTranslations['su-misura'].en.categories) as Category[],
}

interface CategoryTabsProps {
  language: Language
  activeCategory: Category
  onCategoryChange: (cat: Category) => void
  filteredItems: MenuItem[],
  restaurantId: string
}

export function CategoryTabs({ language, activeCategory, onCategoryChange, filteredItems, restaurantId }: CategoryTabsProps) {
  const t = uiTranslations[restaurantId][language]
  const categories = CATEGORIES[restaurantId]
  const tabsScrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const el = tabsScrollRef.current
    if (!el) return
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    }
    update()
    el.addEventListener('scroll', update)
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', update); ro.disconnect() }
  }, [])

  const itemsByCategory = (cat: Category) => filteredItems.filter((i) => i.category === cat)

  const subcategoriesFor = (items: MenuItem[]) => {
    const seen = new Set<string>()
    return items.reduce<string[]>((acc, item) => {
      if (item.subcategory && !seen.has(item.subcategory)) {
        seen.add(item.subcategory)
        acc.push(item.subcategory)
      }
      else if (!item.subcategory && !seen.has('uncategorized')) {
        seen.add('uncategorized')
        acc.push('uncategorized')
      }
      return acc
    }, [])
  }

  return (
    <Tabs value={activeCategory} onValueChange={(v) => onCategoryChange(v as Category)}>
      <div className="bg-background border-b">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative">
            <div
              ref={tabsScrollRef}
              className="overflow-x-auto scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <TabsList className="h-auto w-full justify-start gap-0 rounded-none border-0 bg-transparent p-0">
                {categories.map((cat) => {
                  const count = itemsByCategory(cat).length
                  return (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className="relative rounded-none border-b-2 border-transparent px-4 py-3 text-sm font-medium data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                      {t.categories[cat]}
                      {count > 0 && (
                        <span className="text-muted-foreground ml-1.5 text-xs tabular-nums">({count})</span>
                      )}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>
            {canScrollLeft && (
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-background to-transparent" />
            )}
            {canScrollRight && (
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-background to-transparent" />
            )}
          </div>
        </div>
      </div>

      {categories.map((cat) => {
        const items = itemsByCategory(cat)
        const subcategories = subcategoriesFor(items)
        const hasSubcategories = subcategories.some((s) => s !== 'uncategorized')
        return (
          <TabsContent key={cat} value={cat} className="mt-0 focus-visible:ring-0">
            <div className="mx-auto max-w-5xl px-4 py-6">
              <h1 className="mb-6 text-2xl font-bold">{t.categories[cat]}</h1>
              {items.length === 0 ? (
                <p className="text-muted-foreground py-12 text-center text-sm">{t.noResults}</p>
              ) : !hasSubcategories ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {items.map((item) => (
                    <DishCard key={item.id} item={item} language={language} restaurantId={restaurantId} wide />
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {subcategories.map((sub) => {
                    const subItems = sub === 'uncategorized'
                      ? items.filter((i) => !i.subcategory)
                      : items.filter((i) => i.subcategory === sub)
                    return (
                      <div key={sub}>
                        {sub !== 'uncategorized' && (
                          <h2 className="mb-3 text-lg font-semibold">
                            {t.subcategoryLabels[sub] ?? sub}
                          </h2>
                        )}
                        <ScrollArea className="w-full">
                          <div className="flex gap-4 pb-4">
                            {subItems.map((item) => (
                              <div key={item.id} className="shrink-0">
                                <DishCard item={item} language={language} restaurantId={restaurantId}/>
                              </div>
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
