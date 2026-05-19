"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import {
  AlertTriangleIcon,
  BotIcon,
  UserIcon,
  CheckIcon,
  ArrowUpDownIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  ALERTS,
  SEVERITY_STYLES,
  CATEGORY_LABELS,
  SEVERITY_ORDER,
  type Severity,
} from "@/lib/data/alerts"

type SortKey = "severity" | "duration" | "source" | "category" | "status"
type SortDir = "asc" | "desc"

export default function ManageAlertsPage() {
  const [severityFilter, setSeverityFilter] = useState("toutes")
  const [sourceFilter, setSourceFilter] = useState("toutes")
  const [categoryFilter, setCategoryFilter] = useState("toutes")
  const [statusFilter, setStatusFilter] = useState("ouverte")
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({ key: "severity", dir: "asc" })

  const filtered = useMemo(() => {
    let list = ALERTS
    if (severityFilter !== "toutes") list = list.filter((a) => a.severity === severityFilter)
    if (sourceFilter !== "toutes") list = list.filter((a) => a.source === sourceFilter)
    if (categoryFilter !== "toutes") list = list.filter((a) => a.category === categoryFilter)
    if (statusFilter !== "toutes") list = list.filter((a) => a.status === statusFilter)
    return [...list].sort((a, b) => {
      let cmp = 0
      if (sort.key === "severity") cmp = SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
      else if (sort.key === "duration") cmp = parseInt(a.duration) - parseInt(b.duration)
      else if (sort.key === "source") cmp = a.source.localeCompare(b.source)
      else if (sort.key === "category") cmp = a.category.localeCompare(b.category)
      else if (sort.key === "status") cmp = a.status.localeCompare(b.status)
      return sort.dir === "asc" ? cmp : -cmp
    })
  }, [severityFilter, sourceFilter, categoryFilter, statusFilter, sort])

  function toggleSort(key: SortKey) {
    setSort((prev) =>
      prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }
    )
  }

  const openAlerts = ALERTS.filter((a) => a.status === "ouverte")
  const countBySeverity = (s: Severity) => openAlerts.filter((a) => a.severity === s).length

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Alertes</h1>
        <p className="text-sm text-muted-foreground">
          Alertes générées par l&apos;application et signalements des utilisateurs.
        </p>
      </div>

      {/* Summary bar */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <AlertTriangleIcon className="size-4 text-red-500" />
              Haute priorité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{countBySeverity("haute")}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <AlertTriangleIcon className="size-4 text-orange-500" />
              Priorité modérée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{countBySeverity("modérée")}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <AlertTriangleIcon className="size-4 text-yellow-500" />
              Faible priorité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{countBySeverity("faible")}</span>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="h-8 w-36 text-xs">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toutes">Tous les statuts</SelectItem>
            <SelectItem value="ouverte">Ouvertes</SelectItem>
            <SelectItem value="résolue">Résolues</SelectItem>
          </SelectContent>
        </Select>

        <Select value={severityFilter} onValueChange={setSeverityFilter}>
          <SelectTrigger className="h-8 w-36 text-xs">
            <SelectValue placeholder="Gravité" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toutes">Toutes gravités</SelectItem>
            <SelectItem value="faible">Faible</SelectItem>
            <SelectItem value="modérée">Modérée</SelectItem>
            <SelectItem value="haute">Haute</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="h-8 w-40 text-xs">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toutes">Toutes sources</SelectItem>
            <SelectItem value="app">Application</SelectItem>
            <SelectItem value="utilisateur">Utilisateurs</SelectItem>
          </SelectContent>
        </Select>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="h-8 w-40 text-xs">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toutes">Toutes catégories</SelectItem>
            <SelectItem value="complétion">Complétion</SelectItem>
            <SelectItem value="allergènes">Allergènes</SelectItem>
            <SelectItem value="prix">Prix</SelectItem>
            <SelectItem value="traduction">Traduction</SelectItem>
            <SelectItem value="incohérence">Incohérence</SelectItem>
            <SelectItem value="disponibilité">Disponibilité</SelectItem>
          </SelectContent>
        </Select>

        {(severityFilter !== "toutes" || sourceFilter !== "toutes" || categoryFilter !== "toutes" || statusFilter !== "ouverte") && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs"
            onClick={() => {
              setSeverityFilter("toutes")
              setSourceFilter("toutes")
              setCategoryFilter("toutes")
              setStatusFilter("ouverte")
            }}
          >
            Réinitialiser
          </Button>
        )}

        <span className="ml-auto flex items-center text-xs text-muted-foreground">
          {filtered.length} alerte{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-65">Titre / Plat</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs font-medium" onClick={() => toggleSort("severity")}>
                  Gravité <ArrowUpDownIcon data-icon="inline-end" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs font-medium" onClick={() => toggleSort("source")}>
                  Source <ArrowUpDownIcon data-icon="inline-end" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs font-medium" onClick={() => toggleSort("category")}>
                  Catégorie <ArrowUpDownIcon data-icon="inline-end" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs font-medium" onClick={() => toggleSort("duration")}>
                  Durée <ArrowUpDownIcon data-icon="inline-end" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs font-medium" onClick={() => toggleSort("status")}>
                  Statut <ArrowUpDownIcon data-icon="inline-end" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((alert) => (
              <TableRow key={alert.id} className="cursor-pointer hover:bg-muted/50">
                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">{alert.title}</span>
                    {alert.dish && (
                      <span className="text-xs text-muted-foreground">{alert.dish}</span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="max-w-xs">
                  <span className="line-clamp-2 text-xs text-muted-foreground">{alert.description}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn("text-xs", SEVERITY_STYLES[alert.severity])}>
                    {alert.severity}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    {alert.source === "app" ? (
                      <BotIcon className="size-3.5 text-muted-foreground" />
                    ) : (
                      <UserIcon className="size-3.5 text-muted-foreground" />
                    )}
                    <span className="text-xs capitalize text-muted-foreground">{alert.source}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    {CATEGORY_LABELS[alert.category]}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{alert.duration}</TableCell>
                <TableCell>
                  {alert.status === "résolue" ? (
                    <div className="flex items-center gap-1 text-xs text-emerald-600">
                      <CheckIcon className="size-3.5" />
                      Résolue
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">Ouverte</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="py-10 text-center text-sm text-muted-foreground">
                  Aucune alerte pour ces filtres.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
