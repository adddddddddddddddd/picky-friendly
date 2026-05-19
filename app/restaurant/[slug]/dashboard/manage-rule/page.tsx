"use client"

import { useState } from "react"
import {
  Plus,
  Trash2,
  Printer,
  Pencil,
  UtensilsCrossed,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { Allergen } from "@/lib/types"
import { AllergenBadge } from "@/components/menu/allergen-badge"

// ─── Constants ────────────────────────────────────────────────────────────────

const ALL_ALLERGENS: Allergen[] = [
  "gluten", "crustaces", "oeufs", "poissons", "arachides", "soja", "lait",
  "fruits-a-coque", "celeri", "moutarde", "sesame", "so2", "lupin", "mollusques",
]

// ─── Types ────────────────────────────────────────────────────────────────────

interface KitchenRule {
  id: string
  utensil: string
  allergens: Allergen[]
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AllergenPill({
  allergen,
  selected,
  onClick,
}: {
  allergen: Allergen
  selected?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "transition-opacity",
        !selected && "opacity-30 hover:opacity-60",
        onClick ? "cursor-pointer" : "cursor-default"
      )}
    >
      <AllergenBadge allergen={allergen} language="fr" restaurantId="judy" />
    </button>
  )
}

function RuleCard({
  rule,
  onEdit,
  onDelete,
}: {
  rule: KitchenRule
  onEdit: () => void
  onDelete: () => void
}) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm print:shadow-none print:border-border/50">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <UtensilsCrossed size={16} />
          </div>
          <span className="font-semibold">{rule.utensil}</span>
        </div>
        <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100 print:hidden">
          <Button variant="ghost" size="icon" className="size-7" onClick={onEdit}>
            <Pencil size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-7 text-destructive hover:text-destructive"
            onClick={onDelete}
          >
            <Trash2 size={14} />
          </Button>
        </div>
      </div>

      {rule.allergens.length === 0 ? (
        <p className="text-xs text-muted-foreground italic">Aucun allergène sélectionné</p>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {rule.allergens.map((a) => (
            <AllergenPill key={a} allergen={a} selected />
          ))}
        </div>
      )}
    </div>
  )
}

function AllergenSelector({
  selected,
  onChange,
}: {
  selected: Allergen[]
  onChange: (allergens: Allergen[]) => void
}) {
  function toggle(allergen: Allergen) {
    onChange(
      selected.includes(allergen)
        ? selected.filter((a) => a !== allergen)
        : [...selected, allergen]
    )
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {ALL_ALLERGENS.map((a) => (
        <AllergenPill
          key={a}
          allergen={a}
          selected={selected.includes(a)}
          onClick={() => toggle(a)}
        />
      ))}
    </div>
  )
}

// ─── Rule Dialog ──────────────────────────────────────────────────────────────

function RuleDialog({
  open,
  onOpenChange,
  initial,
  onSave,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  initial?: KitchenRule
  onSave: (utensil: string, allergens: Allergen[]) => void
}) {
  const [utensil, setUtensil] = useState(initial?.utensil ?? "")
  const [allergens, setAllergens] = useState<Allergen[]>(initial?.allergens ?? [])

  function handleSave() {
    if (!utensil.trim()) return
    onSave(utensil.trim(), allergens)
    setUtensil("")
    setAllergens([])
  }

  // Reset when dialog reopens with new initial values
  function handleOpenChange(v: boolean) {
    if (v) {
      setUtensil(initial?.utensil ?? "")
      setAllergens(initial?.allergens ?? [])
    }
    onOpenChange(v)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {initial ? "Modifier la règle" : "Nouvelle règle de cuisine"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5 py-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Ustensile / équipement</label>
            <Input
              placeholder="ex. Poêle, Couteau à viande, Planche bleue…"
              value={utensil}
              onChange={(e) => setUtensil(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Allergènes en contact</label>
              {allergens.length > 0 && (
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
                  onClick={() => setAllergens([])}
                >
                  Tout décocher
                </button>
              )}
            </div>
            <AllergenSelector selected={allergens} onChange={setAllergens} />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button onClick={handleSave} disabled={!utensil.trim()}>
            <Check data-icon="inline-start" />
            {initial ? "Enregistrer" : "Ajouter"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const INITIAL_RULES: KitchenRule[] = [
  {
    id: "1",
    utensil: "Poêle noire",
    allergens: ["gluten", "lait"],
  },
  {
    id: "2",
    utensil: "Couteau à poisson",
    allergens: ["poissons", "mollusques", "crustaces"],
  },
  {
    id: "3",
    utensil: "Planche rouge (viande)",
    allergens: [],
  },
]

export default function ManageRulePage() {
  const [rules, setRules] = useState<KitchenRule[]>(INITIAL_RULES)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingRule, setEditingRule] = useState<KitchenRule | undefined>()

  function handleAdd(utensil: string, allergens: Allergen[]) {
    setRules((prev) => [
      ...prev,
      { id: crypto.randomUUID(), utensil, allergens },
    ])
    setDialogOpen(false)
  }

  function handleEdit(utensil: string, allergens: Allergen[]) {
    setRules((prev) =>
      prev.map((r) =>
        r.id === editingRule?.id ? { ...r, utensil, allergens } : r
      )
    )
    setEditingRule(undefined)
  }

  function handleDelete(id: string) {
    setRules((prev) => prev.filter((r) => r.id !== id))
  }

  const touchedAllergens = [...new Set(rules.flatMap((r) => r.allergens))]

  return (
    <>
      {/* Page header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold">Règles de cuisine</h1>
          <p className="text-sm text-muted-foreground">
            Gérez les contaminations croisées par ustensile
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer data-icon="inline-start" />
            Imprimer
          </Button>
          <Button size="sm" onClick={() => setDialogOpen(true)}>
            <Plus data-icon="inline-start" />
            Ajouter
          </Button>
        </div>
      </div>

      {/* Allergen summary banner */}
      {touchedAllergens.length > 0 && (
        <div className="rounded-xl border bg-muted/30 px-4 py-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Allergènes présents en cuisine
          </p>
          <div className="flex flex-wrap gap-1.5">
            {touchedAllergens.map((a) => (
              <AllergenPill key={a} allergen={a} selected />
            ))}
          </div>
        </div>
      )}

      <Separator />

      {/* Rules grid */}
      {rules.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-16">
          <UtensilsCrossed size={32} className="text-muted-foreground/50" />
          <div className="text-center">
            <p className="font-medium">Aucune règle définie</p>
            <p className="text-sm text-muted-foreground">
              Ajoutez un ustensile pour définir ses contacts allergènes
            </p>
          </div>
          <Button size="sm" onClick={() => setDialogOpen(true)}>
            <Plus data-icon="inline-start" />
            Ajouter une règle
          </Button>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <RuleCard
              key={rule.id}
              rule={rule}
              onEdit={() => setEditingRule(rule)}
              onDelete={() => handleDelete(rule.id)}
            />
          ))}
          {/* Add card */}
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="print:hidden flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted/30 hover:text-foreground"
          >
            <Plus size={20} />
            <span className="text-sm font-medium">Nouvel ustensile</span>
          </button>
        </div>
      )}

      {/* Add dialog */}
      <RuleDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleAdd}
      />

      {/* Edit dialog */}
      <RuleDialog
        open={!!editingRule}
        onOpenChange={(v) => !v && setEditingRule(undefined)}
        initial={editingRule}
        onSave={handleEdit}
      />
    </>
  )
}
