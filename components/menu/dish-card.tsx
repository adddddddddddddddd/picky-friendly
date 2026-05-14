"use client"

import { useState } from "react"
import Image from "next/image"
import type { MenuItem, Language } from "@/lib/types"
import { AllergenBadge } from "./allergen-badge"
import { DietBadge } from "./diet-badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check, Plus, ListPlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

type MockVariant = { name: string; priceOffset: number; image?: string }
type MockSupplement = { id: string; name: string; price: number }
type MockConfig = { variants?: MockVariant[]; supplements?: MockSupplement[] }

const JUDY_COFFEE_SUPPLEMENTS: MockSupplement[] = [
  { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
  { id: "collagene", name: "Collagène marin", price: 2 },
]

const JUDY_LATTE_SUPPLEMENTS: MockSupplement[] = [
  { id: "lait-amande", name: "Lait d'amande maison", price: 0.5 },
  { id: "collagene", name: "Collagène marin", price: 2 },
  { id: "champignon-immunite", name: "Champignon médicinal – Immunité", price: 2 },
  { id: "champignon-concentration", name: "Champignon médicinal – Concentration", price: 2 },
  { id: "champignon-detente", name: "Champignon médicinal – Détente", price: 2 },
]

const JUDY_BRUNCH_SUPPLEMENTS: MockSupplement[] = [
  { id: "poulet-francais", name: "Poulet français Poulardes Saint-Martory", price: 5 },
  { id: "legume-fermentes", name: "Légumes fermentés", price: 2 },
  { id: "bacon", name: "Bacon français Maison Montalet", price: 3 },
  { id: "halloumi", name: "Halloumi", price: 3 },
  { id: "saumon-fume", name: "Saumon fumé de l'Atlantique", price: 6 },
  { id: "oeuf-poche", name: "Œuf poché", price: 2 },
  { id: "bouillon-soupe", name: "Bouillon / Soupe du jour — Vegan", price: 7 },
]

const HOT_COLD_VARIANTS: MockVariant[] = [
  { name: "Chaud", priceOffset: 0 },
  { name: "Glacé", priceOffset: 0 },
]

const THAISIL_RIZ_SUPPLEMENTS: MockSupplement[] = [
  { id: "riz-jasmin", name: "Riz jasmin", price: 4 },
  { id: "riz-saute-legumes", name: "Riz sauté aux légumes", price: 8 },
]

const THAISIL_PORTION_SUPPLEMENT: MockSupplement[] = [
  { id: "plus-portion", name: "Plus de portion", price: 6.50 },
]

const MAREVA_SUPPLEMENTS_GAUFRES_SALEES: MockSupplement[] = [
  { id: "guacamole-maison", name: "Guacamole maison", price: 4.00 },
  { id: "bacon",            name: "Bacon",            price: 4.00 },
  { id: "saumon-fume",      name: "Saumon fumé",      price: 4.00 },
];

const MAREVA_SUPPLEMENTS_TOASTS_SALES: MockSupplement[] = [
  { id: "bacon",       name: "Bacon",       price: 4.00 },
  { id: "saumon-fume", name: "Saumon fumé", price: 4.00 },
];

const MAREVA_SUPPLEMENTS_GAUFRE_SUCREE: MockSupplement[] = [
  { id: "sucre-glace",                 name: "Sucre glace",                  price: 0.00 },
  { id: "chocolat-55",                 name: "Chocolat 55%",                 price: 1.00 },
  { id: "beurre-de-cacahuete",         name: "Beurre de cacahuète",          price: 2.00 },
  { id: "praline-maison",              name: "Praliné maison",               price: 2.00 },
  { id: "caramel-beurre-sale",         name: "Caramel beurre salé maison",   price: 2.00 },
  { id: "banane",                      name: "Banane",                       price: 2.00 },
  { id: "fruits-de-saison",            name: "Fruits de saison",             price: 3.00 },
  { id: "amandes-hachees-caramelisees",name: "Amandes hachées caramélisées", price: 1.50 },
  { id: "chantilly-vegan",             name: "Crème chantilly vegan maison", price: 1.50 },
  { id: "sirop-erable",                name: "Sirop d'érable",               price: 2.00 },
];

const MAREVA_SUPPLEMENTS_SMOOTHIE_BOWLS: MockSupplement[] = [
  { id: "beurre-de-cacahuete-maison", name: "Beurre de cacahuète maison", price: 2.00 },
];

const MAREVA_SUPPLEMENTS_GLOBAUX: MockSupplement[] = [
  { id: "guacamole-maison",      name: "Guacamole maison",               price: 4.00 },
  { id: "bacon",                 name: "Bacon",                          price: 4.00 },
  { id: "filet-poulet-frit",     name: "Filet poulet frit",              price: 4.00 },
  { id: "saumon-fume",           name: "Saumon fumé",                    price: 4.00 },
  { id: "oeufs-plat-brouilles",  name: "2 œufs au plat ou brouillés",   price: 3.00 },
  { id: "bol-de-fruits",         name: "Bol de fruits",                  price: 4.00 },
];

const LASAJERIE_SUPPLEMENTS_HALLOUMI_LABNEH = [
  { id: "supplement-halloumi", name: "Fromage Halloumi", price: 2.00 },
  { id: "supplement-labneh",   name: "Labneh",           price: 2.00 }
]
// Used by: zaatar (explicitly listed on menu: "+ fromage halloumi 2€ / + labneh 2€")
 
const LASAJERIE_SUPPLEMENT_BANANE = [
  { id: "supplement-banane", name: "Banane", price: 1.00 }
]
// Used by: nutella (explicitly listed on menu: "+ banane 1€")
 
const LASAJERIE_SUPPLEMENT_SAUMON = [
  { id: "supplement-saumon-marine", name: "Saumon mariné à la betterave", price: 4.50 }
]

const TFK_WINE_FORMATS_SMALL: MockVariant[] = [
  // Used by wines sold in 12cl / 37cl(ish) / 75cl
  // priceOffset relative to the cheapest (12cl) glass
];
 
// Kir variants (vin blanc vs Royal/Prosecco)
const TFK_KIR_VARIANTS: MockVariant[] = [
  { name: "Kir (vin blanc)", priceOffset: 0 },
  { name: "Kir Royal (Prosecco)", priceOffset: 0 }, // same price, listed as variant
];
 
// Liqueur flavours — Granier digestif
const TFK_GRANIER_VARIANTS: MockVariant[] = [
  { name: "Menthe", priceOffset: 0 },
  { name: "Verveine", priceOffset: 0 },
  { name: "Gentiane", priceOffset: 0 },
];
 
// Kombucha flavours
const TFK_KOMBUCHA_VARIANTS: MockVariant[] = [
  { name: "Clémentine", priceOffset: 0 },
  { name: "Cassis", priceOffset: 0 },
];
 
// Potions Symples flavours
const TFK_POTIONS_VARIANTS: MockVariant[] = [
  { name: "Relax (verveine, cerise, lavande)", priceOffset: 0 },
  { name: "Détox (sauge, sureau, pomme)", priceOffset: 0 },
];
 
// ─────────────────────────────────────────────────────────────────────────────
// WINE VOLUME HELPERS
// Prices are base = 12cl (au verre). Variants for demi-bouteille and bouteille.
// ─────────────────────────────────────────────────────────────────────────────
 
// Pattern A: 14 / 34.50 / 69  (Granilites Chapoutier)
const TFK_WINE_VOLUMES_GRANILITES: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37,5 cl (demi)", priceOffset: 20.50 },
  { name: "75 cl (bouteille)", priceOffset: 55.00 },
];
 
