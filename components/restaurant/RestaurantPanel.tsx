"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X, Star, ArrowRight, Globe, MapPin, AlertTriangle, HelpCircle, Send, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import type { Allergen, Diet, Restaurant } from "@/lib/types"
import { AppBranding } from "@/components/AppBranding"

const ALLERGEN_LABELS: Record<Allergen, string> = {
  gluten: "Gluten",
  lait: "Lait",
  oeufs: "Œufs",
  arachides: "Arachides",
  'fruits-a-coque': "Fruits à coque",
  soja: "Soja",
  poissons: "Poissons",
  crustaces: "Crustacés",
  mollusques: "Mollusques",
  celeri: "Céleri",
  moutarde: "Moutarde",
  sesame: "Sésame",
  so2: "Sulfites",
  lupin: "Lupin",
}

const DIETARY_LABELS: Record<Diet, string> = {
  vegan: "Vegan",
  vegetarien: "Végétarien",
  "sans-gluten": "Sans gluten",
  "sans-lactose": "Sans lactose",
  halal: "Halal",
  casher: "Casher",
}

const MACRO_LABELS: Record<
  keyof Restaurant["tags"]["macronutrients"],
  string
> = {
  energy: "Énergie",
  proteins: "Protéines",
  lipids: "Lipides",
  carbs: "Glucides",
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          )}
        />
      ))}
    </span>
  )
}

