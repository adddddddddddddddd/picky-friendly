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
      {
    id: "thaisil",
    name: "Thaisil",
    address: "3 Rue du Nil, 75002 Paris, France",
    coordinates: [2.3480470, 48.8677677],
    rating: 4.5,
    reviewCount: 485,
    photos: [
      "/thaisil/thaisil1.avif",
      "/thaisil/thaisil2.avif",
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
      instagram: "thaisil_glutenfree",
      website: "https://www.thaisil.com/",
      menu: "https://www.thaisil.com/_files/ugd/759b42_cc0842ab25144a9ea9fc5f81cfdb9e1d.pdf",
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
    id: "cafe-mareva",
    name: "Café Mareva",
    address: "27 Rue de Clignancourt, 75018 Paris, France",
    coordinates: [2.3471914, 48.885559],
    rating: 4.5,
    reviewCount: 780,
    photos: [
      "/cafe-mareva/cafe-mareva1.webp",
      "/cafe-mareva/cafe-mareva2.webp",
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
      instagram: "cafemareva",
      website: "https://www.cafemareva.com/",
      menu: "https://www.cafemareva.com/menu",
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
    id: "su-misura",
    name: "Su Misura",
    address: "22 Av. Rapp, 75007 Paris, France",
    coordinates: [2.3003728, 48.8591352],
    rating: 4.6,
    reviewCount: 1461,
    photos: [
      "/su-misura/su-misura1.webp",
      "/su-misura/su-misura2.webp",
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
      instagram: "sumisurabyciro",
      website: "https://byciro.com/index.php/fr/nos-restaurants/su-misura/",
      menu: "https://byciro.com/index.php/fr/antipasti-su-misura",
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
  //         {
  //   id: "la-sajerie",
  //   name: "La Sajerie",
  //   address: "20 Rue d'Abbeville, 75009 Paris, France",
  //   coordinates: [2.3490871, 48.8793356],
  //   rating: 4.9,
  //   reviewCount: 614,
  //   photos: [
  //     "/la-sajerie/la-sajerie1.jpg",
  //     "/la-sajerie/la-sajerie2.jpg",
  //   ],
  //   reviews: [
  //     {
  //       author: "Marie L.",
  //       rating: 5,
  //       text: "Excellent rapport qualité-prix, cadre magnifique près du Louvre.",
  //       date: "2025-03-12",
  //     },
  //     {
  //       author: "Thomas B.",
  //       rating: 4,
  //       text: "Bonne cuisine française, service rapide le midi.",
  //       date: "2025-02-28",
  //     },
  //   ],
  //   socials: {
  //     instagram: "lasajerie",
  //     website: "https://lasajerie.com/",
  //     menu: "https://lasajerie.com/",
  //   },
  //   tags: {
  //     macronutrients: { energy: true, proteins: true, lipids: true, carbs: true },
  //     allergens: [],
  //     dietary: {
  //       vegan: true,
  //       vegetarien: true,
  //       "sans-gluten": true,
  //       "sans-lactose": true,
  //       halal: true,
  //       casher: true,
  //     },
  //   },
  // },
  //         {
  //   id: "the-friendly-kitchen",
  //   name: "The Friendly Kitchen",
  //   address: "8 Rue Popincourt, 75011 Paris, France",
  //   coordinates: [2.37762, 48.8572249],
  //   rating: 4.5,
  //   reviewCount: 780,
  //   photos: [
  //     "/cafe-mareva/cafe-mareva1.webp",
  //     "/cafe-mareva/cafe-mareva2.webp",
  //   ],
  //   reviews: [
  //     {
  //       author: "Marie L.",
  //       rating: 5,
  //       text: "Excellent rapport qualité-prix, cadre magnifique près du Louvre.",
  //       date: "2025-03-12",
  //     },
  //     {
  //       author: "Thomas B.",
  //       rating: 4,
  //       text: "Bonne cuisine française, service rapide le midi.",
  //       date: "2025-02-28",
  //     },
  //   ],
  //   socials: {
  //     instagram: "thefriendlykitchen",
  //     website: "https://www.the-friendly-kitchen.com/",
  //     menu: "https://www.the-friendly-kitchen.com/menus-carte/#menu-447440/",
  //   },
  //   tags: {
  //     macronutrients: { energy: true, proteins: true, lipids: true, carbs: true },
  //     allergens: [],
  //     dietary: {
  //       vegan: true,
  //       vegetarien: true,
  //       "sans-gluten": true,
  //       "sans-lactose": true,
  //       halal: true,
  //       casher: true,
  //     },
  //   },
  // },
  //           {
  //   id: "riz-riz",
  //   name: "Riz Riz",
  //   address: "221 Rue Saint-Martin, 75003 Paris",
  //   coordinates: [2.3528279, 48.8642661],
  //   rating: 4.6,
  //   reviewCount: 1558,
  //   photos: [
  //     "/cafe-mareva/cafe-mareva1.webp",
  //     "/cafe-mareva/cafe-mareva2.webp",
  //   ],
  //   reviews: [
  //     {
  //       author: "Marie L.",
  //       rating: 5,
  //       text: "Excellent rapport qualité-prix, cadre magnifique près du Louvre.",
  //       date: "2025-03-12",
  //     },
  //     {
  //       author: "Thomas B.",
  //       rating: 4,
  //       text: "Bonne cuisine française, service rapide le midi.",
  //       date: "2025-02-28",
  //     },
  //   ],
  //   socials: {
  //     instagram: "rizriz_restaurant",
  //     website: "https://www.riz-riz.com/",
  //     menu: "https://www.riz-riz.com/menu",
  //   },
  //   tags: {
  //     macronutrients: { energy: true, proteins: true, lipids: true, carbs: true },
  //     allergens: [],
  //     dietary: {
  //       vegan: true,
  //       vegetarien: true,
  //       "sans-gluten": true,
  //       "sans-lactose": true,
  //       halal: true,
  //       casher: true,
  //     },
  //   },
  // },
              {
    id: "tasca",
    name: "Tasca",
    address: "46 Av. de Suffren, 75015 Paris, France",
    coordinates: [2.2966014, 48.8537008],
    rating: 4.2,
    reviewCount: 2421,
    photos: [
      "/tasca/tasca1.webp",
      "/tasca/tasca2.webp",
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
      instagram: "tascabyciro",
      website: "https://byciro.com/index.php/fr/nos-restaurants/tasca/",
      menu: "https://byciro.com/index.php/fr/antipasti-tasca",
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