// Pattern B: 11 / 26 / 52  (Bourgogne Aligoté)
const TFK_WINE_VOLUMES_ALIGOTE: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37,5 cl (demi)", priceOffset: 15.00 },
  { name: "75 cl (bouteille)", priceOffset: 41.00 },
];
 
// Pattern C: 7 / 18 / 36  (Haut Benauge)
const TFK_WINE_VOLUMES_HAUT_BENAUGE: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37,5 cl (demi)", priceOffset: 11.00 },
  { name: "75 cl (bouteille)", priceOffset: 29.00 },
];
 
// Pattern D: 8 / 20 / 40  (Cattin, Cuvée Lune)
const TFK_WINE_VOLUMES_8_20_40: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37,5 cl (demi)", priceOffset: 12.00 },
  { name: "75 cl (bouteille)", priceOffset: 32.00 },
];
 
// Pattern E: 9 / 22.50 / 45  (Sauvagine blanc, Canopée, Noirettes, Sauvagine rouge)
const TFK_WINE_VOLUMES_9_2250_45: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37 cl (demi)", priceOffset: 13.50 },
  { name: "75 cl (bouteille)", priceOffset: 36.00 },
];
 
// Pattern F: 11.50 / 27 / 54  (Vignes du Parc)
const TFK_WINE_VOLUMES_VIGNES_DU_PARC: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37,5 cl (demi)", priceOffset: 15.50 },
  { name: "75 cl (bouteille)", priceOffset: 42.50 },
];
 
// Pattern G: 8 / 20 / 40  (Tire Bouchon)
// → same as TFK_WINE_VOLUMES_8_20_40
 
// Pattern H: 7.50 / 18.50 / 37  (Camille rosé)
const TFK_WINE_VOLUMES_CAMILLE: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "37 cl (demi)", priceOffset: 11.00 },
  { name: "75 cl (bouteille)", priceOffset: 29.50 },
];
 
// Pattern I: 7 / 36  (Prosecco — no demi)
const TFK_WINE_VOLUMES_PROSECCO: MockVariant[] = [
  { name: "12 cl (verre)", priceOffset: 0 },
  { name: "75 cl (bouteille)", priceOffset: 29.00 },
];

const DESSERT_UPGRADE_SUPPLEMENT = [
  { id: "dessert-upgrade", name: "Substitution dessert au choix de la carte", price: 3.00 }
];

