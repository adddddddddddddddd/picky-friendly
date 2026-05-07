'use client'

import { useState } from 'react'
import type { Language } from '@/lib/types'
import { uiTranslations, disclaimerTranslations } from '@/lib/data/translations'
import { Separator } from '@/components/ui/separator'
import { PARTNER_IDS } from '@/lib/restaurants'
import { HelpCircle, AlertTriangle, Flag, Send, CheckCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

const SEVERITY_OPTIONS = [
  { value: "faible", label: "Faible — information imprécise" },
  { value: "modérée", label: "Modérée — information incorrecte" },
  { value: "critique", label: "Critique — risque allergique" },
]

interface MenuHeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
  restaurantId: string
}

export function MenuHeader({ language, onLanguageChange, restaurantId }: MenuHeaderProps) {
  const t = uiTranslations[restaurantId][language]
  const isPartner = PARTNER_IDS.has(restaurantId)
  const td = disclaimerTranslations[language]
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [email, setEmail] = useState("")
  const [severity, setSeverity] = useState("")
  const [reason, setReason] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  function handleReportOpenChange(v: boolean) {
    setShowReport(v)
    if (!v) {
      setEmail("")
      setSeverity("")
      setReason("")
      setDone(false)
      setError("")
    }
  }

  async function handleSubmitReport(e: { preventDefault(): void }) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, restaurant: t.restaurantName, severity, reason }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
    } catch {
      setError("Une erreur est survenue. Réessaie.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <header className="bg-background/95 sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-lg font-bold tracking-tight sm:text-xl">{t.restaurantName}</h1>
            {!isPartner && (
              <button
                onClick={() => setShowDisclaimer(true)}
                className="flex items-center gap-1 rounded-full border border-orange-400/60 bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-orange-600 transition-colors hover:bg-orange-100 dark:bg-orange-950/40 dark:text-orange-400 dark:hover:bg-orange-950/70"
              >
                Données estimées — pensez à vérifier
                <HelpCircle size={10} />
              </button>
            )}
          </div>
          <p className="text-muted-foreground hidden text-xs sm:block">{t.tagline}</p>
        </div>
        <button
          onClick={() => setShowReport(true)}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Flag size={13} />
          Signaler
        </button>
      </div>
      <Separator />

      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="size-4 shrink-0 text-amber-500" />
              {td.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>{td.body1}</p>
            <p>{td.body2}</p>
            <p>{td.body3}</p>
            <p>{td.body4}</p>
          </div>
          <button
            onClick={() => setShowDisclaimer(false)}
            className="bg-foreground text-background hover:bg-foreground/90 mt-4 w-full rounded-xl px-6 py-3 text-sm font-medium transition-colors"
          >
            {td.confirm}
          </button>
        </DialogContent>
      </Dialog>

      <Dialog open={showReport} onOpenChange={handleReportOpenChange}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Flag className="size-4 shrink-0" />
              Signaler une erreur
            </DialogTitle>
            <DialogDescription>
              Une info incorrecte ou un allergène manquant ? Dis-nous, on corrige.
            </DialogDescription>
          </DialogHeader>
          {done ? (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <p className="font-medium">Signalement envoyé !</p>
              <p className="text-sm text-muted-foreground">
                Merci, on va vérifier ça au plus vite.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitReport} className="space-y-3">
              <div className="space-y-1.5">
                <label htmlFor="report-restaurant" className="text-sm font-medium">
                  Restaurant
                </label>
                <input
                  id="report-restaurant"
                  type="text"
                  readOnly
                  value={t.restaurantName}
                  className="w-full rounded-md border bg-muted px-3 py-2 text-sm text-muted-foreground"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="report-email" className="text-sm font-medium">
                  Ton email
                </label>
                <input
                  id="report-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="toi@exemple.com"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="report-severity" className="text-sm font-medium">
                  Gravité
                </label>
                <select
                  id="report-severity"
                  required
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                >
                  <option value="" disabled>Sélectionner…</option>
                  {SEVERITY_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="report-reason" className="text-sm font-medium">
                  Motif
                </label>
                <textarea
                  id="report-reason"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Ex : le plat X contient du gluten mais n'est pas signalé…"
                  rows={3}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background resize-none"
                />
              </div>
              {error && <p className="text-xs text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-1.5 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background hover:bg-foreground/90 disabled:opacity-60"
              >
                {loading ? "Envoi…" : "Envoyer le signalement"}
                {!loading && <Send className="h-3.5 w-3.5" />}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </header>
  )
}
