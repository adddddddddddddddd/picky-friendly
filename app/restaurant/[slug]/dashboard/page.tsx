"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { UtensilsCrossed } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AllergenBadge } from "@/components/menu/allergen-badge"
import { DietBadge } from "@/components/menu/diet-badge"
import type { Allergen, Diet } from "@/lib/types"
import { restaurants } from "@/lib/restaurants"
import { menuItems } from "@/lib/data/menu"
import { ALERTS, SEVERITY_STYLES, SEVERITY_ORDER } from "@/lib/data/alerts"

const restaurant = restaurants[0]
const judyDishes = menuItems.judy ?? []

const PLACEHOLDER_RESTAURANT = {
  name: restaurant.name,
  adress: restaurant.address,
  avatar: "https://imgs.search.brave.com/6uZBneo-ZAs4JeCuXFU0Jns-ba-G64ogI8zJ77msF4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZWNh/dXNlLWd1cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTIvSnVkeS5qcGc",
  diets: (Object.entries(restaurant.tags.dietary) as [Diet, boolean][]).filter(([, v]) => v).map(([k]) => k),
  allergens: restaurant.tags.allergens,
}

const openAlerts = ALERTS.filter((a) => a.status === "ouverte")
const openAlertsCount = openAlerts.length

const KPI_CARDS = [
  { title: "Apparition sur la Map", value: "247", trend: "↑ +18%" },
  { title: "Vues du Menu", value: "83", trend: "↑ +31%" },
  { title: "Alertes", value: String(openAlertsCount), trend: "↑ -1 (20%)" },
  { title: "Communauté incluses", value: "4", trend: "↑ +1 (50%)" },
  { title: "Complétion du menu", value: "33%", trend: "↑ +3 pts" },
]

const DASHBOARD_ALERTS = openAlerts
  .sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity])
  .slice(0, 4)
  .map((a) => ({
    nom: a.dish ? `${a.title} — ${a.dish}` : a.title,
    severity: a.severity,
    duree: a.duration,
  }))

interface KitchenRule { id: string; utensil: string; allergens: Allergen[] }

const KITCHEN_RULES: KitchenRule[] = [
  { id: "1", utensil: "Poêle noire",           allergens: ["gluten", "lait"] },
  { id: "2", utensil: "Couteau à poisson",      allergens: ["poissons", "mollusques", "crustaces"] },
  { id: "3", utensil: "Planche rouge (viande)", allergens: [] },
]

const DISHES = judyDishes.slice(0, 4).map((dish, i) => ({
  nom: dish.translations.fr.name,
  ingredients: dish.allergens.length + 3 + i,
  completion: [45, 72, 60, 20][i],
  derniereVerification: ["2026-05-10", "2026-05-15", "2026-04-28", "2026-03-12"][i],
}))


