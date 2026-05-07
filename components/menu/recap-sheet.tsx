"use client"

import { X, Trash2, Mail, CalendarCheck, HelpCircle, AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"
import { useCart } from "@/lib/cart-context"
import { AllergenBadge } from "./allergen-badge"
import { DietBadge } from "./diet-badge"
import { ReservationCalendar } from "./reservation-calendar"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Language, Allergen, Diet } from "@/lib/types"
import { disclaimerTranslations } from "@/lib/data/translations"
import { PARTNER_IDS } from "@/lib/restaurants"

type Step = "recap" | "calendar" | "done"

interface RecapSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  language: Language
  restaurantId: string
}

const DAY_LABELS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
const MONTH_LABELS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
]

function formatReservation(d: Date) {
  const time = `${d.getHours().toString().padStart(2, "0")}h${d.getMinutes().toString().padStart(2, "0")}`
  return `${DAY_LABELS[d.getDay()]} ${d.getDate()} ${MONTH_LABELS[d.getMonth()]} à ${time}`
}

async function sendLead(payload: {
  email: string
  restaurant: string
  dishes: string
  allergies: string
  diets: string
  reservationTime: string
}) {
  await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}

export function RecapSheet({ open, onOpenChange, language, restaurantId }: RecapSheetProps) {
  const { items, removeItem, clearCart } = useCart()
  const [email, setEmail] = useState("")
  const [emailTouched, setEmailTouched] = useState(false)
  const [step, setStep] = useState<Step>("recap")
  const [reservedAt, setReservedAt] = useState<Date | null>(null)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const isPartner = PARTNER_IDS.has(restaurantId)
  const td = disclaimerTranslations[language]

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep("recap")
        setReservedAt(null)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [open])

  const total = items.reduce((sum, i) => sum + i.totalPrice, 0)

  const presentAllergens: Allergen[] = Array.from(
    new Set(items.flatMap((i) => i.allergens))
  )

  const compatibleDiets: Diet[] =
    items.length === 0
      ? []
      : (items[0].diets.filter((d) => items.every((i) => i.diets.includes(d))) as Diet[])

  const macroTotals = items.reduce(
    (acc, i) => ({
      calories: acc.calories + i.macros.calories,
      proteines: acc.proteines + i.macros.proteines,
      glucides: acc.glucides + i.macros.glucides,
      lipides: acc.lipides + i.macros.lipides,
    }),
    { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
  )

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const emailError = emailTouched && email.trim() !== "" && !isValidEmail(email)
  const emailEmpty = email.trim() === ""

  const formatPrice = (price: number) =>
    price.toLocaleString(language === "en" ? "en-GB" : language, {
      style: "currency",
      currency: "EUR",
    })

  return (
    <>
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="flex flex-col rounded-t-2xl px-0 pb-0 max-h-[88svh] sm:max-h-[80svh] sm:mx-auto sm:max-w-lg"
        showCloseButton={false}
      >
        {step === "calendar" && (
          <ReservationCalendar
            onBack={() => setStep("recap")}
            onConfirm={(d) => {
              void sendLead({ email, restaurant: restaurantId, dishes: "", allergies: "", diets: "", reservationTime: formatReservation(d) })
              setReservedAt(d)
              setStep("done")
            }}
          />
        )}

        {step === "done" && reservedAt && (
          <>
            <SheetHeader className="flex-row items-center justify-between px-5 pb-3 pt-4 border-b border-border">
              <SheetTitle className="text-base font-semibold">Réservation confirmée</SheetTitle>
              <button
                onClick={() => onOpenChange(false)}
                className="flex size-7 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X size={14} />
              </button>
            </SheetHeader>

            <div className="flex-1 min-h-0 overflow-y-auto px-5 py-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CalendarCheck size={32} />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-foreground">
                    {formatReservation(reservedAt)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Un récapitulatif vient d&apos;être envoyé à{" "}
                    <span className="font-medium text-foreground">{email}</span>.
                  </p>
                </div>
                <div className="mt-2 w-full rounded-xl border border-dashed border-border bg-secondary/40 p-4 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Total
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {items.length} plat{items.length > 1 ? "s" : ""}
                    </span>
                    <span className="font-bold tabular-nums text-foreground">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-background px-5 pb-6 pt-4">
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  clearCart()
                  onOpenChange(false)
                }}
              >
                Terminer
              </Button>
            </div>
          </>
        )}

        {step === "recap" && (
          <>
            <SheetHeader className="flex-row items-center justify-between px-5 pb-3 pt-4 border-b border-border">
              <div className="flex items-center gap-2">
                <SheetTitle className="text-base font-semibold">Ma sélection</SheetTitle>
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-foreground tabular-nums">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="flex size-7 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X size={14} />
              </button>
            </SheetHeader>

            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="px-5 py-4 space-y-5">
                <div className="rounded-xl border border-dashed border-border bg-secondary/40 p-4 font-mono text-sm">
                  {items.length === 0 && (
                    <p className="text-center text-xs text-muted-foreground py-4">Aucun plat sélectionné</p>
                  )}

                  <div className="max-h-48 overflow-y-auto -mx-1 px-1">
                    {items.map((item, idx) => (
                      <div key={item.id}>
                        {idx > 0 && <div className="my-2 border-t border-dashed border-border/50" />}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-foreground leading-snug">{item.name}</span>
                            {item.variant && (
                              <div className="text-xs text-muted-foreground mt-0.5 pl-2">
                                → {item.variant.name}
                                {item.variant.priceOffset !== 0 && (
                                  <span className="ml-1 opacity-70">
                                    ({item.variant.priceOffset > 0 ? "+" : ""}{item.variant.priceOffset.toFixed(2).replace(".", ",")}€)
                                  </span>
                                )}
                              </div>
                            )}
                            {item.supplements.map((s) => (
                              <div key={s.id} className="text-xs text-muted-foreground pl-2">
                                + {s.name} <span className="opacity-70">+{s.price.toFixed(2).replace(".", ",")}€</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="tabular-nums font-semibold text-foreground">
                              {formatPrice(item.totalPrice)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex size-5 items-center justify-center rounded-full text-muted-foreground hover:text-destructive transition-colors"
                              aria-label="Retirer"
                            >
                              <X size={11} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {items.length > 0 && (
                    <>
                      <div className="my-3 border-t-2 border-dashed border-border" />
                      <div className="flex justify-between text-base font-bold text-foreground">
                        <span>TOTAL | À PAYER SUR PLACE</span>
                        <span className="tabular-nums">{formatPrice(total)}</span>
                      </div>
                    </>
                  )}
                </div>

                {presentAllergens.length > 0 && (
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Allergènes présents
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {presentAllergens.map((a) => (
                        <AllergenBadge key={a} allergen={a} language={language} restaurantId={restaurantId} />
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Régimes compatibles
                  </p>
                  {compatibleDiets.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {compatibleDiets.map((d) => (
                        <DietBadge key={d} diet={d} language={language} restaurantId={restaurantId} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      {items.length === 0 ? "—" : "Aucun régime commun à tous les plats"}
                    </p>
                  )}
                </div>

                {items.length > 0 && (
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Macros totaux
                    </p>
                    <div className="flex gap-1.5">
                      {[
                        { value: macroTotals.calories, label: "kcal" },
                        { value: `${macroTotals.proteines}g`, label: "prot" },
                        { value: `${macroTotals.glucides}g`, label: "gluc" },
                        { value: `${macroTotals.lipides}g`, label: "lip" },
                      ].map(({ value, label }) => (
                        <div
                          key={label}
                          className="flex flex-1 flex-col items-center rounded-lg bg-secondary px-2 py-2"
                        >
                          <span className="text-sm font-semibold tabular-nums leading-none text-foreground">
                            {value}
                          </span>
                          <span className="mt-1 text-[10px] leading-none text-muted-foreground">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="h-2" />
              </div>
            </div>

            <div className="border-t border-border bg-background px-5 pb-6 pt-4 space-y-3">
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="email-pour@confirmation.com"
                  className={`w-full rounded-lg border bg-secondary pl-8 pr-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${emailError ? "border-destructive focus:ring-destructive/40" : "border-border focus:ring-primary/40"}`}
                />
                {emailError && (
                  <p className="mt-1 text-[11px] text-destructive">Adresse email invalide</p>
                )}
              </div>
              <Button
                className="w-full"
                size="lg"
                disabled={items.length === 0 || emailEmpty || !isValidEmail(email)}
                onClick={() => {
                  void sendLead({
                    email,
                    restaurant: restaurantId,
                    dishes: items.map((i) => i.name).join(", "),
                    allergies: presentAllergens.join(", ") || "none",
                    diets: compatibleDiets.join(", ") || "none",
                    reservationTime: "pending",
                  })
                  setStep("calendar")
                }}
              >
                Réserver
              </Button>
              {!isPartner && (
                <button
                  onClick={() => setShowDisclaimer(true)}
                  className="flex w-full items-center justify-center gap-1 text-[11px] font-medium text-orange-600 transition-colors hover:underline dark:text-orange-400"
                >
                  <HelpCircle size={11} />
                  Données estimées — pensez à vérifier auprès de l&apos;établissement si vous ne réservez pas via Picky Friendly
                </button>
              )}
              <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                Picky Friendly vérifiera que les plats sont compatibles avec vos allergies / régime.
                Si tout est compatible, vous aurez une confirmation de la réservation,
                sinon vous aurez des propositions de modifications.
              </p>
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="flex w-full items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 size={11} />
                  Vider la sélection
                </button>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>

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
    </>
  )
}
