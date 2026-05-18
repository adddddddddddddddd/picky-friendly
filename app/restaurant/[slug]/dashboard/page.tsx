"use client"

import Link from "next/link"
import { useState } from "react"
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
import type { Diet } from "@/lib/types"
import { restaurants } from "@/lib/restaurants"

const restaurant = restaurants[0]

const PLACEHOLDER_RESTAURANT = {
  name: restaurant.name,
  adress: restaurant.address,
  avatar: "https://imgs.search.brave.com/6uZBneo-ZAs4JeCuXFU0Jns-ba-G64ogI8zJ77msF4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZWNh/dXNlLWd1cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTIvSnVkeS5qcGc",
  diets: (Object.entries(restaurant.tags.dietary) as [Diet, boolean][]).filter(([, v]) => v).map(([k]) => k),
  allergens: restaurant.tags.allergens,
}

const KPI_CARDS = [
  { title: "Apparition sur la Map", value: "12", trend: "↑ +3 (30%)" },
  { title: "Vues du Menu", value: "3", trend: "↑ +1 (50%)" },
  { title: "Alertes", value: "4", trend: "↑ -1 (20%)" },
  { title: "Communauté incluses", value: "4", trend: "↑ +1 (50%)" },
  { title: "Complétion du menu", value: "33%", trend: "↑ +3 pts" },

]

type Severity = "faible" | "modérée" | "haute"

const ALERTS = [
  { nom: "Prix manquant — Curry du dragon", severity: "haute" as Severity, duree: "3j" },
  { nom: "Allergènes incomplets — Buddha bowl", severity: "modérée" as Severity, duree: "5j" },
  { nom: "Image absente — Riz au lait", severity: "faible" as Severity, duree: "12j" },
  { nom: "Traduction manquante — Dhal", severity: "faible" as Severity, duree: "8j" },
]

const DISHES = [
  { nom: "Curry du dragon", ingredients: 8, completion: 45, derniereVerification: "2026-05-10" },
  { nom: "Buddha bowl", ingredients: 12, completion: 72, derniereVerification: "2026-05-15" },
  { nom: "Riz au lait", ingredients: 5, completion: 60, derniereVerification: "2026-04-28" },
  { nom: "Dhal d'épinard", ingredients: 9, completion: 20, derniereVerification: "2026-03-12" },
]

const SEVERITY_STYLES: Record<Severity, string> = {
  faible: "bg-yellow-100 text-yellow-800 border-yellow-200",
  modérée: "bg-orange-100 text-orange-800 border-orange-200",
  haute: "bg-red-100 text-red-800 border-red-200",
}

export default function DashboardPage() {
  const [severityFilter, setSeverityFilter] = useState<string>("toutes")

  const filteredAlerts =
    severityFilter === "toutes"
      ? ALERTS
      : ALERTS.filter((a) => a.severity === severityFilter)

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
      <Link href="#" className="font-bold hover:underline -mb-4">
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

      {/* Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Alerts table */}
        <div className="flex flex-col gap-3">
          <Link href="#" className="font-bold hover:underline">
            Alertes &rsaquo;
          </Link>
          <div className="rounded-xl border p-4">
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
          </div>
        </div>

        {/* Dishes table */}
        <div className="flex flex-col gap-3">
          <Link href="#" className="font-bold hover:underline">
            Plats à compléter &rsaquo;
          </Link>
          <div className="rounded-xl border p-4">
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
          </div>
        </div>
      </div>
            {/* Menu banner */}
      <b className="text-lg ">
        Menu actuel :{" "}
        <Link href="#" className="hover:underline">
          <u>Menu Printemps 2026 &rsaquo;</u>
        </Link>
      </b>

    </div>
  )
}
