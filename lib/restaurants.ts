import type { Restaurant } from "@/lib/types"

export const PARTNER_IDS = new Set<string>([])

export const restaurants: Restaurant[] = [
  {
    id: "judy",
    name: "Judy",
    address: "14 Rue Jean-Jacques Rousseau, 75001 Paris",
    coordinates: [2.3405578, 48.8623524],
    rating: 4.5,
    reviewCount: 2224,
    photos: [
      "https://imgs.search.brave.com/6uZBneo-ZAs4JeCuXFU0Jns-ba-G64ogI8zJ77msF4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZWNh/dXNlLWd1cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTIvSnVkeS5qcGc",
      "https://imgs.search.brave.com/JrJhcvyUBeH0E2uf8jIV80PRt46Dtnc-F1Fc-FeqnZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL1lPZGNHeUYt/ajFNZ3pUVEFqclJw/UWcvbC5qcGc",
    ],
    reviews: [
      {
        author: "Marie L.",
        rating: 5,
        text: "Excellent rapport qualité-prix, cadre magnifique près du Louvre.",
        date: "2025-03-12",
      },
      {
        author: "Thomas B.",
        rating: 4,
        text: "Bonne cuisine française, service rapide le midi.",
        date: "2025-02-28",
      },
    ],
    socials: {
      instagram: "judy_paris",
      website: "https://www.judy-paris.com/",
      menu: "https://www.judy-paris.com/_files/ugd/731ff6_9eae2f3852f144568360585c031551d4.pdf",
    },
    tags: {
      macronutrients: { energy: true, proteins: true, lipids: true, carbs: true },
      allergens: [],
      dietary: {
        vegan: true,
        vegetarien: true,
        "sans-gluten": true,
        "sans-lactose": true,
        halal: true,
        casher: true,
      },
    },
  },
    {
    id: "noglu",
    name: "Noglu",
    address: "15 Rue Basfroi, 75011 Paris, France",
    coordinates: [2.3796045, 48.8544251],
    rating: 4,
    reviewCount: 807,
    photos: [
      "/noglu/noglu1.jpg",
      "/noglu/noglu2.jpg",
      "/noglu/noglu3.jpg",
    ],
    reviews: [
      {
        author: "Marie L.",
        rating: 5,
        text: "Excellent rapport qualité-prix, cadre magnifique près du Louvre.",
        date: "2025-03-12",
      },
      {
        author: "Thomas B.",
        rating: 4,
        text: "Bonne cuisine française, service rapide le midi.",
        date: "2025-02-28",
      },
    ],
    socials: {
      instagram: "nogluparis",
      website: "https://www.noglu.fr/",
      menu: "https://cdn.shopify.com/s/files/1/0675/2763/9308/files/Copie_de_Copie_de_Menu_Basfroi.png?v=1748349877",
    },
    tags: {
      macronutrients: { energy: true, proteins: true, lipids: true, carbs: true },
      allergens: [],
      dietary: {
        vegan: true,
        vegetarien: true,
        "sans-gluten": true,
        "sans-lactose": true,
        halal: true,
        casher: true,
      },
    },
  },
]