export default function DashboardPage() {
  const pathname = usePathname()
  const match = pathname.match(/\/restaurant\/([^/]+)\/dashboard/)
  const slug = match?.[1] ?? ""
  const base = slug ? `/restaurant/${slug}/dashboard` : "/dashboard"

  const [severityFilter, setSeverityFilter] = useState<string>("toutes")

  const filteredAlerts =
    severityFilter === "toutes"
      ? DASHBOARD_ALERTS
      : DASHBOARD_ALERTS.filter((a) => a.severity === severityFilter)

  return (
    <div className="flex flex-1 flex-col gap-6">

      {/* Restaurant banner */}
      <Card>
        <CardContent className="flex items-start gap-4">
          <Avatar className="size-16 rounded-xl my-auto">
            <AvatarImage src={PLACEHOLDER_RESTAURANT.avatar} alt={PLACEHOLDER_RESTAURANT.name} className="object-cover" />
            <AvatarFallback className="rounded-xl text-lg">{PLACEHOLDER_RESTAURANT.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-xl font-bold">{PLACEHOLDER_RESTAURANT.name}</h1>
              <p className="text-sm text-muted-foreground">{PLACEHOLDER_RESTAURANT.adress}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PLACEHOLDER_RESTAURANT.diets.length > 0 ? PLACEHOLDER_RESTAURANT.diets.map((diet) => (
                <DietBadge key={diet} diet={diet} language="fr" restaurantId="riz-riz" />
              )) : <p className="text-xs text-muted-foreground">Le menu <u>ne semble pas</u> adapté à aucun régime PF</p>}
            </div>
            <div className="flex flex-wrap gap-1.5">
                              {PLACEHOLDER_RESTAURANT.allergens.length >0 ? PLACEHOLDER_RESTAURANT.allergens.map((allergen) => (
                <AllergenBadge key={allergen} allergen={allergen} language="fr" restaurantId="riz-riz" />
              )) : <p className="text-xs text-muted-foreground">Le menu semble adapté à toutes les allergies des 14 allergènes réglementaires</p>}

            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI cards */}
      <div className="flex flex-col gap-3">
        <Link href={`${base}/insights`} className="font-bold hover:underline">
          Indicateurs clés &rsaquo;
        </Link>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {KPI_CARDS.map((card) => {
          const isCompletion = card.title === "Complétion du menu"
          const completionValue = isCompletion ? parseInt(card.value) : null
          return (
          <Card key={card.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-end justify-between gap-2">
                <span className="text-3xl font-bold">{card.value}</span>
                <span className="mb-0.5 text-xs font-medium text-emerald-600">{card.trend}</span>
              </div>
              {isCompletion && (
                <Progress value={completionValue ?? 0} className="h-2" />
              )}
            </CardContent>
          </Card>
          )
        })}
      </div>
      </div>

      {/* Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Alerts table */}
        <div className="flex flex-col gap-3">
          <Link href={`${base}/manage-alerts`} className="font-bold hover:underline">
            Alertes &rsaquo;
          </Link>
          <Card>
            <CardContent>
              <div className="mb-3 flex items-center justify-between">
                <Select value={severityFilter} onValueChange={setSeverityFilter}>
                  <SelectTrigger className="h-8 w-36 text-xs">
                    <SelectValue placeholder="Filtrer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toutes">Toutes</SelectItem>
                    <SelectItem value="faible">Faible</SelectItem>
                    <SelectItem value="modérée">Modérée</SelectItem>
                    <SelectItem value="haute">Haute</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Gravité</TableHead>
                    <TableHead>Durée</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAlerts.map((alert) => (
                    <TableRow key={alert.nom} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="text-sm">{alert.nom}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={SEVERITY_STYLES[alert.severity]}
                        >
                          {alert.severity}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{alert.duree}</TableCell>
                    </TableRow>
                  ))}
                  {filteredAlerts.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-sm text-muted-foreground">
                        Aucune alerte
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Dishes table */}
        <div className="flex flex-col gap-3">
          <Link href={`${base}/manage-dish`} className="font-bold hover:underline">
            Plats à compléter &rsaquo;
          </Link>
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Ingrédients</TableHead>
                    <TableHead>Complétion</TableHead>
                    <TableHead>Dernière vérification</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {DISHES.map((dish) => (
                    <TableRow key={dish.nom} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="text-sm">{dish.nom}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{dish.ingredients}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={dish.completion} className="h-2 w-24" />
                          <span className="text-xs text-muted-foreground">{dish.completion}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(dish.derniereVerification).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
            {/* Menu banner */}
      <b className="text-lg ">
        Menu actuel :{" "}
        <Link href={`${base}/manage-menu`} className="hover:underline">
          <u>Menu Printemps 2026 &rsaquo;</u>
        </Link>
      </b>

      {/* Kitchen rules summary */}
      <div className="flex flex-col gap-3">
        <Link href={`${base}/manage-rule`} className="font-bold hover:underline">
          Règles de cuisine &rsaquo;
        </Link>
        <Card className="gap-0 overflow-hidden p-0">
          <div className="divide-y">
            {KITCHEN_RULES.map((rule) => (
              <div key={rule.id} className="flex items-center gap-3 px-4 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <UtensilsCrossed size={14} />
                </div>
                <span className="w-44 shrink-0 text-sm font-medium">{rule.utensil}</span>
                {rule.allergens.length === 0 ? (
                  <span className="text-xs italic text-muted-foreground">Aucun allergène</span>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {rule.allergens.map((a) => (
                      <AllergenBadge key={a} allergen={a} language="fr" restaurantId="riz-riz" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

    </div>
  )
}
