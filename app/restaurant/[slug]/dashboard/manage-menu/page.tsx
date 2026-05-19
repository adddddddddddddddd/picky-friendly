"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plus, BookOpen, Archive, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import type { Allergen, Diet } from "@/lib/types"

interface MenuSummary {
  id: string
  name: string
  status: "actif" | "brouillon" | "archive"
  dishCount: number
  startDate: string
  endDate?: string
  allergens: Allergen[]
  diets: Diet[]
  description?: string
}

const MENUS: MenuSummary[] = [
  {
    id: "printemps-2026",
    name: "Menu Printemps 2026",
    status: "actif",
    dishCount: 18,
    startDate: "2026-03-20",
    allergens: ["gluten", "lait", "oeufs", "poissons", "crustaces"],
    diets: ["vegetarien", "sans-gluten"],
    description: "Menu de saison autour des légumes printaniers et des herbes fraîches.",
  },
  {
    id: "hiver-2025",
    name: "Menu Hiver 2025/2026",
    status: "archive",
    dishCount: 22,
    startDate: "2025-12-01",
    endDate: "2026-03-19",
    allergens: ["gluten", "lait", "oeufs", "fruits-a-coque", "celeri"],
    diets: ["vegetarien"],
    description: "Plats réconfortants et saveurs hivernales.",
  },
  {
    id: "automne-2025",
    name: "Menu Automne 2025",
    status: "archive",
    dishCount: 20,
    startDate: "2025-09-22",
    endDate: "2025-11-30",
    allergens: ["gluten", "lait", "oeufs", "so2"],
    diets: ["vegetarien", "vegan"],
    description: "Champignons, courges et produits de la forêt à l'honneur.",
  },
  {
    id: "ete-2025",
    name: "Menu Été 2025",
    status: "archive",
    dishCount: 16,
    startDate: "2025-06-21",
    endDate: "2025-09-21",
    allergens: ["gluten", "poissons", "crustaces", "lait"],
    diets: ["sans-gluten"],
    description: "Fraîcheur et légèreté, inspiré du bassin méditerranéen.",
  },
  {
    id: "brouillon-ete-2026",
    name: "Menu Été 2026",
    status: "brouillon",
    dishCount: 4,
    startDate: "2026-06-21",
    allergens: ["gluten", "lait"],
    diets: [],
    description: "En cours de construction.",
  },
]

const STATUS_CONFIG = {
  actif: {
    label: "Actif",
    icon: CheckCircle2,
    variant: "default" as const,
    className: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  },
  brouillon: {
    label: "Brouillon",
    icon: Clock,
    variant: "outline" as const,
    className: "bg-amber-500/10 text-amber-700 border-amber-200",
  },
  archive: {
    label: "Archivé",
    icon: Archive,
    variant: "secondary" as const,
    className: "bg-muted text-muted-foreground border-border",
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function MenuCard({ menu, base }: { menu: MenuSummary; base: string }) {
  const status = STATUS_CONFIG[menu.status]
  const StatusIcon = status.icon

  return (
    <Link href={`${base}/${menu.id}`} className="group block">
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <BookOpen size={16} />
              </div>
              <CardTitle className="text-base leading-snug">{menu.name}</CardTitle>
            </div>
            <Badge
              variant="outline"
              className={status.className + " shrink-0 gap-1 text-[11px]"}
            >
              <StatusIcon size={10} />
              {status.label}
            </Badge>
          </div>
          {menu.description && (
            <CardDescription className="line-clamp-2 text-xs">
              {menu.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="flex flex-col gap-3 pb-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {menu.endDate
                ? `${formatDate(menu.startDate)} → ${formatDate(menu.endDate)}`
                : `Depuis le ${formatDate(menu.startDate)}`}
            </span>
            <span className="font-medium text-foreground">
              {menu.dishCount} plat{menu.dishCount !== 1 ? "s" : ""}
            </span>
          </div>

          <Separator />

          <div className="flex flex-col gap-1.5">
            {menu.diets.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {menu.diets.map((d) => (
                  <DietBadge key={d} diet={d} language="fr" restaurantId="judy" />
                ))}
              </div>
            )}
            {menu.allergens.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {menu.allergens.slice(0, 5).map((a) => (
                  <AllergenBadge key={a} allergen={a} language="fr" restaurantId="judy" />
                ))}
                {menu.allergens.length > 5 && (
                  <span className="text-[11px] text-muted-foreground self-center">
                    +{menu.allergens.length - 5}
                  </span>
                )}
              </div>
            )}
            {menu.diets.length === 0 && menu.allergens.length === 0 && (
              <span className="text-[11px] italic text-muted-foreground">
                Allergènes non renseignés
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <span className="text-xs text-primary group-hover:underline">
            Voir le menu →
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default function ManageMenuPage() {
  const pathname = usePathname()
  const match = pathname.match(/\/restaurant\/([^/]+)\/dashboard/)
  const slug = match?.[1] ?? ""
  const base = slug
    ? `/restaurant/${slug}/dashboard/manage-menu`
    : "/dashboard/manage-menu"

  const activeMenus = MENUS.filter((m) => m.status === "actif")
  const draftMenus = MENUS.filter((m) => m.status === "brouillon")
  const archivedMenus = MENUS.filter((m) => m.status === "archive")

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Mes menus</h1>
          <p className="text-sm text-muted-foreground">
            {MENUS.length} menu{MENUS.length !== 1 ? "s" : ""} au total
          </p>
        </div>
        <Button asChild>
          <Link href={`${base}/new`}>
            <Plus data-icon="inline-start" />
            Nouveau menu
          </Link>
        </Button>
      </div>

      {activeMenus.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            En cours
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeMenus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} base={base} />
            ))}
          </div>
        </section>
      )}

      {draftMenus.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Brouillons
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {draftMenus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} base={base} />
            ))}
          </div>
        </section>
      )}

      {archivedMenus.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Archivés
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {archivedMenus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} base={base} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
