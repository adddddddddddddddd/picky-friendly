"use client"

import { useState, useMemo } from "react"
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core"
import { menuItems } from "@/lib/data/menu"
import { uiTranslations } from "@/lib/data/translations"
import type { MenuItem } from "@/lib/types"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

const t = uiTranslations.judy.fr
const NONE = "__none__"

function DishCardDisplay({ dish }: { dish: MenuItem }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border bg-card p-2.5 shadow-sm select-none">
      <GripVertical className="size-4 shrink-0 text-muted-foreground" />
      <img
        src={dish.image}
        alt=""
        className="size-9 shrink-0 rounded object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none"
        }}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{dish.translations.fr.name}</p>
        <p className="truncate text-xs text-muted-foreground">
          {dish.translations.fr.description}
        </p>
      </div>
      <span className="shrink-0 text-sm font-semibold tabular-nums">{dish.price}€</span>
    </div>
  )
}

function DraggableDish({ dish }: { dish: MenuItem }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: dish.id,
  })

  return (
    <div
      ref={setNodeRef}
      className={cn("cursor-grab touch-none", isDragging && "opacity-40")}
      {...listeners}
      {...attributes}
    >
      <DishCardDisplay dish={dish} />
    </div>
  )
}

function SubcategoryZone({
  id,
  label,
  dishes,
}: {
  id: string
  label: string
  dishes: MenuItem[]
}) {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div className="ml-3">
      {label && (
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
      )}
      <div
        ref={setNodeRef}
        className={cn(
          "min-h-14 rounded-lg border-2 border-dashed p-1.5 transition-colors",
          isOver
            ? "border-primary bg-primary/5"
            : dishes.length > 0
              ? "border-border bg-muted/20"
              : "border-border/40",
        )}
      >
        {dishes.length === 0 ? (
          <p className="flex h-10 items-center justify-center text-xs text-muted-foreground/60">
            Glisser un plat ici
          </p>
        ) : (
          <div className="flex flex-col gap-1.5">
            {dishes.map((dish) => (
              <DraggableDish key={dish.id} dish={dish} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CategorySection({
  category,
  subcategories,
  dishes,
}: {
  category: string
  subcategories: string[]
  dishes: MenuItem[]
}) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-muted/50">
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            {t.categories[category] ?? category}
          </span>
          <Badge variant="secondary">{dishes.length}</Badge>
        </div>
        <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-3 pb-2 pt-1">
        {subcategories.map((sub) => (
          <SubcategoryZone
            key={sub}
            id={`${category}|${sub}`}
            label={sub === NONE ? "" : (t.subcategoryLabels[sub] ?? sub)}
            dishes={dishes.filter((d) => (d.subcategory ?? NONE) === sub)}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function ManageMenuPage() {
  const allDishes = menuItems.judy

  const menuStructure = useMemo(() => {
    const structure: Record<string, string[]> = {}
    allDishes.forEach((dish) => {
      if (!structure[dish.category]) structure[dish.category] = []
      const subKey = dish.subcategory ?? NONE
      if (!structure[dish.category].includes(subKey)) {
        structure[dish.category].push(subKey)
      }
    })
    return structure
  }, [allDishes])

  const [activeDishes, setActiveDishes] = useState<MenuItem[]>(allDishes)
  const [poolDishes, setPoolDishes] = useState<MenuItem[]>([])
  const [draggingId, setDraggingId] = useState<string | null>(null)

  const draggingDish = allDishes.find((d) => d.id === draggingId)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  )

  const { setNodeRef: poolRef, isOver: poolIsOver } = useDroppable({
    id: "pool",
  })

  function handleDragStart({ active }: DragStartEvent) {
    setDraggingId(active.id as string)
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    setDraggingId(null)
    if (!over) return

    const dishId = active.id as string
    const dish = allDishes.find((d) => d.id === dishId)
    if (!dish) return

    const targetId = over.id as string

    if (targetId === "pool") {
      setActiveDishes((prev) => prev.filter((d) => d.id !== dishId))
      setPoolDishes((prev) =>
        prev.some((d) => d.id === dishId) ? prev : [...prev, dish],
      )
    } else if (targetId.includes("|")) {
      const [targetCat, targetSub] = targetId.split("|")
      const updatedDish: MenuItem = {
        ...dish,
        category: targetCat,
        subcategory: targetSub === NONE ? null : targetSub,
      }
      setPoolDishes((prev) => prev.filter((d) => d.id !== dishId))
      setActiveDishes((prev) => {
        if (prev.some((d) => d.id === dishId)) {
          return prev.map((d) => (d.id === dishId ? updatedDish : d))
        }
        return [...prev, updatedDish]
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Left: Active Menu */}
        <div className="flex min-h-0 w-1/2 flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-semibold">Menu actif</h2>
            <span className="text-sm text-muted-foreground">
              {activeDishes.length} plat{activeDishes.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="min-h-0 flex-1 overflow-hidden rounded-xl border">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-1 p-3">
                {Object.entries(menuStructure).map(
                  ([category, subcategories], i) => (
                    <div key={category}>
                      {i > 0 && <Separator className="my-2" />}
                      <CategorySection
                        category={category}
                        subcategories={subcategories}
                        dishes={activeDishes.filter(
                          (d) => d.category === category,
                        )}
                      />
                    </div>
                  ),
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Right: Dish Pool */}
        <div className="flex min-h-0 w-1/2 flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-semibold">Bibliothèque</h2>
            <span className="text-sm text-muted-foreground">
              {poolDishes.length} plat{poolDishes.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div
            ref={poolRef}
            className={cn(
              "min-h-0 flex-1 overflow-hidden rounded-xl border-2 border-dashed transition-colors",
              poolIsOver
                ? "border-primary bg-primary/5"
                : poolDishes.length > 0
                  ? "border-border"
                  : "border-border/40",
            )}
          >
            <ScrollArea className="h-full">
              {poolDishes.length === 0 ? (
                <div className="flex h-48 items-center justify-center p-8 text-center text-sm text-muted-foreground">
                  Tous les plats sont dans le menu actif.
                  <br />
                  Glissez-les ici pour les retirer.
                </div>
              ) : (
                <div className="flex flex-col gap-1.5 p-3">
                  {poolDishes.map((dish) => (
                    <DraggableDish key={dish.id} dish={dish} />
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {draggingDish && (
          <div className="w-80 rotate-1 shadow-xl">
            <DishCardDisplay dish={draggingDish} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}
