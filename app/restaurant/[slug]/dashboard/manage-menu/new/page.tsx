"use client"

import { useState } from "react"
import Image from "next/image"
import {
  DndContext,
  DragOverlay,
  useDroppable,
  useDraggable,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { menuItems as allMenuItemsMap } from "@/lib/data/menu"
import { uiTranslations } from "@/lib/data/translations"
import type { MenuItem } from "@/lib/types"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, Save } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const ALL_DISHES = allMenuItemsMap.judy ?? []
const { categories: CATEGORY_LABELS, subcategoryLabels: SUBCATEGORY_LABELS } =
  uiTranslations.judy.fr

function DishRow({ item, ghost }: { item: MenuItem; ghost?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border bg-background p-2 shadow-sm select-none",
        ghost && "opacity-40"
      )}
    >
      <div className="relative size-11 shrink-0 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.translations.fr.name}
          fill
          className="object-cover"
          sizes="44px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium leading-snug">
          {item.translations.fr.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {item.price.toFixed(2).replace(".", ",")} €
        </p>
        {(item.allergens.length > 0 || item.diets.length > 0) && (
          <div className="mt-1 flex flex-wrap gap-1">
            {item.diets.map((d) => (
              <DietBadge key={d} diet={d} language="fr" restaurantId="judy" />
            ))}
            {item.allergens.map((a) => (
              <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
            ))}
          </div>
        )}
      </div>
      <Badge variant="secondary" className="shrink-0 self-start text-[10px] capitalize">
        {CATEGORY_LABELS[item.category] ?? item.category}
      </Badge>
    </div>
  )
}

function DraggableDish({ item, isActive }: { item: MenuItem; isActive: boolean }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id: item.id })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab active:cursor-grabbing touch-none"
    >
      <DishRow item={item} ghost={isActive} />
    </div>
  )
}

function groupByCategory(dishes: MenuItem[]) {
  return dishes.reduce<Map<string, Map<string | null, MenuItem[]>>>(
    (acc, dish) => {
      if (!acc.has(dish.category)) acc.set(dish.category, new Map())
      const cat = acc.get(dish.category)!
      if (!cat.has(dish.subcategory)) cat.set(dish.subcategory, [])
      cat.get(dish.subcategory)!.push(dish)
      return acc
    },
    new Map()
  )
}

function GroupedDishList({ dishes, activeId }: { dishes: MenuItem[]; activeId: string | null }) {
  const grouped = groupByCategory(dishes)
  return (
    <div className="flex flex-col gap-2">
      {[...grouped.entries()].map(([category, subcatMap]) => (
        <Collapsible key={category} defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:bg-muted/40 [&[data-state=open]>svg]:rotate-0">
            {(CATEGORY_LABELS as Record<string, string>)[category] ?? category}
            <ChevronDown size={14} className="-rotate-90 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 flex flex-col gap-1">
            {[...subcatMap.entries()].map(([subcategory, items]) =>
              subcategory === null ? (
                items.map((item) => (
                  <DraggableDish key={item.id} item={item} isActive={activeId === item.id} />
                ))
              ) : (
                <Collapsible key={subcategory} defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-[11px] font-medium text-muted-foreground hover:bg-muted/40 [&[data-state=open]>svg]:rotate-0">
                    {SUBCATEGORY_LABELS[subcategory] ?? subcategory}
                    <ChevronDown size={12} className="-rotate-90 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 flex flex-col gap-1 pl-2">
                    {items.map((item) => (
                      <DraggableDish key={item.id} item={item} isActive={activeId === item.id} />
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )
            )}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}

function MenuPanel({ dishes, activeId }: { dishes: MenuItem[]; activeId: string | null }) {
  const { setNodeRef, isOver } = useDroppable({ id: "menu" })

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Menu</h2>
        <span className="text-sm text-muted-foreground">
          {dishes.length} plat{dishes.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div
        ref={setNodeRef}
        className={cn(
          "min-h-0 flex-1 overflow-y-auto rounded-xl border-2 border-dashed p-3 transition-colors",
          isOver ? "border-primary bg-primary/5" : "border-border bg-muted/20"
        )}
      >
        {dishes.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-sm text-muted-foreground">
              Glissez des plats ici pour les ajouter au menu
            </p>
          </div>
        ) : (
          <GroupedDishList dishes={dishes} activeId={activeId} />
        )}
      </div>
    </div>
  )
}

function PlatsPanel({ dishes, activeId }: { dishes: MenuItem[]; activeId: string | null }) {
  const { setNodeRef, isOver } = useDroppable({ id: "plats" })

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Plats</h2>
        <span className="text-sm text-muted-foreground">
          {dishes.length} plat{dishes.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div
        ref={setNodeRef}
        className={cn(
          "min-h-0 flex-1 overflow-y-auto rounded-xl border-2 border-dashed p-3 transition-colors",
          isOver ? "border-primary bg-primary/5" : "border-border bg-muted/20"
        )}
      >
        {dishes.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-sm text-muted-foreground">Tous les plats sont dans le menu</p>
          </div>
        ) : (
          <GroupedDishList dishes={dishes} activeId={activeId} />
        )}
      </div>
    </div>
  )
}

export default function ManageMenuPage() {
  const [menuIds, setMenuIds] = useState<string[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hasChanges, setHasChanges] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
  )

  const menuDishes = ALL_DISHES.filter((d) => menuIds.includes(d.id))
  const platsDishes = ALL_DISHES.filter((d) => !menuIds.includes(d.id))
  const activeItem = ALL_DISHES.find((d) => d.id === activeId) ?? null

  function handleDragStart({ active }: DragStartEvent) {
    setActiveId(active.id as string)
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    setActiveId(null)
    if (!over) return

    const draggedId = active.id as string
    const isInMenu = menuIds.includes(draggedId)

    if (over.id === "menu" && !isInMenu) {
      setMenuIds((prev) => [...prev, draggedId])
      setHasChanges(true)
    } else if (over.id === "plats" && isInMenu) {
      setMenuIds((prev) => prev.filter((id) => id !== draggedId))
      setHasChanges(true)
    }
  }

  const menuAllergens = [...new Set(menuDishes.flatMap((d) => d.allergens))]
  const menuDiets = [...new Set(menuDishes.flatMap((d) => d.diets))]

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <b className="text-lg">Menu Printemps 2026</b>
        <Button disabled={!hasChanges}><Save />Enregistrer</Button>
      </div>
      {(menuAllergens.length > 0 || menuDiets.length > 0) && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-foreground">Allergènes et régimes présents dans le menu</p>
          <div className="flex flex-wrap items-center gap-2 rounded-lg border bg-muted/20 px-4 py-3">
            {menuDiets.map((d) => (
              <DietBadge key={d} diet={d} language="fr" restaurantId="judy" />
            ))}
            {menuAllergens.map((a) => (
              <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
            ))}
          </div>
        </div>
      )}
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex min-h-0 flex-1 gap-6">
        <MenuPanel dishes={menuDishes} activeId={activeId} />
        <PlatsPanel dishes={platsDishes} activeId={activeId} />
      </div>

      <DragOverlay dropAnimation={null}>
        {activeItem && (
          <div className="w-72 rotate-1 shadow-xl">
            <DishRow item={activeItem} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
    </div>
  )
}
