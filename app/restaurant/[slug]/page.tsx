import type { Metadata } from "next"
import { MenuPage } from "@/components/menu/menu-page"
import { restaurants } from "@/lib/restaurants"
import type { Allergen, Diet } from "@/lib/types"

const DIET_LABELS: Record<Diet, string> = {
  "sans-gluten": "sans gluten",
  vegan: "vegan",
  vegetarien: "végétarien",
  halal: "halal",
  casher: "casher",
  "sans-lactose": "sans lactose",
}

const ALLERGEN_LABELS: Record<Allergen, string> = {
  gluten: "gluten",
  crustaces: "crustacés",
  oeufs: "œufs",
  poissons: "poissons",
  arachides: "arachides",
  soja: "soja",
  lait: "lait",
  "fruits-a-coque": "fruits à coque",
  celeri: "céleri",
  moutarde: "moutarde",
  sesame: "sésame",
  so2: "sulfites",
  lupin: "lupin",
  mollusques: "mollusques",
}

function getArrondissement(address?: string): string | null {
  if (!address) return null
  const match = address.match(/750(\d{2})/)
  if (!match) return null
  const num = parseInt(match[1], 10)
  return num === 1 ? "1er" : `${num}e`
}

export async function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const restaurant = restaurants.find((r) => r.id === slug)
  if (!restaurant) return {}

  const arr = getArrondissement(restaurant.address)
  const location = arr ? `Paris ${arr}` : "Paris"

  const activeDiets = (Object.entries(restaurant.tags.dietary) as [Diet, boolean][])
    .filter(([, v]) => v)
    .map(([k]) => DIET_LABELS[k])

  const allergenList = restaurant.tags.allergens
    .map((a) => ALLERGEN_LABELS[a])
    .join(", ")

  const dietSuffix = activeDiets.length > 0 ? ` — ${activeDiets.join(", ")}` : ""
  const title = `${restaurant.name}${dietSuffix} | Menu avec allergènes | ${location}`

  const dietDesc =
    activeDiets.length > 0
      ? `Options disponibles : ${activeDiets.join(", ")}. `
      : ""
  const allergenDesc = allergenList
    ? `Allergènes présents : ${allergenList}. `
    : ""
  const description = `${restaurant.name} à ${restaurant.address ?? location}. ${dietDesc}${allergenDesc}Consultez le menu complet avec filtres allergènes et régimes alimentaires sur Picky.`

  return {
    title,
    description,
    keywords: [
      `${restaurant.name} menu`,
      `${restaurant.name} allergènes`,
      ...activeDiets.map((d) => `restaurant ${d} ${location}`),
      `restaurant allergie-friendly ${location}`,
      `menu sans allergènes ${location}`,
    ],
    openGraph: {
      title,
      description,
      images: restaurant.photos?.[0] ? [{ url: restaurant.photos[0] }] : [],
      locale: "fr_FR",
      type: "website",
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const restaurant = restaurants.find((r) => r.id === slug)

  const jsonLd = restaurant
    ? {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: restaurant.name,
        address: restaurant.address
          ? {
              "@type": "PostalAddress",
              streetAddress: restaurant.address.split(",")[0]?.trim(),
              addressLocality: "Paris",
              addressCountry: "FR",
            }
          : undefined,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: restaurant.rating,
          reviewCount: restaurant.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        review: restaurant.reviews?.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewRating: { "@type": "Rating", ratingValue: r.rating },
          reviewBody: r.text,
          datePublished: r.date,
        })),
        url: restaurant.socials?.website,
        hasMenu: restaurant.socials?.menu,
        image: restaurant.photos?.[0],
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <MenuPage restaurantId={slug} />
    </>
  )
}