function PartnershipButton({ restaurantName, restaurantAddress }: { restaurantName: string; restaurantAddress?: string }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (!emailValid) {
      setError("Adresse email invalide.")
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, restaurant: restaurantAddress ? `${restaurantName} — ${restaurantAddress}` : restaurantName }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
    } catch {
      setError("Une erreur est survenue. Réessaie.")
    } finally {
      setLoading(false)
    }
  }

  function handleOpenChange(v: boolean) {
    setOpen(v)
    if (!v) {
      setEmail("")
      setDone(false)
      setError("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="flex w-full items-center justify-center gap-1.5 rounded-md bg-amber-600 px-3 py-2 text-xs font-medium text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600">
          Demander à {restaurantName} d&apos;être partenaire
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Demande de partenariat</DialogTitle>
          <DialogDescription>
            Plus il y a d'utilisateurs qui demandent, plus il y a de chances que les restaurants rejoignent l&apos;aventure !
            On transmet la demande à {restaurantName}. Laisse ton email pour valider et être tenu au courant.
          </DialogDescription>
        </DialogHeader>
        {done ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <CheckCircle className="h-10 w-10 text-green-500" />
            <p className="font-medium">Demande envoyée !</p>
            <p className="text-sm text-muted-foreground">
              On te tiendra au courant dès que {restaurantName} devient partenaire.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="partnership-email" className="text-sm font-medium">
                Ton email
              </label>
              <input
                id="partnership-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="toi@exemple.com"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
            <button
              type="submit"
              disabled={loading || !emailValid}
              className="flex w-full items-center justify-center gap-1.5 rounded-md bg-amber-600 px-3 py-2 text-sm font-medium text-white hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-amber-500 dark:hover:bg-amber-600"
            >
              {loading ? "Envoi…" : "Envoyer la demande"}
              {!loading && <Send className="h-3.5 w-3.5" />}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

interface RestaurantPanelProps {
  restaurant: Restaurant | null
  onClose: () => void
}

export function RestaurantPanel({ restaurant, onClose }: RestaurantPanelProps) {
  const activeMacros = restaurant
    ? (
        Object.entries(restaurant.tags.macronutrients) as [
          keyof Restaurant["tags"]["macronutrients"],
          boolean,
        ][]
      ).filter(([, v]) => v)
    : []

  const activeDietary = restaurant
    ? (
        Object.entries(restaurant.tags.dietary) as [Diet, boolean][]
      ).filter(([, v]) => v)
    : []

  return (
    <Sheet modal={false} open={!!restaurant} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="left"
        showCloseButton={false}
        className="flex h-full w-96 flex-col gap-0 overflow-hidden p-0"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="border-b px-6 py-4">
          <AppBranding />
        </div>

        {restaurant && (
          <>
            <div className="border-b">
              <div className="flex items-start justify-between gap-3 px-6 py-4">
                <div className="min-w-0">
                  <SheetTitle className="font-heading text-lg font-semibold leading-snug">
                    {restaurant.name}
                  </SheetTitle>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <StarRating rating={restaurant.rating} />
                    <span>
                      {restaurant.rating.toFixed(1)} · {restaurant.reviewCount}{" "}
                      avis
                    </span>
                  </div>
                  {restaurant.address && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{restaurant.address}</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="mt-0.5 shrink-0 rounded-md p-1 hover:bg-muted"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {restaurant.photos.length > 0 && (
                <div className="flex gap-2 overflow-x-auto pb-4 pl-6 [scrollbar-width:none]">
                  {restaurant.photos.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt=""
                      width={224}
                      height={144}
                      className="h-36 w-56 shrink-0 rounded-lg object-cover"
                    />
                  ))}
                  <div className="w-6 shrink-0" />
                </div>
              )}
            </div>

            <div className="relative min-h-0 flex-1">
              <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-6 bg-linear-to-b from-background to-transparent" />
              <ScrollArea className="h-full">
              <div className="w-full min-w-0 space-y-5 pt-4 pb-6">
                <div className="w-full min-w-0 space-y-5 px-6">
                <Dialog>
                  <div className="rounded-lg border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950">
                    <div className="flex items-center justify-between gap-2 px-4 py-3">
                      <div className="flex min-w-0 items-center gap-2">
                        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                        <div>
                          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Non Partenaire</p>
                          <p className="text-xs text-amber-700 dark:text-amber-400">Les informations peuvent être erronées</p>
                        </div>
                      </div>
                      <DialogTrigger className="shrink-0 rounded-md p-1 text-amber-600 hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-900">
                        <HelpCircle className="h-4 w-4" />
                      </DialogTrigger>
                    </div>
                    <div className="border-t border-amber-200 px-4 pb-3 pt-2.5 dark:border-amber-800">
                      <PartnershipButton restaurantName={restaurant.name} restaurantAddress={restaurant.address} />
                    </div>
                  </div>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        Non Partenaire
                      </DialogTitle>
                      <DialogDescription>
                        Les informations peuvent être erronées
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 text-sm">
                      <p className="leading-relaxed text-muted-foreground">
                        Nous faisons de notre mieux, mais les macros, les allergènes et les régimes sont estimés uniquement via les{" "}
                        <a href={restaurant.socials?.menu ?? "#"} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                          informations disponibles en ligne
                        </a>
                        .
                      </p>
                      <p className="leading-relaxed text-muted-foreground">
                        Nous vérifions toujours la compatibilité des plats en contactant directement l&apos;établissement, en contrôlant la table allergènes des 14 allergènes européens et en évaluant les risques de cross-contamination pour votre sécurité.
                      </p>
                      <p className="leading-relaxed text-muted-foreground">
                        <strong className="text-foreground">Personnes hautement allergiques :</strong> Retenez que Picky Friendly est encore en phase de développement et n'est pas en mesure d'assurer l'exactitude des informations. Nous ne prenons pas la responsabilité des erreurs éventuelles.
                      </p>
                      <PartnershipButton restaurantName={restaurant.name} restaurantAddress={restaurant.address} />
                    </div>
                  </DialogContent>
                </Dialog>

                {activeMacros.length > 0 && (
                  <section>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Macronutriments affichés
                    </h3>
                    <p className="mb-2 text-xs text-muted-foreground">
                      Estimés à partir des ingrédients disponibles{" "}
                      <a href={restaurant.socials?.menu ?? "#"} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                        en ligne
                      </a>
                      {" "}uniquement
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeMacros.map(([key]) => (
                        <Badge key={key} variant="secondary">
                          {MACRO_LABELS[key]}
                        </Badge>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Allergènes présents dans tous les plats <br /> <b>Ne tient pas compte des risques de contamination croisée</b>
                  </h3>
                  <p className="mb-2 text-xs text-muted-foreground">
                    Estimés à partir des ingrédients disponibles{" "}
                    <a href={restaurant.socials?.menu ?? "#"} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                      en ligne
                    </a>
                    {" "}uniquement
                  </p>
                  {restaurant.tags.allergens.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {restaurant.tags.allergens.map((a) => (
                        <Badge
                          key={a}
                          variant="outline"
                          className="border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300"
                        >
                          {ALLERGEN_LABELS[a]}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Il n&apos;existe pas d&apos;allergènes présents dans tous les plats
                    </p>
                  )}
                </section>

                {activeDietary.length > 0 && (
                  <section>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Régimes compatibles
                    </h3>
                    <p className="mb-2 text-xs text-muted-foreground">
                      Estimés à partir des ingrédients disponibles{" "}
                      <a href={restaurant.socials?.menu ?? "#"} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                        en ligne
                      </a>
                      {" "}uniquement
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDietary.map(([key]) => (
                        <Badge
                          key={key}
                          variant="outline"
                          className="border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-300"
                        >
                          {DIETARY_LABELS[key]}
                        </Badge>
                      ))}
                    </div>
                  </section>
                )}
                {/* Je retire les avis pour cette v1 mais ça peut toujours être utile après */}
                {/* {restaurant.reviews.length > 0 && (
                  <section>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Avis
                    </h3>
                    <div className="space-y-4">
                      {restaurant.reviews.map((review, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <StarRating rating={review.rating} />
                              <span className="text-sm font-medium">
                                {review.author}
                              </span>
                            </div>
                            <span className="shrink-0 text-xs text-muted-foreground">
                              {new Date(review.date).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            &ldquo;{review.text}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )} */}
                </div>
              </div>
              </ScrollArea>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-8 bg-linear-to-t from-background to-transparent" />
            </div>

            {restaurant.socials && Object.values(restaurant.socials).some(Boolean) && (
              <div className="border-t px-6 py-4">
                <div className="flex items-center gap-2">
                  {restaurant.socials.instagram && (
                    <a
                      href={`https://instagram.com/${restaurant.socials.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {restaurant.socials.tiktok && (
                    <a
                      href={`https://tiktok.com/@${restaurant.socials.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  )}
                  {restaurant.socials.website && (
                    <a
                      href={restaurant.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Site web"
                      className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="border-t px-6 py-4">
              <Link
                href={`/restaurant/${restaurant.id}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Voir ma carte personnalisée
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
