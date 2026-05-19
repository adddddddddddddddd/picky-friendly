"use client"

import Link from "next/link"
import {
  MapPin, Eye, Heart, Star,
  ChefHat, FlaskConical, ClipboardList, Milk, ImageIcon,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import { cn } from "@/lib/utils"
import type { Allergen, Diet } from "@/lib/types"

// ── Types & constants ──────────────────────────────────────────

type Impact = "faible" | "modérée" | "haute"

const IMPACT_STYLES: Record<Impact, string> = {
  faible:  "bg-yellow-100 text-yellow-800 border-yellow-200",
  modérée: "bg-orange-100 text-orange-800 border-orange-200",
  haute:   "bg-red-100 text-red-800 border-red-200",
}

const TOTAL_DISHES = 12

// ── Placeholder data ───────────────────────────────────────────

interface KpiData {
  icon: LucideIcon
  title: string
  value: string
  trend: string
  trendUp: boolean | null
  description: string
}

const KPI_DATA: KpiData[] = [
  { icon: MapPin,  title: "Apparitions sur la carte", value: "247",     trend: "↑ +18%",   trendUp: true,  description: "fois trouvé via la recherche ce mois-ci" },
  { icon: Eye,     title: "Vues du menu en ligne",    value: "83",      trend: "↑ +31%",   trendUp: true,  description: "consultations du menu Picky" },
  { icon: Heart,   title: "Score d'inclusivité",      value: "62%",     trend: "↑ +5 pts", trendUp: true,  description: "régimes & allergènes couverts" },
  { icon: Star,    title: "Picky Score",               value: "7.4/10", trend: "→ stable", trendUp: null,  description: "complétude + fiabilité du menu" },
]

interface ActionData {
  id: string
  icon: LucideIcon
  label: string
  detail: string
  impact: Impact
  gain: string
  href: string
}

const PRIORITY_ACTIONS: ActionData[] = [
  {
    id: "arachides",
    icon: ChefHat,
    label: "Ajouter des plats sans arachides",
    detail: "34 % des profils de votre quartier excluent les arachides. Aucun plat ne les couvre actuellement.",
    impact: "haute",
    gain: "+~41 visiteurs/mois",
    href: "manage-dish",
  },
  {
    id: "cross-contamination",
    icon: FlaskConical,
    label: "Renseigner les règles de contamination croisée",
    detail: "Sans règles de cuisine documentées, les profils stricts (coeliaques, allergiques sévères) ne vous font pas confiance.",
    impact: "haute",
    gain: "+~28 visiteurs/mois",
    href: "manage-rule",
  },
  {
    id: "complete-dishes",
    icon: ClipboardList,
    label: "Compléter 4 plats incomplets",
    detail: "Les plats sans allergènes ni régime documentés sont invisibles dans les filtres Picky.",
    impact: "modérée",
    gain: "+~15 visiteurs/mois",
    href: "manage-dish",
  },
  {
    id: "sans-lactose",
    icon: Milk,
    label: "Identifier les options sans lactose",
    detail: "14 % des visiteurs récents ont exclu le lait. Deux plats pourraient être étiquetés sans lactose.",
    impact: "modérée",
    gain: "+~9 visiteurs/mois",
    href: "manage-dish",
  },
  {
    id: "photos",
    icon: ImageIcon,
    label: "Ajouter des photos pour 3 plats",
    detail: "Les plats avec photo convertissent 2× mieux dans les recherches de menu.",
    impact: "faible",
    gain: "Améliore la confiance",
    href: "manage-dish",
  },
]

interface AllergenCoverageData {
  allergen: Allergen
  safeCount: number
}

const ALLERGEN_COVERAGE: AllergenCoverageData[] = [
  { allergen: "gluten",         safeCount: 4  },
  { allergen: "lait",           safeCount: 6  },
  { allergen: "oeufs",          safeCount: 7  },
  { allergen: "poissons",       safeCount: 9  },
  { allergen: "crustaces",      safeCount: 11 },
  { allergen: "arachides",      safeCount: 0  },
  { allergen: "soja",           safeCount: 8  },
  { allergen: "fruits-a-coque", safeCount: 6  },
  { allergen: "celeri",         safeCount: 9  },
  { allergen: "moutarde",       safeCount: 10 },
  { allergen: "sesame",         safeCount: 7  },
  { allergen: "so2",            safeCount: 0  },
  { allergen: "lupin",          safeCount: 11 },
  { allergen: "mollusques",     safeCount: 0  },
]

interface DietCoverageData {
  diet: Diet
  dishCount: number
}

const DIET_COVERAGE: DietCoverageData[] = [
  { diet: "vegetarien",   dishCount: 9 },
  { diet: "halal",        dishCount: 8 },
  { diet: "vegan",        dishCount: 6 },
  { diet: "sans-gluten",  dishCount: 4 },
  { diet: "sans-lactose", dishCount: 3 },
  { diet: "casher",       dishCount: 2 },
]

type AreaRowAllergen = { allergen: Allergen; diet?: never; areaPrevalence: number; restaurantVisits: number }
type AreaRowDiet     = { diet: Diet; allergen?: never; areaPrevalence: number; restaurantVisits: number }
type AreaRow = AreaRowAllergen | AreaRowDiet

const AREA_ANALYTICS: AreaRow[] = [
  { diet: "vegetarien",    areaPrevalence: 34, restaurantVisits: 40 },
  { allergen: "gluten",    areaPrevalence: 28, restaurantVisits: 31 },
  { allergen: "lait",      areaPrevalence: 22, restaurantVisits: 19 },
  { diet: "sans-gluten",   areaPrevalence: 20, restaurantVisits: 17 },
  { allergen: "arachides", areaPrevalence: 18, restaurantVisits: 0  },
  { allergen: "oeufs",     areaPrevalence: 15, restaurantVisits: 14 },
  { diet: "vegan",         areaPrevalence: 12, restaurantVisits: 8  },
  { diet: "halal",         areaPrevalence: 9,  restaurantVisits: 22 },
]

interface VisitorProfile {
  id: string
  initials: string
  viewedAt: string
  allergens: Allergen[]
  diets: Diet[]
}

const RECENT_VISITORS: VisitorProfile[] = [
  { id: "v1", initials: "ML", viewedAt: "2026-05-19T09:14:00Z", allergens: ["gluten", "lait"],        diets: ["sans-gluten", "sans-lactose"] },
  { id: "v2", initials: "JB", viewedAt: "2026-05-19T08:52:00Z", allergens: ["arachides"],              diets: ["vegetarien"] },
  { id: "v3", initials: "SR", viewedAt: "2026-05-18T21:30:00Z", allergens: [],                         diets: ["vegan"] },
  { id: "v4", initials: "CL", viewedAt: "2026-05-18T20:11:00Z", allergens: ["poissons", "crustaces"],  diets: ["halal"] },
  { id: "v5", initials: "AP", viewedAt: "2026-05-18T19:47:00Z", allergens: ["oeufs", "lait"],          diets: ["vegetarien"] },
  { id: "v6", initials: "TK", viewedAt: "2026-05-18T17:23:00Z", allergens: ["soja"],                   diets: ["sans-lactose"] },
]

// ── Helpers ────────────────────────────────────────────────────

function coverageBarColor(pct: number): string {
  if (pct === 0) return "bg-muted-foreground/20"
  if (pct < 40)  return "bg-red-400"
  if (pct < 70)  return "bg-amber-400"
  return "bg-green-500"
}

function formatViewedAt(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime()
  const diffH = Math.floor(diffMs / 3_600_000)
  if (diffH < 1)  return "Il y a moins d'une heure"
  if (diffH < 24) return `Il y a ${diffH}h`
  return `Il y a ${Math.floor(diffH / 24)}j`
}

// ── Sub-components ──────────────────────────────────────────────

function KpiCard({ icon: Icon, title, value, trend, trendUp, description }: KpiData) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <Icon size={14} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <div className="flex items-end justify-between gap-2">
          <span className="text-3xl font-bold">{value}</span>
          <span className={cn(
            "mb-0.5 text-xs font-medium",
            trendUp === true ? "text-emerald-600" : "text-muted-foreground",
          )}>
            {trend}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ActionRow({ action }: { action: ActionData }) {
  const Icon = action.icon
  return (
    <Link href={action.href} className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-muted/50">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
        <Icon size={15} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">{action.label}</span>
          <Badge variant="outline" className={IMPACT_STYLES[action.impact]}>
            {action.impact}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{action.detail}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1 pl-2">
        <span className="whitespace-nowrap text-xs font-medium text-emerald-600">{action.gain}</span>
        <ChevronRight size={14} className="text-muted-foreground" />
      </div>
    </Link>
  )
}

function CoverageBar({ count, total }: { count: number; total: number }) {
  const pct = Math.min((count / total) * 100, 100)
  return (
    <div className="flex flex-1 items-center gap-2">
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all", coverageBarColor(pct))}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">
        {count}/{total}
      </span>
    </div>
  )
}

function AllergenCoverageList({ rows }: { rows: AllergenCoverageData[] }) {
  return (
    <div className="flex flex-col">
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span>Plats accessibles par allergène</span>
        <div className="ml-auto flex items-center gap-3">
          <span className="flex items-center gap-1"><span className="inline-block size-2 rounded-full bg-green-500" /> Bien couvert</span>
          <span className="flex items-center gap-1"><span className="inline-block size-2 rounded-full bg-amber-400" /> Partiel</span>
          <span className="flex items-center gap-1"><span className="inline-block size-2 rounded-full bg-red-400" /> À améliorer</span>
        </div>
      </div>
      {rows.map((row) => (
        <div key={row.allergen} className="flex items-center gap-3 border-b py-2 last:border-0">
          <div className="w-36 shrink-0">
            <AllergenBadge allergen={row.allergen} language="fr" restaurantId="riz-riz" />
          </div>
          {row.safeCount === 0 ? (
            <span className="flex-1 text-xs italic text-muted-foreground">Non documenté</span>
          ) : (
            <CoverageBar count={row.safeCount} total={TOTAL_DISHES} />
          )}
        </div>
      ))}
    </div>
  )
}

function DietCoverageList({ rows }: { rows: DietCoverageData[] }) {
  return (
    <div className="flex flex-col">
      <p className="mb-3 text-xs text-muted-foreground">Plats compatibles avec chaque régime</p>
      {rows.map((row) => (
        <div key={row.diet} className="flex items-center gap-3 border-b py-2 last:border-0">
          <div className="w-36 shrink-0">
            <DietBadge diet={row.diet} language="fr" restaurantId="riz-riz" />
          </div>
          <CoverageBar count={row.dishCount} total={TOTAL_DISHES} />
        </div>
      ))}
    </div>
  )
}

function AreaAnalyticsCard({ rows }: { rows: AreaRow[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Profils de votre quartier</CardTitle>
        <CardDescription>Prévalence locale Picky vs vos visiteurs</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="inline-block h-2 w-4 rounded-full bg-sky-300" /> Zone</span>
          <span className="flex items-center gap-1.5"><span className="inline-block h-2 w-4 rounded-full bg-violet-400" /> Votre resto</span>
        </div>
        {rows.map((row, i) => {
          const key = (row.allergen ?? row.diet ?? String(i)) + i
          const isMissed = row.restaurantVisits === 0 && row.areaPrevalence > 0
          return (
            <div key={key} className="flex items-center gap-3 border-b py-2.5 last:border-0">
              <div className="w-28 shrink-0">
                {row.allergen ? (
                  <AllergenBadge allergen={row.allergen} language="fr" restaurantId="riz-riz" />
                ) : (
                  <DietBadge diet={row.diet!} language="fr" restaurantId="riz-riz" />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="relative h-1.5 w-28 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-sky-300 transition-all" style={{ width: `${row.areaPrevalence}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground">{row.areaPrevalence}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-1.5 w-28 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-violet-400 transition-all" style={{ width: `${row.restaurantVisits}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground">{row.restaurantVisits}%</span>
                </div>
              </div>
              {isMissed && (
                <Badge variant="outline" className="shrink-0 border-red-200 bg-red-50 text-xs text-red-700">
                  Manqué
                </Badge>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

function RecentVisitorsCard({ visitors }: { visitors: VisitorProfile[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Visiteurs récents</CardTitle>
        <CardDescription>{visitors.length} profils ces 48 dernières heures</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        {visitors.map((v) => (
          <div key={v.id} className="flex items-start gap-3 border-b py-3 last:border-0">
            <Avatar className="size-8 shrink-0">
              <AvatarFallback className="text-xs">{v.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">{formatViewedAt(v.viewedAt)}</span>
              {v.allergens.length === 0 && v.diets.length === 0 ? (
                <span className="text-xs italic text-muted-foreground">Profil non renseigné</span>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {v.allergens.map((a) => (
                    <AllergenBadge key={a} allergen={a} language="fr" restaurantId="riz-riz" />
                  ))}
                  {v.diets.map((d) => (
                    <DietBadge key={d} diet={d} language="fr" restaurantId="riz-riz" />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// ── Page ───────────────────────────────────────────────────────

export default function InsightsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6">

      {/* 1 — KPIs */}
      <div className="flex flex-col gap-3">
        <span className="font-bold">Indicateurs clés</span>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPI_DATA.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>
      </div>

      {/* 2 — Priority actions */}
      <div className="flex flex-col gap-3">
        <Link href="#" className="font-bold hover:underline">
          Actions prioritaires &rsaquo;
        </Link>
        <Card className="gap-0 overflow-hidden p-0">
          <CardHeader className="border-b px-5 py-4">
            <CardTitle className="text-base">Pour gagner plus de clients</CardTitle>
            <CardDescription>Classées par impact potentiel sur votre visibilité</CardDescription>
          </CardHeader>
          <div className="divide-y">
            {PRIORITY_ACTIONS.map((action) => (
              <ActionRow key={action.id} action={action} />
            ))}
          </div>
        </Card>
      </div>

      {/* 3 — Coverage tabs */}
      <div className="flex flex-col gap-3">
        <span className="font-bold">Couverture allergènes & régimes</span>
        <Card>
          <CardContent>
            <Tabs defaultValue="allergens">
              <TabsList className="mb-4">
                <TabsTrigger value="allergens">Allergènes (14)</TabsTrigger>
                <TabsTrigger value="diets">Régimes (6)</TabsTrigger>
              </TabsList>
              <TabsContent value="allergens">
                <AllergenCoverageList rows={ALLERGEN_COVERAGE} />
              </TabsContent>
              <TabsContent value="diets">
                <DietCoverageList rows={DIET_COVERAGE} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* 4 — Area analytics + recent visitors */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AreaAnalyticsCard rows={AREA_ANALYTICS} />
        <RecentVisitorsCard visitors={RECENT_VISITORS} />
      </div>

    </div>
  )
}