const MOCK_CONFIGS: Record<string, Record<string, MockConfig>> = {
  default: {
    "steak-frites": {
      variants: [
        { name: "Saignant", priceOffset: 0 },
        { name: "À point", priceOffset: 0 },
        { name: "Bien cuit", priceOffset: 0 },
      ],
      supplements: [
        { id: "poivre", name: "Sauce poivre", price: 1.5 },
        { id: "bearnaise", name: "Sauce béarnaise", price: 1.5 },
        { id: "foie-gras", name: "Foie gras", price: 5.0 },
      ],
    },
    "poulet-roti": {
      variants: [
        { name: "Demi", priceOffset: 0 },
        { name: "Entier", priceOffset: 10 },
      ],
      supplements: [
        { id: "jus", name: "Sauce au jus", price: 1.0 },
        { id: "gratin", name: "Gratin dauphinois", price: 3.5 },
      ],
    },
    "plateau-fromages": {
      variants: [
        { name: "3 fromages", priceOffset: -4 },
        { name: "5 fromages", priceOffset: 0 },
        { name: "7 fromages", priceOffset: 5 },
      ],
      supplements: [
        { id: "noix", name: "Noix fraîches", price: 1.0 },
        { id: "confiture", name: "Confiture de figues", price: 1.5 },
      ],
    },
    "jus-fruits": {
      variants: [
        { name: "Orange", priceOffset: 0 },
        { name: "Pomme-gingembre", priceOffset: 0 },
        { name: "Carotte-citron", priceOffset: 0 },
      ],
    },
    "vin-rouge": {
      variants: [
        { name: "Bordeaux", priceOffset: 0 },
        { name: "Bourgogne", priceOffset: 3 },
        { name: "Côtes du Rhône", priceOffset: 1 },
      ],
    },
    "tarte-tatin": {
      variants: [
        { name: "Classique", priceOffset: 0 },
        { name: "Aux poires", priceOffset: 1 },
        { name: "Aux amandes", priceOffset: 1.5 },
      ],
    },
    "salade-cesar": {
      supplements: [
        { id: "poulet", name: "Poulet grillé", price: 3.0 },
        { id: "crevettes", name: "Crevettes", price: 4.5 },
        { id: "anchois", name: "Anchois supplément", price: 2.0 },
      ],
    },
    "risotto-champignons": {
      supplements: [
        { id: "truffe", name: "Copeaux de truffe", price: 8.0 },
        { id: "parmesan", name: "Parmesan supplément", price: 1.5 },
        { id: "burrata", name: "Burrata", price: 4.0 },
      ],
    },
    ratatouille: {
      supplements: [
        { id: "oeuf", name: "Œuf poché", price: 1.5 },
        { id: "fromage", name: "Fromage de brebis", price: 2.0 },
        { id: "croutons", name: "Croûtons", price: 1.0 },
      ],
    },
  },

  judy: {
    "sesame-latte": { variants: HOT_COLD_VARIANTS, supplements: JUDY_LATTE_SUPPLEMENTS },
    "rose-latte": { variants: HOT_COLD_VARIANTS, supplements: JUDY_LATTE_SUPPLEMENTS },
    "matcha-latte": { variants: HOT_COLD_VARIANTS, supplements: JUDY_LATTE_SUPPLEMENTS },
    "golden-mylk": { variants: HOT_COLD_VARIANTS, supplements: JUDY_LATTE_SUPPLEMENTS },
    "chai-latte": { supplements: JUDY_LATTE_SUPPLEMENTS },
    "spicy-choco": { supplements: JUDY_LATTE_SUPPLEMENTS },
    "choco-reishi": { supplements: JUDY_LATTE_SUPPLEMENTS },
    "sunset-skin-balance": {
      supplements: [
        { id: "collagene", name: "Collagène marin", price: 2 },
        { id: "champignon-immunite", name: "Champignon médicinal – Immunité", price: 2 },
        { id: "champignon-concentration", name: "Champignon médicinal – Concentration", price: 2 },
        { id: "champignon-detente", name: "Champignon médicinal – Détente", price: 2 },
      ],
    },
    espresso: { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "cafe-allonge": { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "double-espresso": { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "cafe-filtre": { supplements: JUDY_COFFEE_SUPPLEMENTS },
    cortado: { supplements: JUDY_COFFEE_SUPPLEMENTS },
    cappuccino: { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "cafe-latte": { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "flat-white": { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "almond-butter-latte": { supplements: JUDY_COFFEE_SUPPLEMENTS },
    "scrambled-eggs": { supplements: JUDY_BRUNCH_SUPPLEMENTS },
    "sweet-pancakes": { supplements: JUDY_BRUNCH_SUPPLEMENTS },
    "savoury-pancakes": { supplements: JUDY_BRUNCH_SUPPLEMENTS },
    "avoloco-bowl": { supplements: JUDY_BRUNCH_SUPPLEMENTS },
    "mediterranean-bowl": { supplements: JUDY_BRUNCH_SUPPLEMENTS },
    "kids-bento": { supplements: JUDY_BRUNCH_SUPPLEMENTS },
    kombucha: {
      variants: [
        { name: "Brut", priceOffset: 0 },
        { name: "Feuille de figuier", priceOffset: 0 },
        { name: "Feuille de framboisier", priceOffset: 0 },
      ],
    },
    "the-vert": {
      variants: [
        { name: "Gampola Green", priceOffset: 0 },
        { name: "Earl Grey", priceOffset: 0 },
      ],
    },
  },

  noglu: {
// --- SWEET ---
"cookie": {
  variants: [
    { name: "Pépites de chocolat", priceOffset: 0 },
    { name: "Chocolat-pistache", priceOffset: 0 },
    { name: "Peanut butter", priceOffset: 0.5 },
  ],
},
"donut": {
  variants: [
    { name: "Choco-caramel", priceOffset: 0 },
    { name: "Vanille", priceOffset: 0 },
    { name: "Donut du moment", priceOffset: 0 },
  ],
},
"tartelette": {
  variants: [
    { name: "Citron", priceOffset: 0 },
    { name: "Pécan", priceOffset: 0 },
    { name: "Fruit de saison", priceOffset: 0 },
  ],
},
"madeleine": {
  variants: [
    { name: "Nature", priceOffset: 0 },
    { name: "Chocolat au lait", priceOffset: -1.5 },
    { name: "Chocolat noir", priceOffset: -1.5 },
  ],
},
"part-de-cake": {
  variants: [
    { name: "Noisette-chocolat", priceOffset: 0 },
    { name: "Carotte cake", priceOffset: 4 },
    { name: "Citron pavot", priceOffset: 4 },
  ],
},
"eclair": {
  variants: [
    { name: "Café", priceOffset: 0 },
    { name: "Pistache", priceOffset: 0 },
    { name: "Vanille", priceOffset: 0 },
    { name: "Chocolat", priceOffset: 0 },
  ],
},
 
// --- DRINK ---
"noisette": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"cappuccino": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"flat-white": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"latte": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"chocolat-chaud": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"mocaccino": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"chicoree-latte": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"matcha-latte": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"chai-latte": {
  variants: [
    { name: "Lait de vache", priceOffset: 0 },
    { name: "Lait d'amande", priceOffset: 0.6 },
    { name: "Lait d'avoine", priceOffset: 0.6 },
    { name: "Lait de coco", priceOffset: 0.6 },
  ],
},
"the": {
  variants: [
    { name: "Earl Grey", priceOffset: 0 },
    { name: "Sencha", priceOffset: 0 },
    { name: "Breakfast", priceOffset: 0 },
  ],
},
"jus-bio": {
  variants: [
    { name: "Pomme", priceOffset: 0 },
    { name: "Orange", priceOffset: 0 },
  ],
},
"eau": {
  variants: [
    { name: "Plate", priceOffset: 0 },
    { name: "Gazeuse", priceOffset: 0.3 },
  ],
},
"coca": {
  variants: [
    { name: "Coca", priceOffset: 0 },
    { name: "Coca Zero", priceOffset: 0 },
  ],
},
 
// --- FOOD ---
"toast-noglu": {
  variants: [
    { name: "Brioche", priceOffset: 0 },
    { name: "Baguette", priceOffset: 0 },
    { name: "Bagel", priceOffset: 0 },
  ],
},
"porridge-noglu": {
  variants: [
    { name: "Coco & chocolat", priceOffset: 0 },
    { name: "Amandes & cranberries", priceOffset: 0 },
  ],
},
"quiche": {
  variants: [
    { name: "Lorraine", priceOffset: 0 },
    { name: "Poireaux", priceOffset: 0 },
  ],
},
  },
  thaisil: {
  "bo-bun": {
    variants: [
      { name: "Poulet", priceOffset: 0 },
      { name: "Bœuf pimenté", priceOffset: 1 },
      { name: "Crevettes", priceOffset: 1 },
    ],
  },
  "salade-papaye-verte": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "salade-mangue": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "nem-poulet": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "salade-crevettes": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "tom-kha-kai": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "tom-yum-goong": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "steak-thai-airfryer": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "legumes-sautes-wok": {},
  "porc-hache-basilic": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "boeuf-curry-massaman": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "curry-rouge-coco": {
    variants: [
      { name: "Poulet", priceOffset: 0 },
      { name: "Crevettes", priceOffset: 6 },
    ],
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "padthai": {
    variants: [
      { name: "Légumes", priceOffset: 0 },
      { name: "Poulet", priceOffset: 0 },
      { name: "Crevettes", priceOffset: 6.10 },
    ],
  },
  "riz-saute": {
    variants: [
      { name: "Poulet", priceOffset: 0 },
      { name: "Légumes", priceOffset: 0 },
      { name: "Crevettes", priceOffset: 6.10 },
    ],
    supplements: THAISIL_PORTION_SUPPLEMENT,
  },
  "big-tom-yum-goong": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "khao-soy": {
    variants: [
      { name: "Porc", priceOffset: 0 },
      { name: "Bœuf", priceOffset: 2 },
    ],
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "noix-st-jacques": {
    supplements: THAISIL_RIZ_SUPPLEMENTS,
  },
  "riz-jasmin": {},
  "tapioca-banane": {},
  "riz-gluant-mangue": {},
},
  "cafe-mareva": 
  {
 
  // ----------------------------------------------------------
  // GAUFRES DE PATATES DOUCES
  // ----------------------------------------------------------
 
  "classic-avocado": {
    variants: [
      { name: "Œuf au plat",    priceOffset: 0 },
      { name: "Œuf brouillé",   priceOffset: 0 },
    ],
    supplements: MAREVA_SUPPLEMENTS_GAUFRES_SALEES,
  },
 
  "the-italian": {
    variants: [],
    supplements: [],
  },
 
  "blt": {
    variants: [],
    supplements: [
      { id: "guacamole-maison", name: "Guacamole maison", price: 4.00 },
    ],
  },
 
  "fried-chicken-gaufre": {
    variants: [],
    supplements: [
      { id: "guacamole-maison", name: "Guacamole maison", price: 4.00 },
      { id: "bacon",            name: "Bacon",            price: 4.00 },
    ],
    // ⚠️ Maïs listé comme allergène sur la page allergènes
    // (non EU standard) — signalé dans JSON 1.
  },
 
  "early-bird": {
    variants: [],
    supplements: [],
  },
 
  // ----------------------------------------------------------
  // PANCAKES
  // ----------------------------------------------------------
 
  "american-breakfast": {
    variants: [],
    supplements: [],
  },
 
  "spicy-korean-honey-chicken-pancake": {
    variants: [],
    supplements: [],
  },
 
  "blueberry-mornings": {
    variants: [],
    supplements: [],
  },
 
  "fried-korean-honey-chicken-spicy": {
    variants: [],
    supplements: [],
  },
 
  // ----------------------------------------------------------
  // POKE BOWLS
  // ⚠️ Dispo lundi–vendredi uniquement.
  // ----------------------------------------------------------
 
  "poke-saumon-ou-tofu": {
    variants: [
      {
        name: "Saumon fumé",
        priceOffset: 0,
        // allergens spécifiques : oeufs, poisson, soja, graines-de-sesame
      },
      {
        name: "Tofu fumé",
        priceOffset: 0,
        // allergens spécifiques : oeufs, soja, graines-de-sesame (PAS poisson)
      },
    ],
    supplements: [],
    // _variant_allergen_note:
    //   "La variante Saumon contient Poisson. La variante Tofu ne contient PAS de poisson. " +
    //   "Les deux partagent : Œufs, Soja, Graines de sésame.",
  },
 
  "poke-fried-chicken": {
    variants: [],
    supplements: [],
  },
 
  "poke-korean-fried-chicken": {
    variants: [],
    supplements: [],
  },
 
  // ----------------------------------------------------------
  // SMOOTHIE BOWLS
  // ----------------------------------------------------------
 
  "smoothie-bowl-tropical": {
    variants: [],
    supplements: MAREVA_SUPPLEMENTS_SMOOTHIE_BOWLS,
  },
 
  "smoothie-bowl-go-wild-berries": {
    variants: [],
    supplements: MAREVA_SUPPLEMENTS_SMOOTHIE_BOWLS,
  },
 
  // ----------------------------------------------------------
  // FORMULE BRUNCH
  // ----------------------------------------------------------
 
  "formule-brunch": {
    variants: [
      { name: "Gaufre salée + jus + boisson chaude + pâtisserie + gaufre sucre glace", priceOffset: 0 },
      { name: "Pancake + jus + boisson chaude + pâtisserie + gaufre sucre glace",      priceOffset: 0 },
      { name: "Bowl + jus + boisson chaude + pâtisserie + gaufre sucre glace",         priceOffset: 0 },
    ],
    supplements: [],
    // _note:
    //   "⚠️ La formule inclut au choix : gaufre salée, pancake ou bowl*. " +
    //   "Le restaurant ne précise pas de surcoût entre options. " +
    //   "*(bowl = poke bowl, dispo lundi–vendredi seulement)",
  },
 
  // ----------------------------------------------------------
  // TOASTS
  // ----------------------------------------------------------
 
  "avocado-toast": {
    variants: [
      { name: "Œuf au plat",  priceOffset: 0 },
      { name: "Œuf brouillé", priceOffset: 0 },
    ],
    supplements: MAREVA_SUPPLEMENTS_TOASTS_SALES,
  },
 
  "glow-toast": {
    variants: [],
    supplements: [],
  },
 
  "jelly-x-peanut-toast": {
    variants: [],
    supplements: [],
  },
 
  "french-breakfast": {
    variants: [],
    supplements: [],
  },
 
  // ----------------------------------------------------------
  // GAUFRE SUCRÉE
  // ----------------------------------------------------------
 
  "gaufre-sucree": {
    variants: [],
    supplements: MAREVA_SUPPLEMENTS_GAUFRE_SUCREE,
    // _note:
    //   "La gaufre sucrée de base est à 5€ avec sucre glace (0€). " +
    //   "Toutes les autres garnitures sont des suppléments payants.",
  },
 
  "gaufre-du-moment": {
    variants: [],
    supplements: [],
    // _note:
    //   "Garniture fixe : banane, chocolat, beurre de cacahuète maison. " +
    //   "Pas de suppléments listés pour ce plat.",
  },
 
  // ----------------------------------------------------------
  // PÂTISSERIES (au comptoir — prix non indiqués sur le site)
  // ----------------------------------------------------------
 
  "brookie":                { variants: [], supplements: [] },
  "brownie-cacahuete":      { variants: [], supplements: [] },
  "cookie-cacahuete":       { variants: [], supplements: [] },
  "cookie-praline":         { variants: [], supplements: [] },
  "cookie-pistache":        { variants: [], supplements: [] },
  "cookie-sesame-noir":     { variants: [], supplements: [] },
  "paris-brest-praline":    { variants: [], supplements: [] },
  "opera":                  { variants: [], supplements: [] },
  "pavlova":                { variants: [], supplements: [] },
  "entremet-cacahuete":     { variants: [], supplements: [] },
  "entremet-citron":        { variants: [], supplements: [] },
  "gateau-cerises-amandes": { variants: [], supplements: [] },
  "carrot-cake":            { variants: [], supplements: [] },
  "crumble":                { variants: [], supplements: [] },
 
},
"su-misura": {
  // ---------------------------------------------------------------------------
  // ANTIPASTI
  // ---------------------------------------------------------------------------
  "planche-de-l-amitie": {
    variants: [
      { name: "Pour 1 personne", priceOffset: 0 },
      { name: "Pour 2 personnes", priceOffset: 16.00 },
    ],
    supplements: [],
  },
 
  // ---------------------------------------------------------------------------
  // DESSERTS
  // ---------------------------------------------------------------------------
  "tiramisu": {
    variants: [
      { name: "Classique", priceOffset: 0 },
      { name: "Pistache", priceOffset: 0 },
    ],
    supplements: [],
  },
  "crostata-artisanale": {
    variants: [
      { name: "À la confiture", priceOffset: 0 },
      { name: "Au citron", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------------------------------------------------------------------------
  // GLACES & SORBETS — flavour + quantity
  // ---------------------------------------------------------------------------
  // Note: Su Misura prices scoops 1/2/3 → 5,5€ / 8€ / 11€.
  // Base price (1 boule) = 5,50€. Flavours are no-cost flavour variants.
  "glaces-antolin": {
    variants: [
      { name: "1 boule — Café", priceOffset: 0 },
      { name: "1 boule — Caramel au sel de Guérande", priceOffset: 0 },
      { name: "1 boule — Vanille", priceOffset: 0 },
      { name: "1 boule — Chocolat", priceOffset: 0 },
      { name: "1 boule — Pistache", priceOffset: 0 },
      { name: "2 boules", priceOffset: 2.50 },
      { name: "3 boules", priceOffset: 5.50 },
    ],
    supplements: [],
  },
  "sorbets-antolin": {
    variants: [
      { name: "1 boule — Citron", priceOffset: 0 },
      { name: "1 boule — Cassis", priceOffset: 0 },
      { name: "1 boule — Framboise", priceOffset: 0 },
      { name: "1 boule — Fraise", priceOffset: 0 },
      { name: "1 boule — Fruits de la passion", priceOffset: 0 },
      { name: "2 boules", priceOffset: 2.50 },
      { name: "3 boules", priceOffset: 5.50 },
    ],
    supplements: [],
  },
 
  // ---------------------------------------------------------------------------
  // VINS BIO — colour variants
  // ---------------------------------------------------------------------------
  "vin-au-verre": {
    variants: [
      { name: "Blanc", priceOffset: 0 },
      { name: "Rouge", priceOffset: 0 },
      { name: "Rosé", priceOffset: 0 },
    ],
    supplements: [],
  },
  "pichet-de-vin": {
    variants: [
      { name: "Blanc", priceOffset: 0 },
      { name: "Rouge", priceOffset: 0 },
      { name: "Rosé", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------------------------------------------------------------------------
  // APÉRITIFS
  // ---------------------------------------------------------------------------
  "vermouth": {
    variants: [
      { name: "Blanc", priceOffset: 0 },
      { name: "Rouge", priceOffset: 0 },
    ],
    supplements: [],
  },
  "campari-vodka": {
    variants: [
      { name: "Campari", priceOffset: 0 },
      { name: "Vodka", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------------------------------------------------------------------------
  // EAUX
  // ---------------------------------------------------------------------------
  "acqua-chiara": {
    variants: [
      { name: "Plate", priceOffset: 0 },
      { name: "Pétillante", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------------------------------------------------------------------------
  // BOISSONS CHAUDES
  // ---------------------------------------------------------------------------
  "cappuccino": {
    variants: [
      { name: "Avec lactose", priceOffset: 0 },
      { name: "Sans lactose", priceOffset: 0 },
    ],
    supplements: [],
  },
},
"la-sajerie": 
{
 
  // ── SAJ ────────────────────────────────────────────────────────
 
  "zaatar": {
    variants: [],
    supplements: LASAJERIE_SUPPLEMENTS_HALLOUMI_LABNEH
    // Menu explicitly states: "+ fromage halloumi 2€" and "+ labneh 2€"
  },
 
  "halloumi": {
    variants: [],
    supplements: []
  },
 
  "chili-halloumi": {
    variants: [],
    supplements: []
  },
 
  "halloumi-tapenade-poivron": {
    variants: [],
    supplements: []
  },
 
  "dinde-fume-fromage": {
    variants: [],
    supplements: []
  },
 
  "hummus-avocat": {
    variants: [],
    supplements: []
  },
 
  "aubergine-labneh": {
    variants: [],
    supplements: []
  },
 
  "aubergines-tapenade-poivrons": {
    variants: [],
    supplements: []
  },
 
  "poulet-toum": {
    variants: [],
    supplements: []
  },
 
  "poulet-hummus": {
    variants: [],
    supplements: []
  },
 
  "soujouk-halloumi": {
    variants: [],
    supplements: []
  },
 
  "boeuf-aux-epices": {
    variants: [],
    supplements: []
  },
 
  "kefta-halloumi": {
    variants: [],
    supplements: []
  },
 
  "nutella": {
    variants: [],
    supplements: LASAJERIE_SUPPLEMENT_BANANE
    // Menu explicitly states: "+ banane 1€"
  },
 
  "saj-du-moment": {
    variants: [],
    supplements: []
    // Seasonal dish — no fixed supplements listed
  },
 
  // ── SALADES ────────────────────────────────────────────────────
 
  "salade-aux-dattes-halloumi": {
    variants: [],
    supplements: []
  },
 
  "mesclun-artichauts-pistaches": {
    variants: [],
    supplements: []
  },
 
  "tabouleh-quinoa-pois-chiche": {
    variants: [],
    supplements: []
  },
 
  "salade-du-moment": {
    variants: [],
    supplements: LASAJERIE_SUPPLEMENT_SAUMON
    // Menu explicitly states: "+ saumon mariné à la betterave +4.5€"
  },
 
  // ── ACCOMPAGNEMENTS ────────────────────────────────────────────
 
  "hummus": {
    variants: [],
    supplements: []
  },
 
  "labneh": {
    variants: [],
    supplements: []
  },
 
  "mutabbal": {
    variants: [],
    supplements: []
  },
 
  "accompagnement-du-moment": {
    variants: [],
    supplements: []
  },
 
  // ── DESSERTS ────────────────────────────────────────────────────
 
  "yaourt-oriental": {
    variants: [],
    supplements: []
  },
 
  "muhalabiya-aux-dattes": {
    variants: [],
    supplements: []
  },
 
  // ── BOISSONS ───────────────────────────────────────────────────
 
  "coca-cola": {
    variants: [
      { name: "330ml", priceOffset: 0 }
    ],
    supplements: []
  },
 
  "coca-cola-zero": {
    variants: [
      { name: "330ml", priceOffset: 0 }
    ],
    supplements: []
  },
 
  "perrier": {
    variants: [
      { name: "250ml", priceOffset: 0 }
    ],
    supplements: []
  },
 
  "charitea-green": {
    variants: [],
    supplements: []
  },
 
  "limonade-fruit-de-la-passion": {
    variants: [],
    supplements: []
  },
 
  // ── CAFÉ ───────────────────────────────────────────────────────
 
  "espresso-allonge": {
    variants: [
      { name: "Espresso", priceOffset: 0 },
      { name: "Allongé",  priceOffset: 0 }
    ],
    supplements: []
    // Same price for both — no price offset
  },
 
  "double-espresso": {
    variants: [],
    supplements: []
  },
 
  "thé": {
    variants: [],
    supplements: []
  }
},
"the-friendly-kitchen": {
 
  // ── FORMULES (no variants, no supplements) ────────────────────────────────
  "formule-dejeuner-plat-boisson": {
    variants: [],
    supplements: [],
  },
  "formule-dejeuner-deux-services": {
    variants: [],
    supplements: [],
  },
 
  // ── MENUS DÉCOUVERTE (no variants, no supplements) ────────────────────────
  "menu-decouverte-6-services": {
    variants: [
      { name: "Menu seul", priceOffset: 0 },
      { name: "Avec accord mets & vins (4 demi-verres + 1 quart)", priceOffset: 24.00 },
      { name: "Avec accord sans alcool", priceOffset: 18.00 },
    ],
    supplements: [],
  },
 
  // ── BOISSONS ──────────────────────────────────────────────────────────────
  "kir": {
    variants: TFK_KIR_VARIANTS,
    supplements: [],
  },
  "liqueurs-artisanales-granier": {
    variants: TFK_GRANIER_VARIANTS,
    supplements: [],
  },
  "kombucha-archipel": {
    variants: TFK_KOMBUCHA_VARIANTS,
    supplements: [],
  },
  "potions-symples": {
    variants: TFK_POTIONS_VARIANTS,
    supplements: [],
  },
 
  // ── VINS — volumes ────────────────────────────────────────────────────────
  "vin-blanc-granilites-chapoutier-2022": {
    variants: TFK_WINE_VOLUMES_GRANILITES,
    supplements: [],
  },
  "vin-blanc-bourgogne-aligote-gueguen-2022": {
    variants: TFK_WINE_VOLUMES_ALIGOTE,
    supplements: [],
  },
  "vin-blanc-haut-benauge-chateau-ferran-2022": {
    variants: TFK_WINE_VOLUMES_HAUT_BENAUGE,
    supplements: [],
  },
  "vin-blanc-cattin-sauvage-gewurztraminer-2021": {
    variants: TFK_WINE_VOLUMES_8_20_40,
    supplements: [],
  },
  "vin-blanc-cuvee-lune-viognier-2024": {
    variants: TFK_WINE_VOLUMES_8_20_40,
    supplements: [],
  },
  "vin-blanc-sauvagine-2024": {
    variants: TFK_WINE_VOLUMES_9_2250_45,
    supplements: [],
  },
  "vin-rouge-vignes-du-parc-oureas-2023": {
    variants: TFK_WINE_VOLUMES_VIGNES_DU_PARC,
    supplements: [],
  },
  "vin-rouge-granilites-chapoutier-2023": {
    variants: TFK_WINE_VOLUMES_GRANILITES,
    supplements: [],
  },
  "vin-rouge-canopee-vignobles-david-2022": {
    variants: TFK_WINE_VOLUMES_9_2250_45,
    supplements: [],
  },
  "vin-rouge-tire-bouchon-ourea-2022": {
    variants: TFK_WINE_VOLUMES_8_20_40,
    supplements: [],
  },
  "vin-rouge-noirettes-ici-la-2023": {
    variants: TFK_WINE_VOLUMES_9_2250_45,
    supplements: [],
  },
  "vin-rouge-sauvagine-2024": {
    variants: TFK_WINE_VOLUMES_9_2250_45,
    supplements: [],
  },
  "vin-rose-camille-turenne-2022": {
    variants: TFK_WINE_VOLUMES_CAMILLE,
    supplements: [],
  },
  "prosecco-frizzante-terre-dei-buth": {
    variants: TFK_WINE_VOLUMES_PROSECCO,
    supplements: [],
  },
  "champagne-mineral-blanc-de-blanc-legret": {
    variants: [
      { name: "75 cl (bouteille)", priceOffset: 0 },
    ],
    supplements: [],
  },
},
tasca:{
 
  // ---------- ANTIPASTI ----------
  "planche-de-l-amitie": {
    variants: [
      { name: "Pour 1 personne", priceOffset: 0 },     // base 19 €
      { name: "Pour 2 personnes", priceOffset: 16.00 }, // 35 €
    ],
    supplements: [],
  },
 
  // ---------- GLACES & SORBETS ----------
  "glace": {
    variants: [
      // Parfums
      { name: "Café",                              priceOffset: 0 },
      { name: "Caramel au sel de Guérande",        priceOffset: 0 },
      { name: "Vanille",                           priceOffset: 0 },
      { name: "Chocolat",                          priceOffset: 0 },
      { name: "Pistache",                          priceOffset: 0 },
    ],
    supplements: [
      { id: "boule-supplementaire-1", name: "+1 boule (2 boules au total)", price: 2.50 }, // 8 - 5.5
      { id: "boule-supplementaire-2", name: "+2 boules (3 boules au total)", price: 5.50 }, // 11 - 5.5
    ],
  },
 
  "sorbet": {
    variants: [
      { name: "Citron",                priceOffset: 0 },
      { name: "Cassis",                priceOffset: 0 },
      { name: "Framboise",             priceOffset: 0 },
      { name: "Fraise",                priceOffset: 0 },
      { name: "Fruits de la passion",  priceOffset: 0 },
    ],
    supplements: [
      { id: "boule-supplementaire-1", name: "+1 boule (2 boules au total)", price: 2.50 },
      { id: "boule-supplementaire-2", name: "+2 boules (3 boules au total)", price: 5.50 },
    ],
  },
 
  // ---------- DESSERTS ----------
  "crostata-artisanale": {
    variants: [
      { name: "À la confiture", priceOffset: 0 },
      { name: "Au citron",      priceOffset: 0 },
    ],
    supplements: [],
  },
 
  "tiramisu": {
    variants: [
      { name: "Classique", priceOffset: 0 },
      { name: "Pistache",  priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------- VINS ----------
  "vin-au-verre": {
    variants: [
      { name: "Blanc", priceOffset: 0 },
      { name: "Rouge", priceOffset: 0 },
      { name: "Rosé",  priceOffset: 0 },
    ],
    supplements: [],
  },
 
  "pichet-de-vin": {
    variants: [
      { name: "Blanc", priceOffset: 0 },
      { name: "Rouge", priceOffset: 0 },
      { name: "Rosé",  priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------- APERITIFS ----------
  "vermouth": {
    variants: [
      { name: "Blanc", priceOffset: 0 },
      { name: "Rouge", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  "campari-vodka": {
    variants: [
      { name: "Campari", priceOffset: 0 },
      { name: "Vodka",   priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------- EAUX ----------
  "acqua-chiara": {
    variants: [
      { name: "Plate",     priceOffset: 0 },
      { name: "Pétillante", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------- JUS DE FRUITS ----------
  "jus-de-fruits": {
    variants: [
      { name: "ACE (orange, carotte, citron)", priceOffset: 0 },
      { name: "Pêche",                         priceOffset: 0 },
      { name: "Myrtille sauvage",              priceOffset: 0 },
      { name: "Poire Williams",                priceOffset: 0 },
      { name: "Tomate",                        priceOffset: 0 },
      { name: "Abricot",                       priceOffset: 0 },
      { name: "Pomme",                         priceOffset: 0 },
      { name: "Orange",                        priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------- THÉ GLACÉ ----------
  "the-glace": {
    variants: [
      { name: "Pêche",  priceOffset: 0 },
      { name: "Citron", priceOffset: 0 },
    ],
    supplements: [],
  },
 
  // ---------- BOISSONS CHAUDES ----------
  "cappuccino": {
    variants: [
      { name: "Avec lactose",  priceOffset: 0 },
      { name: "Sans lactose",  priceOffset: 0 },
    ],
    supplements: [],
  },
 
},
"riz-riz": {
 
  // ── ENTRÉES À PARTAGER ──────────────────────────────────────────
 
  "plateau-aperitif": {
    variants: [],
    supplements: []
  },
 
  "guacamole-galettes-riz": {
    variants: [],
    supplements: []
  },
 
  "panier-de-nachos": {
    variants: [],
    supplements: []
  },
 
  "houmous-betteraves-galettes-riz": {
    variants: [],
    supplements: []
  },
 
  // ── ENTRÉES ─────────────────────────────────────────────────────
 
  "chotpoti": {
    variants: [],
    supplements: []
  },
 
  "aubergine-au-four": {
    // The restaurant explicitly lists two serving sizes / uses
    variants: [
      { name: "Entrée", priceOffset: 0 },          // 9 €
      { name: "Servi façon Moussaka (plat)", priceOffset: 7.00 }  // 16 €
    ],
    supplements: []
  },
 
  "tabolue-de-riz": {
    variants: [],
    supplements: []
  },
 
  // ── PLATS ───────────────────────────────────────────────────────
 
  "curry-du-dragon": {
    variants: [],
    supplements: []
  },
 
  "gaufre-de-patate-douce": {
    variants: [],
    supplements: []
  },
 
  "black-panther": {
    variants: [],
    supplements: []
  },
 
  "dhal-depinards": {
    variants: [],
    supplements: []
  },
 
  "mango-masala": {
    variants: [],
    supplements: []
  },
 
  // ── DESSERTS ────────────────────────────────────────────────────
 
  "incroyable-chocolat": {
    variants: [],
    supplements: []
  },
 
  "mousse-chocolat-peanut-butter": {
    variants: [],
    supplements: []
  },
 
  "cheesecake-miroir-framboise": {
    variants: [],
    supplements: []
  },
 
  "cheesecake-matcha": {
    variants: [],
    supplements: []
  },
 
  "riz-riz-au-lait": {
    variants: [],
    supplements: []
  },
 
  "banana-bread": {
    variants: [],
    supplements: []
  },
 
  "mango-sticky-rice": {
    variants: [],
    supplements: []
  },
 
  // ── FORMULES ────────────────────────────────────────────────────
 
  "rice-table": {
    variants: [],
    supplements: []
  },
 
  "full-table": {
    // Dessert choice is open — no price offset, it's included
    variants: [],
    supplements: []
  },
 
  "brunch-table": {
    variants: [],
    supplements: []
  },
 
  "menu-midi-entree-plat": {
    variants: [
      { name: "Taboulé de Riz + Curry du Dragon", priceOffset: 0 },
      { name: "Taboulé de Riz + Gaufre de Patate Douce", priceOffset: 0 },
      { name: "Taboulé de Riz + Dhal d'Épinards", priceOffset: 0 },
      { name: "Chotpoti + Curry du Dragon", priceOffset: 0 },
      { name: "Chotpoti + Gaufre de Patate Douce", priceOffset: 0 },
      { name: "Chotpoti + Dhal d'Épinards", priceOffset: 0 }
    ],
    supplements: []
  },
 
  "menu-midi-plat-dessert": {
    variants: [
      { name: "Curry du Dragon + Riz Riz au Lait", priceOffset: 0 },
      { name: "Curry du Dragon + Banana Bread", priceOffset: 0 },
      { name: "Gaufre de Patate Douce + Riz Riz au Lait", priceOffset: 0 },
      { name: "Gaufre de Patate Douce + Banana Bread", priceOffset: 0 },
      { name: "Dhal d'Épinards + Riz Riz au Lait", priceOffset: 0 },
      { name: "Dhal d'Épinards + Banana Bread", priceOffset: 0 }
    ],
    supplements: DESSERT_UPGRADE_SUPPLEMENT
  },
 
  "menu-midi-entree-plat-dessert": {
    variants: [
      { name: "Taboulé de Riz + Curry du Dragon + Riz Riz au Lait", priceOffset: 0 },
      { name: "Taboulé de Riz + Curry du Dragon + Banana Bread", priceOffset: 0 },
      { name: "Taboulé de Riz + Gaufre de Patate Douce + Riz Riz au Lait", priceOffset: 0 },
      { name: "Taboulé de Riz + Gaufre de Patate Douce + Banana Bread", priceOffset: 0 },
      { name: "Taboulé de Riz + Dhal d'Épinards + Riz Riz au Lait", priceOffset: 0 },
      { name: "Taboulé de Riz + Dhal d'Épinards + Banana Bread", priceOffset: 0 },
      { name: "Chotpoti + Curry du Dragon + Riz Riz au Lait", priceOffset: 0 },
      { name: "Chotpoti + Curry du Dragon + Banana Bread", priceOffset: 0 },
      { name: "Chotpoti + Gaufre de Patate Douce + Riz Riz au Lait", priceOffset: 0 },
      { name: "Chotpoti + Gaufre de Patate Douce + Banana Bread", priceOffset: 0 },
      { name: "Chotpoti + Dhal d'Épinards + Riz Riz au Lait", priceOffset: 0 },
      { name: "Chotpoti + Dhal d'Épinards + Banana Bread", priceOffset: 0 }
    ],
    supplements: DESSERT_UPGRADE_SUPPLEMENT
  }
}

}

interface DishCardProps {
  item: MenuItem
  language: Language
  restaurantId: string
  wide?: boolean
}

export function DishCard({
  item,
  language,
  restaurantId,
  wide = false,
}: DishCardProps) {
  const dish = item.translations[language]
  const config = MOCK_CONFIGS[restaurantId]?.[item.id] ?? {}
  const hasVariants = Boolean(config.variants?.length)
  const hasSupps = Boolean(config.supplements?.length)

  const { addItem } = useCart()
  const [variantIdx, setVariantIdx] = useState(0)
  const [selectedSupps, setSelectedSupps] = useState<Set<string>>(new Set())
  const [added, setAdded] = useState(false)

  const variants = config.variants ?? []
  const supplements = config.supplements ?? []

  const variantOffset = variants[variantIdx]?.priceOffset ?? 0
  const suppsTotal = supplements
    .filter((s) => selectedSupps.has(s.id))
    .reduce((sum, s) => sum + s.price, 0)
  const dishPrice = item.price + variantOffset
  const totalPrice = dishPrice + suppsTotal

  function prevVariant() {
    setVariantIdx((i) => (i - 1 + variants.length) % variants.length)
    setSelectedSupps(new Set())
  }

  function nextVariant() {
    setVariantIdx((i) => (i + 1) % variants.length)
    setSelectedSupps(new Set())
  }

  function toggleSupp(id: string) {
    setSelectedSupps((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const formatPrice = (price: number) =>
    price.toLocaleString(language === "en" ? "en-GB" : language, {
      style: "currency",
      currency: "EUR",
    })

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden transition-shadow hover:shadow-md",
        wide ? "w-full" : "w-72"
      )}
    >
      {/* Image + carrousel */}
      <div
        className={cn(
          "relative w-0 min-w-full shrink-0 overflow-hidden",
          wide ? "h-56" : "h-44"
        )}
      >
        <Image
          src={variants[variantIdx]?.image ?? item.image}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {hasVariants && (
          <>
            <button
              onClick={prevVariant}
              className="absolute top-1/2 left-2 z-10 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-white/88"
              aria-label="Variante précédente"
            >
              <ChevronLeft size={14} />
            </button>

            <button
              onClick={nextVariant}
              className="absolute top-1/2 right-2 z-10 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-white/88"
              aria-label="Variante suivante"
            >
              <ChevronRight size={14} />
            </button>

            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/88 px-3 py-1 whitespace-nowrap">
              <span className="text-xs font-medium text-foreground">
                {variants[variantIdx].name}
              </span>
              {variants.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "size-1.5 rounded-full",
                    i === variantIdx ? "bg-foreground" : "bg-foreground/30"
                  )}
                />
              ))}
            </div>

            <div className="absolute top-2 right-2 z-10 flex size-5.5 items-center justify-center rounded-full border-[0.5px] border-border bg-white">
              <Plus size={12} className="text-foreground" />
            </div>
          </>
        )}
      </div>

      {/* Header : nom + prix réactif */}
      <CardHeader className="w-0 min-w-full pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-base leading-tight font-semibold">
            {dish.name}
          </h3>
          <span className="shrink-0 font-semibold text-primary tabular-nums">
            {formatPrice(dishPrice)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {dish.description}
        </p>
      </CardHeader>

      <CardContent className="flex grow flex-col gap-2 pb-4">
        {item.allergens.length > 0 && (
          <div className="flex w-0 min-w-full flex-wrap gap-1">
            {item.allergens.map((a) => (
              <AllergenBadge
                key={a}
                allergen={a}
                language={language}
                restaurantId={restaurantId}
              />
            ))}
          </div>
        )}
        {item.diets.length > 0 && (
          <div className="flex w-0 min-w-full flex-wrap gap-1">
            {item.diets.map((d) => (
              <DietBadge
                key={d}
                diet={d}
                language={language}
                restaurantId={restaurantId}
              />
            ))}
          </div>
        )}

        {/* Macros */}
        <div className="mt-6 flex gap-1">
          {[
            { value: item.macros.calories, label: "kcal" },
            { value: `${item.macros.proteines}g`, label: "prot" },
            { value: `${item.macros.glucides}g`, label: "gluc" },
            { value: `${item.macros.lipides}g`, label: "lip" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex min-w-0 flex-1 flex-col items-center rounded-[6px] bg-secondary px-1.25 py-1"
            >
              <span className="text-xs leading-none font-semibold text-foreground tabular-nums">
                {value}
              </span>
              <span className="mt-0.5 text-[9px] leading-none text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Suppléments */}
        {hasSupps && (
          <div className="mt-3">
            <p className="mb-1.5 text-[10px] font-medium text-muted-foreground">
              Suppléments
            </p>
            <div className="flex flex-col gap-1.5">
              {supplements.map((s) => {
                const active = selectedSupps.has(s.id)
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleSupp(s.id)}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-full border-[0.5px] px-3 py-1.5 text-left text-xs transition-colors",
                      active
                        ? "border-[#97addd] bg-[#e0f0ff] font-medium text-[#5b5b5b] dark:border-[#4a6fa5] dark:bg-[#1e2d4a] dark:text-[#a8c0e8]"
                        : "border-border bg-white text-muted-foreground dark:bg-background"
                    )}
                  >
                    <span>{s.name}</span>
                    <span
                      className={cn(
                        "ml-2 shrink-0 tabular-nums",
                        active ? "opacity-100" : "opacity-70"
                      )}
                    >
                      +{s.price.toFixed(2).replace(".", ",")}€
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Total + bouton panier */}
        <div className="mt-3 flex items-center justify-between border-t border-border pt-2">
          <span className="text-xs text-muted-foreground">Total</span>
          <span className="text-sm font-semibold text-foreground tabular-nums">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <Button
          className={cn(
            "w-full transition-colors",
            added && "bg-green-600 hover:bg-green-600"
          )}
          size="sm"
          onClick={() => {
            addItem({
              menuItemId: item.id,
              name: dish.name,
              basePrice: item.price,
              variant: variants[variantIdx] ?? null,
              supplements: supplements.filter((s) => selectedSupps.has(s.id)),
              allergens: item.allergens,
              diets: item.diets,
              macros: item.macros,
              totalPrice,
            })
            setAdded(true)
            setTimeout(() => setAdded(false), 1200)
          }}
        >
          {added ? <Check size={14} /> : <ListPlus size={14} />}
          {added ? "Ajouté !" : "Ajouter au résumé"}
        </Button>
      </CardContent>
    </Card>
  )
}
