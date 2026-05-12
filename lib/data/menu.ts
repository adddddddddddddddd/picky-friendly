import type { MenuItem } from "@/lib/types"

// Pexels CDN — free to use, no API key required (Pexels License)
// IDs confirmed from pexels.com/photo/{slug}-{id}/ URL slugs
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`

const localImage = (path: string) => `/public/${path}`

export const menuItems: Record<string, MenuItem[]> = {
  // ─── Entrées ───────────────────────────────────────────────────────────────

  default: [
    {
      id: "soupe-oignon",
      category: "entrees",
      subcategory: "soupes",
      // "Soup With Onion and Meat" — pexels.com/photo/soup-with-onion-and-meat-750827
      image: pexels(750827),
      translations: {
        fr: {
          name: "Soupe à l'oignon",
          description:
            "Soupe gratinée à l'oignon avec croûtons et gruyère fondu",
        },
        en: {
          name: "French Onion Soup",
          description: "Gratinated onion soup with croutons and melted Gruyère",
        },
        it: {
          name: "Zuppa di cipolla",
          description: "Zuppa di cipolla gratinata con crostini e Gruyère fuso",
        },
        es: {
          name: "Sopa de cebolla",
          description:
            "Sopa de cebolla gratinada con picatostes y Gruyère derretido",
        },
      },
      price: 9.5,
      allergens: ["gluten", "lait", "oeufs"],
      diets: ["vegetarien"],
      macros: { calories: 320, proteines: 12, glucides: 38, lipides: 14 },
    },
    {
      id: "salade-cesar",
      category: "entrees",
      subcategory: "salades",
      // "Close up of Caesar Salad" — pexels.com/photo/close-up-of-caesar-salad-8251537
      image: pexels(8251537),
      translations: {
        fr: {
          name: "Salade César",
          description:
            "Romaine croquante, parmesan, croûtons dorés, sauce César maison",
        },
        en: {
          name: "Caesar Salad",
          description:
            "Crispy romaine, parmesan, golden croutons, house Caesar dressing",
        },
        it: {
          name: "Insalata Cesare",
          description:
            "Romana croccante, parmigiano, crostini dorati, salsa Cesare fatta in casa",
        },
        es: {
          name: "Ensalada César",
          description:
            "Romana crujiente, parmesano, picatostes dorados, aderezo César casero",
        },
      },
      price: 12,
      allergens: ["gluten", "lait", "oeufs", "poissons", "moutarde"],
      diets: [],
      macros: { calories: 380, proteines: 14, glucides: 22, lipides: 26 },
    },
    {
      id: "escargots",
      category: "entrees",
      subcategory: "mets",
      // "Close-up of Seafood with Bread" — pexels.com/photo/close-up-of-seafood-with-bread-12173358
      image: pexels(12173358),
      translations: {
        fr: {
          name: "Escargots de Bourgogne",
          description:
            "Six escargots au beurre persillé à l'ail, servis en coquille",
        },
        en: {
          name: "Burgundy Snails",
          description: "Six snails in garlic parsley butter, served in shell",
        },
        it: {
          name: "Lumache di Borgogna",
          description:
            "Sei lumache al burro aromatizzato all'aglio e prezzemolo, servite nel guscio",
        },
        es: {
          name: "Caracoles de Borgoña",
          description:
            "Seis caracoles con mantequilla de ajo y perejil, servidos en su concha",
        },
      },
      price: 14,
      allergens: ["lait", "gluten", "mollusques"],
      diets: [],
      macros: { calories: 210, proteines: 16, glucides: 4, lipides: 15 },
    },
    {
      id: "foie-gras",
      category: "entrees",
      subcategory: "mets",
      // "A Person Preparing a Charcuterie Board" — pexels.com/photo/a-person-preparing-a-charcuterie-board-6004233
      image: pexels(6004233),
      translations: {
        fr: {
          name: "Foie gras maison",
          description:
            "Terrine de foie gras de canard, chutney de figues, brioche toastée",
        },
        en: {
          name: "House Foie Gras",
          description: "Duck foie gras terrine, fig chutney, toasted brioche",
        },
        it: {
          name: "Foie gras della casa",
          description:
            "Terrina di foie gras di anatra, chutney di fichi, brioche tostata",
        },
        es: {
          name: "Foie gras de la casa",
          description:
            "Terrina de foie gras de pato, chutney de higos, brioche tostado",
        },
      },
      price: 22,
      allergens: ["gluten", "oeufs", "lait", "so2"],
      diets: [],
      macros: { calories: 490, proteines: 8, glucides: 18, lipides: 44 },
    },

    // ─── Plats ─────────────────────────────────────────────────────────────────
    {
      id: "steak-frites",
      category: "plats",
      subcategory: "viandes",
      // "Steak with French Fries and Red Fruits" — pexels.com/photo/steak-with-french-fries-and-red-fruits-1352262
      image: pexels(1352262),
      translations: {
        fr: {
          name: "Steak frites",
          description:
            "Entrecôte 200 g cuite à votre goût, frites maison, sauce au poivre",
        },
        en: {
          name: "Steak & Fries",
          description:
            "200 g ribeye cooked to your liking, homemade fries, pepper sauce",
        },
        it: {
          name: "Bistecca e patatine",
          description:
            "Entrecôte 200 g cotta a piacere, patatine fritte fatte in casa, salsa al pepe",
        },
        es: {
          name: "Bistec con patatas fritas",
          description:
            "Entrecot 200 g al punto deseado, patatas fritas caseras, salsa de pimienta",
        },
      },
      price: 26,
      allergens: ["lait", "moutarde"],
      diets: ["halal"],
      macros: { calories: 720, proteines: 48, glucides: 52, lipides: 34 },
    },
    {
      id: "sole-meuniere",
      category: "plats",
      subcategory: "poissons",
      // "Cooked Fish on Plate" — pexels.com/photo/cooked-fish-on-plate-2374946
      image: pexels(2374946),
      translations: {
        fr: {
          name: "Sole meunière",
          description:
            "Sole entière dorée au beurre noisette, câpres, citron, persil frais",
        },
        en: {
          name: "Sole Meunière",
          description:
            "Whole sole in brown butter, capers, lemon, fresh parsley",
        },
        it: {
          name: "Sogliola alla mugnaia",
          description:
            "Sogliola intera dorata nel burro noisette, capperi, limone, prezzemolo fresco",
        },
        es: {
          name: "Lenguado a la molinera",
          description:
            "Lenguado entero dorado en mantequilla avellana, alcaparras, limón, perejil fresco",
        },
      },
      price: 28,
      allergens: ["poissons", "lait", "gluten"],
      diets: ["sans-gluten"],
      macros: { calories: 460, proteines: 36, glucides: 8, lipides: 32 },
    },
    {
      id: "poulet-roti",
      category: "plats",
      subcategory: "viandes",
      // "Roasted Chicken Wings on White Plate" — pexels.com/photo/2338407
      image: pexels(2338407),
      translations: {
        fr: {
          name: "Poulet rôti fermier",
          description:
            "Demi-poulet Label Rouge rôti au four, jus de volaille, légumes de saison",
        },
        en: {
          name: "Roast Farm Chicken",
          description:
            "Half Label Rouge chicken roasted, poultry jus, seasonal vegetables",
        },
        it: {
          name: "Pollo arrosto di fattoria",
          description:
            "Mezzo pollo Label Rouge arrosto, sugo di pollame, verdure di stagione",
        },
        es: {
          name: "Pollo de granja asado",
          description:
            "Medio pollo Label Rouge asado al horno, jugo de ave, verduras de temporada",
        },
      },
      price: 22,
      allergens: ["lait", "celeri"],
      diets: ["halal", "casher", "sans-gluten"],
      macros: { calories: 580, proteines: 52, glucides: 18, lipides: 34 },
    },
    {
      id: "ratatouille",
      category: "plats",
      subcategory: "vegetarien",
      // "Colourful Salad of Cooked Vegetables" — pexels.com/photo/colourful-salad-of-cooked-vegetables-11213759
      image: pexels(11213759),
      translations: {
        fr: {
          name: "Ratatouille provençale",
          description:
            "Courgettes, aubergines, poivrons et tomates mijotés aux herbes de Provence",
        },
        en: {
          name: "Provençal Ratatouille",
          description:
            "Zucchini, eggplant, peppers and tomatoes simmered with Provençal herbs",
        },
        it: {
          name: "Ratatouille provenzale",
          description:
            "Zucchine, melanzane, peperoni e pomodori in umido con erbe di Provenza",
        },
        es: {
          name: "Ratatouille provenzal",
          description:
            "Calabacín, berenjena, pimientos y tomates guisados con hierbas de Provenza",
        },
      },
      price: 17,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 220, proteines: 6, glucides: 28, lipides: 10 },
    },
    {
      id: "boeuf-bourguignon",
      category: "plats",
      subcategory: "viandes",
      // "Cooked Meat With Vegetable Garnish on White Plate" — pexels.com/photo/cooked-meat-with-vegetable-garnish-on-white-plate-1327393
      image: pexels(1327393),
      translations: {
        fr: {
          name: "Bœuf bourguignon",
          description:
            "Joue de bœuf braisée au Pinot Noir, lardons, champignons, purée maison",
        },
        en: {
          name: "Beef Bourguignon",
          description:
            "Beef cheek braised in Pinot Noir, lardons, mushrooms, homemade mash",
        },
        it: {
          name: "Bœuf bourguignon",
          description:
            "Guancia di manzo brasata al Pinot Noir, pancetta, funghi, purè fatto in casa",
        },
        es: {
          name: "Bœuf bourguignon",
          description:
            "Carrillera de ternera braseada al Pinot Noir, lardons, champiñones, puré casero",
        },
      },
      price: 29,
      allergens: ["gluten", "lait", "celeri", "so2"],
      diets: [],
      macros: { calories: 650, proteines: 42, glucides: 36, lipides: 32 },
    },
    {
      id: "risotto-champignons",
      category: "plats",
      subcategory: "vegetarien",
      // "Photo of Risotto on a Black and White Plate" — pexels.com/photo/photo-of-risotto-on-a-black-and-white-plate-6406460
      image: pexels(6406460),
      translations: {
        fr: {
          name: "Risotto aux champignons",
          description:
            "Risotto crémeux aux cèpes et girolles, parmesan, huile de truffe blanche",
        },
        en: {
          name: "Mushroom Risotto",
          description:
            "Creamy risotto with porcini and chanterelles, parmesan, white truffle oil",
        },
        it: {
          name: "Risotto ai funghi",
          description:
            "Risotto cremoso con porcini e finferli, parmigiano, olio al tartufo bianco",
        },
        es: {
          name: "Risotto de setas",
          description:
            "Risotto cremoso con boletus y rebozuelos, parmesano, aceite de trufa blanca",
        },
      },
      price: 21,
      allergens: ["lait", "celeri"],
      diets: ["vegetarien", "sans-gluten"],
      macros: { calories: 520, proteines: 14, glucides: 72, lipides: 20 },
    },

    // ─── Fromages ──────────────────────────────────────────────────────────────
    {
      id: "plateau-fromages",
      category: "fromages",
      subcategory: "plateau",
      // "Cheese and Wine on Brown Wooden Chopping Board" — pexels.com/photo/cheese-and-wine-on-brown-wooden-chopping-board-3522515
      image: pexels(3522515),
      translations: {
        fr: {
          name: "Plateau de fromages",
          description:
            "Sélection de 5 fromages affinés, accompagnés de pain aux noix et confiture",
        },
        en: {
          name: "Cheese Board",
          description: "Selection of 5 aged cheeses, walnut bread and jam",
        },
        it: {
          name: "Piatto di formaggi",
          description:
            "Selezione di 5 formaggi stagionati, pane alle noci e confettura",
        },
        es: {
          name: "Tabla de quesos",
          description:
            "Selección de 5 quesos curados, pan de nueces y mermelada",
        },
      },
      price: 18,
      allergens: ["lait", "gluten", "fruits-a-coque"],
      diets: ["vegetarien"],
      macros: { calories: 560, proteines: 28, glucides: 22, lipides: 42 },
    },
    {
      id: "brie-meaux",
      category: "fromages",
      subcategory: "pates-molles",
      // "A Wine Glasses Near the Wooden Plate with Cheese and Grapes" — pexels.com/photo/...8473176
      image: pexels(8473176),
      translations: {
        fr: {
          name: "Brie de Meaux AOP",
          description:
            "Portion généreuse de Brie de Meaux AOP, miel de fleurs, noix fraîches",
        },
        en: {
          name: "Brie de Meaux AOP",
          description:
            "Generous portion of Brie de Meaux AOP, flower honey, fresh walnuts",
        },
        it: {
          name: "Brie de Meaux AOP",
          description:
            "Porzione generosa di Brie de Meaux AOP, miele di fiori, noci fresche",
        },
        es: {
          name: "Brie de Meaux AOP",
          description:
            "Porción generosa de Brie de Meaux AOP, miel de flores, nueces frescas",
        },
      },
      price: 11,
      allergens: ["lait", "fruits-a-coque"],
      diets: ["vegetarien", "sans-gluten"],
      macros: { calories: 340, proteines: 18, glucides: 8, lipides: 28 },
    },
    {
      id: "roquefort",
      category: "fromages",
      subcategory: "pates-persillees",
      // "Cheese And Red Tomato On Brown Wooden Chopping Board" — pexels.com/photo/...3756498
      image: pexels(3756498),
      translations: {
        fr: {
          name: "Roquefort Société",
          description:
            "Roquefort Société AOP, poire Williams rôtie, pain de seigle grillé",
        },
        en: {
          name: "Roquefort Société",
          description:
            "Roquefort Société AOP, roasted Williams pear, toasted rye bread",
        },
        it: {
          name: "Roquefort Société",
          description:
            "Roquefort Société AOP, pera Williams arrostita, pane di segale tostato",
        },
        es: {
          name: "Roquefort Société",
          description:
            "Roquefort Société AOP, pera Williams asada, pan de centeno tostado",
        },
      },
      price: 13,
      allergens: ["lait", "gluten"],
      diets: ["vegetarien"],
      macros: { calories: 290, proteines: 16, glucides: 14, lipides: 22 },
    },

    // ─── Desserts ──────────────────────────────────────────────────────────────
    {
      id: "creme-brulee",
      category: "desserts",
      subcategory: "classiques",
      // "Top View Photo of Food Dessert" — pexels.com/photo/top-view-photo-of-food-dessert-1099680
      image: pexels(1099680),
      translations: {
        fr: {
          name: "Crème brûlée à la vanille",
          description:
            "Crème brûlée à la vanille de Tahiti, caramel craquant maison",
        },
        en: {
          name: "Vanilla Crème Brûlée",
          description:
            "Tahitian vanilla crème brûlée with homemade crackled caramel",
        },
        it: {
          name: "Crème brûlée alla vaniglia",
          description:
            "Crème brûlée alla vaniglia di Tahiti con caramello croccante fatto in casa",
        },
        es: {
          name: "Crème brûlée de vainilla",
          description:
            "Crème brûlée de vainilla de Tahití con caramelo crujiente casero",
        },
      },
      price: 9,
      allergens: ["lait", "oeufs"],
      diets: ["vegetarien", "sans-gluten"],
      macros: { calories: 380, proteines: 7, glucides: 44, lipides: 20 },
    },
    {
      id: "tarte-tatin",
      category: "desserts",
      subcategory: "classiques",
      // "Close-up Of Tasty Looking Baked Goods" (mini apple pies) — pexels.com/photo/...2955816
      image: pexels(2955816),
      translations: {
        fr: {
          name: "Tarte Tatin",
          description:
            "Tarte aux pommes caramélisées à l'envers, crème fraîche épaisse",
        },
        en: {
          name: "Tarte Tatin",
          description:
            "Upside-down caramelised apple tart, thick crème fraîche",
        },
        it: {
          name: "Tarte Tatin",
          description:
            "Crostata di mele caramellata al rovescio, crème fraîche densa",
        },
        es: {
          name: "Tarte Tatin",
          description:
            "Tarta de manzanas caramelizadas invertida, crème fraîche espesa",
        },
      },
      price: 10,
      allergens: ["gluten", "lait", "oeufs"],
      diets: ["vegetarien"],
      macros: { calories: 420, proteines: 5, glucides: 62, lipides: 18 },
    },
    {
      id: "mousse-chocolat",
      category: "desserts",
      subcategory: "chocolat",
      // "Chocolate Desert in Autumn Ambient" — pexels.com/photo/chocolate-desert-in-autumn-ambient-14056746
      image: pexels(14056746),
      translations: {
        fr: {
          name: "Mousse au chocolat",
          description:
            "Mousse légère au chocolat noir 70 %, fleur de sel, éclats de cacao",
        },
        en: {
          name: "Chocolate Mousse",
          description:
            "Light 70 % dark chocolate mousse, fleur de sel, cacao nibs",
        },
        it: {
          name: "Mousse al cioccolato",
          description:
            "Mousse leggera al cioccolato fondente 70 %, fleur de sel, granella di cacao",
        },
        es: {
          name: "Mousse de chocolate",
          description:
            "Mousse ligera de chocolate negro 70 %, flor de sal, pepitas de cacao",
        },
      },
      price: 9,
      allergens: ["oeufs", "lait", "soja"],
      diets: ["vegetarien", "sans-gluten"],
      macros: { calories: 340, proteines: 8, glucides: 28, lipides: 22 },
    },
    {
      id: "ile-flottante",
      category: "desserts",
      subcategory: "classiques",
      // "Shallow Focus of White Icing-covered Cake" — pexels.com/photo/...1721934
      image: pexels(1721934),
      translations: {
        fr: {
          name: "Île flottante",
          description:
            "Blancs en neige pochés sur crème anglaise à la vanille, pralin caramélisé",
        },
        en: {
          name: "Floating Island",
          description:
            "Poached meringue on vanilla custard cream, caramelised praline",
        },
        it: {
          name: "Isola galleggiante",
          description:
            "Meringa pochée su crema inglese alla vaniglia, pralinato caramellato",
        },
        es: {
          name: "Isla flotante",
          description:
            "Merengue pochado sobre crema inglesa de vainilla, pralinado caramelizado",
        },
      },
      price: 8,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["vegetarien", "sans-gluten"],
      macros: { calories: 290, proteines: 10, glucides: 38, lipides: 12 },
    },

    // ─── Boissons ──────────────────────────────────────────────────────────────
    {
      id: "eau-minerale",
      category: "boissons",
      subcategory: "eaux",
      // "Close-up of Bottle Pouring Water on Glass" — pexels.com/photo/...327090
      image: pexels(327090),
      translations: {
        fr: {
          name: "Eau minérale",
          description: "Eau minérale naturelle Évian ou Perrier gazeuse, 50 cl",
        },
        en: {
          name: "Mineral Water",
          description: "Still Évian or sparkling Perrier mineral water, 50 cl",
        },
        it: {
          name: "Acqua minerale",
          description:
            "Acqua minerale naturale Évian o Perrier frizzante, 50 cl",
        },
        es: {
          name: "Agua mineral",
          description: "Agua mineral natural Évian o Perrier con gas, 50 cl",
        },
      },
      price: 4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 0, proteines: 0, glucides: 0, lipides: 0 },
    },
    {
      id: "vin-rouge",
      category: "boissons",
      subcategory: "vins",
      // "Wine Glass on Restaurant Table" — pexels.com/photo/wine-glass-on-restaurant-table-225228
      image: pexels(225228),
      translations: {
        fr: {
          name: "Vin rouge maison",
          description:
            "Bordeaux AOP sélectionné par notre sommelier, verre 15 cl",
        },
        en: {
          name: "House Red Wine",
          description: "Bordeaux AOP selected by our sommelier, 15 cl glass",
        },
        it: {
          name: "Vino rosso della casa",
          description:
            "Bordeaux AOP selezionato dal nostro sommelier, calice da 15 cl",
        },
        es: {
          name: "Vino tinto de la casa",
          description:
            "Bordeaux AOP seleccionado por nuestro sumiller, copa de 15 cl",
        },
      },
      price: 7,
      allergens: ["so2"],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 120, proteines: 0, glucides: 4, lipides: 0 },
    },
    {
      id: "jus-fruits",
      category: "boissons",
      subcategory: "jus",
      // "Fresh Fruit Juice with Oranges and Lemon" — pexels.com/photo/96974
      image: pexels(96974),
      translations: {
        fr: {
          name: "Jus de fruits frais",
          description:
            "Jus pressé du jour : orange, pomme-gingembre ou carotte-citron, 25 cl",
        },
        en: {
          name: "Fresh Fruit Juice",
          description:
            "Freshly pressed: orange, apple-ginger or carrot-lemon, 25 cl",
        },
        it: {
          name: "Succo di frutta fresco",
          description:
            "Succo del giorno: arancia, mela-zenzero o carota-limone, 25 cl",
        },
        es: {
          name: "Zumo de frutas natural",
          description:
            "Zumo del día: naranja, manzana-jengibre o zanahoria-limón, 25 cl",
        },
      },
      price: 5.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 90, proteines: 1, glucides: 22, lipides: 0 },
    },
  ],
  judy: [
    {
      id: "purist",
      category: "feelGoodDrinks",
      subcategory: "coldPressedJuices",
      image: "/judy/purist.jpeg",
      price: 7.4,
      allergens: ["celeri"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 50, proteines: 2, glucides: 10, lipides: 0 },
      translations: {
        fr: {
          name: "Purist — Digestion",
          description:
            "Concombre, blette, fenouil, kale, épinards, carotte, céleri, persil, coriandre, citron — 25 cl",
        },
        en: {
          name: "Purist — Digestion",
          description:
            "Cucumber, chard, fennel, kale, spinach, carrot, celery, parsley, coriander, lemon — 25 cl",
        },
        it: {
          name: "Purist — Digestion",
          description:
            "Cetriolo, bietola, finocchio, cavolo riccio, spinaci, carota, sedano, prezzemolo, coriandolo, limone — 25 cl",
        },
        es: {
          name: "Purist — Digestion",
          description:
            "Pepino, acelga, hinojo, col rizada, espinacas, zanahoria, apio, perejil, cilantro, limón — 25 cl",
        },
      },
    },
    {
      id: "elevate",
      category: "feelGoodDrinks",
      subcategory: "coldPressedJuices",
      image: "/judy/elevate.jpeg",
      price: 7.4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 60, proteines: 1, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Elevate — Energie",
          description: "Carotte, pomme, citron, gingembre, curcuma — 25 cl",
        },
        en: {
          name: "Elevate — Energie",
          description: "Carrot, apple, lemon, ginger, turmeric — 25 cl",
        },
        it: {
          name: "Elevate — Energie",
          description: "Carota, mela, limone, zenzero, curcuma — 25 cl",
        },
        es: {
          name: "Elevate — Energie",
          description: "Zanahoria, manzana, limón, jengibre, cúrcuma — 25 cl",
        },
      },
    },
    {
      id: "recover",
      category: "feelGoodDrinks",
      subcategory: "coldPressedJuices",
      image: "/judy/recover.jpeg",
      price: 7.4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 65, proteines: 2, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Recover — Recharge",
          description: "Pomme, ananas, concombre, épinards, spiruline — 25 cl",
        },
        en: {
          name: "Recover — Recharge",
          description: "Apple, pineapple, cucumber, spinach, spirulina — 25 cl",
        },
        it: {
          name: "Recover — Recharge",
          description: "Mela, ananas, cetriolo, spinaci, spirulina — 25 cl",
        },
        es: {
          name: "Recover — Recharge",
          description: "Manzana, piña, pepino, espinacas, espirulina — 25 cl",
        },
      },
    },
    {
      id: "cleanse",
      category: "feelGoodDrinks",
      subcategory: "coldPressedJuices",
      image: "/judy/cleanse.jpeg",
      price: 7.4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 55, proteines: 1, glucides: 12, lipides: 0 },
      translations: {
        fr: {
          name: "Cleanse — Equilibre",
          description:
            "Ananas, pomme, chou kale, eau de coco, charbon actif — 25 cl",
        },
        en: {
          name: "Cleanse — E",
          description:
            "Pineapple, apple, kale, coconut water, activated charcoal — 25 cl",
        },
        it: {
          name: "Cleanse — E",
          description:
            "Ananas, mela, cavolo riccio, acqua di cocco, carbone attivo — 25 cl",
        },
        es: {
          name: "Cleanse — E",
          description:
            "Piña, manzana, col rizada, agua de coco, carbón activado — 25 cl",
        },
      },
    },
    {
      id: "radiance",
      category: "feelGoodDrinks",
      subcategory: "coldPressedJuices",
      image: "/judy/radiance.jpeg",
      price: 7.4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 60, proteines: 1, glucides: 13, lipides: 0 },
      translations: {
        fr: {
          name: "Radiance — Tonifie",
          description:
            "Carotte, orange, gingembre, citron, vinaigre de cidre — 25 cl",
        },
        en: {
          name: "Radiance — Tonifie",
          description:
            "Carrot, orange, ginger, lemon, apple cider vinegar — 25 cl",
        },
        it: {
          name: "Radiance — Tonifie",
          description:
            "Carota, arancia, zenzero, limone, aceto di mele — 25 cl",
        },
        es: {
          name: "Radiance — Tonifie",
          description:
            "Zanahoria, naranja, jengibre, limón, vinagre de manzana — 25 cl",
        },
      },
    },
    {
      id: "glow",
      category: "feelGoodDrinks",
      subcategory: "coldPressedJuices",
      image: "/judy/glow.jpeg",
      price: 7.4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 55, proteines: 1, glucides: 12, lipides: 0 },
      translations: {
        fr: {
          name: "Glow — Eclat",
          description: "Pomme, fraise, citron — 25 cl",
        },
        en: {
          name: "Glow — E",
          description: "Apple, strawberry, lemon — 25 cl",
        },
        it: { name: "Glow — E", description: "Mela, fragola, limone — 25 cl" },
        es: { name: "Glow — E", description: "Manzana, fresa, limón — 25 cl" },
      },
    },
    {
      id: "fortify",
      category: "feelGoodDrinks",
      subcategory: "coldPressedShots",
      image: "/judy/fortify.jpeg",
      price: 4.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 20, proteines: 0, glucides: 5, lipides: 0 },
      translations: {
        fr: {
          name: "Fortify — Récupération",
          description: "Pomme, citron, gingembre, piment de Cayenne — 6 cl",
        },
        en: {
          name: "Fortify — Récupération",
          description: "Apple, lemon, ginger, cayenne pepper — 6 cl",
        },
        it: {
          name: "Fortify — Récupération",
          description: "Mela, limone, zenzero, pepe di Cayenna — 6 cl",
        },
        es: {
          name: "Fortify — Récupération",
          description: "Manzana, limón, jengibre, pimienta de Cayena — 6 cl",
        },
      },
    },
    {
      id: "switchel-shot",
      category: "feelGoodDrinks",
      subcategory: "coldPressedShots",
      image: "/judy/switchel-shot.jpeg",
      price: 4.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 18, proteines: 0, glucides: 4, lipides: 0 },
      translations: {
        fr: {
          name: "Switchel — Vitalité",
          description: "Pomme, citron, gingembre, vinaigre de cidre — 6 cl",
        },
        en: {
          name: "Switchel — Vitalité",
          description: "Apple, lemon, ginger, apple cider vinegar — 6 cl",
        },
        it: {
          name: "Switchel — Vitalité",
          description: "Mela, limone, zenzero, aceto di mele — 6 cl",
        },
        es: {
          name: "Switchel — Vitalité",
          description: "Manzana, limón, jengibre, vinagre de manzana — 6 cl",
        },
      },
    },
    {
      id: "sesame-latte",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/sesame-latte.jpeg",
      price: 6.5,
      allergens: ["sesame", "lait"],
      diets: ["vegan", "vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 110, proteines: 3, glucides: 14, lipides: 5 },
      translations: {
        fr: {
          name: "Sésame Latte",
          description:
            "Sésame, sirop de datte, charbon végétal actif, gingembre, poivre",
        },
        en: {
          name: "Sesame Latte",
          description:
            "Sesame, date syrup, activated vegetable charcoal, ginger, pepper",
        },
        it: {
          name: "Sesame Latte",
          description:
            "Sesamo, sciroppo di dattero, carbone vegetale attivo, zenzero, pepe",
        },
        es: {
          name: "Sesame Latte",
          description:
            "Sésamo, sirope de dátil, carbón vegetal activo, jengibre, pimienta",
        },
      },
    },
    {
      id: "rose-latte",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/rose-latte.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegan", "vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 100, proteines: 1, glucides: 12, lipides: 5 },
      translations: {
        fr: {
          name: "Rose Latte",
          description: "Pétale de rose, coco, shatavari, cardamome",
        },
        en: {
          name: "Rose Latte",
          description: "Rose petal, coconut, shatavari, cardamom",
        },
        it: {
          name: "Rose Latte",
          description: "Petalo di rosa, cocco, shatavari, cardamomo",
        },
        es: {
          name: "Rose Latte",
          description: "Pétalo de rosa, coco, shatavari, cardamomo",
        },
      },
    },
    {
      id: "matcha-latte",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/matcha-latte.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegan", "vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 80, proteines: 1, glucides: 10, lipides: 3 },
      translations: {
        fr: {
          name: "Matcha Latte",
          description: "Thé vert matcha japonais de chez Umami",
        },
        en: {
          name: "Matcha Latte",
          description: "Japanese matcha green tea from Umami",
        },
        it: {
          name: "Matcha Latte",
          description: "Tè verde matcha giapponese di Umami",
        },
        es: {
          name: "Matcha Latte",
          description: "Té verde matcha japonés de Umami",
        },
      },
    },
    {
      id: "chai-latte",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/choco-reishi.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegan", "vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 90, proteines: 1, glucides: 16, lipides: 2 },
      translations: {
        fr: {
          name: "Chaï Latte",
          description: "Thé noir, mélange d'épices indiennes, sirop d'érable",
        },
        en: {
          name: "Chai Latte",
          description: "Black tea, Indian spice blend, maple syrup",
        },
        it: {
          name: "Chai Latte",
          description: "Tè nero, miscela di spezie indiane, sciroppo d'acero",
        },
        es: {
          name: "Chai Latte",
          description: "Té negro, mezcla de especias indias, sirope de arce",
        },
      },
    },
    {
      id: "golden-mylk",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/golden-mylk.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegan", "vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 85, proteines: 1, glucides: 11, lipides: 4 },
      translations: {
        fr: {
          name: "Golden Mylk",
          description:
            "Curcuma, poivre noir, cardamome verte, gingembre, muscade",
        },
        en: {
          name: "Golden Mylk",
          description: "Turmeric, black pepper, green cardamom, ginger, nutmeg",
        },
        it: {
          name: "Golden Mylk",
          description:
            "Curcuma, pepe nero, cardamomo verde, zenzero, noce moscata",
        },
        es: {
          name: "Golden Mylk",
          description:
            "Cúrcuma, pimienta negra, cardamomo verde, jengibre, nuez moscada",
        },
      },
    },
    {
      id: "spicy-choco",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/spicy-choco.jpeg",
      price: 6.5,
      allergens: ["lait", "soja"],
      diets: ["vegetarien", "halal", "sans-gluten"],
      macros: { calories: 120, proteines: 2, glucides: 14, lipides: 6 },
      translations: {
        fr: {
          name: "Spicy Choco",
          description: "Chocolat noir, mélange d'épices",
        },
        en: { name: "Spicy Choco", description: "Dark chocolate, spice blend" },
        it: {
          name: "Spicy Choco",
          description: "Cioccolato fondente, miscela di spezie",
        },
        es: {
          name: "Spicy Choco",
          description: "Chocolate negro, mezcla de especias",
        },
      },
    },
    {
      id: "choco-reishi",
      category: "feelGoodDrinks",
      subcategory: "naturopathicLatte",
      image: "/judy/choco-reishi.jpeg",
      price: 6.5,
      allergens: ["lait", "soja"],
      diets: ["vegetarien", "halal", "sans-gluten"],
      macros: { calories: 115, proteines: 2, glucides: 13, lipides: 6 },
      translations: {
        fr: {
          name: "Choco Reishi",
          description: "Chocolat noir, reishi, mélange d'épices",
        },
        en: {
          name: "Choco Reishi",
          description: "Dark chocolate, reishi mushroom, spice blend",
        },
        it: {
          name: "Choco Reishi",
          description: "Cioccolato fondente, reishi, miscela di spezie",
        },
        es: {
          name: "Choco Reishi",
          description: "Chocolate negro, reishi, mezcla de especias",
        },
      },
    },
    {
      id: "sunset-skin-balance",
      category: "feelGoodDrinks",
      subcategory: "naturopathicSmoothies",
      image: "/judy/sunset-skin-balance.jpeg",
      price: 10,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 210, proteines: 3, glucides: 32, lipides: 8 },
      translations: {
        fr: {
          name: "Sunset Skin Balance",
          description:
            "Carotte, pomme, orange, ananas, mangue, avocat, graines de lin, curcuma, eau de coco, cannelle",
        },
        en: {
          name: "Sunset Skin Balance",
          description:
            "Carrot, apple, orange, pineapple, mango, avocado, flax seeds, turmeric, coconut water, cinnamon",
        },
        it: {
          name: "Sunset Skin Balance",
          description:
            "Carota, mela, arancia, ananas, mango, avocado, semi di lino, curcuma, acqua di cocco, cannella",
        },
        es: {
          name: "Sunset Skin Balance",
          description:
            "Zanahoria, manzana, naranja, piña, mango, aguacate, semillas de lino, cúrcuma, agua de coco, canela",
        },
      },
    },
    {
      id: "scrambled-eggs",
      category: "brunch",
      subcategory: null,
      image: "/judy/scrambled-eggs.jpeg",
      price: 13.5,
      allergens: ["oeufs", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 380, proteines: 22, glucides: 28, lipides: 20 },
      translations: {
        fr: {
          name: "Scrambled Eggs",
          description:
            "Trois œufs brouillés, pain aux graines, légumes fermentés, dukkah rouge, pistou de persil",
        },
        en: {
          name: "Scrambled Eggs",
          description:
            "Three scrambled eggs, seeded bread, fermented vegetables, red dukkah, parsley pistou",
        },
        it: {
          name: "Scrambled Eggs",
          description:
            "Tre uova strapazzate, pane ai semi, verdure fermentate, dukkah rosso, pistou al prezzemolo",
        },
        es: {
          name: "Scrambled Eggs",
          description:
            "Tres huevos revueltos, pan con semillas, verduras fermentadas, dukkah rojo, pistou de perejil",
        },
      },
    },
    {
      id: "sweet-pancakes",
      category: "brunch",
      subcategory: null,
      image: "/judy/sweet-pancakes.jpeg",
      price: 13,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 360, proteines: 8, glucides: 58, lipides: 10 },
      translations: {
        fr: {
          name: "Sweet Pancakes — Fruits rouges",
          description: "Compote de fruits rouges, verveine, yaourt de coco",
        },
        en: {
          name: "Sweet Pancakes — Red Berries",
          description: "Red berry compote, verbena, coconut yoghurt",
        },
        it: {
          name: "Sweet Pancakes — Frutti rossi",
          description: "Composta di frutti rossi, verbena, yogurt di cocco",
        },
        es: {
          name: "Sweet Pancakes — Frutos rojos",
          description: "Compota de frutos rojos, verbena, yogur de coco",
        },
      },
    },
    {
      id: "savoury-pancakes",
      category: "brunch",
      subcategory: null,
      image: "/judy/savoury-pancakes.jpeg",
      price: 18,
      allergens: ["poissons", "soja", "oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 460, proteines: 30, glucides: 42, lipides: 18 },
      translations: {
        fr: {
          name: "Savoury Pancakes",
          description:
            "Saumon fumé de l'Atlantique, crème de tofu au gingembre, edamame, pickles d'oignon rouge, kimchi",
        },
        en: {
          name: "Savoury Pancakes",
          description:
            "Atlantic smoked salmon, ginger tofu cream, edamame, pickled red onion, kimchi",
        },
        it: {
          name: "Savoury Pancakes",
          description:
            "Salmone affumicato atlantico, crema di tofu allo zenzero, edamame, cipolle rosse in agrodolce, kimchi",
        },
        es: {
          name: "Savoury Pancakes",
          description:
            "Salmón ahumado del Atlántico, crema de tofu con jengibre, edamame, pickles de cebolla roja, kimchi",
        },
      },
    },
    {
      id: "avoloco-bowl",
      category: "brunch",
      subcategory: null,
      image: "/judy/avoloco-bowl.jpeg",
      price: 17.5,
      allergens: ["oeufs", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 420, proteines: 16, glucides: 34, lipides: 24 },
      translations: {
        fr: {
          name: "Avoloco Bowl",
          description:
            "Avocat, œuf poché, légumes de printemps, légumes fermentés, pain aux graines",
        },
        en: {
          name: "Avoloco Bowl",
          description:
            "Avocado, poached egg, spring vegetables, fermented vegetables, seeded bread",
        },
        it: {
          name: "Avoloco Bowl",
          description:
            "Avocado, uovo in camicia, verdure primaverili, verdure fermentate, pane ai semi",
        },
        es: {
          name: "Avoloco Bowl",
          description:
            "Aguacate, huevo pochado, verduras de primavera, verduras fermentadas, pan con semillas",
        },
      },
    },
    {
      id: "mediterranean-bowl",
      category: "brunch",
      subcategory: null,
      image: "/judy/mediterranean-bowl.jpeg",
      price: 17.6,
      allergens: ["sesame", "fruits-a-coque", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 390, proteines: 14, glucides: 52, lipides: 14 },
      translations: {
        fr: {
          name: "Mediterranean Bowl",
          description:
            "Taboulé de pois verts et concombre pressé, kefta de haricots rouges, fenouil rôti, yaourt tahini, tomates cerises rôties, dukkah rouge",
        },
        en: {
          name: "Mediterranean Bowl",
          description:
            "Green pea and pressed cucumber tabbouleh, red bean kefta, roasted fennel, tahini yoghurt, roasted cherry tomatoes, red dukkah",
        },
        it: {
          name: "Mediterranean Bowl",
          description:
            "Tabulé di piselli e cetriolo pressato, kefta di fagioli rossi, finocchio arrostito, yogurt tahini, pomodorini arrostiti, dukkah rosso",
        },
        es: {
          name: "Mediterranean Bowl",
          description:
            "Taboulé de guisantes verdes y pepino prensado, kefta de alubias rojas, hinojo asado, yogur tahini, tomates cherry asados, dukkah rojo",
        },
      },
    },
    {
      id: "kids-bento",
      category: "brunch",
      subcategory: null,
      image: "/judy/kids-bento.jpeg",
      price: 15,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 440, proteines: 28, glucides: 46, lipides: 14 },
      translations: {
        fr: {
          name: "Kid's Bento — Kids only",
          description:
            "Poulet français des Poulardes Saint-Martory, légumes de printemps, taboulé de pois verts, madeleine, Ice-Tea maison",
        },
        en: {
          name: "Kid's Bento — Kids only",
          description:
            "French chicken from Poulardes Saint-Martory, spring vegetables, green pea tabbouleh, madeleine, homemade iced tea",
        },
        it: {
          name: "Kid's Bento — Kids only",
          description:
            "Pollo francese delle Poulardes Saint-Martory, verdure primaverili, tabulé di piselli verdi, madeleine, tè freddo fatto in casa",
        },
        es: {
          name: "Kid's Bento — Kids only",
          description:
            "Pollo francés de Poulardes Saint-Martory, verduras de primavera, taboulé de guisantes verdes, madeleine, té helado casero",
        },
      },
    },
    {
      id: "energy-ball-choco",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/energyball-choco.jpeg",
      price: 2.8,
      allergens: ["fruits-a-coque", "soja"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 90, proteines: 4, glucides: 10, lipides: 4 },
      translations: {
        fr: {
          name: "Energy Ball Choco Protein",
          description: "Boule énergétique au chocolat et protéines",
        },
        en: {
          name: "Energy Ball Choco Protein",
          description: "Chocolate protein energy ball",
        },
        it: {
          name: "Energy Ball Choco Protein",
          description: "Pallina energetica al cioccolato e proteine",
        },
        es: {
          name: "Energy Ball Choco Protein",
          description: "Bola energética de chocolate y proteína",
        },
      },
    },
    {
      id: "energy-ball-carrot",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/energyball-carrot.jpeg",
      price: 2.8,
      allergens: ["fruits-a-coque"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 85, proteines: 4, glucides: 10, lipides: 3 },
      translations: {
        fr: {
          name: "Energy Ball Carrot Collagen",
          description: "Boule énergétique à la carotte et collagène",
        },
        en: {
          name: "Energy Ball Carrot Collagen",
          description: "Carrot collagen energy ball",
        },
        it: {
          name: "Energy Ball Carrot Collagen",
          description: "Pallina energetica alla carota e collagene",
        },
        es: {
          name: "Energy Ball Carrot Collagen",
          description: "Bola energética de zanahoria y colágeno",
        },
      },
    },
    {
      id: "cinnamon-roll",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/cinammon-roll.jpeg",
      price: 5,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 280, proteines: 5, glucides: 42, lipides: 10 },
      translations: {
        fr: {
          name: "Cinnamon Roll",
          description: "Roulé à la cannelle fait maison",
        },
        en: { name: "Cinnamon Roll", description: "Homemade cinnamon roll" },
        it: {
          name: "Cinnamon Roll",
          description: "Rotolo alla cannella fatto in casa",
        },
        es: { name: "Cinnamon Roll", description: "Rollo de canela casero" },
      },
    },
    {
      id: "brownie",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/brownie.jpeg",
      price: 6,
      allergens: ["oeufs", "fruits-a-coque", "soja"],
      diets: [
        "vegan",
        "casher",
        "halal",
        "vegetarien",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 310, proteines: 5, glucides: 36, lipides: 16 },
      translations: {
        fr: {
          name: "Brownie",
          description: "Brownie au chocolat noir fait maison",
        },
        en: { name: "Brownie", description: "Homemade dark chocolate brownie" },
        it: {
          name: "Brownie",
          description: "Brownie al cioccolato fondente fatto in casa",
        },
        es: {
          name: "Brownie",
          description: "Brownie de chocolate negro casero",
        },
      },
    },
    {
      id: "aussie-cookie",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/aussie-cookie.jpeg",
      price: 4,
      allergens: ["fruits-a-coque"],
      diets: ["vegan", "casher", "halal", "vegetarien", "sans-gluten"],
      macros: { calories: 220, proteines: 4, glucides: 28, lipides: 10 },
      translations: {
        fr: {
          name: "Aussie Cookie",
          description: "Cookie australien fait maison",
        },
        en: {
          name: "Aussie Cookie",
          description: "Homemade Australian-style cookie",
        },
        it: {
          name: "Aussie Cookie",
          description: "Cookie australiano fatto in casa",
        },
        es: { name: "Aussie Cookie", description: "Cookie australiano casero" },
      },
    },
    {
      id: "cookie-cajou",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/cookie-cajou.jpeg",
      price: 4,
      allergens: ["oeufs", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 210, proteines: 4, glucides: 26, lipides: 10 },
      translations: {
        fr: {
          name: "Cookie Cajou",
          description: "Cookie aux noix de cajou fait maison",
        },
        en: { name: "Cashew Cookie", description: "Homemade cashew cookie" },
        it: {
          name: "Cookie Cajou",
          description: "Cookie agli anacardi fatto in casa",
        },
        es: {
          name: "Cookie de anacardo",
          description: "Cookie de anacardo casero",
        },
      },
    },
    {
      id: "banana-bread",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/banana-bread.jpeg",
      price: 7,
      allergens: ["oeufs", "fruits-a-coque", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 320, proteines: 6, glucides: 44, lipides: 14 },
      translations: {
        fr: { name: "Banana Bread", description: "Toasté et beurre d'amande" },
        en: { name: "Banana Bread", description: "Toasted with almond butter" },
        it: {
          name: "Banana Bread",
          description: "Tostato con burro di mandorle",
        },
        es: {
          name: "Banana Bread",
          description: "Tostado con mantequilla de almendras",
        },
      },
    },
    {
      id: "cake-choco",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/cake-choco.jpeg",
      price: 5,
      allergens: ["oeufs", "lait", "soja"],
      diets: ["sans-gluten"],
      macros: { calories: 270, proteines: 5, glucides: 34, lipides: 12 },
      translations: {
        fr: {
          name: "Cake Choco",
          description: "Cake au chocolat noir fait maison",
        },
        en: {
          name: "Chocolate Cake",
          description: "Homemade dark chocolate cake",
        },
        it: {
          name: "Cake Choco",
          description: "Torta al cioccolato fondente fatta in casa",
        },
        es: {
          name: "Cake de chocolate",
          description: "Bizcocho de chocolate negro casero",
        },
      },
    },
    {
      id: "cake-citron-pavot",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/cake-citron-pavot.jpeg",
      price: 5,
      allergens: ["oeufs"],
      diets: ["sans-lactose", "sans-gluten"],
      macros: { calories: 240, proteines: 4, glucides: 32, lipides: 10 },
      translations: {
        fr: {
          name: "Cake Citron Pavot",
          description: "Cake au citron et graines de pavot fait maison",
        },
        en: {
          name: "Lemon Poppy Seed Cake",
          description: "Homemade lemon and poppy seed cake",
        },
        it: {
          name: "Cake Limone e Papavero",
          description: "Torta al limone e semi di papavero fatta in casa",
        },
        es: {
          name: "Cake de limón y amapola",
          description: "Bizcocho de limón y semillas de amapola casero",
        },
      },
    },
    {
      id: "madeleine",
      category: "judysBakery",
      subcategory: null,
      image: "/judy/madeleine.jpeg",
      price: 2.6,
      allergens: ["oeufs"],
      diets: ["sans-lactose", "sans-gluten"],
      macros: { calories: 110, proteines: 2, glucides: 14, lipides: 5 },
      translations: {
        fr: {
          name: "Madeleine",
          description: "Madeleine moelleuse faite maison",
        },
        en: { name: "Madeleine", description: "Homemade soft madeleine" },
        it: {
          name: "Madeleine",
          description: "Madeleine morbida fatta in casa",
        },
        es: { name: "Madeleine", description: "Madeleine esponjosa casera" },
      },
    },
    {
      id: "gateau-cru-chocolat",
      category: "desserts",
      subcategory: null,
      image: "/judy/gateau-cru-chocolat.jpeg",
      price: 9.5,
      allergens: ["fruits-a-coque"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 380, proteines: 6, glucides: 32, lipides: 26 },
      translations: {
        fr: {
          name: "Gâteau cru au chocolat",
          description:
            "Chocolat noir, noix de pécan, noisettes, noix, amandes, dattes",
        },
        en: {
          name: "Raw Chocolate Cake",
          description:
            "Dark chocolate, pecans, hazelnuts, walnuts, almonds, dates",
        },
        it: {
          name: "Torta cruda al cioccolato",
          description:
            "Cioccolato fondente, noci pecan, nocciole, noci, mandorle, datteri",
        },
        es: {
          name: "Tarta cruda de chocolate",
          description:
            "Chocolate negro, nueces pecán, avellanas, nueces, almendras, dátiles",
        },
      },
    },
    {
      id: "cheesecake-cru",
      category: "desserts",
      subcategory: null,
      image: pexels(1207918),
      price: 9,
      allergens: ["fruits-a-coque"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 360, proteines: 6, glucides: 28, lipides: 24 },
      translations: {
        fr: {
          name: "Cheesecake cru",
          description:
            "Agrumes infusés aux épices chaï, crème de cajou, noix de pécan, noisettes, noix, amandes, dattes",
        },
        en: {
          name: "Raw Cheesecake",
          description:
            "Chai-spiced citrus, cashew cream, pecans, hazelnuts, walnuts, almonds, dates",
        },
        it: {
          name: "Cheesecake crudo",
          description:
            "Agrumi infusi alle spezie chai, crema di anacardi, noci pecan, nocciole, noci, mandorle, datteri",
        },
        es: {
          name: "Cheesecake crudo",
          description:
            "Cítricos infusionados con especias chai, crema de anacardo, nueces pecán, avellanas, nueces, almendras, dátiles",
        },
      },
    },
    {
      id: "granola-bowl",
      category: "desserts",
      subcategory: null,
      image: "/judy/granola-bowl.jpeg",
      price: 10,
      allergens: ["fruits-a-coque"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 310, proteines: 5, glucides: 48, lipides: 10 },
      translations: {
        fr: {
          name: "Granola Bowl",
          description:
            "Yaourt de coco, mangue, coulis mangue-citron vert, fruit de la passion, granola",
        },
        en: {
          name: "Granola Bowl",
          description:
            "Coconut yoghurt, mango, mango-lime coulis, passion fruit, granola",
        },
        it: {
          name: "Granola Bowl",
          description:
            "Yogurt di cocco, mango, coulis mango-lime, frutto della passione, granola",
        },
        es: {
          name: "Granola Bowl",
          description:
            "Yogur de coco, mango, coulis de mango y lima, maracuyá, granola",
        },
      },
    },
    {
      id: "chia-pudding",
      category: "desserts",
      subcategory: null,
      image: "/judy/chia-pudding.jpeg",
      price: 9,
      allergens: ["fruits-a-coque"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 290, proteines: 6, glucides: 34, lipides: 14 },
      translations: {
        fr: {
          name: "Chia Pudding",
          description:
            "Graines de chia, lait de coco, lait d'amande maison, fraise, confiture de fraise et rhubarbe, pistaches",
        },
        en: {
          name: "Chia Pudding",
          description:
            "Chia seeds, coconut milk, homemade almond milk, strawberry, strawberry-rhubarb jam, pistachios",
        },
        it: {
          name: "Chia Pudding",
          description:
            "Semi di chia, latte di cocco, latte di mandorla fatto in casa, fragola, confettura di fragole e rabarbaro, pistacchi",
        },
        es: {
          name: "Chia Pudding",
          description:
            "Semillas de chía, leche de coco, leche de almendra casera, fresa, mermelada de fresa y ruibarbo, pistachos",
        },
      },
    },
    {
      id: "espresso",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/espresso.jpeg",
      price: 3,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Espresso", description: "Torréfié à Paris par Coutume" },
        en: { name: "Espresso", description: "Roasted in Paris by Coutume" },
        it: { name: "Espresso", description: "Tostato a Parigi da Coutume" },
        es: { name: "Espresso", description: "Tostado en París por Coutume" },
      },
    },
    {
      id: "cafe-allonge",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/cafe-allonge.jpeg",
      price: 3,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: {
          name: "Café Allongé",
          description: "Espresso allongé, torréfié à Paris par Coutume",
        },
        en: {
          name: "Lungo",
          description: "Long espresso, roasted in Paris by Coutume",
        },
        it: {
          name: "Caffè Allungato",
          description: "Espresso allungato, tostato a Parigi da Coutume",
        },
        es: {
          name: "Café Largo",
          description: "Espresso largo, tostado en París por Coutume",
        },
      },
    },
    {
      id: "double-espresso",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/double-espresso.jpeg",
      price: 4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 10, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: {
          name: "Double Espresso",
          description: "Double espresso, torréfié à Paris par Coutume",
        },
        en: {
          name: "Double Espresso",
          description: "Double espresso, roasted in Paris by Coutume",
        },
        it: {
          name: "Doppio Espresso",
          description: "Doppio espresso, tostato a Parigi da Coutume",
        },
        es: {
          name: "Doble Espresso",
          description: "Doble espresso, tostado en París por Coutume",
        },
      },
    },
    {
      id: "cafe-filtre",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: pexels(302899),
      price: 4,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: {
          name: "Café Filtre",
          description: "Café filtre, torréfié à Paris par Coutume",
        },
        en: {
          name: "Filter Coffee",
          description: "Filter coffee, roasted in Paris by Coutume",
        },
        it: {
          name: "Caffè Filtro",
          description: "Caffè filtro, tostato a Parigi da Coutume",
        },
        es: {
          name: "Café de Filtro",
          description: "Café de filtro, tostado en París por Coutume",
        },
      },
    },
    {
      id: "cortado",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/cortado.webp",
      price: 4.5,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 30, proteines: 1, glucides: 2, lipides: 1 },
      translations: {
        fr: {
          name: "Cortado (double)",
          description: "Double espresso avec une touche de lait",
        },
        en: {
          name: "Cortado (double)",
          description: "Double espresso with a splash of milk",
        },
        it: {
          name: "Cortado (doppio)",
          description: "Doppio espresso con un goccio di latte",
        },
        es: {
          name: "Cortado (doble)",
          description: "Doble espresso cortado con leche",
        },
      },
    },
    {
      id: "cappuccino",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/cappuccino.jpeg",
      price: 5.5,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 80, proteines: 4, glucides: 8, lipides: 3 },
      translations: {
        fr: {
          name: "Cappuccino",
          description: "Espresso, mousse de lait onctueuse",
        },
        en: {
          name: "Cappuccino",
          description: "Espresso with creamy milk foam",
        },
        it: {
          name: "Cappuccino",
          description: "Espresso con schiuma di latte cremosa",
        },
        es: {
          name: "Cappuccino",
          description: "Espresso con espuma de leche cremosa",
        },
      },
    },
    {
      id: "cafe-latte",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/cafe-latte.jpeg",
      price: 5.5,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 100, proteines: 5, glucides: 10, lipides: 4 },
      translations: {
        fr: {
          name: "Café Latte",
          description: "Espresso, lait vapeur onctueux",
        },
        en: { name: "Café Latte", description: "Espresso with steamed milk" },
        it: { name: "Caffè Latte", description: "Espresso con latte a vapore" },
        es: { name: "Café Latte", description: "Espresso con leche al vapor" },
      },
    },
    {
      id: "flat-white",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/flat-white.jpeg",
      price: 6,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 90, proteines: 5, glucides: 9, lipides: 4 },
      translations: {
        fr: {
          name: "Flat White",
          description: "Double ristretto, lait vapeur micro-texturé",
        },
        en: {
          name: "Flat White",
          description: "Double ristretto, micro-textured steamed milk",
        },
        it: {
          name: "Flat White",
          description: "Doppio ristretto, latte a vapore micro-texturizzato",
        },
        es: {
          name: "Flat White",
          description: "Doble ristretto, leche al vapor micro-texturizada",
        },
      },
    },
    {
      id: "almond-butter-latte",
      category: "cafeDeSpecialite",
      subcategory: null,
      image: "/judy/almond-butter-latte.jpeg",
      price: 6.5,
      allergens: ["lait", "fruits-a-coque"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 160, proteines: 5, glucides: 10, lipides: 10 },
      translations: {
        fr: {
          name: "Almond Butter Latte",
          description: "Espresso, beurre d'amande, lait vapeur",
        },
        en: {
          name: "Almond Butter Latte",
          description: "Espresso, almond butter, steamed milk",
        },
        it: {
          name: "Almond Butter Latte",
          description: "Espresso, burro di mandorle, latte a vapore",
        },
        es: {
          name: "Almond Butter Latte",
          description: "Espresso, mantequilla de almendras, leche al vapor",
        },
      },
    },
    {
      id: "the-vert",
      category: "thesbios",
      subcategory: null,
      image: "/judy/the-vert.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Thé Vert",
          description: "Gampola Green ou Earl Grey des Jardins de Gaïa",
        },
        en: {
          name: "Green Tea",
          description: "Gampola Green or Earl Grey from Jardins de Gaïa",
        },
        it: {
          name: "Tè Verde",
          description: "Gampola Green o Earl Grey dei Jardins de Gaïa",
        },
        es: {
          name: "Té Verde",
          description: "Gampola Green o Earl Grey de Jardins de Gaïa",
        },
      },
    },
    {
      id: "the-noir",
      category: "thesbios",
      subcategory: null,
      image: "/judy/the-noir.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Thé Noir",
          description: "English Breakfast des Jardins de Gaïa",
        },
        en: {
          name: "Black Tea",
          description: "English Breakfast from Jardins de Gaïa",
        },
        it: {
          name: "Tè Nero",
          description: "English Breakfast dei Jardins de Gaïa",
        },
        es: {
          name: "Té Negro",
          description: "English Breakfast de Jardins de Gaïa",
        },
      },
    },
    {
      id: "the-matcha",
      category: "thesbios",
      subcategory: null,
      image: "/judy/the-matcha.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 10, proteines: 1, glucides: 1, lipides: 0 },
      translations: {
        fr: { name: "Thé Matcha", description: "Matcha de chez Umami" },
        en: { name: "Matcha Tea", description: "Matcha from Umami" },
        it: { name: "Tè Matcha", description: "Matcha di Umami" },
        es: { name: "Té Matcha", description: "Matcha de Umami" },
      },
    },
    {
      id: "the-hojicha",
      category: "thesbios",
      subcategory: null,
      image: "/judy/the-hojicha.webp",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Thé Hojicha",
          description: "Thé vert japonais torréfié de chez Umami",
        },
        en: {
          name: "Hojicha Tea",
          description: "Roasted Japanese green tea from Umami",
        },
        it: {
          name: "Tè Hojicha",
          description: "Tè verde giapponese tostato di Umami",
        },
        es: {
          name: "Té Hojicha",
          description: "Té verde japonés tostado de Umami",
        },
      },
    },
    {
      id: "pousse-delice",
      category: "infusionsBios",
      subcategory: null,
      image: "/judy/pousse-delice.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Pousse Délice",
          description:
            "Fenouil, angélique, romarin, verveine, sarriette, menthe, souci",
        },
        en: {
          name: "Pousse Délice",
          description:
            "Fennel, angelica, rosemary, verbena, savory, mint, marigold",
        },
        it: {
          name: "Pousse Délice",
          description:
            "Finocchio, angelica, rosmarino, verbena, santoreggia, menta, calendula",
        },
        es: {
          name: "Pousse Délice",
          description:
            "Hinojo, angélica, romero, verbena, ajedrea, menta, caléndula",
        },
      },
    },
    {
      id: "belle-plante",
      category: "infusionsBios",
      subcategory: null,
      image: "/judy/belle-plante.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Belle Plante",
          description:
            "Rose de damas, frêne, framboise, ortie, baie rose, tilleul",
        },
        en: {
          name: "Belle Plante",
          description:
            "Damascus rose, ash, raspberry, nettle, pink berry, linden",
        },
        it: {
          name: "Belle Plante",
          description:
            "Rosa di Damasco, frassino, lampone, ortica, bacca rosa, tiglio",
        },
        es: {
          name: "Belle Plante",
          description:
            "Rosa de damasco, fresno, frambuesa, ortiga, baya rosa, tilo",
        },
      },
    },
    {
      id: "elixir",
      category: "infusionsBios",
      subcategory: null,
      image: "/judy/elixir.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "L'Élixir",
          description: "Gingembre, oranger bigaradier, citron, combava",
        },
        en: {
          name: "L'Élixir",
          description: "Ginger, bitter orange, lemon, kaffir lime",
        },
        it: {
          name: "L'Elixir",
          description: "Zenzero, arancio amaro, limone, lime kaffir",
        },
        es: {
          name: "L'Élixir",
          description: "Jengibre, naranja amarga, limón, lima kaffir",
        },
      },
    },
    {
      id: "ginger-lemon",
      category: "hotNaturalRemedies",
      subcategory: null,
      image: "/judy/hot-ginger.jpeg",
      price: 6.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 40, proteines: 0, glucides: 10, lipides: 0 },
      translations: {
        fr: { name: "Ginger Lemon", description: "Citron, miel, gingembre" },
        en: { name: "Ginger Lemon", description: "Lemon, honey, ginger" },
        it: { name: "Ginger Lemon", description: "Limone, miele, zenzero" },
        es: { name: "Ginger Lemon", description: "Limón, miel, jengibre" },
      },
    },
    {
      id: "switchel-hot",
      category: "hotNaturalRemedies",
      subcategory: null,
      image: "/judy/switchel.jpeg",
      price: 6.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 45, proteines: 0, glucides: 11, lipides: 0 },
      translations: {
        fr: {
          name: "Switchel",
          description: "Citronnade maison, vinaigre de cidre, sirop d'érable",
        },
        en: {
          name: "Switchel",
          description: "Homemade lemonade, apple cider vinegar, maple syrup",
        },
        it: {
          name: "Switchel",
          description:
            "Limonata fatta in casa, aceto di mele, sciroppo d'acero",
        },
        es: {
          name: "Switchel",
          description: "Limonada casera, vinagre de manzana, sirope de arce",
        },
      },
    },
    {
      id: "iced-strawberry-matcha-latte",
      category: "icedDrinks",
      subcategory: null,
      image: "/judy/iced-strawberry-matcha-latte.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 130, proteines: 4, glucides: 22, lipides: 3 },
      translations: {
        fr: {
          name: "Iced Strawberry Matcha Latte",
          description:
            "Matcha japonais Umami, lait, sirop de fraise, sur glace",
        },
        en: {
          name: "Iced Strawberry Matcha Latte",
          description:
            "Umami Japanese matcha, milk, strawberry syrup, over ice",
        },
        it: {
          name: "Iced Strawberry Matcha Latte",
          description:
            "Matcha giapponese Umami, latte, sciroppo di fragola, su ghiaccio",
        },
        es: {
          name: "Iced Strawberry Matcha Latte",
          description:
            "Matcha japonés Umami, leche, sirope de fresa, con hielo",
        },
      },
    },
    {
      id: "iced-mango-matcha-latte",
      category: "icedDrinks",
      subcategory: null,
      image: "/judy/iced-mango-matcha-latte.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 130, proteines: 4, glucides: 22, lipides: 3 },
      translations: {
        fr: {
          name: "Iced Mango Matcha Latte",
          description:
            "Matcha japonais Umami, lait, sirop de mangue, sur glace",
        },
        en: {
          name: "Iced Mango Matcha Latte",
          description: "Umami Japanese matcha, milk, mango syrup, over ice",
        },
        it: {
          name: "Iced Mango Matcha Latte",
          description:
            "Matcha giapponese Umami, latte, sciroppo di mango, su ghiaccio",
        },
        es: {
          name: "Iced Mango Matcha Latte",
          description:
            "Matcha japonés Umami, leche, sirope de mango, con hielo",
        },
      },
    },
    {
      id: "iced-latte",
      category: "icedDrinks",
      subcategory: null,
      image: "/judy/iced-latte.jpeg",
      price: 6.5,
      allergens: ["lait"],
      diets: ["vegetarien", "halal", "casher", "sans-gluten"],
      macros: { calories: 100, proteines: 4, glucides: 10, lipides: 3 },
      translations: {
        fr: {
          name: "Iced Latte",
          description: "Espresso Coutume, lait froid, sur glace",
        },
        en: {
          name: "Iced Latte",
          description: "Coutume espresso, cold milk, over ice",
        },
        it: {
          name: "Iced Latte",
          description: "Espresso Coutume, latte freddo, su ghiaccio",
        },
        es: {
          name: "Iced Latte",
          description: "Espresso Coutume, leche fría, con hielo",
        },
      },
    },
    {
      id: "cold-brew",
      category: "icedDrinks",
      subcategory: null,
      image: "/judy/cold-brew.jpeg",
      price: 6.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 10, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Cold Brew",
          description:
            "Cold brew du jour — demandez à l'équipe ce qui est préparé",
        },
        en: {
          name: "Cold Brew",
          description: "Cold brew of the day — ask the team what's on today",
        },
        it: {
          name: "Cold Brew",
          description:
            "Cold brew del giorno — chiedete al team cosa viene preparato oggi",
        },
        es: {
          name: "Cold Brew",
          description:
            "Cold brew del día — pregunta al equipo qué se prepara hoy",
        },
      },
    },
    {
      id: "ice-tea",
      category: "icedDrinks",
      subcategory: null,
      image: "/judy/ice-tea.jpeg",
      price: 6,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 20, proteines: 0, glucides: 5, lipides: 0 },
      translations: {
        fr: {
          name: "Ice Tea Maison",
          description: "Thé glacé fait maison — 33 cl",
        },
        en: {
          name: "Homemade Iced Tea",
          description: "Homemade iced tea — 33 cl",
        },
        it: {
          name: "Ice Tea Fatto in Casa",
          description: "Tè freddo fatto in casa — 33 cl",
        },
        es: { name: "Ice Tea Casero", description: "Té helado casero — 33 cl" },
      },
    },
    {
      id: "citronnade",
      category: "icedDrinks",
      subcategory: null,
      image: "/judy/citronnade.jpeg",
      price: 6,
      allergens: [],
      diets: ["vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"],
      macros: { calories: 50, proteines: 0, glucides: 13, lipides: 0 },
      translations: {
        fr: {
          name: "Citronnade Maison",
          description: "Citron, gingembre, miel — 33 cl",
        },
        en: {
          name: "Homemade Lemonade",
          description: "Lemon, ginger, honey — 33 cl",
        },
        it: {
          name: "Limonata Fatta in Casa",
          description: "Limone, zenzero, miele — 33 cl",
        },
        es: {
          name: "Limonada Casera",
          description: "Limón, jengibre, miel — 33 cl",
        },
      },
    },
    {
      id: "kombucha",
      category: "icedDrinks",
      subcategory: null,
      image: pexels(18285165),
      price: 7,
      allergens: [],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 30, proteines: 0, glucides: 7, lipides: 0 },
      translations: {
        fr: {
          name: "Kombucha Archipel",
          description: "Brut, feuille de figuier ou de framboisier — 33 cl",
        },
        en: {
          name: "Kombucha Archipel",
          description: "Natural, fig leaf or raspberry leaf — 33 cl",
        },
        it: {
          name: "Kombucha Archipel",
          description: "Naturale, foglia di fico o di lampone — 33 cl",
        },
        es: {
          name: "Kombucha Archipel",
          description: "Natural, hoja de higo o de frambuesa — 33 cl",
        },
      },
    },
    {
      id: "biere-blonde-sg",
      category: "biereEtVins",
      subcategory: null,
      image: pexels(25460968),
      price: 6,
      allergens: [],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 110, proteines: 1, glucides: 10, lipides: 0 },
      translations: {
        fr: {
          name: "Bière Blonde Sans Gluten",
          description: "Bière blonde sans gluten — 25 cl",
        },
        en: {
          name: "Gluten-Free Lager",
          description: "Gluten-free blonde lager — 25 cl",
        },
        it: {
          name: "Birra Bionda Senza Glutine",
          description: "Birra bionda senza glutine — 25 cl",
        },
        es: {
          name: "Cerveza Rubia Sin Gluten",
          description: "Cerveza rubia sin gluten — 25 cl",
        },
      },
    },
    {
      id: "sauvignon-blanc",
      category: "biereEtVins",
      subcategory: null,
      image: pexels(28454104),
      price: 8,
      allergens: ["so2"],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 100, proteines: 0, glucides: 3, lipides: 0 },
      translations: {
        fr: {
          name: "Sauvignon Blanc",
          description: "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl",
        },
        en: {
          name: "Sauvignon Blanc",
          description: "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl",
        },
        it: {
          name: "Sauvignon Blanc",
          description: "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl",
        },
        es: {
          name: "Sauvignon Blanc",
          description: "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl",
        },
      },
    },
    {
      id: "languedoc-rouge",
      category: "biereEtVins",
      subcategory: null,
      image: pexels(14465764),
      price: 8,
      allergens: ["so2"],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 4, lipides: 0 },
      translations: {
        fr: {
          name: "Languedoc Rouge",
          description: "Respirait, Château Ollieux Romanis, Languedoc — 14 cl",
        },
        en: {
          name: "Languedoc Red",
          description: "Respirait, Château Ollieux Romanis, Languedoc — 14 cl",
        },
        it: {
          name: "Languedoc Rosso",
          description: "Respirait, Château Ollieux Romanis, Languedoc — 14 cl",
        },
        es: {
          name: "Languedoc Tinto",
          description: "Respirait, Château Ollieux Romanis, Languedoc — 14 cl",
        },
      },
    },
    {
      id: "rose-provence",
      category: "biereEtVins",
      subcategory: null,
      image: pexels(5384595),
      price: 8,
      allergens: ["so2"],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 100, proteines: 0, glucides: 3, lipides: 0 },
      translations: {
        fr: {
          name: "Rosé de Provence",
          description: "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl",
        },
        en: {
          name: "Provence Rosé",
          description: "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl",
        },
        it: {
          name: "Rosé di Provenza",
          description: "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl",
        },
        es: {
          name: "Rosado de Provenza",
          description: "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl",
        },
      },
    },
  ],
  noglu: [
    // ========== SWEET =========
    {
      id: "croissant",
      category: "sweet",
      subcategory: null,
      image: "/noglu/croissant.webp",
      price: 2.9,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 240, proteines: 4, glucides: 28, lipides: 12 },
      translations: {
        fr: {
          name: "Croissant",
          description: "Croissant feuilleté sans gluten CONTIENT SARRASIN",
        },
        en: {
          name: "Croissant",
          description: "Gluten-free flaky croissant CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Croissant",
          description:
            "Croissant sfogliato senza glutine CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Croissant",
          description: "Croissant hojaldrado sin gluten CONTIENE ALFORFÓN",
        },
      },
    },
    {
      id: "pain-au-raisin",
      category: "sweet",
      subcategory: null,
      image: "/noglu/pain_aux_raisins.webp",
      price: 4.8,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 320, proteines: 5, glucides: 44, lipides: 13 },
      translations: {
        fr: {
          name: "Pain au Raisin",
          description:
            "Viennoiserie aux raisins, sans gluten CONTIENT SARRASIN",
        },
        en: {
          name: "Raisin Pastry",
          description: "Gluten-free raisin pastry CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Pain aux Raisins",
          description:
            "Viennoiseria all'uvetta senza glutine CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Pan de Pasas",
          description: "Bollería de pasas sin gluten CONTIENE ALFORFÓN",
        },
      },
    },
    {
      id: "crookie",
      category: "sweet",
      subcategory: null,
      image: "/noglu/crookie.webp",
      price: 4.5,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 380, proteines: 5, glucides: 42, lipides: 20 },
      translations: {
        fr: {
          name: "Crookie",
          description:
            "Croissant garni de pâte à cookie, sans gluten CONTIENT SARRASIN",
        },
        en: {
          name: "Crookie",
          description:
            "Croissant filled with cookie dough, gluten-free CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Crookie",
          description:
            "Croissant ripieno di pasta da cookie, senza glutine CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Crookie",
          description:
            "Croissant relleno de masa de cookie, sin gluten CONTIENE ALFORFÓN",
        },
      },
    },
    {
      id: "palmier",
      category: "sweet",
      subcategory: null,
      image: "/noglu/palmier.webp",
      price: 4.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 260, proteines: 3, glucides: 32, lipides: 13 },
      translations: {
        fr: {
          name: "Palmier",
          description: "Feuilleté caramélisé en forme de cœur, sans gluten",
        },
        en: {
          name: "Palmier",
          description: "Caramelized heart-shaped puff pastry, gluten-free",
        },
        it: {
          name: "Palmier",
          description: "Sfoglia caramellata a forma di cuore, senza glutine",
        },
        es: {
          name: "Palmier",
          description: "Hojaldre caramelizado en forma de corazón, sin gluten",
        },
      },
    },
    {
      id: "roule-cannelle",
      category: "sweet",
      subcategory: null,
      image: "/noglu/cinammon-roll.webp",
      price: 6.5,
      allergens: ["oeufs", "fruits-a-coque"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 360, proteines: 5, glucides: 48, lipides: 16 },
      translations: {
        fr: {
          name: "Roulé Cannelle",
          description: "Roulé à la cannelle, sans gluten",
        },
        en: { name: "Cinnamon Roll", description: "Gluten-free cinnamon roll" },
        it: {
          name: "Rotolo alla Cannella",
          description: "Rotolo alla cannella senza glutine",
        },
        es: {
          name: "Rollo de Canela",
          description: "Rollo de canela sin gluten",
        },
      },
    },
    {
      id: "scone-myrtille",
      category: "sweet",
      subcategory: null,
      image: "/noglu/scone-cranberries.webp",
      price: 4,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 280, proteines: 5, glucides: 36, lipides: 12 },
      translations: {
        fr: {
          name: "Scone Myrtille",
          description: "Scone aux myrtilles, sans gluten",
        },
        en: {
          name: "Blueberry Scone",
          description: "Gluten-free blueberry scone",
        },
        it: {
          name: "Scone ai Mirtilli",
          description: "Scone ai mirtilli senza glutine",
        },
        es: {
          name: "Scone de Arándanos",
          description: "Scone de arándanos sin gluten",
        },
      },
    },
    {
      id: "brownie",
      category: "sweet",
      subcategory: null,
      image: "/noglu/brownie.webp",
      price: 6.5,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 380, proteines: 5, glucides: 42, lipides: 22 },
      translations: {
        fr: {
          name: "Brownie",
          description: "Brownie au chocolat, sans gluten",
        },
        en: { name: "Brownie", description: "Gluten-free chocolate brownie" },
        it: {
          name: "Brownie",
          description: "Brownie al cioccolato senza glutine",
        },
        es: { name: "Brownie", description: "Brownie de chocolate sin gluten" },
      },
    },
    {
      id: "cookie",
      category: "sweet",
      subcategory: null,
      image: "/noglu/cookie-pepite-chocolat.webp",
      price: 4.5,
      allergens: ["oeufs", "lait", "fruits-a-coque", "arachides", "soja"],
      diets: ["sans-gluten"],
      macros: { calories: 320, proteines: 5, glucides: 38, lipides: 16 },
      translations: {
        fr: {
          name: "Cookie",
          description: "Cookie sans gluten CONTIENT SARRASIN",
        },
        en: {
          name: "Cookie",
          description: "Gluten-free cookie CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Cookie",
          description: "Cookie senza glutine CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Cookie",
          description: "Cookie sin gluten CONTIENE ALFORFÓN",
        },
      },
    },
    {
      id: "donut",
      category: "sweet",
      subcategory: null,
      image: "/noglu/donut-sucre.webp",
      price: 6.5,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 360, proteines: 5, glucides: 46, lipides: 17 },
      translations: {
        fr: { name: "Donut", description: "Donut sans gluten" },
        en: { name: "Donut", description: "Gluten-free donut" },
        it: { name: "Donut", description: "Donut senza glutine" },
        es: { name: "Donut", description: "Donut sin gluten" },
      },
    },
    {
      id: "tartelette",
      category: "sweet",
      subcategory: null,
      image: "/noglu/tartelette-citron.webp",
      price: 8,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 340, proteines: 5, glucides: 40, lipides: 18 },
      translations: {
        fr: { name: "Tartelette", description: "Tartelette sans gluten" },
        en: { name: "Tartlet", description: "Gluten-free tartlet" },
        it: { name: "Tartelletta", description: "Tartelletta senza glutine" },
        es: { name: "Tartaleta", description: "Tartaleta sin gluten" },
      },
    },
    {
      id: "pain-au-chocolat",
      category: "sweet",
      subcategory: null,
      image: "/noglu/pain-au-chocolat.webp",
      price: 3,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 280, proteines: 4, glucides: 32, lipides: 14 },
      translations: {
        fr: {
          name: "Pain au Chocolat",
          description:
            "Viennoiserie au chocolat, sans gluten CONTIENT SARRASIN",
        },
        en: {
          name: "Chocolate Pastry",
          description: "Gluten-free chocolate pastry CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Pain au Chocolat",
          description:
            "Viennoiseria al cioccolato senza glutine CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Pan de Chocolate",
          description: "Bollería de chocolate sin gluten CONTIENE ALFORFÓN",
        },
      },
    },
    // { "id": "pain-chocolat-amandes", "category": "sweet", "subcategory": null, "image": "/noglu/.webp", "price": 5, "allergens": ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"], "diets": ["sans-gluten"], "macros": { "calories": 360, "proteines": 6, "glucides": 38, "lipides": 18 }, "translations": { "fr": { "name": "Pain Chocolat aux Amandes", "description": "Pain au chocolat aux amandes, sans gluten" }, "en": { "name": "Almond Chocolate Pastry", "description": "Gluten-free almond chocolate pastry" }, "it": { "name": "Pain au Chocolat alle Mandorle", "description": "Pain au chocolat alle mandorle senza glutine" }, "es": { "name": "Pan de Chocolate con Almendras", "description": "Pan de chocolate con almendras sin gluten" } } },
    {
      id: "chausson-pommes",
      category: "sweet",
      subcategory: null,
      image: "/noglu/chausson-aux-pommes.webp",
      price: 4.5,
      allergens: [],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 290, proteines: 3, glucides: 38, lipides: 14 },
      translations: {
        fr: {
          name: "Chausson aux Pommes",
          description: "Chausson aux pommes, sans gluten CONTIENT SARRASIN",
        },
        en: {
          name: "Apple Turnover",
          description: "Gluten-free apple turnover CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Sfoglia di Mele",
          description: "Sfoglia di mele senza glutine CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Empanada de Manzana",
          description: "Empanada de manzana sin gluten CONTIENE ALFORFÓN",
        },
      },
    },
    {
      id: "pain-suisse",
      category: "sweet",
      subcategory: null,
      image: "/noglu/pain-suisse.webp",
      price: 5,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 340, proteines: 5, glucides: 42, lipides: 16 },
      translations: {
        fr: {
          name: "Pain Suisse",
          description: "Pain suisse, sans gluten CONTIENT MAÏS",
        },
        en: {
          name: "Swiss Pastry",
          description: "Gluten-free Swiss pastry CONTAINS CORN",
        },
        it: {
          name: "Pain Suisse",
          description: "Pain suisse senza glutine CONTIENE GRANOTURCO",
        },
        es: {
          name: "Pan Suizo",
          description: "Pan suizo sin gluten CONTIENE MAÍZ",
        },
      },
    },
    {
      id: "cannele",
      category: "sweet",
      subcategory: null,
      image: "/noglu/cannele.webp",
      price: 6.5,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 220, proteines: 4, glucides: 32, lipides: 8 },
      translations: {
        fr: { name: "Cannelé", description: "Cannelé bordelais, sans gluten" },
        en: { name: "Cannelé", description: "Gluten-free Bordeaux cannelé" },
        it: { name: "Cannelé", description: "Cannelé bordolese senza glutine" },
        es: { name: "Cannelé", description: "Cannelé bordelés sin gluten" },
      },
    },
    {
      id: "madeleine-nature",
      category: "sweet",
      subcategory: null,
      image: "/noglu/madeleine.webp",
      price: 3.5,
      allergens: ["oeufs", "soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 130, proteines: 2, glucides: 16, lipides: 6 },
      translations: {
        fr: {
          name: "Madeleine Nature",
          description: "Madeleine moelleuse nature, sans gluten",
        },
        en: {
          name: "Plain Madeleine",
          description: "Soft plain madeleine, gluten-free",
        },
        it: {
          name: "Madeleine Naturale",
          description: "Madeleine morbida naturale, senza glutine",
        },
        es: {
          name: "Madeleine Natural",
          description: "Madeleine esponjosa natural, sin gluten",
        },
      },
    },
    // { "id": "madeleine-chocolat", "category": "sweet", "subcategory": null, "image": "/noglu/.webp", "price": 2, "allergens": ["oeufs", "arachides", "fruits-a-coque", "sesame"], "diets": ["sans-gluten"], "macros": { "calories": 140, "proteines": 2, "glucides": 17, "lipides": 7 }, "translations": { "fr": { "name": "Madeleine Chocolat", "description": "Madeleine au chocolat, sans gluten" }, "en": { "name": "Chocolate Madeleine", "description": "Gluten-free chocolate madeleine" }, "it": { "name": "Madeleine al Cioccolato", "description": "Madeleine al cioccolato senza glutine" }, "es": { "name": "Madeleine de Chocolate", "description": "Madeleine de chocolate sin gluten" } } },
    {
      id: "part-cake-noisette-chocolat",
      category: "sweet",
      subcategory: null,
      image: "/noglu/cake-noisette-chocolat.webp",
      price: 2.5,
      allergens: ["fruits-a-coque", "soja"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 240, proteines: 4, glucides: 30, lipides: 12 },
      translations: {
        fr: {
          name: "Part de Cake Noisette-Chocolat",
          description: "Cake noisette et chocolat, sans gluten",
        },
        en: {
          name: "Hazelnut-Chocolate Cake Slice",
          description: "Gluten-free hazelnut and chocolate cake",
        },
        it: {
          name: "Fetta di Cake Nocciola-Cioccolato",
          description: "Cake nocciola e cioccolato senza glutine",
        },
        es: {
          name: "Porción de Cake Avellana-Chocolate",
          description: "Cake de avellana y chocolate sin gluten",
        },
      },
    },
    // { "id": "part-cake-carotte", "category": "sweet", "subcategory": null, "image": "/noglu/.webp", "price": 6.5, "allergens": ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"], "diets": ["sans-gluten"], "macros": { "calories": 320, "proteines": 5, "glucides": 38, "lipides": 16 }, "translations": { "fr": { "name": "Carrot Cake", "description": "Cake à la carotte, sans gluten" }, "en": { "name": "Carrot Cake", "description": "Gluten-free carrot cake" }, "it": { "name": "Carrot Cake", "description": "Carrot cake senza glutine" }, "es": { "name": "Carrot Cake", "description": "Carrot cake sin gluten" } } },
    // { "id": "part-cake-citron-pavot", "category": "sweet", "subcategory": null, "image": "/noglu/.webp", "price": 6.5, "allergens": ["oeufs", "arachides", "fruits-a-coque", "sesame"], "diets": ["sans-gluten", "sans-lactose"], "macros": { "calories": 290, "proteines": 4, "glucides": 36, "lipides": 14 }, "translations": { "fr": { "name": "Cake Citron Pavot", "description": "Cake citron et graines de pavot, sans gluten" }, "en": { "name": "Lemon Poppy Seed Cake", "description": "Gluten-free lemon and poppy seed cake" }, "it": { "name": "Cake Limone e Papavero", "description": "Cake limone e semi di papavero senza glutine" }, "es": { "name": "Cake de Limón y Amapola", "description": "Cake de limón y semillas de amapola sin gluten" } } },
    {
      id: "eclair",
      category: "sweet",
      subcategory: null,
      image: "/noglu/eclair-chocolat.webp",
      price: 6,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 280, proteines: 5, glucides: 32, lipides: 14 },
      translations: {
        fr: { name: "Éclair", description: "Éclair sans gluten" },
        en: { name: "Éclair", description: "Gluten-free éclair" },
        it: { name: "Éclair", description: "Éclair senza glutine" },
        es: { name: "Éclair", description: "Éclair sin gluten" },
      },
    },
    {
      id: "moelleux-chocolat-pistache",
      category: "sweet",
      subcategory: null,
      image: "/noglu/moelleux-chocolat-pistache.webp",
      price: 7.5,
      allergens: ["fruits-a-coque"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 360, proteines: 6, glucides: 38, lipides: 20 },
      translations: {
        fr: {
          name: "Moelleux Chocolat Pistache",
          description: "Moelleux chocolat et pistache, sans gluten",
        },
        en: {
          name: "Chocolate Pistachio Cake",
          description: "Soft chocolate pistachio cake, gluten-free",
        },
        it: {
          name: "Morbido Cioccolato Pistacchio",
          description: "Morbido al cioccolato e pistacchio senza glutine",
        },
        es: {
          name: "Bizcocho Chocolate Pistacho",
          description: "Bizcocho esponjoso de chocolate y pistacho sin gluten",
        },
      },
    },
    {
      id: "cheesecake",
      category: "sweet",
      subcategory: null,
      image: "/noglu/cheesecake.webp",
      price: 7.5,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 380, proteines: 7, glucides: 36, lipides: 22 },
      translations: {
        fr: { name: "Cheesecake", description: "Cheesecake sans gluten" },
        en: { name: "Cheesecake", description: "Gluten-free cheesecake" },
        it: { name: "Cheesecake", description: "Cheesecake senza glutine" },
        es: { name: "Cheesecake", description: "Cheesecake sin gluten" },
      },
    },

    // ========== DRINK ==========
    {
      id: "espresso",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/30349793/pexels-photo-30349793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 2.8,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Espresso", description: "Espresso" },
        en: { name: "Espresso", description: "Espresso" },
        it: { name: "Espresso", description: "Espresso" },
        es: { name: "Espresso", description: "Espresso" },
      },
    },
    {
      id: "double-espresso",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/29269201/pexels-photo-29269201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 10, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Double Espresso", description: "Double espresso" },
        en: { name: "Double Espresso", description: "Double espresso" },
        it: { name: "Doppio Espresso", description: "Doppio espresso" },
        es: { name: "Doble Espresso", description: "Doble espresso" },
      },
    },
    {
      id: "allonge",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/12407412/pexels-photo-12407412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 3,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Allongé", description: "Café allongé" },
        en: { name: "Lungo", description: "Long espresso" },
        it: { name: "Caffè Allungato", description: "Caffè allungato" },
        es: { name: "Café Largo", description: "Café largo" },
      },
    },
    {
      id: "filtre",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/10917525/pexels-photo-10917525.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 5,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Filtre", description: "Café filtre" },
        en: { name: "Filter Coffee", description: "Filter coffee" },
        it: { name: "Caffè Filtro", description: "Caffè filtro" },
        es: { name: "Café de Filtro", description: "Café de filtro" },
      },
    },
    {
      id: "noisette",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/28052354/pexels-photo-28052354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 3.5,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 30, proteines: 1, glucides: 2, lipides: 1 },
      translations: {
        fr: {
          name: "Noisette",
          description: "Espresso avec une touche de lait",
        },
        en: { name: "Noisette", description: "Espresso with a splash of milk" },
        it: {
          name: "Noisette",
          description: "Espresso con un goccio di latte",
        },
        es: { name: "Noisette", description: "Espresso con un toque de leche" },
      },
    },
    {
      id: "cappuccino",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/29650855/pexels-photo-29650855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 90, proteines: 4, glucides: 8, lipides: 4 },
      translations: {
        fr: {
          name: "Cappuccino",
          description: "Espresso, mousse de lait onctueuse",
        },
        en: {
          name: "Cappuccino",
          description: "Espresso with creamy milk foam",
        },
        it: {
          name: "Cappuccino",
          description: "Espresso con schiuma di latte cremosa",
        },
        es: {
          name: "Cappuccino",
          description: "Espresso con espuma de leche cremosa",
        },
      },
    },
    {
      id: "flat-white",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6.5,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 100, proteines: 5, glucides: 9, lipides: 4 },
      translations: {
        fr: {
          name: "Flat White",
          description: "Double ristretto, lait vapeur micro-texturé",
        },
        en: {
          name: "Flat White",
          description: "Double ristretto, micro-textured steamed milk",
        },
        it: {
          name: "Flat White",
          description: "Doppio ristretto, latte a vapore micro-texturizzato",
        },
        es: {
          name: "Flat White",
          description: "Doble ristretto, leche al vapor micro-texturizada",
        },
      },
    },
    {
      id: "latte",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/1889574/pexels-photo-1889574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6.5,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 110, proteines: 5, glucides: 11, lipides: 4 },
      translations: {
        fr: { name: "Latte", description: "Espresso, lait vapeur onctueux" },
        en: { name: "Latte", description: "Espresso with steamed milk" },
        it: { name: "Latte", description: "Espresso con latte a vapore" },
        es: { name: "Latte", description: "Espresso con leche al vapor" },
      },
    },
    {
      id: "chocolat-chaud",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/5407267/pexels-photo-5407267.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 220, proteines: 6, glucides: 28, lipides: 9 },
      translations: {
        fr: { name: "Chocolat Chaud", description: "Chocolat chaud" },
        en: { name: "Hot Chocolate", description: "Hot chocolate" },
        it: { name: "Cioccolata Calda", description: "Cioccolata calda" },
        es: { name: "Chocolate Caliente", description: "Chocolate caliente" },
      },
    },
    {
      id: "mocaccino",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/11512983/pexels-photo-11512983.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 7,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 240, proteines: 6, glucides: 30, lipides: 10 },
      translations: {
        fr: {
          name: "Mocaccino",
          description: "Espresso, chocolat, lait vapeur",
        },
        en: {
          name: "Mocaccino",
          description: "Espresso, chocolate, steamed milk",
        },
        it: {
          name: "Mocaccino",
          description: "Espresso, cioccolato, latte a vapore",
        },
        es: {
          name: "Mocaccino",
          description: "Espresso, chocolate, leche al vapor",
        },
      },
    },
    {
      id: "chicoree",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/968678/pexels-photo-968678.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 3,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: { name: "Chicorée", description: "Chicorée" },
        en: { name: "Chicory", description: "Chicory drink" },
        it: { name: "Cicoria", description: "Cicoria" },
        es: { name: "Achicoria", description: "Achicoria" },
      },
    },
    {
      id: "chicoree-latte",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/4869281/pexels-photo-4869281.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6.5,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 110, proteines: 5, glucides: 12, lipides: 4 },
      translations: {
        fr: { name: "Chicorée Latte", description: "Chicorée au lait vapeur" },
        en: { name: "Chicory Latte", description: "Chicory with steamed milk" },
        it: {
          name: "Chicoria Latte",
          description: "Cicoria con latte a vapore",
        },
        es: {
          name: "Achicoria Latte",
          description: "Achicoria con leche al vapor",
        },
      },
    },
    {
      id: "matcha-latte",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/2227126/pexels-photo-2227126.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 7,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 110, proteines: 5, glucides: 12, lipides: 4 },
      translations: {
        fr: {
          name: "Matcha Latte",
          description: "Thé vert matcha au lait vapeur",
        },
        en: {
          name: "Matcha Latte",
          description: "Matcha green tea with steamed milk",
        },
        it: {
          name: "Matcha Latte",
          description: "Tè verde matcha con latte a vapore",
        },
        es: {
          name: "Matcha Latte",
          description: "Té verde matcha con leche al vapor",
        },
      },
    },
    {
      id: "chai-latte",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/5947062/pexels-photo-5947062.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 7,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 130, proteines: 5, glucides: 18, lipides: 4 },
      translations: {
        fr: {
          name: "Chai Latte",
          description: "Thé noir, mélange d'épices, lait vapeur",
        },
        en: {
          name: "Chai Latte",
          description: "Black tea, spice blend, steamed milk",
        },
        it: {
          name: "Chai Latte",
          description: "Tè nero, miscela di spezie, latte a vapore",
        },
        es: {
          name: "Chai Latte",
          description: "Té negro, mezcla de especias, leche al vapor",
        },
      },
    },
    {
      id: "infusion-calme",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/6637427/pexels-photo-6637427.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Infusion Calme",
          description: "Honeybush, écorces d'orange, citronelle, verveine",
        },
        en: {
          name: "Calm Infusion",
          description: "Honeybush, orange peel, lemongrass, verbena",
        },
        it: {
          name: "Infusione Calma",
          description: "Honeybush, scorze d'arancia, citronella, verbena",
        },
        es: {
          name: "Infusión Calma",
          description: "Honeybush, cáscaras de naranja, citronela, verbena",
        },
      },
    },
    {
      id: "the",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/32667526/pexels-photo-32667526.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 5,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: { name: "Thé", description: "Earl Grey, Sencha ou Breakfast" },
        en: { name: "Tea", description: "Earl Grey, Sencha or Breakfast" },
        it: { name: "Tè", description: "Earl Grey, Sencha o Breakfast" },
        es: { name: "Té", description: "Earl Grey, Sencha o Breakfast" },
      },
    },
    {
      id: "jus-bio",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/17612821/pexels-photo-17612821.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 5,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 110, proteines: 1, glucides: 26, lipides: 0 },
      translations: {
        fr: { name: "Jus Bio", description: "Jus bio pomme ou orange" },
        en: {
          name: "Organic Juice",
          description: "Organic apple or orange juice",
        },
        it: {
          name: "Succo Bio",
          description: "Succo biologico mela o arancia",
        },
        es: { name: "Zumo Bio", description: "Zumo bio de manzana o naranja" },
      },
    },
    {
      id: "eau-plate",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/3371398/pexels-photo-3371398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 0, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Eau Plate", description: "Eau plate" },
        en: { name: "Still Water", description: "Still water" },
        it: { name: "Acqua Naturale", description: "Acqua naturale" },
        es: { name: "Agua sin Gas", description: "Agua sin gas" },
      },
    },
    {
      id: "eau-gazeuse",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/12987479/pexels-photo-12987479.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.8,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 0, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: { name: "Eau Gazeuse", description: "Eau gazeuse" },
        en: { name: "Sparkling Water", description: "Sparkling water" },
        it: { name: "Acqua Frizzante", description: "Acqua frizzante" },
        es: { name: "Agua con Gas", description: "Agua con gas" },
      },
    },
    {
      id: "ginger-beer",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/14609144/pexels-photo-14609144.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 110, proteines: 0, glucides: 28, lipides: 0 },
      translations: {
        fr: { name: "Ginger Beer", description: "Ginger beer" },
        en: { name: "Ginger Beer", description: "Ginger beer" },
        it: { name: "Ginger Beer", description: "Ginger beer" },
        es: { name: "Ginger Beer", description: "Ginger beer" },
      },
    },
    {
      id: "coca",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/8302769/pexels-photo-8302769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 140, proteines: 0, glucides: 35, lipides: 0 },
      translations: {
        fr: { name: "Coca / Coca Zero", description: "Coca-Cola ou Coca Zero" },
        en: { name: "Coke / Coke Zero", description: "Coca-Cola or Coke Zero" },
        it: { name: "Coca / Coca Zero", description: "Coca-Cola o Coca Zero" },
        es: { name: "Coca / Coca Zero", description: "Coca-Cola o Coca Zero" },
      },
    },
    {
      id: "cidre",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/29518289/pexels-photo-29518289.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 7.5,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: ["vegan", "vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 140, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: { name: "Cidre", description: "Cidre — 33 cl" },
        en: { name: "Cider", description: "Cider — 33 cl" },
        it: { name: "Sidro", description: "Sidro — 33 cl" },
        es: { name: "Sidra", description: "Sidra — 33 cl" },
      },
    },
    {
      id: "jus-vert-detox",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/9772469/pexels-photo-9772469.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 8,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 70, proteines: 2, glucides: 14, lipides: 0 },
      translations: {
        fr: { name: "Jus Vert Détox", description: "Jus vert détox" },
        en: { name: "Green Detox Juice", description: "Green detox juice" },
        it: { name: "Succo Verde Detox", description: "Succo verde detox" },
        es: { name: "Zumo Verde Detox", description: "Zumo verde detox" },
      },
    },
    {
      id: "jus-vitamines-boost",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/6127072/pexels-photo-6127072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 8,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 90, proteines: 1, glucides: 20, lipides: 0 },
      translations: {
        fr: { name: "Jus Vitamines Boost", description: "Jus vitaminé boost" },
        en: { name: "Vitamin Boost Juice", description: "Vitamin boost juice" },
        it: {
          name: "Succo Vitamine Boost",
          description: "Succo vitamine boost",
        },
        es: {
          name: "Zumo Vitaminas Boost",
          description: "Zumo vitaminas boost",
        },
      },
    },
    {
      id: "limonade",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/33107433/pexels-photo-33107433.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 100, proteines: 0, glucides: 25, lipides: 0 },
      translations: {
        fr: { name: "Limonade", description: "Limonade" },
        en: { name: "Lemonade", description: "Lemonade" },
        it: { name: "Limonata", description: "Limonata" },
        es: { name: "Limonada", description: "Limonada" },
      },
    },
    {
      id: "iced-tea",
      category: "drink",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/4731076/pexels-photo-4731076.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6.5,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 60, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: { name: "Iced Tea", description: "Thé glacé maison" },
        en: { name: "Iced Tea", description: "Homemade iced tea" },
        it: { name: "Iced Tea", description: "Tè freddo fatto in casa" },
        es: { name: "Iced Tea", description: "Té helado casero" },
      },
    },

    // ========== FOOD - PETIT-DÉJEUNER ==========
    {
      id: "toast-noglu",
      category: "food",
      subcategory: "petit-dejeuner",
      image:
        "https://images.pexels.com/photos/8106476/pexels-photo-8106476.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 7,
      allergens: ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 320, proteines: 7, glucides: 42, lipides: 13 },
      translations: {
        fr: {
          name: "Toast Noglu",
          description: "Brioche, baguette ou bagel, beurre & confiture",
        },
        en: {
          name: "Noglu Toast",
          description: "Brioche, baguette or bagel, butter & jam",
        },
        it: {
          name: "Toast Noglu",
          description: "Brioche, baguette o bagel, burro e marmellata",
        },
        es: {
          name: "Tostada Noglu",
          description: "Brioche, baguette o bagel, mantequilla y mermelada",
        },
      },
    },
    {
      id: "porridge-noglu-coco-chocolat",
      category: "food",
      subcategory: "petit-dejeuner",
      image:
        "https://images.pexels.com/photos/4220141/pexels-photo-4220141.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 380, proteines: 8, glucides: 52, lipides: 14 },
      translations: {
        fr: {
          name: "Porridge Noglu — Coco & Chocolat",
          description: "Porridge sans gluten coco et chocolat, fruits frais",
        },
        en: {
          name: "Noglu Porridge — Coconut & Chocolate",
          description:
            "Gluten-free coconut and chocolate porridge, fresh fruits",
        },
        it: {
          name: "Porridge Noglu — Cocco e Cioccolato",
          description:
            "Porridge senza glutine cocco e cioccolato, frutta fresca",
        },
        es: {
          name: "Porridge Noglu — Coco y Chocolate",
          description: "Porridge sin gluten coco y chocolate, frutas frescas",
        },
      },
    },
    {
      id: "porridge-noglu-amandes-cranberries",
      category: "food",
      subcategory: "petit-dejeuner",
      image:
        "https://images.pexels.com/photos/13427812/pexels-photo-13427812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 360, proteines: 8, glucides: 50, lipides: 13 },
      translations: {
        fr: {
          name: "Porridge Noglu — Amandes & Cranberries",
          description:
            "Porridge sans gluten amandes et cranberries, fruits frais",
        },
        en: {
          name: "Noglu Porridge — Almonds & Cranberries",
          description:
            "Gluten-free almond and cranberry porridge, fresh fruits",
        },
        it: {
          name: "Porridge Noglu — Mandorle e Cranberries",
          description:
            "Porridge senza glutine mandorle e mirtilli rossi, frutta fresca",
        },
        es: {
          name: "Porridge Noglu — Almendras y Arándanos",
          description:
            "Porridge sin gluten almendras y arándanos rojos, frutas frescas",
        },
      },
    },
    {
      id: "granola-bowl",
      category: "food",
      subcategory: "petit-dejeuner",
      image: "/noglu/granola-bowl.webp",
      price: 9,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 340, proteines: 10, glucides: 48, lipides: 12 },
      translations: {
        fr: {
          name: "Granola Bowl",
          description: "Fromage blanc, granola maison, fruits frais",
        },
        en: {
          name: "Granola Bowl",
          description: "Fromage blanc, homemade granola, fresh fruits",
        },
        it: {
          name: "Granola Bowl",
          description: "Fromage blanc, granola fatto in casa, frutta fresca",
        },
        es: {
          name: "Granola Bowl",
          description: "Fromage blanc, granola casero, frutas frescas",
        },
      },
    },
    {
      id: "omelette-nature",
      category: "food",
      subcategory: "petit-dejeuner",
      image:
        "https://images.pexels.com/photos/10934498/pexels-photo-10934498.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10,
      allergens: ["oeufs", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 320, proteines: 18, glucides: 22, lipides: 18 },
      translations: {
        fr: {
          name: "Omelette Nature & Salade",
          description: "Omelette nature, salade et pain toasté",
        },
        en: {
          name: "Plain Omelette & Salad",
          description: "Plain omelette, salad and toasted bread",
        },
        it: {
          name: "Omelette Naturale e Insalata",
          description: "Omelette naturale, insalata e pane tostato",
        },
        es: {
          name: "Tortilla Natural y Ensalada",
          description: "Tortilla natural, ensalada y pan tostado",
        },
      },
    },
    {
      id: "breakfast-sandwich",
      category: "food",
      subcategory: "petit-dejeuner",
      image:
        "https://images.pexels.com/photos/6529599/pexels-photo-6529599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.5,
      allergens: ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 520, proteines: 24, glucides: 38, lipides: 28 },
      translations: {
        fr: {
          name: "Breakfast Sandwich",
          description: "Bun, steak de chair à saucisse, cheddar, omelette",
        },
        en: {
          name: "Breakfast Sandwich",
          description: "Bun, sausage patty, cheddar, omelette",
        },
        it: {
          name: "Breakfast Sandwich",
          description: "Bun, hamburger di salsiccia, cheddar, omelette",
        },
        es: {
          name: "Breakfast Sandwich",
          description: "Bun, hamburguesa de salchicha, cheddar, tortilla",
        },
      },
    },

    // ========== FOOD - LUNCH ==========
    {
      id: "soupe-du-moment",
      category: "food",
      subcategory: "lunch",
      image:
        "https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 9,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 220, proteines: 6, glucides: 28, lipides: 8 },
      translations: {
        fr: {
          name: "Soupe du Moment",
          description: "Soupe du moment et pain toasté",
        },
        en: {
          name: "Soup of the Moment",
          description:
            "Soup of the moment with toasted bread CONTAINS BUCKWHEAT",
        },
        it: {
          name: "Zuppa del Momento",
          description:
            "Zuppa del momento con pane tostato CONTIENE GRANO SARACENO",
        },
        es: {
          name: "Sopa del Momento",
          description: "Sopa del momento con pan tostado CONTIENE ALFORFÓN",
        },
      },
    },
    {
      id: "croque-monsieur",
      category: "food",
      subcategory: "lunch",
      image: "/noglu/croque-monsieur.webp",
      price: 17,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 580, proteines: 26, glucides: 42, lipides: 32 },
      translations: {
        fr: {
          name: "Croque Monsieur & Salade",
          description:
            "Croque monsieur sans gluten et salade CONTIENT DU SARRASIN",
        },
        en: {
          name: "Croque Monsieur & Salad",
          description: "Gluten-free croque monsieur and salad",
        },
        it: {
          name: "Croque Monsieur e Insalata",
          description: "Croque monsieur senza glutine e insalata",
        },
        es: {
          name: "Croque Monsieur y Ensalada",
          description: "Croque monsieur sin gluten y ensalada",
        },
      },
    },
    {
      id: "quiche-lorraine",
      category: "food",
      subcategory: "lunch",
      image: "/noglu/quiche-lorraine.webp",
      price: 18,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten"],
      macros: { calories: 540, proteines: 22, glucides: 36, lipides: 32 },
      translations: {
        fr: {
          name: "Quiche Lorraine & Salade",
          description: "Quiche lorraine sans gluten et salade",
        },
        en: {
          name: "Quiche Lorraine & Salad",
          description: "Gluten-free quiche lorraine and salad",
        },
        it: {
          name: "Quiche Lorraine e Insalata",
          description: "Quiche lorraine senza glutine e insalata",
        },
        es: {
          name: "Quiche Lorraine y Ensalada",
          description: "Quiche lorraine sin gluten y ensalada",
        },
      },
    },
    {
      id: "quiche-poireaux",
      category: "food",
      subcategory: "lunch",
      image: "/noglu/quiche-poireau.webp",
      price: 18,
      allergens: ["oeufs", "fruits-a-coque"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 480, proteines: 16, glucides: 38, lipides: 26 },
      translations: {
        fr: {
          name: "Quiche Poireaux & Salade",
          description: "Quiche aux poireaux sans gluten et salade",
        },
        en: {
          name: "Leek Quiche & Salad",
          description: "Gluten-free leek quiche and salad",
        },
        it: {
          name: "Quiche ai Porri e Insalata",
          description: "Quiche ai porri senza glutine e insalata",
        },
        es: {
          name: "Quiche de Puerros y Ensalada",
          description: "Quiche de puerros sin gluten y ensalada",
        },
      },
    },
    {
      id: "burger-classique",
      category: "food",
      subcategory: "lunch",
      image: "/noglu/burger-classique.webp",
      price: 21,
      allergens: ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 780, proteines: 36, glucides: 58, lipides: 42 },
      translations: {
        fr: {
          name: "Burger Classique",
          description: "Steak, laitue, cheddar, pickles, frites et salade",
        },
        en: {
          name: "Classic Burger",
          description: "Steak, lettuce, cheddar, pickles, fries and salad",
        },
        it: {
          name: "Burger Classico",
          description:
            "Hamburger, lattuga, cheddar, pickles, patatine e insalata",
        },
        es: {
          name: "Hamburguesa Clásica",
          description: "Filete, lechuga, cheddar, pickles, patatas y ensalada",
        },
      },
    },
    {
      id: "avocado-toast",
      category: "food",
      subcategory: "lunch",
      image: "/noglu/avocado_toast.webp",
      price: 17,
      allergens: [],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 420, proteines: 8, glucides: 38, lipides: 26 },
      translations: {
        fr: {
          name: "Avocado Toast",
          description:
            "Crème d'avocat, avocat slicé, gomasio, julienne de betterave",
        },
        en: {
          name: "Avocado Toast",
          description:
            "Avocado cream, sliced avocado, gomasio, beetroot julienne",
        },
        it: {
          name: "Avocado Toast",
          description:
            "Crema di avocado, avocado a fette, gomasio, julienne di barbabietola",
        },
        es: {
          name: "Avocado Toast",
          description:
            "Crema de aguacate, aguacate en láminas, gomasio, juliana de remolacha",
        },
      },
    },
    {
      id: "gnocchi",
      category: "food",
      subcategory: "lunch",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 17,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 580, proteines: 18, glucides: 64, lipides: 26 },
      translations: {
        fr: {
          name: "Gnocchi",
          description: "Crème de basilic, roquette et parmesan",
        },
        en: {
          name: "Gnocchi",
          description: "Basil cream, arugula and parmesan",
        },
        it: {
          name: "Gnocchi",
          description: "Crema di basilico, rucola e parmigiano",
        },
        es: {
          name: "Ñoquis",
          description: "Crema de albahaca, rúcula y parmesano",
        },
      },
    },
    {
      id: "everything-bagel",
      category: "food",
      subcategory: "lunch",
      image:
        "https://images.pexels.com/photos/28962758/pexels-photo-28962758.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 22,
      allergens: [
        "oeufs",
        "lait",
        "sesame",
        "arachides",
        "fruits-a-coque",
        "poissons",
      ],
      diets: ["sans-gluten"],
      macros: { calories: 720, proteines: 32, glucides: 56, lipides: 38 },
      translations: {
        fr: {
          name: "Everything Bagel",
          description:
            "Pastrami, cheddar, oignons confits, pickles, frites et salade",
        },
        en: {
          name: "Everything Bagel",
          description:
            "Pastrami, cheddar, caramelized onions, pickles, fries and salad",
        },
        it: {
          name: "Everything Bagel",
          description:
            "Pastrami, cheddar, cipolle caramellate, pickles, patatine e insalata",
        },
        es: {
          name: "Everything Bagel",
          description:
            "Pastrami, cheddar, cebolla caramelizada, pickles, patatas y ensalada",
        },
      },
    },
    {
      id: "buddha-bowl",
      category: "food",
      subcategory: "lunch",
      image: "/noglu/buddah-bowl.webp",
      price: 19,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 480, proteines: 14, glucides: 56, lipides: 22 },
      translations: {
        fr: {
          name: "Buddha Bowl",
          description:
            "Sarrasin, pousse d'épinard, julienne de betterave, carotte glacée, feta, houmous, vinaigrette, graines torréfiées",
        },
        en: {
          name: "Buddha Bowl",
          description:
            "Buckwheat, baby spinach, beetroot julienne, glazed carrot, feta, hummus, vinaigrette, toasted seeds",
        },
        it: {
          name: "Buddha Bowl",
          description:
            "Grano saraceno, spinacini, julienne di barbabietola, carota glassata, feta, hummus, vinaigrette, semi tostati",
        },
        es: {
          name: "Buddha Bowl",
          description:
            "Trigo sarraceno, brotes de espinaca, juliana de remolacha, zanahoria glaseada, feta, hummus, vinagreta, semillas tostadas",
        },
      },
    },
    {
      id: "grilled-cheese",
      category: "food",
      subcategory: "lunch",
      image:
        "https://images.pexels.com/photos/14941252/pexels-photo-14941252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.5,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 560, proteines: 18, glucides: 44, lipides: 32 },
      translations: {
        fr: {
          name: "Grilled Cheese & Salade",
          description: "Grilled cheese sans gluten, frites et salade",
        },
        en: {
          name: "Grilled Cheese & Salad",
          description: "Gluten-free grilled cheese, fries and salad",
        },
        it: {
          name: "Grilled Cheese e Insalata",
          description: "Grilled cheese senza glutine, patatine e insalata",
        },
        es: {
          name: "Grilled Cheese y Ensalada",
          description: "Grilled cheese sin gluten, patatas y ensalada",
        },
      },
    },
    {
      id: "omelette-mixte",
      category: "food",
      subcategory: "lunch",
      image:
        "https://images.pexels.com/photos/1437268/pexels-photo-1437268.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 12.5,
      allergens: ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 460, proteines: 24, glucides: 26, lipides: 28 },
      translations: {
        fr: {
          name: "Omelette Mixte",
          description: "Omelette jambon-emmental, salade et pain toasté",
        },
        en: {
          name: "Mixed Omelette",
          description: "Ham and emmental omelette, salad and toasted bread",
        },
        it: {
          name: "Omelette Mista",
          description:
            "Omelette prosciutto ed emmental, insalata e pane tostato",
        },
        es: {
          name: "Tortilla Mixta",
          description: "Tortilla de jamón y emmental, ensalada y pan tostado",
        },
      },
    },

    // ========== FOOD - SIDES ==========
    {
      id: "cream-cheese",
      category: "food",
      subcategory: "sides",
      image:
        "https://images.pexels.com/photos/7525004/pexels-photo-7525004.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 2,
      allergens: ["lait", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten"],
      macros: { calories: 90, proteines: 2, glucides: 1, lipides: 9 },
      translations: {
        fr: { name: "Cream Cheese", description: "Cream cheese" },
        en: { name: "Cream Cheese", description: "Cream cheese" },
        it: { name: "Cream Cheese", description: "Cream cheese" },
        es: { name: "Cream Cheese", description: "Cream cheese" },
      },
    },
    {
      id: "avocat-entier",
      category: "food",
      subcategory: "sides",
      image:
        "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 240, proteines: 3, glucides: 12, lipides: 22 },
      translations: {
        fr: { name: "Avocat Entier", description: "Avocat entier" },
        en: { name: "Whole Avocado", description: "Whole avocado" },
        it: { name: "Avocado Intero", description: "Avocado intero" },
        es: { name: "Aguacate Entero", description: "Aguacate entero" },
      },
    },
    {
      id: "salade-verte",
      category: "food",
      subcategory: "sides",
      image:
        "https://images.pexels.com/photos/6428245/pexels-photo-6428245.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 30, proteines: 1, glucides: 4, lipides: 1 },
      translations: {
        fr: { name: "Salade Verte", description: "Salade verte" },
        en: { name: "Green Salad", description: "Green salad" },
        it: { name: "Insalata Verde", description: "Insalata verde" },
        es: { name: "Ensalada Verde", description: "Ensalada verde" },
      },
    },
    {
      id: "oeuf-dur",
      category: "food",
      subcategory: "sides",
      image:
        "https://images.pexels.com/photos/4397269/pexels-photo-4397269.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 3,
      allergens: ["oeufs", "arachides", "fruits-a-coque", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 140, proteines: 12, glucides: 1, lipides: 10 },
      translations: {
        fr: { name: "Œuf Dur x2", description: "Deux œufs durs" },
        en: {
          name: "Hard-Boiled Eggs x2",
          description: "Two hard-boiled eggs",
        },
        it: { name: "Uova Sode x2", description: "Due uova sode" },
        es: { name: "Huevo Duro x2", description: "Dos huevos duros" },
      },
    },
    {
      id: "frites-maison",
      category: "food",
      subcategory: "sides",
      image:
        "https://images.pexels.com/photos/1583891/pexels-photo-1583891.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 6,
      allergens: ["arachides", "fruits-a-coque", "sesame"],
      diets: [
        "vegan",
        "vegetarien",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 320, proteines: 4, glucides: 42, lipides: 14 },
      translations: {
        fr: { name: "Frites Maison", description: "Frites maison" },
        en: { name: "Homemade Fries", description: "Homemade fries" },
        it: {
          name: "Patatine Fatte in Casa",
          description: "Patatine fatte in casa",
        },
        es: { name: "Patatas Caseras", description: "Patatas caseras" },
      },
    },

    // // ========== FOOD - COMBOS ==========
    // { "id": "combo-petit-dej", "category": "food", "subcategory": "combos", "image": pexels(25460968), "price": 15, "allergens": ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"], "diets": ["sans-gluten"], "macros": { "calories": 580, "proteines": 14, "glucides": 78, "lipides": 22 }, "translations": { "fr": { "name": "Combo Petit Déj'", "description": "Jus bio, boisson chaude (expresso, allongé ou thé) avec sweet (1 pain au chocolat & 1 croissant) ou savory (omelette, salade & toast)" }, "en": { "name": "Breakfast Combo", "description": "Organic juice, hot drink (espresso, lungo or tea) with sweet (1 chocolate pastry & 1 croissant) or savory (omelette, salad & toast)" }, "it": { "name": "Combo Colazione", "description": "Succo bio, bevanda calda (espresso, allungato o tè) con dolce (1 pain au chocolat e 1 croissant) o salato (omelette, insalata e toast)" }, "es": { "name": "Combo Desayuno", "description": "Zumo bio, bebida caliente (espresso, largo o té) con dulce (1 pan de chocolate y 1 croissant) o salado (tortilla, ensalada y tostada)" } } },
    // { "id": "combo-dej", "category": "food", "subcategory": "combos", "image": pexels(25460968), "price": 21, "allergens": ["oeufs", "lait", "arachides", "fruits-a-coque", "sesame"], "diets": ["sans-gluten"], "macros": { "calories": 720, "proteines": 24, "glucides": 68, "lipides": 36 }, "translations": { "fr": { "name": "Combo Déj'", "description": "Plat (croque monsieur, grilled cheese ou quiche) + boisson, ou plat + boisson + dessert. Boissons : limonade, ginger beer, eaux, coca, coca zero. Desserts : donut, part de cake, cookie" }, "en": { "name": "Lunch Combo", "description": "Main (croque monsieur, grilled cheese or quiche) + drink, or main + drink + dessert. Drinks: lemonade, ginger beer, water, coke, coke zero. Desserts: donut, cake slice, cookie" }, "it": { "name": "Combo Pranzo", "description": "Piatto (croque monsieur, grilled cheese o quiche) + bevanda, o piatto + bevanda + dessert. Bevande: limonata, ginger beer, acque, coca, coca zero. Dessert: donut, fetta di cake, cookie" }, "es": { "name": "Combo Almuerzo", "description": "Plato (croque monsieur, grilled cheese o quiche) + bebida, o plato + bebida + postre. Bebidas: limonada, ginger beer, aguas, coca, coca zero. Postres: donut, porción de cake, cookie" } } }
  ],
  thaisil: [
    {
      id: "bo-bun",
      category: "dejeuner",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/31412386/pexels-photo-31412386.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.5,
      allergens: ["soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 520, proteines: 28, glucides: 65, lipides: 12 },
      translations: {
        fr: { name: "Bo Bun", description: "Midi, hors samedi & jours fériés" },
        en: {
          name: "Bo Bun",
          description: "Lunch, except Saturday & public holidays",
        },
        it: {
          name: "Bo Bun",
          description: "Pranzo, escluso sabato e giorni festivi",
        },
        es: {
          name: "Bo Bun",
          description: "Almuerzo, excepto sábados y días festivos",
        },
      },
    },
    {
      id: "salade-papaye-verte",
      category: "entrees",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/34699469/pexels-photo-34699469.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10.9,
      allergens: ["poissons"],
      diets: ["vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 180, proteines: 4, glucides: 32, lipides: 4 },
      translations: {
        fr: {
          name: "Salade de papaye verte",
          description: "Finement râpée à la main, le plat le plus populaire",
        },
        en: {
          name: "Green Papaya Salad",
          description: "Finely hand-grated, the most popular dish",
        },
        it: {
          name: "Insalata di Papaya Verde",
          description: "Finemente grattugiata a mano, il piatto più popolare",
        },
        es: {
          name: "Ensalada de Papaya Verde",
          description: "Rallada finamente a mano, el plato más popular",
        },
      },
    },
    {
      id: "salade-mangue",
      category: "entrees",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/30169390/pexels-photo-30169390.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10.9,
      allergens: ["poissons"],
      diets: ["vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 200, proteines: 4, glucides: 38, lipides: 4 },
      translations: {
        fr: {
          name: "Salade de mangue",
          description: "Tomate, concombre, laitue, coriandre, citron vert",
        },
        en: {
          name: "Mango Salad",
          description: "Tomato, cucumber, lettuce, cilantro, green lime",
        },
        it: {
          name: "Insalata di Mango",
          description: "Pomodoro, cetriolo, lattuga, coriandolo, lime verde",
        },
        es: {
          name: "Ensalada de Mango",
          description: "Tomate, pepino, lechuga, cilantro, lima verde",
        },
      },
    },
    {
      id: "nem-poulet",
      category: "entrees",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/12356601/pexels-photo-12356601.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10.9,
      allergens: ["poissons"],
      diets: ["vegetarien", "sans-gluten", "sans-lactose"],
      macros: { calories: 280, proteines: 14, glucides: 28, lipides: 12 },
      translations: {
        fr: { name: "Nem au poulet", description: "4 pièces" },
        en: { name: "Chicken Spring Roll", description: "4 pieces" },
        it: { name: "Nem di Pollo", description: "4 pezzi" },
        es: { name: "Nem de Pollo", description: "4 piezas" },
      },
    },
    {
      id: "salade-crevettes",
      category: "entrees",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/27863236/pexels-photo-27863236.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.9,
      allergens: ["crustaces", "poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 220, proteines: 18, glucides: 20, lipides: 6 },
      translations: {
        fr: {
          name: "Salade aux crevettes",
          description: "Salade aux crevettes",
        },
        en: { name: "Shrimp Salad", description: "Shrimp salad" },
        it: {
          name: "Insalata di Gamberetti",
          description: "Insalata di gamberetti",
        },
        es: {
          name: "Ensalada de Camarones",
          description: "Ensalada de camarones",
        },
      },
    },
    {
      id: "tom-kha-kai",
      category: "entrees",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/18708076/pexels-photo-18708076.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 11.9,
      allergens: ["poissons", "soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 320, proteines: 22, glucides: 12, lipides: 20 },
      translations: {
        fr: {
          name: "Tom Kha Kai",
          description:
            "Soupe de poulet à la crème de coco, galanga, citron vert",
        },
        en: {
          name: "Tom Kha Kai",
          description: "Chicken soup with coconut cream, galangal, green lime",
        },
        it: {
          name: "Tom Kha Kai",
          description: "Zuppa di pollo con crema di cocco, galanga, lime verde",
        },
        es: {
          name: "Tom Kha Kai",
          description: "Sopa de pollo con crema de coco, galangal, lima verde",
        },
      },
    },
    {
      id: "tom-yum-goong",
      category: "entrees",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/34624025/pexels-photo-34624025.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.9,
      allergens: ["crustaces", "poissons", "soja", "arachides"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 280, proteines: 20, glucides: 14, lipides: 14 },
      translations: {
        fr: {
          name: "Tom Yum Goong",
          description:
            "Soupe de crevettes à la crème de coco, citronnelle, citron vert",
        },
        en: {
          name: "Tom Yum Goong",
          description: "Shrimp soup with coconut cream, lemongrass, green lime",
        },
        it: {
          name: "Tom Yum Goong",
          description:
            "Zuppa di gamberetti con crema di cocco, citronella, lime verde",
        },
        es: {
          name: "Tom Yum Goong",
          description:
            "Sopa de camarones con crema de coco, hierba limón, lima verde",
        },
      },
    },
    {
      id: "steak-thai-airfryer",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/19774527/pexels-photo-19774527.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 23.5,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 480, proteines: 42, glucides: 8, lipides: 28 },
      translations: {
        fr: { name: "Steak thaï Airfryer", description: "Servi avec salade" },
        en: { name: "Thai Steak Airfryer", description: "Served with salad" },
        it: {
          name: "Steak thaï Airfryer",
          description: "Servito con insalata",
        },
        es: {
          name: "Steak thaï Airfryer",
          description: "Servido con ensalada",
        },
      },
    },
    {
      id: "legumes-sautes-wok",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/19105514/pexels-photo-19105514.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 17.5,
      allergens: ["soja"],
      diets: [
        "vegetarien",
        "vegan",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 260, proteines: 8, glucides: 30, lipides: 12 },
      translations: {
        fr: {
          name: "Légumes sautés au Wok",
          description: "Légumes sautés au wok",
        },
        en: {
          name: "Wok-Sautéed Vegetables",
          description: "Wok-sautéed vegetables",
        },
        it: {
          name: "Verdure Saltate al Wok",
          description: "Verdure saltate al wok",
        },
        es: {
          name: "Verduras Salteadas al Wok",
          description: "Verduras salteadas al wok",
        },
      },
    },
    {
      id: "porc-hache-basilic",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/32436917/pexels-photo-32436917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 17.5,
      allergens: ["gluten", "poissons", "soja"],
      diets: ["sans-lactose"],
      macros: { calories: 420, proteines: 30, glucides: 10, lipides: 26 },
      translations: {
        fr: {
          name: "Porc haché maison, sauté au basilic",
          description: "Porc haché maison, sauté au basilic",
        },
        en: {
          name: "Homemade Minced Pork, Basil Sauté",
          description: "Homemade minced pork, basil sauté",
        },
        it: {
          name: "Maiale tritato fatto in casa, saltato al basilico",
          description: "Maiale tritato fatto in casa, saltato al basilico",
        },
        es: {
          name: "Cerdo picado casero, salteado con albahaca",
          description: "Cerdo picado casero, salteado con albahaca",
        },
      },
    },
    {
      id: "boeuf-curry-massaman",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/31653130/pexels-photo-31653130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 21.5,
      allergens: [],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 580, proteines: 34, glucides: 28, lipides: 34 },
      translations: {
        fr: {
          name: "Bœuf au curry Massaman",
          description: "Bœuf au curry Massaman",
        },
        en: { name: "Beef Massaman Curry", description: "Beef Massaman curry" },
        it: {
          name: "Manzo al Curry Massaman",
          description: "Manzo al curry Massaman",
        },
        es: {
          name: "Carne de Res al Curry Massaman",
          description: "Carne de res al curry Massaman",
        },
      },
    },
    {
      id: "curry-rouge-coco",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/17748116/pexels-photo-17748116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 17.5,
      allergens: ["crustaces", "mollusques"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 480, proteines: 30, glucides: 18, lipides: 30 },
      translations: {
        fr: {
          name: "Curry rouge crème coco",
          description: "Sauce au curry rouge et crème de coco",
        },
        en: {
          name: "Red Curry Coconut Cream",
          description: "Red curry with coconut cream",
        },
        it: {
          name: "Curry Rosso Crema di Coco",
          description: "Sauce di curry rosso e crema di coco",
        },
        es: {
          name: "Curry Rojo Crema de Coco",
          description: "Salsa de curry rojo y crema de coco",
        },
      },
    },
    {
      id: "padthai",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/12561888/pexels-photo-12561888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 18.9,
      allergens: ["soja", "crustaces", "mollusques"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 580, proteines: 24, glucides: 72, lipides: 18 },
      translations: {
        fr: { name: "Padthaï", description: "Pâtes de riz sautées" },
        en: { name: "Pad Thai", description: "Thai noodles" },
        it: { name: "Pad Thai", description: "Noodles thailandais" },
        es: { name: "Pad Thai", description: "Fideos tailandeses" },
      },
    },
    {
      id: "riz-saute",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/34683317/pexels-photo-34683317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 18.9,
      allergens: ["soja", "crustaces", "mollusques", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 520, proteines: 22, glucides: 68, lipides: 14 },
      translations: {
        fr: { name: "Riz sauté", description: "Riz sauté au wok" },
        en: { name: "Fried Rice", description: "Wok-fried rice" },
        it: { name: "Riso Saltato", description: "Riso saltato al wok" },
        es: { name: "Arroz Frito", description: "Arroz frito al wok" },
      },
    },
    {
      id: "big-tom-yum-goong",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/12561896/pexels-photo-12561896.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 23.5,
      allergens: ["crustaces", "poissons", "soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 380, proteines: 28, glucides: 18, lipides: 18 },
      translations: {
        fr: {
          name: "Big Tom Yum Goong",
          description:
            "Grande soupe de crevettes à la crème de coco, citronnelle, citron vert",
        },
        en: {
          name: "Big Tom Yum Goong",
          description:
            "Large shrimp soup with coconut cream, lemongrass, green lime",
        },
        it: {
          name: "Big Tom Yum Goong",
          description:
            "Grande zuppa di gamberetti con crema di cocco, citronella, lime verde",
        },
        es: {
          name: "Big Tom Yum Goong",
          description:
            "Gran sopa de camarones con crema de coco, hierba limón, lima verde",
        },
      },
    },
    {
      id: "khao-soy",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/7361022/pexels-photo-7361022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 21.5,
      allergens: ["arachides"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 620, proteines: 32, glucides: 58, lipides: 28 },
      translations: {
        fr: {
          name: "Khao-Soy",
          description: "Pâtes de riz, sauce au curry rouge, crème coco",
        },
        en: {
          name: "Khao-Soy",
          description: "Rice noodles, red curry sauce, coconut cream",
        },
        it: {
          name: "Khao-Soy",
          description: "Noodles di riso, salsa di curry rosso, crema di coco",
        },
        es: {
          name: "Khao-Soy",
          description: "Fideos de arroz, salsa de curry rojo, crema de coco",
        },
      },
    },
    {
      id: "noix-st-jacques",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/28503608/pexels-photo-28503608.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 35.0,
      allergens: ["crustaces", "mollusques", "soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 340, proteines: 30, glucides: 12, lipides: 16 },
      translations: {
        fr: { name: "Noix de St-Jacques", description: "Noix de St-Jacques" },
        en: { name: "Scallops", description: "Scallops" },
        it: { name: "Capesante", description: "Capesante" },
        es: { name: "Vieiras", description: "Vieiras" },
      },
    },
    {
      id: "riz-jasmin",
      category: "plats",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/36346840/pexels-photo-36346840.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.0,
      allergens: [],
      diets: [
        "vegetarien",
        "vegan",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 160, proteines: 3, glucides: 36, lipides: 0 },
      translations: {
        fr: { name: "Riz jasmin nature", description: "Riz jasmin nature" },
        en: { name: "Plain Jasmine Rice", description: "Plain jasmine rice" },
        it: {
          name: "Riso Jasmine Naturale",
          description: "Riso jasmine naturale",
        },
        es: {
          name: "Arroz Jasmine Natural",
          description: "Arroz jasmine natural",
        },
      },
    },
    {
      id: "tapioca-banane",
      category: "desserts",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/4844367/pexels-photo-4844367.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10.9,
      allergens: [],
      diets: [
        "vegetarien",
        "vegan",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 280, proteines: 2, glucides: 58, lipides: 6 },
      translations: {
        fr: {
          name: "Tapioca à la banane fraîche",
          description: "Dessert vegan maison",
        },
        en: {
          name: "Tapioca with Fresh Banana",
          description: "Homemade vegan dessert",
        },
        it: {
          name: "Tapioca con Banana Fresca",
          description: "Dessert vegan fatto in casa",
        },
        es: {
          name: "Tapioca con Plátano Fresco",
          description: "Postre vegano casero",
        },
      },
    },
    {
      id: "riz-gluant-mangue",
      category: "desserts",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/36681615/pexels-photo-36681615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 11.9,
      allergens: [],
      diets: [
        "vegetarien",
        "vegan",
        "halal",
        "casher",
        "sans-gluten",
        "sans-lactose",
      ],
      macros: { calories: 380, proteines: 4, glucides: 72, lipides: 10 },
      translations: {
        fr: {
          name: "Riz gluant mangue classique",
          description: "Dessert vegan maison",
        },
        en: {
          name: "Classic Mango Sticky Rice",
          description: "Homemade vegan dessert",
        },
        it: {
          name: "Riso Appiccicoso alla Mango Classico",
          description: "Dessert vegan fatto in casa",
        },
        es: {
          name: "Arroz Pegajoso de Mango Clásico",
          description: "Postre vegano casero",
        },
      },
    },
  ],
  "cafe-mareva": [
    // {
    //   "_comment": "⚠️ MACROS: toutes les valeurs nutritionnelles sont des ESTIMATIONS basées sur la connaissance culinaire générale. Elles ne tiennent pas compte des suppléments.",
    //   "_notes": [
    //     "✅ Allergens info source: cafemareva.com/allergenes",
    //     "✅ Diets source: 'Tous nos produits sont sans gluten et sans produits laitiers' (site officiel). La gaufre italienne (The Italian) est l'UNIQUE exception avec du lait.",
    //     "⚠️ 'lécithine de soja' est classé comme allergène 'soja' (contient des dérivés de soja).",
    //     "⚠️ 'mais/corn' listé pour Fried Chicken (gaufre) sur la page allergènes — classé comme allergène non-EU standard, IGNORÉ en tant qu'allergène EU (mais non parmi les 14 allergènes obligatoires EU). Signalé ici.",
    //     "⚠️ Le Poke Saumon et le Poke Tofu sont deux variantes du même plat 'Poke Saumon ou Tofu' — traités comme UN seul item avec variantes dans le JSON 2.",
    //     "⚠️ 'Pancakes Spicy Corean Honey Chicken' et 'Fried Korean Honey Chicken spicy (8€)' semblent être deux produits distincts sur la page menu (l'un à 15€ intégré aux pancakes, l'autre à 8€ en entrée/snack). Traités comme deux items séparés.",
    //     "⚠️ 'Formule Brunch' est une formule composite (gaufre salée/pancake/bowl + jus + boisson chaude + pâtisserie + gaufre sucre glace). Traitée comme un item unique sans macros individuels.",
    //     "⚠️ 'Gaufre sucrée' est une gaufre de base avec garnitures optionnelles — traitée comme item de base avec suppléments dans JSON 2.",
    //     "⚠️ 'Gaufre du moment' (Banane, chocolat, beurre de cacahuète) est traitée séparément.",
    //     "⚠️ Pâtisseries listées sur la page allergènes mais PAS avec prix sur la page menu ('au comptoir'). Incluses avec prix null.",
    //     "⚠️ 'pistache' listé comme allergène pour cookie pistache — la pistache fait partie des 'Fruits à coque' (EU). Classé comme tel.",
    //     "⚠️ 'noix' (carrot cake) = Fruits à coque. 'noisette' = Fruits à coque.",
    //     "⚠️ Aucune mention explicite de labels 'halal', 'casher', 'vegan' ou 'végétarien' par le restaurant sauf 'crème chantilly vegan maison' et 'pain maison vegan'. Ces mentions sont sur des composants, pas sur les plats entiers — aucun plat n'est donc tagué vegan/végétarien globalement.",
    //     "⚠️ 'Blueberry mornings' à 13€ = pancakes myrtilles. 'Bomb choc'' mentionné uniquement sur la page allergènes mais pas sur la page menu — NON inclus (principe: ne pas inventer).",
    //     "⚠️ 'mais/corn' pour Fried Chicken gaufre: le maïs N'EST PAS parmi les 14 allergènes obligatoires EU — flaggé mais non inclus dans le champ allergens."
    //   ]
    // },

    {
      id: "classic-avocado",
      category: "gaufres-de-patates-douces",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/4552133/pexels-photo-4552133.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 520,
        proteines: 18,
        glucides: 42,
        lipides: 30,
      },
      translations: {
        fr: {
          name: "Classic Avocado",
          description:
            "Notre best-seller : guacamole maison, roquette & œuf au plat ou brouillé",
        },
        en: {
          name: "Classic Avocado",
          description:
            "Our best-seller: house guacamole, arugula & fried or scrambled egg",
        },
        it: {
          name: "Classic Avocado",
          description:
            "Il nostro best-seller: guacamole fatto in casa, rucola e uovo all'occhio o strapazzato",
        },
        es: {
          name: "Classic Avocado",
          description:
            "Nuestro best-seller: guacamole casero, rúcula y huevo frito o revuelto",
        },
      },
    },

    {
      id: "the-italian",
      category: "gaufres-de-patates-douces",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/18330474/pexels-photo-18330474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      // "_diet_note": "Contient du lait (parmesan) — exception explicite citée sur la page allergènes. N'est donc PAS sans-lactose.",
      macros: {
        // "_estimate": true,
        calories: 580,
        proteines: 24,
        glucides: 40,
        lipides: 32,
      },
      translations: {
        fr: {
          name: "The Italian",
          description:
            "Pesto, parmesan, coppa – jambon italien, tomates confites, roquette",
        },
        en: {
          name: "The Italian",
          description:
            "Pesto, parmesan, coppa – Italian ham, confit tomatoes, arugula",
        },
        it: {
          name: "The Italian",
          description:
            "Pesto, parmigiano, coppa – prosciutto italiano, pomodori confit, rucola",
        },
        es: {
          name: "The Italian",
          description:
            "Pesto, parmesano, coppa – jamón italiano, tomates confitados, rúcula",
        },
      },
    },

    {
      id: "blt",
      category: "gaufres-de-patates-douces",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/19202817/pexels-photo-19202817.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 530,
        proteines: 20,
        glucides: 38,
        lipides: 28,
      },
      translations: {
        fr: {
          name: "B.L.T.",
          description: "Bacon, salade, tomates, mayonnaise",
        },
        en: {
          name: "B.L.T.",
          description: "Bacon, lettuce, tomatoes, mayonnaise",
        },
        it: {
          name: "B.L.T.",
          description: "Bacon, insalata, pomodori, maionese",
        },
        es: {
          name: "B.L.T.",
          description: "Bacon, lechuga, tomates, mayonesa",
        },
      },
    },

    {
      id: "fried-chicken-gaufre",
      category: "gaufres-de-patates-douces",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/31706937/pexels-photo-31706937.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 15.0,
      allergens: ["oeufs"],
      // "_allergen_note": "Maïs/corn listé sur la page allergènes — non inclus car le maïs n'est pas parmi les 14 allergènes obligatoires EU. Signalé.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 650,
        proteines: 35,
        glucides: 52,
        lipides: 28,
      },
      translations: {
        fr: {
          name: "Fried Chicken",
          description:
            "Filet de poulet pané frit, sirop d'érable, pomme de terre grenaille CONTIENT MAIS",
        },
        en: {
          name: "Fried Chicken",
          description:
            "Breaded fried chicken fillet, maple syrup, baby potatoes CONTAINS CORN",
        },
        it: {
          name: "Fried Chicken",
          description:
            "Filetto di pollo impanato e fritto, sciroppo d'acero, patate novelle CONTIENE MAIS",
        },
        es: {
          name: "Fried Chicken",
          description:
            "Filete de pollo empanado y frito, sirope de arce, patatas pequeñas CONTINE MAÍZ",
        },
      },
    },

    {
      id: "early-bird",
      category: "gaufres-de-patates-douces",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/12424005/pexels-photo-12424005.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 590,
        proteines: 22,
        glucides: 46,
        lipides: 30,
      },
      translations: {
        fr: {
          name: "Early Bird",
          description:
            "2 œufs au plat, bacon, sirop d'érable, pomme de terre grenaille",
        },
        en: {
          name: "Early Bird",
          description: "2 fried eggs, bacon, maple syrup, baby potatoes",
        },
        it: {
          name: "Early Bird",
          description:
            "2 uova all'occhio, bacon, sciroppo d'acero, patate novelle",
        },
        es: {
          name: "Early Bird",
          description:
            "2 huevos fritos, bacon, sirope de arce, patatas pequeñas",
        },
      },
    },

    {
      id: "american-breakfast",
      category: "pancakes",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/7144969/pexels-photo-7144969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 14.0,
      allergens: ["oeufs", "soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 610,
        proteines: 22,
        glucides: 58,
        lipides: 28,
      },
      translations: {
        fr: {
          name: "American Breakfast",
          description: "Bacon crispy & deux œufs au plat, sirop d'érable",
        },
        en: {
          name: "American Breakfast",
          description: "Crispy bacon & two fried eggs, maple syrup",
        },
        it: {
          name: "American Breakfast",
          description:
            "Bacon croccante e due uova all'occhio, sciroppo d'acero",
        },
        es: {
          name: "American Breakfast",
          description: "Bacon crujiente y dos huevos fritos, sirope de arce",
        },
      },
    },

    {
      id: "spicy-korean-honey-chicken-pancake",
      category: "pancakes",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/22882260/pexels-photo-22882260.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 15.0,
      allergens: ["sesame"],
      // "_allergen_note": "Pas listé explicitement sur la page allergènes (la page liste 'poke fried chicken: soja, sesame' mais pas ce plat pancake séparément). Sésame extrait du texte menu ('sesame'). À confirmer avec le restaurant.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 640,
        proteines: 38,
        glucides: 60,
        lipides: 22,
      },
      translations: {
        fr: {
          name: "Spicy Korean Honey Chicken",
          description:
            "Filet de poulet pané frit avec sauce miel spicy, sésame",
        },
        en: {
          name: "Spicy Korean Honey Chicken",
          description:
            "Breaded fried chicken fillet with spicy honey sauce, sesame",
        },
        it: {
          name: "Spicy Korean Honey Chicken",
          description:
            "Filetto di pollo impanato e fritto con salsa miele piccante, sesamo",
        },
        es: {
          name: "Spicy Korean Honey Chicken",
          description:
            "Filete de pollo empanado y frito con salsa de miel picante, sésamo",
        },
      },
    },

    {
      id: "blueberry-mornings",
      category: "pancakes",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/7144716/pexels-photo-7144716.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.0,
      allergens: ["oeufs", "soja"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 480,
        proteines: 10,
        glucides: 72,
        lipides: 16,
      },
      translations: {
        fr: {
          name: "Blueberry Mornings",
          description:
            "Myrtilles, crème chantilly vegan maison, confiture de myrtilles maison, sirop d'érable",
        },
        en: {
          name: "Blueberry Mornings",
          description:
            "Blueberries, homemade vegan whipped cream, homemade blueberry jam, maple syrup",
        },
        it: {
          name: "Blueberry Mornings",
          description:
            "Mirtilli, panna montata vegana fatta in casa, confettura di mirtilli fatta in casa, sciroppo d'acero",
        },
        es: {
          name: "Blueberry Mornings",
          description:
            "Arándanos, nata montada vegana casera, mermelada de arándanos casera, sirope de arce",
        },
      },
    },

    {
      id: "fried-korean-honey-chicken-spicy",
      category: "pancakes",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/5774006/pexels-photo-5774006.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 8.0,
      // "_note": "Listé séparément à 8€ sur la page menu, distinct du plat pancake à 15€.",
      allergens: [],
      // "_allergen_note": "Non listé sur la page allergènes. À confirmer avec le restaurant.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 320,
        proteines: 22,
        glucides: 24,
        lipides: 14,
      },
      translations: {
        fr: {
          name: "Fried Korean Honey Chicken Spicy",
          description: "Filet de poulet pané frit avec sauce miel chilli",
        },
        en: {
          name: "Fried Korean Honey Chicken Spicy",
          description: "Breaded fried chicken fillet with chilli honey sauce",
        },
        it: {
          name: "Fried Korean Honey Chicken Spicy",
          description:
            "Filetto di pollo impanato e fritto con salsa miele e chili",
        },
        es: {
          name: "Fried Korean Honey Chicken Spicy",
          description:
            "Filete de pollo empanado y frito con salsa de miel y chile",
        },
      },
    },

    {
      id: "poke-saumon-ou-tofu",
      category: "poke-bowls",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/6546181/pexels-photo-6546181.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.0,
      // "_note": "Disponible uniquement du lundi au vendredi. Base : riz, sauce poke, avocat, edamame, radis, mangue, concombre, spicy mayonnaise. Saumon fumé OU tofu fumé — variantes dans JSON 2.",
      allergens: ["oeufs", "poissons", "soja", "sesame"],
      // "_allergen_note": "Allergènes de la variante saumon. La variante tofu partage oeufs, soja, sesame mais PAS poisson — voir JSON 2 pour détail par variante.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 520,
        proteines: 28,
        glucides: 60,
        lipides: 18,
      },
      translations: {
        fr: {
          name: "Poke Saumon ou Tofu",
          description:
            "Base riz avec sauce poke, avocat, edamame, radis, mangue, concombre, spicy mayonnaise – au choix saumon fumé ou tofu fumé",
        },
        en: {
          name: "Salmon or Tofu Poke",
          description:
            "Rice base with poke sauce, avocado, edamame, radish, mango, cucumber, spicy mayonnaise – choice of smoked salmon or smoked tofu",
        },
        it: {
          name: "Poke Salmone o Tofu",
          description:
            "Base di riso con salsa poke, avocado, edamame, ravanello, mango, cetriolo, maionese piccante – a scelta salmone affumicato o tofu affumicato",
        },
        es: {
          name: "Poke Salmón o Tofu",
          description:
            "Base de arroz con salsa poke, aguacate, edamame, rábano, mango, pepino, mayonesa picante – a elegir salmón ahumado o tofu ahumado",
        },
      },
    },

    {
      id: "poke-fried-chicken",
      category: "poke-bowls",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/32981296/pexels-photo-32981296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.0,
      // "_note": "Disponible uniquement du lundi au vendredi.",
      allergens: ["oeufs", "soja", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 560,
        proteines: 34,
        glucides: 62,
        lipides: 16,
      },
      translations: {
        fr: {
          name: "Poke Fried Chicken",
          description:
            "Base riz avec sauce poke, avocat, edamame, radis, mangue, concombre, spicy mayonnaise – filet de poulet pané frit",
        },
        en: {
          name: "Poke Fried Chicken",
          description:
            "Rice base with poke sauce, avocado, edamame, radish, mango, cucumber, spicy mayonnaise – breaded fried chicken fillet",
        },
        it: {
          name: "Poke Fried Chicken",
          description:
            "Base di riso con salsa poke, avocado, edamame, ravanello, mango, cetriolo, maionese piccante – filetto di pollo impanato e fritto",
        },
        es: {
          name: "Poke Fried Chicken",
          description:
            "Base de arroz con salsa poke, aguacate, edamame, rábano, mango, pepino, mayonesa picante – filete de pollo empanado y frito",
        },
      },
    },

    {
      id: "poke-korean-fried-chicken",
      category: "poke-bowls",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/27969845/pexels-photo-27969845.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 13.0,
      // "_note": "Disponible uniquement du lundi au vendredi. Non listé séparément sur la page allergènes — allergènes inférés de composition similaire au poke fried chicken. À confirmer.",
      allergens: ["oeufs", "soja", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 580,
        proteines: 35,
        glucides: 64,
        lipides: 18,
      },
      translations: {
        fr: {
          name: "Korean Fried Chicken Bowl",
          description:
            "Base riz avec sauce poke, avocat, edamame, radis, mangue, concombre, spicy mayonnaise – filet de poulet pané frit avec sauce miel chilli",
        },
        en: {
          name: "Korean Fried Chicken Bowl",
          description:
            "Rice base with poke sauce, avocado, edamame, radish, mango, cucumber, spicy mayonnaise – breaded fried chicken fillet with chilli honey sauce",
        },
        it: {
          name: "Korean Fried Chicken Bowl",
          description:
            "Base di riso con salsa poke, avocado, edamame, ravanello, mango, cetriolo, maionese piccante – filetto di pollo impanato e fritto con salsa miele e chili",
        },
        es: {
          name: "Korean Fried Chicken Bowl",
          description:
            "Base de arroz con salsa poke, aguacate, edamame, rábano, mango, pepino, mayonesa picante – filete de pollo empanado y frito con salsa de miel y chile",
        },
      },
    },

    {
      id: "smoothie-bowl-tropical",
      category: "smoothie-bowls",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/34122326/pexels-photo-34122326.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 9.0,
      allergens: ["fruits-a-coque"],
      // "_allergen_note": "Amande listée pour 'smoothie bowl' sur la page allergènes — classée Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 380,
        proteines: 8,
        glucides: 62,
        lipides: 10,
      },
      translations: {
        fr: {
          name: "Tropical",
          description: "Mangue, banane, granola maison & fruits",
        },
        en: {
          name: "Tropical",
          description: "Mango, banana, homemade granola & fruits",
        },
        it: {
          name: "Tropical",
          description: "Mango, banana, granola fatta in casa e frutta",
        },
        es: {
          name: "Tropical",
          description: "Mango, plátano, granola casera y frutas",
        },
      },
    },

    {
      id: "smoothie-bowl-go-wild-berries",
      category: "smoothie-bowls",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/7937333/pexels-photo-7937333.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 9.0,
      allergens: ["fruits-a-coque"],
      // "_allergen_note": "Amande listée pour 'smoothie bowl' sur la page allergènes.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 360,
        proteines: 7,
        glucides: 58,
        lipides: 9,
      },
      translations: {
        fr: {
          name: "Go Wild Berries",
          description: "Fruits rouges, bananes, granola maison & fruits",
        },
        en: {
          name: "Go Wild Berries",
          description: "Red berries, bananas, homemade granola & fruits",
        },
        it: {
          name: "Go Wild Berries",
          description: "Frutti rossi, banane, granola fatta in casa e frutta",
        },
        es: {
          name: "Go Wild Berries",
          description: "Frutos rojos, plátanos, granola casera y frutas",
        },
      },
    },

    // {
    //   "id": "formule-brunch",
    //   "category": "formules-brunch",
    //   "subcategory": null,
    //   "image": "/cafe-mareva/formule-brunch.jpeg",
    //   "price": 26.00,
    //   "allergens": [],
    //   // "_allergen_note": "Formule composite — allergènes dépendent des plats choisis. Non listable globalement.",
    //   "diets": ["sans-gluten", "sans-lactose"],
    //   // "_diet_note": "Sans gluten et sans lactose par défaut sauf si The Italian est choisi.",
    //   "macros": null,
    //   "_macro_note": "Macros non estimables — formule composite avec choix multiples.",
    //   "translations": {
    //     "fr": { "name": "Formule Brunch", "description": "Gaufre salée, pancake ou bowl + jus + boisson chaude + pâtisserie + gaufre sucre glace" },
    //     "en": { "name": "Brunch Set", "description": "Savoury waffle, pancake or bowl + juice + hot drink + pastry + powdered sugar waffle" },
    //     "it": { "name": "Formula Brunch", "description": "Waffle salato, pancake o bowl + succo + bevanda calda + pasticceria + waffle con zucchero a velo" },
    //     "es": { "name": "Menú Brunch", "description": "Gofre salado, pancake o bowl + zumo + bebida caliente + bollería + gofre con azúcar glas" }
    //   }
    // },

    {
      id: "avocado-toast",
      category: "toasts",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/3636958/pexels-photo-3636958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 10.0,
      allergens: ["oeufs"],
      // "_diet_note": "Pain maison vegan mentionné sur la page menu.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 390,
        proteines: 14,
        glucides: 38,
        lipides: 20,
      },
      translations: {
        fr: {
          name: "Avocado Toast",
          description:
            "Guacamole maison, œuf au plat ou brouillé, salade – sur pain maison vegan",
        },
        en: {
          name: "Avocado Toast",
          description:
            "House guacamole, fried or scrambled egg, lettuce – on homemade vegan bread",
        },
        it: {
          name: "Avocado Toast",
          description:
            "Guacamole fatto in casa, uovo all'occhio o strapazzato, insalata – su pane vegano fatto in casa",
        },
        es: {
          name: "Avocado Toast",
          description:
            "Guacamole casero, huevo frito o revuelto, ensalada – sobre pan vegano casero",
        },
      },
    },

    {
      id: "glow-toast",
      category: "toasts",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/7936720/pexels-photo-7936720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 9.0,
      allergens: ["fruits-a-coque"],
      // "_allergen_note": "Amande listée sur la page allergènes.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 420,
        proteines: 10,
        glucides: 52,
        lipides: 18,
      },
      translations: {
        fr: {
          name: "Glow Toast",
          description:
            "Beurre de cacahuète, bananes, granola maison, miel – sur pain maison vegan",
        },
        en: {
          name: "Glow Toast",
          description:
            "Peanut butter, bananas, homemade granola, honey – on homemade vegan bread",
        },
        it: {
          name: "Glow Toast",
          description:
            "Burro di arachidi, banane, granola fatta in casa, miele – su pane vegano fatto in casa",
        },
        es: {
          name: "Glow Toast",
          description:
            "Mantequilla de cacahuete, plátanos, granola casera, miel – sobre pan vegano casero",
        },
      },
    },

    {
      id: "jelly-x-peanut-toast",
      category: "toasts",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/6659689/pexels-photo-6659689.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 7.0,
      allergens: ["arachides"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 350,
        proteines: 8,
        glucides: 48,
        lipides: 14,
      },
      translations: {
        fr: {
          name: "Jelly x Peanut Toast",
          description:
            "Confiture maison & beurre de cacahuète maison – sur pain maison vegan",
        },
        en: {
          name: "Jelly x Peanut Toast",
          description:
            "Homemade jam & homemade peanut butter – on homemade vegan bread",
        },
        it: {
          name: "Jelly x Peanut Toast",
          description:
            "Confettura fatta in casa e burro di arachidi fatto in casa – su pane vegano fatto in casa",
        },
        es: {
          name: "Jelly x Peanut Toast",
          description:
            "Mermelada casera y mantequilla de cacahuete casera – sobre pan vegano casero",
        },
      },
    },

    {
      id: "french-breakfast",
      category: "toasts",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/4109534/pexels-photo-4109534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.0,
      allergens: [],
      // "_allergen_note": "Non listé sur la page allergènes. À confirmer.",
      diets: ["sans-gluten", "sans-lactose", "vegan", "vegetarien", "halal", "casher"],
      macros: {
        // "_estimate": true,
        calories: 200,
        proteines: 3,
        glucides: 32,
        lipides: 8,
      },
      translations: {
        fr: {
          name: "French Breakfast",
          description:
            "Confiture maison & beurre vegan – sur pain maison vegan",
        },
        en: {
          name: "French Breakfast",
          description: "Homemade jam & vegan butter – on homemade vegan bread",
        },
        it: {
          name: "French Breakfast",
          description:
            "Confettura fatta in casa e burro vegano – su pane vegano fatto in casa",
        },
        es: {
          name: "French Breakfast",
          description:
            "Mermelada casera y mantequilla vegana – sobre pan vegano casero",
        },
      },
    },

    {
      id: "gaufre-sucree",
      category: "gaufre-sucree",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/4963792/pexels-photo-4963792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 5.0,
      allergens: ["oeufs", "soja", "arachides", "fruits-a-coque"],
      // "_allergen_note": "Lécithine de soja classée soja.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 220,
        proteines: 5,
        glucides: 30,
        lipides: 8,
      },
      translations: {
        fr: {
          name: "Gaufre Sucrée",
          description:
            "Gaufre de base à personnaliser avec votre garniture – sucre glace inclus",
        },
        en: {
          name: "Sweet Waffle",
          description:
            "Plain waffle to customize with your topping – powdered sugar included",
        },
        it: {
          name: "Waffle Dolce",
          description:
            "Waffle base da personalizzare con la tua guarnizione – zucchero a velo incluso",
        },
        es: {
          name: "Gofre Dulce",
          description:
            "Gofre base para personalizar con tu topping – azúcar glas incluido",
        },
      },
    },

    {
      id: "gaufre-du-moment",
      category: "gaufre-sucree",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/34719708/pexels-photo-34719708.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 8.0,
      allergens: ["oeufs", "soja", "arachides"],
      // "_allergen_note": "Contient gaufre (oeufs, soja), beurre de cacahuète (arachides) et chocolat.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 520,
        proteines: 10,
        glucides: 58,
        lipides: 26,
      },
      translations: {
        fr: {
          name: "Gaufre du Moment",
          description: "Banane, chocolat, beurre de cacahuète maison",
        },
        en: {
          name: "Waffle of the Moment",
          description: "Banana, chocolate, homemade peanut butter",
        },
        it: {
          name: "Waffle del Momento",
          description: "Banana, cioccolato, burro di arachidi fatto in casa",
        },
        es: {
          name: "Gofre del Momento",
          description: "Plátano, chocolate, mantequilla de cacahuete casera",
        },
      },
    },

    {
      id: "brookie",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/36500586/pexels-photo-36500586.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 5,
      // "_price_note": "Prix non indiqué sur le site — vendu au comptoir.",
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 380,
        proteines: 6,
        glucides: 46,
        lipides: 18,
      },
      translations: {
        fr: {
          name: "Brookie",
          description: "Pâtisserie maison – à découvrir au comptoir",
        },
        en: {
          name: "Brookie",
          description: "Homemade pastry – discover at the counter",
        },
        it: {
          name: "Brookie",
          description: "Pasticceria fatta in casa – da scoprire al banco",
        },
        es: {
          name: "Brookie",
          description: "Bollería casera – por descubrir en el mostrador",
        },
      },
    },

    {
      id: "brownie-cacahuete",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/16497891/pexels-photo-16497891.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      // "_price_note": "Prix non indiqué sur le site — vendu au comptoir.",
      allergens: ["oeufs", "soja", "arachides"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 400,
        proteines: 8,
        glucides: 44,
        lipides: 20,
      },
      translations: {
        fr: {
          name: "Brownie Cacahuète",
          description: "Brownie chocolat beurre de cacahuète",
        },
        en: {
          name: "Peanut Brownie",
          description: "Chocolate peanut butter brownie",
        },
        it: {
          name: "Brownie alle Arachidi",
          description: "Brownie al cioccolato e burro di arachidi",
        },
        es: {
          name: "Brownie de Cacahuete",
          description: "Brownie de chocolate con mantequilla de cacahuete",
        },
      },
    },

    {
      id: "cookie-cacahuete",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/8750738/pexels-photo-8750738.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 2.5,
      allergens: ["oeufs", "arachides"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 280,
        proteines: 6,
        glucides: 32,
        lipides: 14,
      },
      translations: {
        fr: {
          name: "Cookie Cacahuète",
          description: "Cookie maison à la cacahuète",
        },
        en: { name: "Peanut Cookie", description: "Homemade peanut cookie" },
        it: {
          name: "Cookie alle Arachidi",
          description: "Cookie alle arachidi fatto in casa",
        },
        es: {
          name: "Cookie de Cacahuete",
          description: "Cookie de cacahuete casero",
        },
      },
    },

    {
      id: "cookie-praline",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/11133773/pexels-photo-11133773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 2.5,
      allergens: ["oeufs", "fruits-a-coque"],
      // "_allergen_note": "Amande + noisette = Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 290,
        proteines: 5,
        glucides: 34,
        lipides: 15,
      },
      translations: {
        fr: {
          name: "Cookie Praliné",
          description: "Cookie maison au praliné amande-noisette",
        },
        en: {
          name: "Praline Cookie",
          description: "Homemade almond-hazelnut praline cookie",
        },
        it: {
          name: "Cookie al Pralinato",
          description: "Cookie al pralinato mandorle e nocciole fatto in casa",
        },
        es: {
          name: "Cookie Praliné",
          description: "Cookie casero al praliné de almendra y avellana",
        },
      },
    },

    {
      id: "cookie-pistache",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/5112564/pexels-photo-5112564.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 2.5,
      allergens: ["oeufs", "fruits-a-coque"],
      // "_allergen_note": "Pistache classée Fruits à coque (EU).",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 285,
        proteines: 5,
        glucides: 33,
        lipides: 14,
      },
      translations: {
        fr: {
          name: "Cookie Pistache",
          description: "Cookie maison à la pistache",
        },
        en: {
          name: "Pistachio Cookie",
          description: "Homemade pistachio cookie",
        },
        it: {
          name: "Cookie al Pistacchio",
          description: "Cookie al pistacchio fatto in casa",
        },
        es: {
          name: "Cookie de Pistacho",
          description: "Cookie de pistacho casero",
        },
      },
    },

    {
      id: "cookie-sesame-noir",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/33210817/pexels-photo-33210817.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 2.5,
      allergens: ["oeufs", "sesame"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 275,
        proteines: 5,
        glucides: 32,
        lipides: 13,
      },
      translations: {
        fr: {
          name: "Cookie Sésame Noir",
          description: "Cookie maison au sésame noir",
        },
        en: {
          name: "Black Sesame Cookie",
          description: "Homemade black sesame cookie",
        },
        it: {
          name: "Cookie al Sesamo Nero",
          description: "Cookie al sesamo nero fatto in casa",
        },
        es: {
          name: "Cookie de Sésamo Negro",
          description: "Cookie casero de sésamo negro",
        },
      },
    },

    {
      id: "paris-brest-praline",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/16402080/pexels-photo-16402080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "soja", "fruits-a-coque"],
      // "_allergen_note": "Lécithine de soja = soja. Amande + noisette = Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 460,
        proteines: 8,
        glucides: 42,
        lipides: 28,
      },
      translations: {
        fr: {
          name: "Paris-Brest / Entremet Praliné",
          description: "Paris-brest ou entremet au praliné amande-noisette",
        },
        en: {
          name: "Paris-Brest / Praline Dessert",
          description: "Paris-brest or dessert with almond-hazelnut praline",
        },
        it: {
          name: "Paris-Brest / Dessert al Pralinato",
          description: "Paris-brest o dessert al pralinato mandorle e nocciole",
        },
        es: {
          name: "Paris-Brest / Postre Praliné",
          description: "Paris-brest o postre al praliné de almendra y avellana",
        },
      },
    },

    {
      id: "opera",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/20818067/pexels-photo-20818067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "soja", "fruits-a-coque"],
      // "_allergen_note": "Lécithine de soja = soja. Amande = Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 440,
        proteines: 7,
        glucides: 50,
        lipides: 22,
      },
      translations: {
        fr: { name: "Opéra", description: "Entremet opéra classique revisité" },
        en: { name: "Opera Cake", description: "Revisited classic opera cake" },
        it: { name: "Opéra", description: "Dessert opéra classico rivisitato" },
        es: {
          name: "Ópera",
          description: "Postre ópera clásico reinterpretado",
        },
      },
    },

    {
      id: "pavlova",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/32134447/pexels-photo-32134447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "soja"],
      // "_allergen_note": "Lécithine de soja = soja.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 350,
        proteines: 5,
        glucides: 56,
        lipides: 10,
      },
      translations: {
        fr: {
          name: "Pavlova",
          description: "Pavlova meringue, crème et fruits frais",
        },
        en: {
          name: "Pavlova",
          description: "Meringue pavlova, cream and fresh fruits",
        },
        it: {
          name: "Pavlova",
          description: "Pavlova meringa, crema e frutta fresca",
        },
        es: {
          name: "Pavlova",
          description: "Pavlova merengue, nata y frutas frescas",
        },
      },
    },

    {
      id: "entremet-cacahuete",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/17769145/pexels-photo-17769145.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "soja", "arachides"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 430,
        proteines: 9,
        glucides: 46,
        lipides: 22,
      },
      translations: {
        fr: {
          name: "Entremet Cacahuète",
          description: "Entremet maison à la cacahuète",
        },
        en: { name: "Peanut Dessert", description: "Homemade peanut dessert" },
        it: {
          name: "Dessert alle Arachidi",
          description: "Dessert fatto in casa alle arachidi",
        },
        es: {
          name: "Postre de Cacahuete",
          description: "Postre casero de cacahuete",
        },
      },
    },

    {
      id: "entremet-citron",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/29961482/pexels-photo-29961482.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "soja"],
      // "_allergen_note": "Lécithine de soja = soja.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 360,
        proteines: 6,
        glucides: 50,
        lipides: 14,
      },
      translations: {
        fr: {
          name: "Entremet Citron",
          description: "Entremet maison au citron",
        },
        en: { name: "Lemon Dessert", description: "Homemade lemon dessert" },
        it: {
          name: "Dessert al Limone",
          description: "Dessert fatto in casa al limone",
        },
        es: { name: "Postre de Limón", description: "Postre casero de limón" },
      },
    },

    {
      id: "gateau-cerises-amandes",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/26812555/pexels-photo-26812555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "soja", "fruits-a-coque"],
      // "_allergen_note": "Amande = Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 390,
        proteines: 7,
        glucides: 48,
        lipides: 18,
      },
      translations: {
        fr: {
          name: "Gâteau Cerises Amandes",
          description: "Gâteau maison cerises et amandes",
        },
        en: {
          name: "Cherry Almond Cake",
          description: "Homemade cherry and almond cake",
        },
        it: {
          name: "Torta Ciliegie e Mandorle",
          description: "Torta fatta in casa con ciliegie e mandorle",
        },
        es: {
          name: "Bizcocho de Cerezas y Almendras",
          description: "Bizcocho casero de cerezas y almendras",
        },
      },
    },

    {
      id: "carrot-cake",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/5594508/pexels-photo-5594508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["oeufs", "fruits-a-coque"],
      // "_allergen_note": "Noisette + noix = Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 410,
        proteines: 7,
        glucides: 50,
        lipides: 20,
      },
      translations: {
        fr: {
          name: "Carrot Cake",
          description: "Carrot cake maison aux noisettes et noix",
        },
        en: {
          name: "Carrot Cake",
          description: "Homemade carrot cake with hazelnuts and walnuts",
        },
        it: {
          name: "Carrot Cake",
          description: "Carrot cake fatto in casa con nocciole e noci",
        },
        es: {
          name: "Carrot Cake",
          description: "Carrot cake casero con avellanas y nueces",
        },
      },
    },

    {
      id: "crumble",
      category: "patisseries",
      subcategory: null,
      image:
        "https://images.pexels.com/photos/6465973/pexels-photo-6465973.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      price: 4.5,
      allergens: ["fruits-a-coque"],
      // "_allergen_note": "Noisette = Fruits à coque.",
      diets: ["sans-gluten", "sans-lactose"],
      macros: {
        // "_estimate": true,
        calories: 320,
        proteines: 4,
        glucides: 44,
        lipides: 14,
      },
      translations: {
        fr: { name: "Crumble", description: "Crumble maison aux noisettes" },
        en: { name: "Crumble", description: "Homemade crumble with hazelnuts" },
        it: {
          name: "Crumble",
          description: "Crumble fatto in casa con nocciole",
        },
        es: { name: "Crumble", description: "Crumble casero con avellanas" },
      },
    },
  ],
  "su-misura": [
    {
      id: "legumes-grilles",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/legumes-grilles.jpeg",
      price: 19.0,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 180, proteines: 4, glucides: 14, lipides: 12 },
      translations: {
        fr: {
          name: "Légumes grillés",
          description:
            "Courgettes, aubergines, poivrons, champignons et tomates grillés marinés à l'huile d'olive extra vierge, basilic.",
        },
        en: {
          name: "Grilled Vegetables",
          description:
            "Grilled zucchini, eggplant, peppers, mushrooms and tomatoes marinated in extra virgin olive oil, basil.",
        },
        it: {
          name: "Verdure Grigliate",
          description:
            "Zucchine, melanzane, peperoni, funghi e pomodori grigliati marinati in olio extravergine di oliva, basilico.",
        },
        es: {
          name: "Verduras a la Parrilla",
          description:
            "Calabacines, berenjenas, pimientos, champiñones y tomates a la parrilla marinados en aceite de oliva virgen extra, albahaca.",
        },
      },
    },
    {
      id: "mozzarella-de-bufflonne",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/mozzarella-de-bufflonne.jpeg",
      price: 18.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 320, proteines: 18, glucides: 6, lipides: 25 },
      translations: {
        fr: {
          name: "Mozzarella de bufflonne",
          description: "Mozzarella de bufflonne, tomates, câpres, olives.",
        },
        en: {
          name: "Mozzarella de bufflonne",
          description: "Mozzarella de bufflonne, tomatoes, capers, olives.",
        },
        it: {
          name: "Mozzarella di bufala",
          description: "Mozzarella di bufala, pomodori, acciugole, olive.",
        },
        es: {
          name: "Mozzarella de bufflonne",
          description:
            "Mozzarella de bufflonne, tomates, encurtidos, aceitunas.",
        },
      },
    },
    {
      id: "burrata-et-legumes-grilles",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/burrata-et-legumes-grilles.jpeg",
      price: 20.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 420, proteines: 18, glucides: 14, lipides: 32 },
      translations: {
        fr: {
          name: "Burrata et légumes grillés",
          description:
            "Fromage italien au cœur crémeux, courgettes, aubergines, tomates, champignons, poivrons, huile d'olive extra vierge.",
        },
        en: {
          name: "Burrata and Grilled Vegetables",
          description:
            "Italian cheese with a creamy heart, grilled zucchini, eggplant, tomatoes, mushrooms, peppers, extra virgin olive oil.",
        },
        it: {
          name: "Burrata e Verdure Grigliate",
          description:
            "Formaggio italiano con cuore cremoso, zucchine grigliate, melanzane, pomodori, funghi, peperoni, olio extravergine di oliva.",
        },
        es: {
          name: "Burrata y Verduras a la Parrilla",
          description:
            "Queso italiano con corazón cremoso, calabacines a la parrilla, berenjenas, tomates, champiñones, pimientos, aceite de oliva virgen extra.",
        },
      },
    },
    {
      id: "aubergines-a-la-parmigiana",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/aubergines-a-la-parmigiana.jpeg",
      price: 20.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 380, proteines: 16, glucides: 18, lipides: 27 },
      translations: {
        fr: {
          name: "Aubergines à la parmigiana",
          description:
            "Millefeuille d'aubergines grillées, tomates, mozzarella, huile d'olive extra vierge, basilic, origan.",
        },
        en: {
          name: "Eggplant Parmigiana",
          description:
            "Layered grilled eggplant with tomatoes, mozzarella, extra virgin olive oil, basil, oregano.",
        },
        it: {
          name: "Melanzane alla Parmigiana",
          description:
            "Melanzane grigliate in strati con pomodori, mozzarella, olio extravergine di oliva, basilico, origano.",
        },
        es: {
          name: "Berenjenas a la Parmigiana",
          description:
            "Berenjenas a la parrilla en capas con tomates, mozzarella, aceite de oliva virgen extra, albahaca, orégano.",
        },
      },
    },
    {
      id: "salade-de-coeurs-d-artichauts",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/salade-de-coeurs-d-artichauts.jpeg",
      price: 21.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 280, proteines: 10, glucides: 16, lipides: 20 },
      translations: {
        fr: {
          name: "Salade de cœurs d'artichauts",
          description:
            "Julienne de cœurs d'artichauts, roquette, huile d'olive extra vierge, copeaux de parmesan affiné.",
        },
        en: {
          name: "Artichoke Heart Salad",
          description:
            "Julienned artichoke hearts, arugula, extra virgin olive oil, shavings of aged parmesan.",
        },
        it: {
          name: "Insalata di Cuori di Carciofo",
          description:
            "Julienne di cuori di carciofo, rucola, olio extravergine di oliva, scaglie di parmigiano stagionato.",
        },
        es: {
          name: "Ensalada de Corazones de Alcachofa",
          description:
            "Juliana de corazones de alcachofa, rúcula, aceite de oliva virgen extra, lascas de parmesano añejo.",
        },
      },
    },
    {
      id: "vitello-tonnato",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/vitello-tonnato.jpeg",
      price: 22.0,
      allergens: ["poissons", "oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 380, proteines: 32, glucides: 4, lipides: 26 },
      translations: {
        fr: {
          name: "Vitello tonnato",
          description:
            "Carpaccio de veau mi-cuit sauce au thon, anchois et câpres.",
        },
        en: {
          name: "Vitello Tonnato",
          description:
            "Sliced veal with a sauce of tuna, anchovies and capers.",
        },
        it: {
          name: "Vitello Tonnato",
          description:
            "Carpaccio di vitello cotto al sangue con salsa di tonno, acciughe e capperi.",
        },
        es: {
          name: "Vitello Tonnato",
          description:
            "Carpaccio de ternera cocida al punto con salsa de atún, anchoas y alcaparras.",
        },
      },
    },
    {
      id: "carpaccio-de-saumon-bio",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/carpaccio-de-saumon-bio.jpeg",
      price: 23.0,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 280, proteines: 26, glucides: 1, lipides: 19 },
      translations: {
        fr: {
          name: "Carpaccio de saumon bio",
          description: "Filet de saumon bio mariné au citron et à l'aneth.",
        },
        en: {
          name: "Bio Salmon Carpaccio",
          description: "Bio salmon fillet marinated with lemon and dill.",
        },
        it: {
          name: "Carpaccio di Salmone Bio",
          description: "Filetto di salmone bio marinato al limone e aneto.",
        },
        es: {
          name: "Carpaccio de Salmón Bio",
          description: "Filete de salmón bio marinado con limón y eneldo.",
        },
      },
    },
    {
      id: "carpaccio-de-filet-de-bar",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/carpaccio-de-filet-de-bar.jpeg",
      price: 24.0,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 240, proteines: 24, glucides: 1, lipides: 15 },
      translations: {
        fr: {
          name: "Carpaccio de filet de bar à l'huile d'olive et poivre rose",
          description:
            "Filet de bar mariné à l'huile d'olive extra vierge et poivre rose.",
        },
        en: {
          name: "Sea Bass Fillet Carpaccio with Olive Oil and Pink Pepper",
          description:
            "Sea bass fillet marinated with extra virgin olive oil and pink pepper.",
        },
        it: {
          name: "Carpaccio di Filetto di Branzino con Olio d'Oliva e Pepe Rosa",
          description:
            "Filetto di branzino marinato con olio extravergine di oliva e pepe rosa.",
        },
        es: {
          name: "Carpaccio de Filete de Lubina con Aceite de Oliva y Pimienta Rosa",
          description:
            "Filete de lubina marinado con aceite de oliva virgen extra y pimienta rosa.",
        },
      },
    },
    {
      id: "planche-de-l-amitie",
      category: "antipasti",
      subcategory: null,
      image: "/su-misura/planche-de-l-amitie.jpeg",
      price: 19.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 520, proteines: 28, glucides: 14, lipides: 38 },
      translations: {
        fr: {
          name: "Planche de l'amitié",
          description:
            "Charcuterie artisanale italienne, légumes grillés, mozzarella, artichauts et parmesan. Disponible pour 1 personne (19€) ou 2 personnes (35€).",
        },
        en: {
          name: "Friendship Board",
          description:
            "Italian artisanal charcuterie, grilled vegetables, mozzarella, artichokes and parmesan. Available for 1 person (19€) or 2 people (35€).",
        },
        it: {
          name: "Tagliere dell'Amicizia",
          description:
            "Salumi artigianali italiani, verdure grigliate, mozzarella, carciofi e parmigiano. Disponibile per 1 persona (19€) o 2 persone (35€).",
        },
        es: {
          name: "Tabla de la Amistad",
          description:
            "Charcutería artesanal italiana, verduras a la parrilla, mozzarella, alcachofas y parmesano. Disponible para 1 persona (19€) o 2 personas (35€).",
        },
      },
    },
    {
      id: "focaccia-aux-legumes",
      category: "focaccia",
      subcategory: null,
      image: "/su-misura/focaccia-aux-legumes.jpeg",
      price: 21.0,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 520, proteines: 12, glucides: 68, lipides: 22 },
      translations: {
        fr: {
          name: "Focaccia aux légumes, fleur de sel et romarin",
          description:
            "Courgettes, aubergines, tomates, poivrons, champignons grillés, basilic et huile d'olive extra vierge.",
        },
        en: {
          name: "Vegetable Focaccia with Fleur de Sel and Rosemary",
          description:
            "Grilled zucchini, eggplant, tomatoes, peppers, mushrooms, basil and extra virgin olive oil.",
        },
        it: {
          name: "Focaccia alle Verdure con Fleur de Sel e Rosmarino",
          description:
            "Zucchine, melanzane, pomodori, peperoni, funghi grigliati, basilico e olio extravergine di oliva.",
        },
        es: {
          name: "Focaccia de Verduras con Fleur de Sel y Romero",
          description:
            "Calabacines, berenjenas, tomates, pimientos, champiñones a la parrilla, albahaca y aceite de oliva virgen extra.",
        },
      },
    },
    {
      id: "focaccia-aux-quatre-fromages",
      category: "focaccia",
      subcategory: null,
      image: "/su-misura/focaccia-aux-quatre-fromages.jpeg",
      price: 22.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 720, proteines: 32, glucides: 62, lipides: 38 },
      translations: {
        fr: {
          name: "Focaccia aux quatre fromages",
          description:
            "Mozzarella fior di latte, gorgonzola, taleggio, parmesan.",
        },
        en: {
          name: "Four Cheese Focaccia",
          description:
            "Mozzarella fior di latte, gorgonzola, taleggio, parmesan.",
        },
        it: {
          name: "Focaccia ai quattro formaggi",
          description:
            "Mozzarella fior di latte, gorgonzola, taleggio, parmigiano.",
        },
        es: {
          name: "Focaccia de cuatro quesos",
          description:
            "Mozzarella fior di latte, gorgonzola, taleggio, parmesano.",
        },
      },
    },
    {
      id: "focaccia-au-jambon-et-fromages",
      category: "focaccia",
      subcategory: null,
      image: "/su-misura/focaccia-au-jambon-et-fromages.jpeg",
      price: 23.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 680, proteines: 30, glucides: 60, lipides: 34 },
      translations: {
        fr: {
          name: "Focaccia au jambon et fromages",
          description: "Mozzarella fior di latte, jambon blanc.",
        },
        en: {
          name: "Ham and Cheese Focaccia",
          description: "Mozzarella fior di latte, white ham.",
        },
        it: {
          name: "Focaccia al prosciutto e formaggi",
          description: "Mozzarella fior di latte, prosciutto cotto.",
        },
        es: {
          name: "Focaccia de jamón y quesos",
          description: "Mozzarella fior di latte, jamón cocido.",
        },
      },
    },
    {
      id: "fusilli-vegetarienne",
      category: "pates-classiques",
      subcategory: null,
      image: "/su-misura/fusilli-vegetarienne.jpeg",
      price: 22.0,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 520, proteines: 14, glucides: 84, lipides: 12 },
      translations: {
        fr: {
          name: "Fusilli végétarienne",
          description:
            "Courgettes, champignons, carottes, aubergines, basilic.",
        },
        en: {
          name: "Vegetarian Fusilli",
          description: "Zucchini, mushrooms, carrots, eggplant, basil.",
        },
        it: {
          name: "Fusilli vegetariani",
          description: "Zucchine, funghi, carote, melanzane, basilico.",
        },
        es: {
          name: "Fusilli vegetariano",
          description:
            "Calabacines, champiñones, zanahorias, berenjenas, albahaca.",
        },
      },
    },
    {
      id: "penne-a-la-norma",
      category: "pates-classiques",
      subcategory: null,
      image: "/su-misura/penne-a-la-norma.jpeg",
      price: 23.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 620, proteines: 22, glucides: 86, lipides: 20 },
      translations: {
        fr: {
          name: "Penne à la Norma",
          description:
            "Sauce tomate maison mijotée à l'ancienne, aubergines, mozzarella, origan, basilic.",
        },
        en: {
          name: "Penne alla Norma",
          description:
            "Slow-cooked homemade tomato sauce, eggplant, mozzarella, oregano, basil.",
        },
        it: {
          name: "Penne alla Norma",
          description:
            "Salsa di pomodoro casalinga stufata all'antica, melanzane, mozzarella, origano, basilico.",
        },
        es: {
          name: "Penne alla Norma",
          description:
            "Salsa de tomate casera a fuego lento, berenjenas, mozzarella, orégano, albahaca.",
        },
      },
    },
    {
      id: "penne-a-l-arrabbiata",
      category: "pates-classiques",
      subcategory: null,
      image: "/su-misura/penne-a-l-arrabbiata.jpeg",
      price: 22.0,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 480, proteines: 12, glucides: 88, lipides: 8 },
      translations: {
        fr: {
          name: "Penne à l'arrabbiata",
          description: "Sauce tomate maison mijotée à l'ail et au persil.",
        },
        en: {
          name: "Penne all'Arrabbiata",
          description:
            "Homemade tomato sauce slow-cooked with garlic and parsley.",
        },
        it: {
          name: "Penne all'arrabbiata",
          description:
            "Salsa di pomodoro casalinga stufata con aglio e prezzemolo.",
        },
        es: {
          name: "Penne all'arrabbiata",
          description:
            "Salsa de tomate casera a fuego lento con ajo y perejil.",
        },
      },
    },
    {
      id: "spaghetti-a-la-carbonara",
      category: "pates-classiques",
      subcategory: null,
      image: "/su-misura/spaghetti-a-la-carbonara.jpeg",
      price: 24.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 760, proteines: 32, glucides: 82, lipides: 34 },
      translations: {
        fr: {
          name: "Spaghetti à la carbonara (L'Originale)",
          description:
            "Joue de porc romain caramélisée avec œuf, pecorino, poivre noir.",
        },
        en: {
          name: "Spaghetti alla Carbonara (The Original)",
          description:
            "Caramelized Roman pork cheek with egg, pecorino, black pepper.",
        },
        it: {
          name: "Spaghetti alla carbonara (L'Originale)",
          description:
            "Guanciale romano caramellato con uovo, pecorino, pepe nero.",
        },
        es: {
          name: "Spaghetti a la carbonara (El Original)",
          description:
            "Carrillera de cerdo romano caramelizada con huevo, pecorino, pimienta negra.",
        },
      },
    },
    {
      id: "spaghetti-aux-palourdes",
      category: "pates-classiques",
      subcategory: null,
      image: "/su-misura/spaghetti-aux-palourdes.jpeg",
      price: 27.0,
      allergens: ["mollusques"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 580, proteines: 26, glucides: 80, lipides: 14 },
      translations: {
        fr: {
          name: "Spaghetti aux palourdes",
          description:
            "Palourdes, tomates, persil, huile d'olive extra vierge.",
        },
        en: {
          name: "Spaghetti alle Vongole",
          description: "Clams, tomatoes, parsley, extra virgin olive oil.",
        },
        it: {
          name: "Spaghetti alle vongole",
          description:
            "Vongole, pomodori, prezzemolo, olio extravergine di oliva.",
        },
        es: {
          name: "Spaghetti con almejas",
          description:
            "Almejas, tomates, perejil, aceite de oliva virgen extra.",
        },
      },
    },
    {
      id: "spaghetti-a-la-boutargue",
      category: "pates-classiques",
      subcategory: null,
      image: "/su-misura/spaghetti-a-la-boutargue.jpeg",
      price: 29.0,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 620, proteines: 24, glucides: 80, lipides: 22 },
      translations: {
        fr: {
          name: "Spaghetti à la boutargue",
          description: "Boutargue (œufs de mulet) et sauce.",
        },
        en: {
          name: "Spaghetti with Bottarga",
          description: "Bottarga (mullet roe) and sauce.",
        },
        it: {
          name: "Spaghetti alla bottarga",
          description: "Bottarga (uova di muggine) e salsa.",
        },
        es: {
          name: "Spaghetti con bottarga",
          description: "Bottarga (huevas de mújol) y salsa.",
        },
      },
    },
    {
      id: "fettuccine-aux-cepes",
      category: "pates-fraiches",
      subcategory: null,
      image: "/su-misura/fettuccine-aux-cepes.jpeg",
      price: 24.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "vegetarien", "sans-lactose"],
      macros: { calories: 580, proteines: 18, glucides: 76, lipides: 20 },
      translations: {
        fr: {
          name: "Fettuccine rustiche aux cèpes",
          description: "Pâtes fraîches maison, poêlée de cèpes au romarin.",
        },
        en: {
          name: "Rustic Fettuccine with Porcini Mushrooms",
          description:
            "Homemade fresh pasta, sautéed porcini mushrooms with rosemary.",
        },
        it: {
          name: "Fettuccine rustiche ai porcini",
          description:
            "Pasta fresca fatta in casa, porcini saltati al rosmarino.",
        },
        es: {
          name: "Fettuccine rústicas con boletus",
          description: "Pasta fresca casera, salteado de boletus con romero.",
        },
      },
    },
    {
      id: "fettuccine-a-la-bolognaise",
      category: "pates-fraiches",
      subcategory: null,
      image: "/su-misura/fettuccine-a-la-bolognaise.jpeg",
      price: 22.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten"],
      macros: { calories: 680, proteines: 30, glucides: 76, lipides: 26 },
      translations: {
        fr: {
          name: "Fettuccine rustiche à la bolognaise",
          description:
            "Pâtes fraîches maison, sauce bolognaise maison (bœuf 100% français).",
        },
        en: {
          name: "Rustic Fettuccine Bolognese",
          description:
            "Homemade fresh pasta, homemade bolognese sauce (100% French beef).",
        },
        it: {
          name: "Fettuccine rustiche alla bolognese",
          description:
            "Pasta fresca fatta in casa, ragù bolognese casalingo (manzo 100% francese).",
        },
        es: {
          name: "Fettuccine rústicas a la boloñesa",
          description:
            "Pasta fresca casera, salsa boloñesa casera (ternera 100% francesa).",
        },
      },
    },
    {
      id: "fettuccine-tomate-basilic",
      category: "pates-fraiches",
      subcategory: null,
      image: "/su-misura/fettuccine-tomate-basilic.jpeg",
      price: 21.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "vegetarien", "sans-lactose"],
      macros: { calories: 520, proteines: 16, glucides: 84, lipides: 12 },
      translations: {
        fr: {
          name: "Fettuccine rustiche tomate et basilic",
          description:
            "Pâtes fraîches maison, sauce tomate mijotée à l'ancienne.",
        },
        en: {
          name: "Rustic Fettuccine Tomato and Basil",
          description:
            "Homemade fresh pasta, slow-cooked homemade tomato sauce.",
        },
        it: {
          name: "Fettuccine rustiche al pomodoro e basilico",
          description:
            "Pasta fresca fatta in casa, salsa di pomodoro stufata all'antica.",
        },
        es: {
          name: "Fettuccine rústicas con tomate y albahaca",
          description:
            "Pasta fresca casera, salsa de tomate casera a fuego lento.",
        },
      },
    },
    {
      id: "fettuccine-a-la-carbonara",
      category: "pates-fraiches",
      subcategory: null,
      image: "/su-misura/fettuccine-a-la-carbonara.jpeg",
      price: 23.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 760, proteines: 32, glucides: 78, lipides: 34 },
      translations: {
        fr: {
          name: "Fettuccine rustiche à la carbonara",
          description:
            "Pâtes fraîches maison, joue de porc romain caramélisée, œuf, pecorino et poivre noir.",
        },
        en: {
          name: "Rustic Fettuccine Carbonara",
          description:
            "Homemade fresh pasta, caramelized Roman pork cheek, egg, pecorino and black pepper.",
        },
        it: {
          name: "Fettuccine rustiche alla carbonara",
          description:
            "Pasta fresca fatta in casa, guanciale romano caramellato, uovo, pecorino e pepe nero.",
        },
        es: {
          name: "Fettuccine rústicas a la carbonara",
          description:
            "Pasta fresca casera, carrillera de cerdo romano caramelizada, huevo, pecorino y pimienta negra.",
        },
      },
    },
    {
      id: "fettuccine-aux-fruits-de-mer",
      category: "pates-fraiches",
      subcategory: null,
      image: "/su-misura/fettuccine-aux-fruits-de-mer.jpeg",
      price: 30.0,
      allergens: ["oeufs", "mollusques", "poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 640, proteines: 30, glucides: 78, lipides: 22 },
      translations: {
        fr: {
          name: "Fettuccine rustiche aux fruits de mer",
          description:
            "Pâtes fraîches maison, palourdes, saumon et boutargue (œufs de mulet).",
        },
        en: {
          name: "Rustic Fettuccine with Seafood",
          description:
            "Homemade fresh pasta, clams, salmon and bottarga (mullet roe).",
        },
        it: {
          name: "Fettuccine rustiche ai frutti di mare",
          description:
            "Pasta fresca fatta in casa, vongole, salmone e bottarga (uova di muggine).",
        },
        es: {
          name: "Fettuccine rústicas con mariscos",
          description:
            "Pasta fresca casera, almejas, salmón y bottarga (huevas de mújol).",
        },
      },
    },
    {
      id: "tortelli-ricotta-epinards",
      category: "tortelli-ravioli",
      subcategory: null,
      image: "/su-misura/tortelli-ricotta-epinards.jpeg",
      price: 22.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 560, proteines: 22, glucides: 72, lipides: 20 },
      translations: {
        fr: {
          name: "Tortelli à la ricotta et aux épinards",
          description:
            "Farcis à la ricotta et aux épinards, sauce citron, sauge et parmesan.",
        },
        en: {
          name: "Tortelli with Ricotta and Spinach",
          description:
            "Stuffed with ricotta and spinach, lemon, sage and parmesan sauce.",
        },
        it: {
          name: "Tortelli ricotta e spinaci",
          description:
            "Ripieni di ricotta e spinaci, salsa al limone, salvia e parmigiano.",
        },
        es: {
          name: "Tortelli de ricotta y espinacas",
          description:
            "Rellenos de ricotta y espinacas, salsa de limón, salvia y parmesano.",
        },
      },
    },
    {
      id: "tortelli-quatre-fromages",
      category: "tortelli-ravioli",
      subcategory: null,
      image: "/su-misura/tortelli-quatre-fromages.jpeg",
      price: 24.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 700, proteines: 28, glucides: 70, lipides: 34 },
      translations: {
        fr: {
          name: "Tortelli aux quatre fromages",
          description:
            "Sauce gorgonzola, ricotta, taleggio, copeaux de parmesan.",
        },
        en: {
          name: "Four Cheese Tortelli",
          description:
            "Gorgonzola, ricotta, taleggio, parmesan shavings sauce.",
        },
        it: {
          name: "Tortelli ai quattro formaggi",
          description:
            "Salsa gorgonzola, ricotta, taleggio, scaglie di parmigiano.",
        },
        es: {
          name: "Tortelli de cuatro quesos",
          description:
            "Salsa de gorgonzola, ricotta, taleggio, virutas de parmesano.",
        },
      },
    },
    {
      id: "ravioli-au-potiron",
      category: "tortelli-ravioli",
      subcategory: null,
      image: "/su-misura/ravioli-au-potiron.jpeg",
      price: 23.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 540, proteines: 16, glucides: 80, lipides: 16 },
      translations: {
        fr: {
          name: "Ravioli au potiron",
          description: "Ravioli farcis au potiron.",
        },
        en: {
          name: "Pumpkin Ravioli",
          description: "Pumpkin-stuffed ravioli.",
        },
        it: {
          name: "Ravioli alla zucca",
          description: "Ravioli ripieni di zucca.",
        },
        es: {
          name: "Ravioli de calabaza",
          description: "Ravioli rellenos de calabaza.",
        },
      },
    },
    {
      id: "ravioli-au-boeuf",
      category: "tortelli-ravioli",
      subcategory: null,
      image: "/su-misura/ravioli-au-boeuf.jpeg",
      price: 24.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten"],
      macros: { calories: 620, proteines: 28, glucides: 72, lipides: 22 },
      translations: {
        fr: {
          name: "Ravioli au bœuf",
          description:
            "Ravioli farcis au bœuf (viande de bœuf 100% française).",
        },
        en: {
          name: "Beef Ravioli",
          description: "Beef-stuffed ravioli (100% French beef).",
        },
        it: {
          name: "Ravioli al manzo",
          description: "Ravioli ripieni di manzo (carne bovina 100% francese).",
        },
        es: {
          name: "Ravioli de ternera",
          description: "Ravioli rellenos de ternera (carne 100% francesa).",
        },
      },
    },
    {
      id: "ravioli-au-jambon-de-parme",
      category: "tortelli-ravioli",
      subcategory: null,
      image: "/su-misura/ravioli-au-jambon-de-parme.jpeg",
      price: 23.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 600, proteines: 28, glucides: 72, lipides: 22 },
      translations: {
        fr: {
          name: "Ravioli au jambon de Parme",
          description: "Ravioli farcis au jambon de Parme affiné et parmesan.",
        },
        en: {
          name: "Parma Ham Ravioli",
          description: "Ravioli stuffed with aged Parma ham and parmesan.",
        },
        it: {
          name: "Ravioli al prosciutto di Parma",
          description:
            "Ravioli ripieni di prosciutto di Parma stagionato e parmigiano.",
        },
        es: {
          name: "Ravioli de jamón de Parma",
          description: "Ravioli rellenos de jamón de Parma curado y parmesano.",
        },
      },
    },
    {
      id: "ravioli-truffe-cepes",
      category: "tortelli-ravioli",
      subcategory: null,
      image: "/su-misura/ravioli-truffe-cepes.jpeg",
      price: 28.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 680, proteines: 22, glucides: 74, lipides: 32 },
      translations: {
        fr: {
          name: "Ravioli à la crème de truffe noire et cèpes",
          description: "Ravioli à la crème de truffes noires et cèpes.",
        },
        en: {
          name: "Ravioli with Black Truffle Cream and Porcini",
          description:
            "Ravioli with black truffle cream and porcini mushrooms.",
        },
        it: {
          name: "Ravioli alla crema di tartufo nero e porcini",
          description: "Ravioli alla crema di tartufo nero e porcini.",
        },
        es: {
          name: "Ravioli con crema de trufa negra y boletus",
          description: "Ravioli con crema de trufa negra y boletus.",
        },
      },
    },
    {
      id: "lasagnes-a-la-bolognaise",
      category: "gratins",
      subcategory: null,
      image: "/su-misura/lasagnes-a-la-bolognaise.jpeg",
      price: 24.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 720, proteines: 34, glucides: 70, lipides: 32 },
      translations: {
        fr: {
          name: "Lasagnes à la bolognaise",
          description:
            "Viande de bœuf 100% française, sauce tomate maison et parmesan.",
        },
        en: {
          name: "Bolognese Lasagna",
          description: "100% French beef, homemade tomato sauce and parmesan.",
        },
        it: {
          name: "Lasagne alla bolognese",
          description:
            "Carne bovina 100% francese, salsa di pomodoro casalinga e parmigiano.",
        },
        es: {
          name: "Lasaña a la boloñesa",
          description:
            "Ternera 100% francesa, salsa de tomate casera y parmesano.",
        },
      },
    },
    {
      id: "lasagnes-vegetariennes",
      category: "gratins",
      subcategory: null,
      image: "/su-misura/lasagnes-vegetariennes.jpeg",
      price: 23.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 580, proteines: 22, glucides: 70, lipides: 22 },
      translations: {
        fr: {
          name: "Lasagnes à la végétarienne",
          description:
            "Courgettes, champignons, aubergines, artichauts, poivrons, basilic.",
        },
        en: {
          name: "Vegetarian Lasagna",
          description:
            "Zucchini, mushrooms, eggplant, artichokes, peppers, basil.",
        },
        it: {
          name: "Lasagne vegetariane",
          description:
            "Zucchine, funghi, melanzane, carciofi, peperoni, basilico.",
        },
        es: {
          name: "Lasaña vegetariana",
          description:
            "Calabacines, champiñones, berenjenas, alcachofas, pimientos, albahaca.",
        },
      },
    },
    {
      id: "cannelloni",
      category: "gratins",
      subcategory: null,
      image: "/su-misura/cannelloni.jpeg",
      price: 22.0,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 560, proteines: 24, glucides: 60, lipides: 24 },
      translations: {
        fr: {
          name: "Cannelloni",
          description: "Ricotta, épinards, parmesan et noix de muscade.",
        },
        en: {
          name: "Cannelloni",
          description: "Ricotta, spinach, parmesan and nutmeg.",
        },
        it: {
          name: "Cannelloni",
          description: "Ricotta, spinaci, parmigiano e noce moscata.",
        },
        es: {
          name: "Canelones",
          description: "Ricotta, espinacas, parmesano y nuez moscada.",
        },
      },
    },
    {
      id: "gnocchis-tomate-basilic",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-tomate-basilic.jpeg",
      price: 23.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "vegetarien", "sans-lactose"],
      macros: { calories: 520, proteines: 12, glucides: 90, lipides: 12 },
      translations: {
        fr: {
          name: "Gnocchis à la sauce tomate et basilic",
          description:
            "Gnocchis de pommes de terre, sauce tomate maison et basilic.",
        },
        en: {
          name: "Gnocchi with Tomato Sauce and Basil",
          description: "Potato gnocchi, homemade tomato sauce and basil.",
        },
        it: {
          name: "Gnocchi al pomodoro e basilico",
          description:
            "Gnocchi di patate, salsa di pomodoro fatta in casa e basilico.",
        },
        es: {
          name: "Gnocchi con salsa de tomate y albahaca",
          description: "Gnocchi de patata, salsa de tomate casera y albahaca.",
        },
      },
    },
    {
      id: "gnocchis-jambon-sauge-parmesan",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-jambon-sauge-parmesan.jpeg",
      price: 24.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 640, proteines: 26, glucides: 80, lipides: 24 },
      translations: {
        fr: {
          name: "Gnocchis au jambon, sauge et parmesan",
          description:
            "Gnocchis de pommes de terre, jambon, sauge et parmesan.",
        },
        en: {
          name: "Gnocchi with Ham, Sage and Parmesan",
          description: "Potato gnocchi, ham, sage and parmesan.",
        },
        it: {
          name: "Gnocchi con prosciutto, salvia e parmigiano",
          description: "Gnocchi di patate, prosciutto, salvia e parmigiano.",
        },
        es: {
          name: "Gnocchi con jamón, salvia y parmesano",
          description: "Gnocchi de patata, jamón, salvia y parmesano.",
        },
      },
    },
    {
      id: "gnocchis-creme-truffe",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-creme-truffe.jpeg",
      price: 28.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 680, proteines: 14, glucides: 80, lipides: 32 },
      translations: {
        fr: {
          name: "Gnocchis à la crème de truffes noires",
          description:
            "Gnocchis de pommes de terre à la crème de truffes noires.",
        },
        en: {
          name: "Gnocchi with Black Truffle Cream",
          description: "Potato gnocchi with black truffle cream.",
        },
        it: {
          name: "Gnocchi alla crema di tartufo nero",
          description: "Gnocchi di patate alla crema di tartufo nero.",
        },
        es: {
          name: "Gnocchi con crema de trufa negra",
          description: "Gnocchi de patata con crema de trufa negra.",
        },
      },
    },
    {
      id: "gnocchis-quatre-fromages",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-quatre-fromages.jpeg",
      price: 25.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 760, proteines: 28, glucides: 78, lipides: 36 },
      translations: {
        fr: {
          name: "Gnocchis aux 4 fromages",
          description:
            "Gnocchis de pommes de terre, mozzarella, gorgonzola, taleggio, parmesan.",
        },
        en: {
          name: "Four Cheese Gnocchi",
          description:
            "Potato gnocchi, mozzarella, gorgonzola, taleggio, parmesan.",
        },
        it: {
          name: "Gnocchi ai 4 formaggi",
          description:
            "Gnocchi di patate, mozzarella, gorgonzola, taleggio, parmigiano.",
        },
        es: {
          name: "Gnocchi a los 4 quesos",
          description:
            "Gnocchi de patata, mozzarella, gorgonzola, taleggio, parmesano.",
        },
      },
    },
    {
      id: "gnocchis-truffe-cepes",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-truffe-cepes.jpeg",
      price: 29.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 720, proteines: 16, glucides: 84, lipides: 34 },
      translations: {
        fr: {
          name: "Gnocchis à la crème de truffes noires et cèpes",
          description:
            "Gnocchis de pommes de terre à la crème de truffes noires et cèpes.",
        },
        en: {
          name: "Gnocchi with Black Truffle Cream and Porcini",
          description:
            "Potato gnocchi with black truffle cream and porcini mushrooms.",
        },
        it: {
          name: "Gnocchi alla crema di tartufo nero e porcini",
          description:
            "Gnocchi di patate alla crema di tartufo nero e funghi porcini.",
        },
        es: {
          name: "Gnocchi con crema de trufa negra y boletus",
          description: "Gnocchi de patata con crema de trufa negra y boletus.",
        },
      },
    },
    {
      id: "gnocchis-bolognaise",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-bolognaise.jpeg",
      price: 26.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten"],
      macros: { calories: 720, proteines: 30, glucides: 82, lipides: 28 },
      translations: {
        fr: {
          name: "Gnocchis à la bolognaise",
          description: "Gnocchis de pommes de terre, sauce bolognaise.",
        },
        en: {
          name: "Gnocchi Bolognese",
          description: "Potato gnocchi, bolognese sauce.",
        },
        it: {
          name: "Gnocchi alla bolognese",
          description: "Gnocchi di patate, ragù alla bolognese.",
        },
        es: {
          name: "Gnocchi a la boloñesa",
          description: "Gnocchi de patata, salsa boloñesa.",
        },
      },
    },
    {
      id: "gnocchis-vegetarien",
      category: "gnocchis",
      subcategory: null,
      image: "/su-misura/gnocchis-vegetarien.jpeg",
      price: 27.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "vegetarien", "sans-lactose"],
      macros: { calories: 580, proteines: 14, glucides: 88, lipides: 18 },
      translations: {
        fr: {
          name: "Gnocchis végétarien",
          description: "Gnocchis de pommes de terre avec des petits légumes.",
        },
        en: {
          name: "Vegetarian Gnocchi",
          description: "Potato gnocchi with seasonal vegetables.",
        },
        it: {
          name: "Gnocchi vegetariani",
          description: "Gnocchi di patate con verdurine.",
        },
        es: {
          name: "Gnocchi vegetariano",
          description: "Gnocchi de patata con verduritas.",
        },
      },
    },
    {
      id: "risotto-romarin-citron-scamorza",
      category: "risottos",
      subcategory: null,
      image: "/su-misura/risotto-romarin-citron-scamorza.jpeg",
      price: 27.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 620, proteines: 18, glucides: 78, lipides: 24 },
      translations: {
        fr: {
          name: "Risotto au romarin, citron et scamorza fumée",
          description: "Risotto au romarin, citron et scamorza fumée.",
        },
        en: {
          name: "Rosemary, Lemon and Smoked Scamorza Risotto",
          description:
            "Risotto with rosemary, lemon and smoked scamorza cheese.",
        },
        it: {
          name: "Risotto al rosmarino, limone e scamorza affumicata",
          description: "Risotto al rosmarino, limone e scamorza affumicata.",
        },
        es: {
          name: "Risotto al romero, limón y scamorza ahumada",
          description: "Risotto al romero, limón y scamorza ahumada.",
        },
      },
    },
    {
      id: "risotto-vegetarien",
      category: "risottos",
      subcategory: null,
      image: "/su-misura/risotto-vegetarien.jpeg",
      price: 28.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 580, proteines: 16, glucides: 86, lipides: 18 },
      translations: {
        fr: {
          name: "Risotto végétarien",
          description:
            "Risotto arborio émulsionné au parmesan, courgettes, aubergines, artichauts, tomates, carottes.",
        },
        en: {
          name: "Vegetarian Risotto",
          description:
            "Arborio risotto with parmesan, zucchini, eggplant, artichokes, tomatoes, carrots.",
        },
        it: {
          name: "Risotto vegetariano",
          description:
            "Risotto arborio mantecato al parmigiano, zucchine, melanzane, carciofi, pomodori, carote.",
        },
        es: {
          name: "Risotto vegetariano",
          description:
            "Risotto arborio con parmesano, calabacines, berenjenas, alcachofas, tomates, zanahorias.",
        },
      },
    },
    {
      id: "risotto-truffe-cepes",
      category: "risottos",
      subcategory: null,
      image: "/su-misura/risotto-truffe-cepes.jpeg",
      price: 31.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 700, proteines: 16, glucides: 80, lipides: 32 },
      translations: {
        fr: {
          name: "Risotto à la crème de truffe noire et cèpes",
          description: "Risotto à la crème de truffe noire et cèpes.",
        },
        en: {
          name: "Black Truffle Cream and Porcini Risotto",
          description:
            "Risotto with black truffle cream and porcini mushrooms.",
        },
        it: {
          name: "Risotto alla crema di tartufo nero e porcini",
          description: "Risotto alla crema di tartufo nero e funghi porcini.",
        },
        es: {
          name: "Risotto con crema de trufa negra y boletus",
          description: "Risotto con crema de trufa negra y boletus.",
        },
      },
    },
    {
      id: "risotto-gambas-courgettes",
      category: "risottos",
      subcategory: null,
      image: "/su-misura/risotto-gambas-courgettes.jpeg",
      price: 30.0,
      allergens: ["lait", "crustaces"],
      diets: ["sans-gluten"],
      macros: { calories: 640, proteines: 28, glucides: 80, lipides: 22 },
      translations: {
        fr: {
          name: "Risotto aux gambas et courgettes",
          description:
            "Risotto arborio émulsionné au parmesan, gambas et courgettes.",
        },
        en: {
          name: "Prawn and Zucchini Risotto",
          description: "Arborio risotto with parmesan, prawns and zucchini.",
        },
        it: {
          name: "Risotto ai gamberoni e zucchine",
          description:
            "Risotto arborio mantecato al parmigiano, gamberoni e zucchine.",
        },
        es: {
          name: "Risotto con gambas y calabacines",
          description: "Risotto arborio con parmesano, gambas y calabacines.",
        },
      },
    },
    {
      id: "pizza-margherita",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-margherita.jpeg",
      price: 17.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 720, proteines: 28, glucides: 96, lipides: 24 },
      translations: {
        fr: {
          name: "Pizza Margherita",
          description:
            "Sauce tomate maison, mozzarella fior di latte, origan, basilic.",
        },
        en: {
          name: "Pizza Margherita",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, oregano, basil.",
        },
        it: {
          name: "Pizza Margherita",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, origano, basilico.",
        },
        es: {
          name: "Pizza Margherita",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, orégano, albahaca.",
        },
      },
    },
    {
      id: "pizza-napolitaine",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-napolitaine.jpeg",
      price: 18.0,
      allergens: ["lait", "poissons"],
      diets: ["sans-gluten"],
      macros: { calories: 760, proteines: 32, glucides: 96, lipides: 26 },
      translations: {
        fr: {
          name: "Pizza Napolitaine",
          description:
            "Sauce tomate maison, mozzarella fior di latte, anchois, câpres, olives rivera.",
        },
        en: {
          name: "Neapolitan Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, anchovies, capers, Riviera olives.",
        },
        it: {
          name: "Pizza Napoletana",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, acciughe, capperi, olive riviera.",
        },
        es: {
          name: "Pizza Napolitana",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, anchoas, alcaparras, olivas rivera.",
        },
      },
    },
    {
      id: "pizza-vegetarienne",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-vegetarienne.jpeg",
      price: 19.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 760, proteines: 28, glucides: 100, lipides: 26 },
      translations: {
        fr: {
          name: "Pizza Végétarienne",
          description:
            "Sauce tomate maison, mozzarella fior di latte, champignons, poivrons, courgettes, aubergines.",
        },
        en: {
          name: "Vegetarian Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, mushrooms, peppers, zucchini, eggplant.",
        },
        it: {
          name: "Pizza Vegetariana",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, funghi, peperoni, zucchine, melanzane.",
        },
        es: {
          name: "Pizza Vegetariana",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, champiñones, pimientos, calabacines, berenjenas.",
        },
      },
    },
    {
      id: "pizza-tasca",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-tasca.jpeg",
      price: 19.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 780, proteines: 30, glucides: 96, lipides: 28 },
      translations: {
        fr: {
          name: "Pizza Tasca",
          description:
            "Sauce tomate maison, mozzarella de bufflonne, roquette, parmesan.",
        },
        en: {
          name: "Pizza Tasca",
          description:
            "Homemade tomato sauce, buffalo mozzarella, arugula, parmesan.",
        },
        it: {
          name: "Pizza Tasca",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella di bufala, rucola, parmigiano.",
        },
        es: {
          name: "Pizza Tasca",
          description:
            "Salsa de tomate casera, mozzarella de búfala, rúcula, parmesano.",
        },
      },
    },
    {
      id: "pizza-regina",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-regina.jpeg",
      price: 20.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 800, proteines: 34, glucides: 96, lipides: 28 },
      translations: {
        fr: {
          name: "Pizza Regina",
          description:
            "Sauce tomate maison, mozzarella fior di latte, jambon blanc, champignons, origan.",
        },
        en: {
          name: "Pizza Regina",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, ham, mushrooms, oregano.",
        },
        it: {
          name: "Pizza Regina",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, prosciutto cotto, funghi, origano.",
        },
        es: {
          name: "Pizza Regina",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, jamón de York, champiñones, orégano.",
        },
      },
    },
    {
      id: "pizza-quatre-fromages",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-quatre-fromages.jpeg",
      price: 20.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 880, proteines: 38, glucides: 96, lipides: 36 },
      translations: {
        fr: {
          name: "Pizza Quatre fromages",
          description:
            "Sauce tomate maison, mozzarella fior di latte, gorgonzola, taleggio, parmesan.",
        },
        en: {
          name: "Four Cheese Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, gorgonzola, taleggio, parmesan.",
        },
        it: {
          name: "Pizza ai Quattro formaggi",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, gorgonzola, taleggio, parmigiano.",
        },
        es: {
          name: "Pizza Cuatro quesos",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, gorgonzola, taleggio, parmesano.",
        },
      },
    },
    {
      id: "pizza-quatre-saisons",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-quatre-saisons.jpeg",
      price: 20.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 820, proteines: 34, glucides: 96, lipides: 30 },
      translations: {
        fr: {
          name: "Pizza Quatre saisons",
          description:
            "Sauce tomate maison, mozzarella fior di latte, artichauts, jambon blanc, champignons, olives.",
        },
        en: {
          name: "Four Seasons Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, artichokes, ham, mushrooms, olives.",
        },
        it: {
          name: "Pizza Quattro stagioni",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, carciofi, prosciutto cotto, funghi, olive.",
        },
        es: {
          name: "Pizza Cuatro estaciones",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, alcachofas, jamón de York, champiñones, aceitunas.",
        },
      },
    },
    {
      id: "pizza-parme",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-parme.jpeg",
      price: 22.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 820, proteines: 38, glucides: 96, lipides: 30 },
      translations: {
        fr: {
          name: "Pizza Parme",
          description:
            "Sauce tomate maison, mozzarella fior di latte, jambon de Parme affiné, roquette, copeaux de parmesan.",
        },
        en: {
          name: "Parma Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, cured Parma ham, arugula, parmesan shavings.",
        },
        it: {
          name: "Pizza Parma",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, prosciutto di Parma stagionato, rucola, scaglie di parmigiano.",
        },
        es: {
          name: "Pizza Parma",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, jamón de Parma, rúcula, virutas de parmesano.",
        },
      },
    },
    {
      id: "pizza-saumon",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-saumon.jpeg",
      price: 23.0,
      allergens: ["lait", "poissons"],
      diets: ["sans-gluten"],
      macros: { calories: 820, proteines: 36, glucides: 90, lipides: 32 },
      translations: {
        fr: {
          name: "Pizza Saumon",
          description:
            "Mozzarella fior di latte, carpaccio de saumon bio mariné maison.",
        },
        en: {
          name: "Salmon Pizza",
          description:
            "Fior di latte mozzarella, homemade marinated organic salmon carpaccio.",
        },
        it: {
          name: "Pizza al Salmone",
          description:
            "Mozzarella fior di latte, carpaccio di salmone bio marinato in casa.",
        },
        es: {
          name: "Pizza de Salmón",
          description:
            "Mozzarella fior di latte, carpaccio de salmón bio marinado casero.",
        },
      },
    },
    {
      id: "pizza-cepes",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-cepes.jpeg",
      price: 30.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 800, proteines: 30, glucides: 96, lipides: 30 },
      translations: {
        fr: {
          name: "Pizza Cèpes",
          description:
            "Sauce tomate maison, mozzarella fior di latte, poêlée de cèpes au romarin.",
        },
        en: {
          name: "Porcini Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, sautéed porcini mushrooms with rosemary.",
        },
        it: {
          name: "Pizza ai Porcini",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, porcini saltati al rosmarino.",
        },
        es: {
          name: "Pizza de Boletus",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, boletus salteados al romero.",
        },
      },
    },
    {
      id: "pizza-thon",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-thon.jpeg",
      price: 23.0,
      allergens: ["lait", "poissons"],
      diets: ["sans-gluten"],
      macros: { calories: 800, proteines: 36, glucides: 96, lipides: 28 },
      translations: {
        fr: {
          name: "Pizza Thon",
          description:
            "Sauce tomate maison, mozzarella fior di latte, thon à l'huile d'olive et oignons rouges.",
        },
        en: {
          name: "Tuna Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, tuna in olive oil and red onions.",
        },
        it: {
          name: "Pizza al Tonno",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, tonno all'olio d'oliva e cipolle rosse.",
        },
        es: {
          name: "Pizza de Atún",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, atún en aceite de oliva y cebollas rojas.",
        },
      },
    },
    {
      id: "pizza-poulet",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-poulet.jpeg",
      price: 23.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 820, proteines: 38, glucides: 96, lipides: 28 },
      translations: {
        fr: {
          name: "Pizza Poulet",
          description:
            "Sauce tomate maison, mozzarella fior di latte, poulet, huile d'olive.",
        },
        en: {
          name: "Chicken Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, chicken, olive oil.",
        },
        it: {
          name: "Pizza al Pollo",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, pollo, olio d'oliva.",
        },
        es: {
          name: "Pizza de Pollo",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, pollo, aceite de oliva.",
        },
      },
    },
    {
      id: "pizza-cepes-burrata-truffe",
      category: "pizzas-classiques",
      subcategory: null,
      image: "/su-misura/pizza-cepes-burrata-truffe.jpeg",
      price: 30.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 880, proteines: 32, glucides: 96, lipides: 38 },
      translations: {
        fr: {
          name: "Pizza Cèpes, burrata et crème de truffe noire",
          description:
            "Sauce tomate maison, mozzarella fior di latte, cèpes, burrata et crème de truffe noire.",
        },
        en: {
          name: "Porcini, Burrata and Black Truffle Cream Pizza",
          description:
            "Homemade tomato sauce, fior di latte mozzarella, porcini, burrata and black truffle cream.",
        },
        it: {
          name: "Pizza Porcini, burrata e crema di tartufo nero",
          description:
            "Salsa di pomodoro fatta in casa, mozzarella fior di latte, porcini, burrata e crema di tartufo nero.",
        },
        es: {
          name: "Pizza de Boletus, burrata y crema de trufa negra",
          description:
            "Salsa de tomate casera, mozzarella fior di latte, boletus, burrata y crema de trufa negra.",
        },
      },
    },
    {
      id: "pizza-bergamo",
      category: "pizzas-blanches",
      subcategory: null,
      image: "/su-misura/pizza-bergamo.jpeg",
      price: 21.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 820, proteines: 32, glucides: 90, lipides: 32 },
      translations: {
        fr: {
          name: "Pizza Bergamo",
          description: "Mozzarella fior di latte, saucisson, tomates, oignons.",
        },
        en: {
          name: "Bergamo Pizza",
          description: "Fior di latte mozzarella, salami, tomatoes, onions.",
        },
        it: {
          name: "Pizza Bergamo",
          description: "Mozzarella fior di latte, salame, pomodori, cipolle.",
        },
        es: {
          name: "Pizza Bergamo",
          description:
            "Mozzarella fior di latte, salchichón, tomates, cebollas.",
        },
      },
    },
    {
      id: "pizza-valtellina",
      category: "pizzas-blanches",
      subcategory: null,
      image: "/su-misura/pizza-valtellina.jpeg",
      price: 22.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 780, proteines: 38, glucides: 88, lipides: 26 },
      translations: {
        fr: {
          name: "Pizza Valtellina",
          description:
            "Mozzarella fior di latte, bresaola, roquette, parmesan.",
        },
        en: {
          name: "Valtellina Pizza",
          description: "Fior di latte mozzarella, bresaola, arugula, parmesan.",
        },
        it: {
          name: "Pizza Valtellina",
          description:
            "Mozzarella fior di latte, bresaola, rucola, parmigiano.",
        },
        es: {
          name: "Pizza Valtellina",
          description: "Mozzarella fior di latte, bresaola, rúcula, parmesano.",
        },
      },
    },
    {
      id: "pizza-la-golosa",
      category: "pizzas-blanches",
      subcategory: null,
      image: "/su-misura/pizza-la-golosa.jpeg",
      price: 23.0,
      allergens: ["lait"],
      diets: ["sans-gluten"],
      macros: { calories: 880, proteines: 32, glucides: 88, lipides: 40 },
      translations: {
        fr: {
          name: "Pizza La Golosa",
          description:
            "Mozzarella fior di latte, cèpes, lardo di colonnata, parmesan.",
        },
        en: {
          name: "La Golosa Pizza",
          description:
            "Fior di latte mozzarella, porcini, lardo di colonnata, parmesan.",
        },
        it: {
          name: "Pizza La Golosa",
          description:
            "Mozzarella fior di latte, porcini, lardo di colonnata, parmigiano.",
        },
        es: {
          name: "Pizza La Golosa",
          description:
            "Mozzarella fior di latte, boletus, lardo di colonnata, parmesano.",
        },
      },
    },
    {
      id: "pizza-cortina-d-ampezzo",
      category: "pizzas-blanches",
      subcategory: null,
      image: "/su-misura/pizza-cortina-d-ampezzo.jpeg",
      price: 23.0,
      allergens: ["lait", "so2"],
      diets: ["sans-gluten"],
      macros: { calories: 820, proteines: 34, glucides: 88, lipides: 34 },
      translations: {
        fr: {
          name: "Pizza La Cortina d'Ampezzo",
          description:
            "Mozzarella fior di latte, scamorza fumée, speck, vinaigrette balsamique.",
        },
        en: {
          name: "Cortina d'Ampezzo Pizza",
          description:
            "Fior di latte mozzarella, smoked scamorza, speck, balsamic vinaigrette.",
        },
        it: {
          name: "Pizza Cortina d'Ampezzo",
          description:
            "Mozzarella fior di latte, scamorza affumicata, speck, vinaigrette balsamica.",
        },
        es: {
          name: "Pizza La Cortina d'Ampezzo",
          description:
            "Mozzarella fior di latte, scamorza ahumada, speck, vinagreta balsámica.",
        },
      },
    },
    {
      id: "pave-de-saumon-aux-artichauts",
      category: "poissons",
      subcategory: null,
      image: "/su-misura/pave-de-saumon-aux-artichauts.jpeg",
      price: 29.0,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 480, proteines: 36, glucides: 18, lipides: 28 },
      translations: {
        fr: {
          name: "Pavé de saumon aux artichauts et herbes",
          description: "Pavé de saumon bio aux artichauts et herbes fraîches.",
        },
        en: {
          name: "Salmon Fillet with Artichokes and Herbs",
          description: "Organic salmon fillet with artichokes and fresh herbs.",
        },
        it: {
          name: "Trancio di salmone ai carciofi ed erbe",
          description: "Trancio di salmone bio con carciofi ed erbe fresche.",
        },
        es: {
          name: "Salmón con alcachofas y hierbas",
          description: "Lomo de salmón bio con alcachofas y hierbas frescas.",
        },
      },
    },
    {
      id: "filets-de-bar-romarin",
      category: "poissons",
      subcategory: null,
      image: "/su-misura/filets-de-bar-romarin.jpeg",
      price: 30.0,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 380, proteines: 38, glucides: 2, lipides: 22 },
      translations: {
        fr: {
          name: "Filets de bar poêlés au romarin",
          description:
            "Filets de bar poêlés au romarin et huile d'olive extra vierge.",
        },
        en: {
          name: "Pan-Seared Sea Bass Fillets with Rosemary",
          description:
            "Pan-seared sea bass fillets with rosemary and extra virgin olive oil.",
        },
        it: {
          name: "Filetti di branzino al rosmarino",
          description:
            "Filetti di branzino in padella con rosmarino e olio extra vergine di oliva.",
        },
        es: {
          name: "Filetes de lubina al romero",
          description:
            "Filetes de lubina a la plancha con romero y aceite de oliva virgen extra.",
        },
      },
    },
    {
      id: "espadon-grille-sicilienne",
      category: "poissons",
      subcategory: null,
      image: "/su-misura/espadon-grille-sicilienne.jpeg",
      price: 31.0,
      allergens: ["poissons"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 420, proteines: 40, glucides: 6, lipides: 24 },
      translations: {
        fr: {
          name: "Espadon grillé à la sicilienne",
          description: "Espadon grillé avec tomates, olives, câpres, thym.",
        },
        en: {
          name: "Sicilian Style Grilled Swordfish",
          description:
            "Grilled swordfish with tomatoes, olives, capers, thyme.",
        },
        it: {
          name: "Pesce spada alla siciliana",
          description:
            "Pesce spada alla griglia con pomodori, olive, capperi, timo.",
        },
        es: {
          name: "Pez espada a la siciliana",
          description:
            "Pez espada a la parrilla con tomates, aceitunas, alcaparras, tomillo.",
        },
      },
    },
    {
      id: "gambas-et-legumes-grilles",
      category: "poissons",
      subcategory: null,
      image: "/su-misura/gambas-et-legumes-grilles.jpeg",
      price: 28.0,
      allergens: ["crustaces"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 360, proteines: 32, glucides: 14, lipides: 18 },
      translations: {
        fr: {
          name: "Gambas et légumes grillés",
          description: "Gambas grillés accompagnés de légumes grillés.",
        },
        en: {
          name: "Grilled Prawns and Vegetables",
          description: "Grilled prawns served with grilled vegetables.",
        },
        it: {
          name: "Gamberoni e verdure alla griglia",
          description:
            "Gamberoni alla griglia accompagnati da verdure grigliate.",
        },
        es: {
          name: "Gambas y verduras a la parrilla",
          description:
            "Gambas a la parrilla acompañadas de verduras a la parrilla.",
        },
      },
    },
    {
      id: "supreme-poulet-citron",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/supreme-poulet-citron.jpeg",
      price: 24.0,
      allergens: [],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 420, proteines: 42, glucides: 14, lipides: 22 },
      translations: {
        fr: {
          name: "Suprême de poulet au citron et légumes grillés",
          description:
            "Suprême de poulet au citron accompagné de légumes grillés.",
        },
        en: {
          name: "Lemon Chicken Supreme with Grilled Vegetables",
          description: "Lemon chicken supreme served with grilled vegetables.",
        },
        it: {
          name: "Suprema di pollo al limone e verdure grigliate",
          description:
            "Suprema di pollo al limone accompagnata da verdure grigliate.",
        },
        es: {
          name: "Suprema de pollo al limón con verduras a la parrilla",
          description:
            "Suprema de pollo al limón acompañada de verduras a la parrilla.",
        },
      },
    },
    {
      id: "supreme-poulet-milanaise",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/supreme-poulet-milanaise.jpeg",
      price: 26.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 560, proteines: 44, glucides: 28, lipides: 28 },
      translations: {
        fr: {
          name: "Suprême de poulet à la milanaise",
          description: "Filet de poulet pané et doré.",
        },
        en: {
          name: "Chicken Milanese",
          description: "Breaded and golden fried chicken fillet.",
        },
        it: {
          name: "Cotoletta di pollo alla milanese",
          description: "Filetto di pollo impanato e dorato.",
        },
        es: {
          name: "Pollo a la milanesa",
          description: "Filete de pollo empanado y dorado.",
        },
      },
    },
    {
      id: "supreme-poulet-cepes",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/supreme-poulet-cepes.jpeg",
      price: 27.0,
      allergens: [],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 460, proteines: 42, glucides: 12, lipides: 26 },
      translations: {
        fr: {
          name: "Suprême de poulet aux cèpes",
          description: "Filet de poulet et sa poêlée de cèpes.",
        },
        en: {
          name: "Chicken Supreme with Porcini",
          description: "Chicken fillet served with sautéed porcini mushrooms.",
        },
        it: {
          name: "Suprema di pollo ai porcini",
          description: "Filetto di pollo con porcini saltati.",
        },
        es: {
          name: "Suprema de pollo con boletus",
          description: "Filete de pollo con boletus salteados.",
        },
      },
    },
    {
      id: "escalope-veau-citron",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/escalope-veau-citron.jpeg",
      price: 25.0,
      allergens: [],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 420, proteines: 40, glucides: 4, lipides: 26 },
      translations: {
        fr: {
          name: "Escalope de veau au citron",
          description: "Escalope de veau au citron.",
        },
        en: {
          name: "Veal Escalope with Lemon",
          description: "Veal escalope with lemon.",
        },
        it: {
          name: "Scaloppina di vitello al limone",
          description: "Scaloppina di vitello al limone.",
        },
        es: {
          name: "Escalope de ternera al limón",
          description: "Escalope de ternera al limón.",
        },
      },
    },
    {
      id: "escalope-veau-milanaise",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/escalope-veau-milanaise.jpeg",
      price: 26.0,
      allergens: ["oeufs"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 560, proteines: 42, glucides: 28, lipides: 30 },
      translations: {
        fr: {
          name: "Escalope de veau à la milanaise",
          description: "Escalope de veau panée et dorée.",
        },
        en: {
          name: "Veal Milanese",
          description: "Breaded and golden fried veal escalope.",
        },
        it: {
          name: "Cotoletta di vitello alla milanese",
          description: "Cotoletta di vitello impanata e dorata.",
        },
        es: {
          name: "Escalope de ternera a la milanesa",
          description: "Escalope de ternera empanado y dorado.",
        },
      },
    },
    {
      id: "souris-d-agneau",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/souris-d-agneau.jpeg",
      price: 28.0,
      allergens: [],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 620, proteines: 44, glucides: 18, lipides: 40 },
      translations: {
        fr: {
          name: "Souris d'agneau caramélisée au miel et à l'orange",
          description: "Souris d'agneau caramélisée au miel et à l'orange.",
        },
        en: {
          name: "Lamb Shank Caramelized with Honey and Orange",
          description: "Lamb shank caramelized with honey and orange.",
        },
        it: {
          name: "Stinco d'agnello caramellato al miele e arancia",
          description: "Stinco d'agnello caramellato al miele e arancia.",
        },
        es: {
          name: "Jarrete de cordero caramelizado con miel y naranja",
          description: "Jarrete de cordero caramelizado con miel y naranja.",
        },
      },
    },
    {
      id: "osso-bucco",
      category: "viandes",
      subcategory: null,
      image: "/su-misura/osso-bucco.jpeg",
      price: 29.0,
      allergens: ["celeri"],
      diets: ["sans-gluten", "sans-lactose"],
      macros: { calories: 580, proteines: 46, glucides: 14, lipides: 36 },
      translations: {
        fr: {
          name: "Osso bucco mijoté façon Su Misura",
          description:
            "Jarret de veau mijoté à la sauce tomate, céleri, carottes, oignons, romarin et zeste de citron.",
        },
        en: {
          name: "Slow-cooked Osso Bucco Su Misura style",
          description:
            "Veal shank simmered in tomato sauce, celery, carrots, onions, rosemary and lemon zest.",
        },
        it: {
          name: "Ossobuco stufato alla Su Misura",
          description:
            "Garretto di vitello stufato con salsa di pomodoro, sedano, carote, cipolle, rosmarino e scorza di limone.",
        },
        es: {
          name: "Ossobuco estofado estilo Su Misura",
          description:
            "Jarrete de ternera estofado con salsa de tomate, apio, zanahorias, cebollas, romero y ralladura de limón.",
        },
      },
    },
    {
      id: "glaces-antolin",
      category: "glaces-sorbets",
      subcategory: null,
      image: "/su-misura/glaces-antolin.jpeg",
      price: 5.5,
      allergens: ["lait", "fruits-a-coque"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 200, proteines: 4, glucides: 24, lipides: 10 },
      translations: {
        fr: {
          name: "Glaces Maison Antolin",
          description:
            "Parfums : café, caramel au sel de Guérande, vanille, chocolat, pistache.",
        },
        en: {
          name: "Antolin Homemade Ice Cream",
          description:
            "Flavors: coffee, salted caramel, vanilla, chocolate, pistachio.",
        },
        it: {
          name: "Gelati Artigianali Antolin",
          description:
            "Gusti: caffè, caramello salato, vaniglia, cioccolato, pistacchio.",
        },
        es: {
          name: "Helados Artesanales Antolin",
          description:
            "Sabores: café, caramelo a la sal de Guérande, vainilla, chocolate, pistacho.",
        },
      },
    },
    {
      id: "sorbets-antolin",
      category: "glaces-sorbets",
      subcategory: null,
      image: "/su-misura/sorbets-antolin.jpeg",
      price: 5.5,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 130, proteines: 0, glucides: 32, lipides: 0 },
      translations: {
        fr: {
          name: "Sorbets Maison Antolin",
          description:
            "Parfums : citron, cassis, framboise, fraise, fruits de la passion.",
        },
        en: {
          name: "Antolin Homemade Sorbets",
          description:
            "Flavors: lemon, blackcurrant, raspberry, strawberry, passion fruit.",
        },
        it: {
          name: "Sorbetti Artigianali Antolin",
          description:
            "Gusti: limone, ribes nero, lampone, fragola, frutto della passione.",
        },
        es: {
          name: "Sorbetes Artesanales Antolin",
          description:
            "Sabores: limón, grosella negra, frambuesa, fresa, fruta de la pasión.",
        },
      },
    },
    {
      id: "sorbet-citron-limoncello",
      category: "glaces-sorbets",
      subcategory: null,
      image: "/su-misura/sorbet-citron-limoncello.jpeg",
      price: 15.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 220, proteines: 0, glucides: 38, lipides: 0 },
      translations: {
        fr: {
          name: "Sorbet au citron et limoncello Maison Antolin",
          description: "Sorbet au citron arrosé de limoncello.",
        },
        en: {
          name: "Antolin Lemon Sorbet with Limoncello",
          description: "Lemon sorbet topped with limoncello liqueur.",
        },
        it: {
          name: "Sorbetto al limone e limoncello Antolin",
          description: "Sorbetto al limone con aggiunta di limoncello.",
        },
        es: {
          name: "Sorbete de limón y limoncello Antolin",
          description: "Sorbete de limón con un toque de limoncello.",
        },
      },
    },
    {
      id: "crostata-artisanale",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/crostata-artisanale.jpeg",
      price: 12.0,
      allergens: ["oeufs", "lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 380, proteines: 6, glucides: 58, lipides: 14 },
      translations: {
        fr: {
          name: "Crostata artisanale",
          description: "Tarte à la confiture ou au citron.",
        },
        en: {
          name: "Artisanal Crostata",
          description: "Jam or lemon tart.",
        },
        it: {
          name: "Crostata artigianale",
          description: "Crostata alla marmellata o al limone.",
        },
        es: {
          name: "Crostata artesanal",
          description: "Tarta de mermelada o de limón.",
        },
      },
    },
    {
      id: "mousse-au-chocolat",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/mousse-au-chocolat.jpeg",
      price: 12.0,
      allergens: ["oeufs", "lait", "soja"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 380, proteines: 6, glucides: 36, lipides: 22 },
      translations: {
        fr: {
          name: "Mousse au chocolat maison",
          description: "Mousse au chocolat maison.",
        },
        en: {
          name: "Homemade Chocolate Mousse",
          description: "Homemade chocolate mousse.",
        },
        it: {
          name: "Mousse al cioccolato fatta in casa",
          description: "Mousse al cioccolato fatta in casa.",
        },
        es: {
          name: "Mousse de chocolate casera",
          description: "Mousse de chocolate casera.",
        },
      },
    },
    {
      id: "mi-cuit-au-chocolat",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/mi-cuit-au-chocolat.jpeg",
      price: 12.0,
      allergens: ["oeufs", "lait", "soja"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 460, proteines: 8, glucides: 44, lipides: 28 },
      translations: {
        fr: {
          name: "Mi-cuit au chocolat maison",
          description: "Mi-cuit au chocolat maison. 15 minutes d'attente.",
        },
        en: {
          name: "Homemade Chocolate Lava Cake",
          description: "Homemade chocolate fondant. 15-minute wait time.",
        },
        it: {
          name: "Tortino al cioccolato fondente fatto in casa",
          description:
            "Tortino al cioccolato dal cuore morbido. 15 minuti di attesa.",
        },
        es: {
          name: "Coulant de chocolate casero",
          description:
            "Bizcocho de chocolate con corazón líquido. 15 minutos de espera.",
        },
      },
    },
    {
      id: "tiramisu",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/tiramisu.jpeg",
      price: 13.0,
      allergens: ["oeufs", "lait", "fruits-a-coque"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 460, proteines: 8, glucides: 38, lipides: 30 },
      translations: {
        fr: {
          name: "Tiramisu",
          description: "Tiramisu classique ou pistache.",
        },
        en: {
          name: "Tiramisu",
          description: "Classic or pistachio tiramisu.",
        },
        it: {
          name: "Tiramisù",
          description: "Tiramisù classico o al pistacchio.",
        },
        es: {
          name: "Tiramisú",
          description: "Tiramisú clásico o de pistacho.",
        },
      },
    },
    {
      id: "panna-cotta",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/panna-cotta.jpeg",
      price: 12.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 320, proteines: 4, glucides: 28, lipides: 22 },
      translations: {
        fr: {
          name: "Panna cotta aux fruits rouges",
          description: "Panna cotta accompagnée d'un coulis de fruits rouges.",
        },
        en: {
          name: "Red Berry Panna Cotta",
          description: "Panna cotta with a red berry coulis.",
        },
        it: {
          name: "Panna cotta ai frutti rossi",
          description: "Panna cotta accompagnata da coulis di frutti rossi.",
        },
        es: {
          name: "Panna cotta con frutos rojos",
          description: "Panna cotta acompañada de un coulis de frutos rojos.",
        },
      },
    },
    {
      id: "salade-de-fruits-frais",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/salade-de-fruits-frais.jpeg",
      price: 12.0,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "vegan", "sans-lactose"],
      macros: { calories: 160, proteines: 2, glucides: 38, lipides: 0 },
      translations: {
        fr: {
          name: "Salade de fruits frais",
          description: "Salade de fruits frais de saison.",
        },
        en: {
          name: "Fresh Fruit Salad",
          description: "Seasonal fresh fruit salad.",
        },
        it: {
          name: "Macedonia di frutta fresca",
          description: "Macedonia di frutta fresca di stagione.",
        },
        es: {
          name: "Ensalada de frutas frescas",
          description: "Ensalada de frutas frescas de temporada.",
        },
      },
    },
    {
      id: "pizza-au-miel",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/pizza-au-miel.jpeg",
      price: 13.0,
      allergens: [],
      diets: ["sans-gluten", "vegetarien", "sans-lactose"],
      macros: { calories: 460, proteines: 8, glucides: 88, lipides: 8 },
      translations: {
        fr: {
          name: "Pizza au miel",
          description: "Pizza sucrée nappée de miel.",
        },
        en: {
          name: "Honey Pizza",
          description: "Sweet pizza topped with honey.",
        },
        it: {
          name: "Pizza al miele",
          description: "Pizza dolce guarnita con miele.",
        },
        es: {
          name: "Pizza con miel",
          description: "Pizza dulce cubierta con miel.",
        },
      },
    },
    {
      id: "affogato-al-caffe",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/affogato-al-caffe.jpeg",
      price: 13.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 240, proteines: 4, glucides: 26, lipides: 12 },
      translations: {
        fr: {
          name: "Affogato al caffé",
          description: "Glace vanille arrosée de café chaud.",
        },
        en: {
          name: "Affogato al caffé",
          description: "Vanilla ice cream topped with a shot of hot espresso.",
        },
        it: {
          name: "Affogato al caffè",
          description: "Gelato alla vaniglia con caffè caldo.",
        },
        es: {
          name: "Affogato al caffé",
          description: "Helado de vainilla bañado con café caliente.",
        },
      },
    },
    {
      id: "cafe-gourmand",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/cafe-gourmand.jpeg",
      price: 15.0,
      allergens: ["lait", "oeufs"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 520, proteines: 8, glucides: 56, lipides: 28 },
      translations: {
        fr: {
          name: "Café gourmand",
          description: "Panna cotta, crème au chocolat, salade de fruits.",
        },
        en: {
          name: "Gourmet Coffee",
          description:
            "Coffee served with panna cotta, chocolate cream, and fruit salad.",
        },
        it: {
          name: "Caffè goloso",
          description:
            "Caffè servito con panna cotta, crema al cioccolato e macedonia.",
        },
        es: {
          name: "Café gourmand",
          description:
            "Café acompañado de panna cotta, crema de chocolate y ensalada de frutas.",
        },
      },
    },
    {
      id: "plateau-de-fromages",
      category: "desserts",
      subcategory: null,
      image: "/su-misura/plateau-de-fromages.jpeg",
      price: 15.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 420, proteines: 26, glucides: 4, lipides: 34 },
      translations: {
        fr: {
          name: "Plateau de fromages",
          description: "Taleggio, parmesan et gorgonzola.",
        },
        en: {
          name: "Cheese Platter",
          description: "Taleggio, parmesan and gorgonzola.",
        },
        it: {
          name: "Tagliere di formaggi",
          description: "Taleggio, parmigiano e gorgonzola.",
        },
        es: {
          name: "Tabla de quesos",
          description: "Taleggio, parmesano y gorgonzola.",
        },
      },
    },
    {
      id: "vin-au-verre",
      category: "vins-bio",
      subcategory: null,
      image: "/su-misura/vin-au-verre.jpeg",
      price: 10.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 120, proteines: 0, glucides: 4, lipides: 0 },
      translations: {
        fr: {
          name: "Verre de vin bio 14cl",
          description: "Verre de vin bio blanc, rouge ou rosé (14cl).",
        },
        en: {
          name: "Glass of Organic Wine (14cl)",
          description: "Glass of organic white, red or rosé wine (14cl).",
        },
        it: {
          name: "Calice di vino bio 14cl",
          description: "Calice di vino bio bianco, rosso o rosato (14cl).",
        },
        es: {
          name: "Copa de vino bio 14cl",
          description: "Copa de vino bio blanco, tinto o rosado (14cl).",
        },
      },
    },
    {
      id: "pichet-de-vin",
      category: "vins-bio",
      subcategory: null,
      image: "/su-misura/pichet-de-vin.jpeg",
      price: 26.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 430, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Pichet de vin bio 50cl",
          description: "Pichet de vin bio blanc, rouge ou rosé (50cl).",
        },
        en: {
          name: "Carafe of Organic Wine (50cl)",
          description: "Carafe of organic white, red or rosé wine (50cl).",
        },
        it: {
          name: "Caraffa di vino bio 50cl",
          description: "Caraffa di vino bio bianco, rosso o rosato (50cl).",
        },
        es: {
          name: "Jarra de vino bio 50cl",
          description: "Jarra de vino bio blanco, tinto o rosado (50cl).",
        },
      },
    },
    {
      id: "montepulciano-d-abruzzo",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/montepulciano-d-abruzzo.jpeg",
      price: 34.0,
      allergens: ["so2", "so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Montepulciano d'Abruzzo DOC (Abruzzes)",
          description:
            "Vin équilibré, aux arômes de fruits rouges au final légèrement épicé. Bouteille 75cl.",
        },
        en: {
          name: "Montepulciano d'Abruzzo DOC (Abruzzo)",
          description:
            "Balanced wine with red fruit aromas and a slightly spicy finish. 75cl bottle.",
        },
        it: {
          name: "Montepulciano d'Abruzzo DOC (Abruzzo)",
          description:
            "Vino equilibrato, con aromi de frutti rossi e finale leggermente speziato. Bottiglia 75cl.",
        },
        es: {
          name: "Montepulciano d'Abruzzo DOC (Abruzos)",
          description:
            "Vino equilibrado, con aromas a frutos rojos y un final ligeramente especiado. Botella 75cl.",
        },
      },
    },
    {
      id: "nero-d-avola",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/nero-d-avola.jpeg",
      price: 37.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Nero d'Avola DOC (Sicile)",
          description:
            "Vin gourmand, aux arômes de cerises et mûres, final frais et intense. Bouteille 75cl.",
        },
        en: {
          name: "Nero d'Avola DOC (Sicily)",
          description:
            "Rich wine with cherry and blackberry aromas, fresh and intense finish. 75cl bottle.",
        },
        it: {
          name: "Nero d'Avola DOC (Sicilia)",
          description:
            "Vino armonioso, con aromi di ciliegie e more, finale fresco e intenso. Bottiglia 75cl.",
        },
        es: {
          name: "Nero d'Avola DOC (Sicilia)",
          description:
            "Vino goloso, con aromas a cerezas y moras, final fresco e intenso. Botella 75cl.",
        },
      },
    },
    {
      id: "primitivo-salento",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/primitivo-salento.jpeg",
      price: 38.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Primitivo Salento (Les Pouilles)",
          description:
            "Arômes de framboise et cerise. Vin fruité et puissant, idéal avec l'osso bucco et la pizza Parma. Bouteille 75cl.",
        },
        en: {
          name: "Primitivo Salento (Puglia)",
          description:
            "Aromas of raspberry and cherry. Fruity and powerful wine, ideal with osso bucco and Parma pizza. 75cl bottle.",
        },
        it: {
          name: "Primitivo Salento (Puglia)",
          description:
            "Aromi di lampone e ciliegia. Vino fruttato e potente, ideale con l'ossobuco e la pizza Parma. Bottiglia 75cl.",
        },
        es: {
          name: "Primitivo Salento (Apulia)",
          description:
            "Aromas de frambuesa y cereza. Vino afrutado y potente, ideal con el ossobuco y la pizza Parma. Botella 75cl.",
        },
      },
    },
    {
      id: "sangiovese-doc",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/sangiovese-doc.jpeg",
      price: 36.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Sangiovese DOC bio (Émilie-Romagne)",
          description:
            "Vin intense et sec, fruit mûr et légèrement épicé sur la fin. Bouteille 75cl.",
        },
        en: {
          name: "Organic Sangiovese DOC (Emilia-Romagna)",
          description:
            "Intense and dry wine, ripe fruit and slightly spicy on the finish. 75cl bottle.",
        },
        it: {
          name: "Sangiovese DOC bio (Emilia-Romagna)",
          description:
            "Vino intenso e secco, con note di frutta matura e un finale leggermente speziato. Bottiglia 75cl.",
        },
        es: {
          name: "Sangiovese DOC bio (Emilia-Romaña)",
          description:
            "Vino intenso y seco, fruta madura y ligeramente especiado al final. Botella 75cl.",
        },
      },
    },
    {
      id: "valpolicella-classico",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/valpolicella-classico.jpeg",
      price: 50.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Valpolicella Classico DOC bio (Vénétie)",
          description:
            "Vin délicat, frais et léger aux arômes fruités et fleuris, final frais et agréable. Bouteille 75cl.",
        },
        en: {
          name: "Organic Valpolicella Classico DOC (Veneto)",
          description:
            "Delicate, fresh and light wine with fruity and floral aromas, pleasant fresh finish. 75cl bottle.",
        },
        it: {
          name: "Valpolicella Classico DOC bio (Veneto)",
          description:
            "Vino delicato, fresco e leggero con aromi fruttati e floreali, finale fresco e piacevole. Bottiglia 75cl.",
        },
        es: {
          name: "Valpolicella Classico DOC bio (Véneto)",
          description:
            "Vino delicado, fresco y ligero con aromas frutales y florales, final fresco y agradable. Botella 75cl.",
        },
      },
    },
    {
      id: "rosso-di-montalcino",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/rosso-di-montalcino.jpeg",
      price: 59.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Rosso di Montalcino DOC (Toscane)",
          description:
            "Robe rouge rubis intense et légère, aux senteurs de fruits rouges et menthe poivrée. Bouteille 75cl.",
        },
        en: {
          name: "Rosso di Montalcino DOC (Tuscany)",
          description:
            "Intense and light ruby red color, with scents of red fruits and peppermint. 75cl bottle.",
        },
        it: {
          name: "Rosso di Montalcino DOC (Toscana)",
          description:
            "Colore rosso rubino intenso e brillante, con sentori di frutti rossi e menta piperita. Bottiglia 75cl.",
        },
        es: {
          name: "Rosso di Montalcino DOC (Toscana)",
          description:
            "Color rojo rubí intenso y ligero, con aromas de frutos rojos y menta piperita. Botella 75cl.",
        },
      },
    },
    {
      id: "aglianico-del-taburno",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/aglianico-del-taburno.jpeg",
      price: 62.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Aglianico del Taburno Rosso (Campanie)",
          description:
            "Robe rouge rubis intense et légère, aux senteurs de fruits rouges et menthe poivrée. Bouteille 75cl.",
        },
        en: {
          name: "Aglianico del Taburno Rosso (Campania)",
          description:
            "Intense and light ruby red color, with scents of red fruits and peppermint. 75cl bottle.",
        },
        it: {
          name: "Aglianico del Taburno Rosso (Campania)",
          description:
            "Colore rosso rubino intenso e brillante, con sentori di frutti rossi e menta piperita. Bottiglia 75cl.",
        },
        es: {
          name: "Aglianico del Taburno Rosso (Campania)",
          description:
            "Color rojo rubí intenso y ligero, con aromas de frutos rojos y menta piperita. Botella 75cl.",
        },
      },
    },
    {
      id: "chianti-classico",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/chianti-classico.jpeg",
      price: 37.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Chianti Classico DOCG (Toscane)",
          description:
            "Goût harmonieux, couleur rouge rubis intense, appréciable avec les viandes. Bouteille 75cl.",
        },
        en: {
          name: "Chianti Classico DOCG (Tuscany)",
          description:
            "Harmonious taste, intense ruby red color, excellent with meat. 75cl bottle.",
        },
        it: {
          name: "Chianti Classico DOCG (Toscana)",
          description:
            "Gusto armonioso, colore rosso rubino intenso, ottimo in abbinamento con le carni. Bottiglia 75cl.",
        },
        es: {
          name: "Chianti Classico DOCG (Toscana)",
          description:
            "Gusto armonioso, color rojo rubí intenso, ideal con carnes. Botella 75cl.",
        },
      },
    },
    {
      id: "cannonau",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/cannonau.jpeg",
      price: 59.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Cannonau (Sardaigne)",
          description:
            "Frais et savoureux, délicatement tannique et bien équilibré. Bouteille 75cl.",
        },
        en: {
          name: "Cannonau (Sardinia)",
          description:
            "Fresh and flavorful, delicately tannic and well-balanced. 75cl bottle.",
        },
        it: {
          name: "Cannonau (Sardegna)",
          description:
            "Fresco e sapido, delicatamente tannico e ben equilibrato. Bottiglia 75cl.",
        },
        es: {
          name: "Cannonau (Cerdeña)",
          description:
            "Fresco y sabroso, delicadamente tánico y bien equilibrado. Botella 75cl.",
        },
      },
    },
    {
      id: "barbera-d-alba",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/barbera-d-alba.jpeg",
      price: 83.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Barbera d'Alba DOC (Piémont)",
          description:
            "Aspect gustatif intense et plein. Bouquet très prononcé de fruits rouges et cerise. Bouteille 75cl.",
        },
        en: {
          name: "Barbera d'Alba DOC (Piedmont)",
          description:
            "Intense and full-bodied taste. Pronounced bouquet of red fruits and cherry. 75cl bottle.",
        },
        it: {
          name: "Barbera d'Alba DOC (Piemonte)",
          description:
            "Gusto intenso e pieno. Bouquet molto pronunciato di frutti rossi e ciliegia. Bottiglia 75cl.",
        },
        es: {
          name: "Barbera d'Alba DOC (Piamonte)",
          description:
            "Gusto intenso y pleno. Aroma muy pronunciado a frutos rojos y cereza. Botella 75cl.",
        },
      },
    },
    {
      id: "barolo",
      category: "vins-rouges",
      subcategory: null,
      image: "/su-misura/barolo.jpeg",
      price: 152.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 640, proteines: 0, glucides: 22, lipides: 0 },
      translations: {
        fr: {
          name: "Barolo DOCG (Piémont)",
          description:
            "Notes fruitées et florales de vanille et de violette. Fait partie des grands vins du monde. Bouteille 75cl.",
        },
        en: {
          name: "Barolo DOCG (Piedmont)",
          description:
            "Fruity and floral notes of vanilla and violet. One of the great wines of the world. 75cl bottle.",
        },
        it: {
          name: "Barolo DOCG (Piemonte)",
          description:
            "Note fruttate e floreali di vaniglia e violetta. Uno dei grandi vini del mondo. Bottiglia 75cl.",
        },
        es: {
          name: "Barolo DOCG (Piamonte)",
          description:
            "Notas frutales y florales de vainilla y violeta. Uno de los grandes vinos del mundo. Botella 75cl.",
        },
      },
    },
    {
      id: "bardolino-chiaretto",
      category: "vins-roses",
      subcategory: null,
      image: "/su-misura/bardolino-chiaretto.jpeg",
      price: 32.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Bardolino Chiaretto (Vénétie)",
          description:
            "Couleur rose tendre, parfum de fruits délicats rappelant la fraise, la framboise et la cerise. Idéal avec les entrées, poissons et salades. Bouteille 75cl.",
        },
        en: {
          name: "Bardolino Chiaretto (Veneto)",
          description:
            "Soft pink color, delicate fruit scent of strawberry, raspberry and cherry. Ideal with starters, fish and salads. 75cl bottle.",
        },
        it: {
          name: "Bardolino Chiaretto (Veneto)",
          description:
            "Colore rosa tenue, profumo di frutti delicati come fragola, lampone e ciliegia. Ideale con antipasti, pesce e insalate. Bottiglia 75cl.",
        },
        es: {
          name: "Bardolino Chiaretto (Véneto)",
          description:
            "Color rosa suave, aroma de frutas delicadas como fresa, frambuesa y cereza. Ideal con entrantes, pescados y ensaladas. Botella 75cl.",
        },
      },
    },
    {
      id: "rosato-terre-di-chieti",
      category: "vins-roses",
      subcategory: null,
      image: "/su-misura/rosato-terre-di-chieti.jpeg",
      price: 42.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Rosato Terre di Chieti IGT (Toscane)",
          description:
            "Arômes de rhubarbe, groseille et fruits des bois. Frais, agréable, légèrement fruité au final sec. Bouteille 75cl.",
        },
        en: {
          name: "Rosato Terre di Chieti IGT (Tuscany)",
          description:
            "Aromas of rhubarb, redcurrant and wild berries. Fresh, pleasant, slightly fruity with a dry finish. 75cl bottle.",
        },
        it: {
          name: "Rosato Terre di Chieti IGT (Toscana)",
          description:
            "Aromi di rabarbaro, ribes e frutti di bosco. Fresco, piacevole, leggermente fruttato con finale secco. Bottiglia 75cl.",
        },
        es: {
          name: "Rosato Terre di Chieti IGT (Toscana)",
          description:
            "Aromas de ruibarbo, grosella y frutos del bosque. Fresco, agradable, ligeramente afrutado con final seco. Botella 75cl.",
        },
      },
    },
    {
      id: "grillo-igt",
      category: "vins-blancs",
      subcategory: null,
      image: "/su-misura/grillo-igt.jpeg",
      price: 29.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Grillo IGT (Sicile)",
          description:
            "Parfum aromatique de sauge, camomille et écorce d'agrume. Termine sur des notes de pêche jaune, gourmand et souple. Bouteille 75cl.",
        },
        en: {
          name: "Grillo IGT (Sicily)",
          description:
            "Aromatic scent of sage, chamomile and citrus peel. Finishes with notes of yellow peach, rich and supple. 75cl bottle.",
        },
        it: {
          name: "Grillo IGT (Sicilia)",
          description:
            "Profumo aromatico di salvia, camomilla e scorza di agrumi. Note di pesca gialla sul finale, armonioso e morbido. Bottiglia 75cl.",
        },
        es: {
          name: "Grillo IGT (Sicilia)",
          description:
            "Aroma de salvia, manzanilla y corteza de cítricos. Finaliza con notas de melocotón amarillo, goloso y flexible. Botella 75cl.",
        },
      },
    },
    {
      id: "trebbiano-d-abruzzo",
      category: "vins-blancs",
      subcategory: null,
      image: "/su-misura/trebbiano-d-abruzzo.jpeg",
      price: 32.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Trebbiano d'Abruzzo (Abruzzes)",
          description:
            "Robe jaune paille aux reflets verts. Parfum fruité intense aux arômes d'agrumes sur des notes de poire et de pêche. Bouteille 75cl.",
        },
        en: {
          name: "Trebbiano d'Abruzzo (Abruzzo)",
          description:
            "Straw yellow color with green highlights. Intense fruity scent with citrus aromas and notes of pear and peach. 75cl bottle.",
        },
        it: {
          name: "Trebbiano d'Abruzzo (Abruzzo)",
          description:
            "Colore giallo paglierino con riflessi verdognoli. Profumo fruttato intenso con aromi di agrumi e note di pera e pesca. Bottiglia 75cl.",
        },
        es: {
          name: "Trebbiano d'Abruzzo (Abruzos)",
          description:
            "Color amarillo pajizo con reflejos verdes. Aroma frutal intenso con notas de cítricos, pera y melocotón. Botella 75cl.",
        },
      },
    },
    {
      id: "kukukaya-passerina",
      category: "vins-blancs",
      subcategory: null,
      image: "/su-misura/kukukaya-passerina.jpeg",
      price: 38.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Kukukaya Passerina Terre di Chieti IGT bio (Abruzzes)",
          description:
            "Arômes de poire et d'avocat, retours de cèdre et de marjolaine. Excellent équilibre et final subtil. Bouteille 75cl.",
        },
        en: {
          name: "Organic Kukukaya Passerina Terre di Chieti IGT (Abruzzo)",
          description:
            "Aromas of pear and avocado, with hints of cedar and marjoram. Excellent balance and subtle finish. 75cl bottle.",
        },
        it: {
          name: "Kukukaya Passerina Terre di Chieti IGT bio (Abruzzo)",
          description:
            "Aromi di pera e avocado, con ritorni di cedro e maggiorana. Ottimo equilibrio e finale sottile. Bottiglia 75cl.",
        },
        es: {
          name: "Kukukaya Passerina Terre di Chieti IGT bio (Abruzos)",
          description:
            "Aromas de pera y aguacate, con notas de cedro y mejorana. Excelente equilibrio y final sutil. Botella 75cl.",
        },
      },
    },
    {
      id: "falanghina-sannio",
      category: "vins-blancs",
      subcategory: null,
      image: "/su-misura/falanghina-sannio.jpeg",
      price: 42.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Falanghina Sannio DOP bio (Campanie)",
          description:
            "Vin aux arômes intenses et variés. Fruité, prune, pêche, puis final sec et minéral. Bouteille 75cl.",
        },
        en: {
          name: "Organic Falanghina Sannio DOP (Campania)",
          description:
            "Wine with intense and varied aromas. Fruity notes of plum and peach, with a dry and mineral finish. 75cl bottle.",
        },
        it: {
          name: "Falanghina Sannio DOP bio (Campania)",
          description:
            "Vino dagli aromi intensi e vari. Fruttato, prugna, pesca, con un finale secco e minerale. Bottiglia 75cl.",
        },
        es: {
          name: "Falanghina Sannio DOP bio (Campania)",
          description:
            "Vino de aromas intensos y variados. Afrutado, ciruela, melocotón, con un final seco y mineral. Botella 75cl.",
        },
      },
    },
    {
      id: "spinola-gavi",
      category: "vins-blancs",
      subcategory: null,
      image: "/su-misura/spinola-gavi.jpeg",
      price: 40.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 18, lipides: 0 },
      translations: {
        fr: {
          name: "Spinola Gavi DOCG (Piémont)",
          description:
            "Arômes de fruits exotiques, légèrement minéral et fruité. Bouteille 75cl.",
        },
        en: {
          name: "Spinola Gavi DOCG (Piedmont)",
          description:
            "Aromas of exotic fruits, slightly mineral and fruity. 75cl bottle.",
        },
        it: {
          name: "Spinola Gavi DOCG (Piemonte)",
          description:
            "Aromi di frutti esotici, leggermente minerale e fruttato. Bottiglia 75cl.",
        },
        es: {
          name: "Spinola Gavi DOCG (Piamonte)",
          description:
            "Aromas de frutas exóticas, ligeramente mineral y afrutado. Botella 75cl.",
        },
      },
    },
    {
      id: "prosecco-valdobbiadene",
      category: "prosecco",
      subcategory: null,
      image: "/su-misura/prosecco-valdobbiadene.jpeg",
      price: 55.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 600, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Prosecco Valdobbiadene (Vénétie)",
          description:
            "Arômes de fleurs et de fruits, vin pétillant frais, délicat et fruité. Bouteille 75cl.",
        },
        en: {
          name: "Prosecco Valdobbiadene (Veneto)",
          description:
            "Aromas of flowers and fruits, fresh, delicate and fruity sparkling wine. 75cl bottle.",
        },
        it: {
          name: "Prosecco Valdobbiadene (Veneto)",
          description:
            "Aromi di fiori e frutti, spumante fresco, delicato e fruttato. Bottiglia 75cl.",
        },
        es: {
          name: "Prosecco Valdobbiadene (Véneto)",
          description:
            "Aromas de flores y frutas, vino espumoso fresco, delicado y afrutado. Botella 75cl.",
        },
      },
    },
    {
      id: "spritz",
      category: "aperitifs",
      subcategory: null,
      image: "/su-misura/spritz.jpeg",
      price: 12.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 160, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Spritz",
          description: "Cocktail Spritz (14cl).",
        },
        en: {
          name: "Spritz",
          description: "Spritz cocktail (14cl).",
        },
        it: {
          name: "Spritz",
          description: "Cocktail Spritz (14cl).",
        },
        es: {
          name: "Spritz",
          description: "Cóctel Spritz (14cl).",
        },
      },
    },
    {
      id: "gin-tonic",
      category: "aperitifs",
      subcategory: null,
      image: "/su-misura/gin-tonic.jpeg",
      price: 12.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 170, proteines: 0, glucides: 12, lipides: 0 },
      translations: {
        fr: {
          name: "Gin Tonic",
          description: "Gin tonic (14cl).",
        },
        en: {
          name: "Gin Tonic",
          description: "Gin and tonic (14cl).",
        },
        it: {
          name: "Gin Tonic",
          description: "Gin tonic (14cl).",
        },
        es: {
          name: "Gin Tonic",
          description: "Gin tonic (14cl).",
        },
      },
    },
    {
      id: "coupe-de-prosecco",
      category: "aperitifs",
      subcategory: null,
      image: "/su-misura/coupe-de-prosecco.jpeg",
      price: 11.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 100, proteines: 0, glucides: 3, lipides: 0 },
      translations: {
        fr: {
          name: "Coupe de Prosecco",
          description: "Coupe de Prosecco (12cl).",
        },
        en: {
          name: "Glass of Prosecco",
          description: "A glass of Prosecco (12cl).",
        },
        it: {
          name: "Calice di Prosecco",
          description: "Un calice di Prosecco (12cl).",
        },
        es: {
          name: "Copa de Prosecco",
          description: "Una copa de Prosecco (12cl).",
        },
      },
    },
    {
      id: "vermouth",
      category: "aperitifs",
      subcategory: null,
      image: "/su-misura/vermouth.jpeg",
      price: 11.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 60, proteines: 0, glucides: 6, lipides: 0 },
      translations: {
        fr: {
          name: "Vermouth blanc ou rouge",
          description: "Vermouth blanc ou rouge (4cl).",
        },
        en: {
          name: "White or Red Vermouth",
          description: "White or red vermouth (4cl).",
        },
        it: {
          name: "Vermouth bianco o rosso",
          description: "Vermouth bianco o rosso (4cl).",
        },
        es: {
          name: "Vermut blanco o rojo",
          description: "Vermut blanco o rojo (4cl).",
        },
      },
    },
    {
      id: "campari-vodka",
      category: "aperitifs",
      subcategory: null,
      image: "/su-misura/campari-vodka.jpeg",
      price: 12.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 90, proteines: 0, glucides: 6, lipides: 0 },
      translations: {
        fr: {
          name: "Campari / Vodka",
          description: "Campari ou vodka (4cl).",
        },
        en: {
          name: "Campari / Vodka",
          description: "Campari or vodka (4cl).",
        },
        it: {
          name: "Campari / Vodka",
          description: "Campari o vodka (4cl).",
        },
        es: {
          name: "Campari / Vodka",
          description: "Campari o vodka (4cl).",
        },
      },
    },
    {
      id: "acqua-chiara",
      category: "eaux",
      subcategory: null,
      image: "/su-misura/acqua-chiara.jpeg",
      price: 6.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 0, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: {
          name: "Acqua Chiara",
          description: "Eau minérale plate ou pétillante (75cl).",
        },
        en: {
          name: "Acqua Chiara",
          description: "Still or sparkling mineral water (75cl).",
        },
        it: {
          name: "Acqua Chiara",
          description: "Acqua minerale naturale o frizzante (75cl).",
        },
        es: {
          name: "Acqua Chiara",
          description: "Agua mineral natural o con gas (75cl).",
        },
      },
    },
    {
      id: "jus-ace",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-ace.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 100, proteines: 1, glucides: 24, lipides: 0 },
      translations: {
        fr: {
          name: "Jus ACE bio",
          description: "Jus bio orange, carotte, citron (20cl).",
        },
        en: {
          name: "Organic ACE Juice",
          description: "Organic orange, carrot, and lemon juice (20cl).",
        },
        it: {
          name: "Succo ACE bio",
          description: "Succo bio arancia, carota, limone (20cl).",
        },
        es: {
          name: "Zumo ACE bio",
          description: "Zumo bio de naranja, zanahoria y limón (20cl).",
        },
      },
    },
    {
      id: "jus-peche",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-peche.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Jus de pêche bio",
          description: "Jus de pêche bio (20cl).",
        },
        en: {
          name: "Organic Peach Juice",
          description: "Organic peach juice (20cl).",
        },
        it: {
          name: "Succo alla pesca bio",
          description: "Succo di pesca biologico (20cl).",
        },
        es: {
          name: "Zumo de melocotón bio",
          description: "Zumo de melocotón bio (20cl).",
        },
      },
    },
    {
      id: "jus-myrtille",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-myrtille.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Jus de myrtille sauvage bio",
          description: "Jus de myrtille sauvage bio (20cl).",
        },
        en: {
          name: "Organic Wild Blueberry Juice",
          description: "Organic wild blueberry juice (20cl).",
        },
        it: {
          name: "Succo ai mirtilli selvatici bio",
          description: "Succo di mirtillo selvatico biologico (20cl).",
        },
        es: {
          name: "Zumo de arándanos silvestres bio",
          description: "Zumo de arándanos silvestres bio (20cl).",
        },
      },
    },
    {
      id: "jus-poire",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-poire.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Jus de poire Williams bio",
          description: "Jus de poire Williams bio (20cl).",
        },
        en: {
          name: "Organic Williams Pear Juice",
          description: "Organic Williams pear juice (20cl).",
        },
        it: {
          name: "Succo alla pera Williams bio",
          description: "Succo di pera Williams biologico (20cl).",
        },
        es: {
          name: "Zumo de pera Williams bio",
          description: "Zumo de pera Williams bio (20cl).",
        },
      },
    },
    {
      id: "jus-tomate",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-tomate.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 40, proteines: 2, glucides: 8, lipides: 0 },
      translations: {
        fr: {
          name: "Jus de tomate bio",
          description: "Jus de tomate bio (20cl).",
        },
        en: {
          name: "Organic Tomato Juice",
          description: "Organic tomato juice (20cl).",
        },
        it: {
          name: "Succo al pomodoro bio",
          description: "Succo di pomodoro biologico (20cl).",
        },
        es: {
          name: "Zumo de tomate bio",
          description: "Zumo de tomate bio (20cl).",
        },
      },
    },
    {
      id: "jus-abricot",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-abricot.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 1, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Jus d'abricot bio",
          description: "Jus d'abricot bio (20cl).",
        },
        en: {
          name: "Organic Apricot Juice",
          description: "Organic apricot juice (20cl).",
        },
        it: {
          name: "Succo all'albicocca bio",
          description: "Succo di albicocca biologico (20cl).",
        },
        es: {
          name: "Zumo de albaricoque bio",
          description: "Zumo de albaricoque bio (20cl).",
        },
      },
    },
    {
      id: "jus-pomme",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-pomme.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Jus de pomme bio",
          description: "Jus de pomme bio (20cl).",
        },
        en: {
          name: "Organic Apple Juice",
          description: "Organic apple juice (20cl).",
        },
        it: {
          name: "Succo alla mela bio",
          description: "Succo di mela biologico (20cl).",
        },
        es: {
          name: "Zumo de manzana bio",
          description: "Zumo de manzana bio (20cl).",
        },
      },
    },
    {
      id: "jus-orange",
      category: "jus-de-fruits",
      subcategory: null,
      image: "/su-misura/jus-orange.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 1, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Jus d'orange bio",
          description: "Jus d'orange bio (20cl).",
        },
        en: {
          name: "Organic Orange Juice",
          description: "Organic orange juice (20cl).",
        },
        it: {
          name: "Spremuta d'arancia bio",
          description: "Spremuta d'arancia biologica (20cl).",
        },
        es: {
          name: "Zumo de naranja bio",
          description: "Zumo de naranja bio (20cl).",
        },
      },
    },
    {
      id: "soda-aranciata",
      category: "sodas",
      subcategory: null,
      image: "/su-misura/soda-aranciata.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 28, lipides: 0 },
      translations: {
        fr: {
          name: "Aranciata bio",
          description: "Soda à l'orange bio (27,5cl).",
        },
        en: {
          name: "Organic Aranciata",
          description: "Organic orange soda (27.5cl).",
        },
        it: {
          name: "Aranciata bio",
          description: "Aranciata biologica (27,5cl).",
        },
        es: {
          name: "Aranciata bio",
          description: "Refresco de naranja bio (27,5cl).",
        },
      },
    },
    {
      id: "soda-limonade",
      category: "sodas",
      subcategory: null,
      image: "/su-misura/soda-limonade.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 100, proteines: 0, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Limonade bio",
          description: "Limonade bio (27,5cl).",
        },
        en: {
          name: "Organic Lemonade",
          description: "Organic lemonade (27.5cl).",
        },
        it: {
          name: "Limonata bio",
          description: "Limonata biologica (27,5cl).",
        },
        es: {
          name: "Limonada bio",
          description: "Limonada bio (27,5cl).",
        },
      },
    },
    {
      id: "soda-limonade-cedrat",
      category: "sodas",
      subcategory: null,
      image: "/su-misura/soda-limonade-cedrat.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 100, proteines: 0, glucides: 26, lipides: 0 },
      translations: {
        fr: {
          name: "Limonade au cédrat bio",
          description: "Limonade au cédrat bio (27,5cl).",
        },
        en: {
          name: "Organic Citron Lemonade",
          description: "Organic citron lemonade (Cedrata) (27.5cl).",
        },
        it: {
          name: "Cedrata bio",
          description: "Cedrata biologica (27,5cl).",
        },
        es: {
          name: "Limonada de cedro bio",
          description: "Limonada de cedro bio (Cedrata) (27,5cl).",
        },
      },
    },
    {
      id: "soda-chinotto",
      category: "sodas",
      subcategory: null,
      image: "/su-misura/soda-chinotto.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 28, lipides: 0 },
      translations: {
        fr: {
          name: "Chinotto bio",
          description: "Soda Chinotto bio (27,5cl).",
        },
        en: {
          name: "Organic Chinotto",
          description: "Organic Chinotto soda (27.5cl).",
        },
        it: {
          name: "Chinotto bio",
          description: "Chinotto biologico (27,5cl).",
        },
        es: {
          name: "Chinotto bio",
          description: "Refresco Chinotto bio (27,5cl).",
        },
      },
    },
    {
      id: "mole-cola",
      category: "sodas",
      subcategory: null,
      image: "/su-misura/mole-cola.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 130, proteines: 0, glucides: 32, lipides: 0 },
      translations: {
        fr: {
          name: "Mole Cola bio",
          description: "Soda Mole Cola bio (33cl).",
        },
        en: {
          name: "Organic Mole Cola",
          description: "Organic Mole Cola (Italian cola) (33cl).",
        },
        it: {
          name: "Mole Cola bio",
          description: "Mole Cola biologica (33cl).",
        },
        es: {
          name: "Mole Cola bio",
          description: "Mole Cola bio (cola italiana) (33cl).",
        },
      },
    },
    {
      id: "mole-cola-zero",
      category: "sodas",
      subcategory: null,
      image: "/su-misura/mole-cola-zero.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 0, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: {
          name: "Mole Cola Zero",
          description: "Soda Mole Cola Zero (33cl).",
        },
        en: {
          name: "Mole Cola Zero",
          description: "Mole Cola Zero (sugar-free Italian cola) (33cl).",
        },
        it: {
          name: "Mole Cola Zero",
          description: "Mole Cola Zero (33cl).",
        },
        es: {
          name: "Mole Cola Zero",
          description: "Mole Cola Zero (33cl).",
        },
      },
    },
    {
      id: "the-glace-peche",
      category: "the-glace",
      subcategory: null,
      image: "/su-misura/the-glace-peche.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 80, proteines: 0, glucides: 20, lipides: 0 },
      translations: {
        fr: {
          name: "Thé glacé à la pêche bio",
          description: "Thé glacé à la pêche bio (20cl).",
        },
        en: {
          name: "Organic Peach Ice Tea",
          description: "Organic peach ice tea (20cl).",
        },
        it: {
          name: "Tè freddo alla pesca bio",
          description: "Tè freddo alla pesca biologico (20cl).",
        },
        es: {
          name: "Té frío de melocotón bio",
          description: "Té frío de melocotón bio (20cl).",
        },
      },
    },
    {
      id: "the-glace-citron",
      category: "the-glace",
      subcategory: null,
      image: "/su-misura/the-glace-citron.jpeg",
      price: 7.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 80, proteines: 0, glucides: 20, lipides: 0 },
      translations: {
        fr: {
          name: "Thé glacé au citron bio",
          description: "Thé glacé au citron bio (20cl).",
        },
        en: {
          name: "Organic Lemon Ice Tea",
          description: "Organic lemon ice tea (20cl).",
        },
        it: {
          name: "Tè freddo al limone bio",
          description: "Tè freddo al limone biologico (20cl).",
        },
        es: {
          name: "Té frío de limón bio",
          description: "Té frío de limón bio (20cl).",
        },
      },
    },
    {
      id: "peroni-sans-gluten",
      category: "bieres",
      subcategory: null,
      image: "/su-misura/peroni-sans-gluten.jpeg",
      price: 10.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 140, proteines: 1, glucides: 12, lipides: 0 },
      translations: {
        fr: {
          name: "Peroni sans gluten",
          description: "Bière artisanale sans gluten (33cl).",
        },
        en: {
          name: "Gluten-free Peroni",
          description: "Gluten-free craft beer (33cl).",
        },
        it: {
          name: "Peroni senza glutine",
          description: "Birra artigianale senza glutine (33cl).",
        },
        es: {
          name: "Peroni sin gluten",
          description: "Cerveza artesanal sin gluten (33cl).",
        },
      },
    },
    {
      id: "expresso-illy",
      category: "boissons-chaudes",
      subcategory: null,
      image: "/su-misura/expresso-illy.jpeg",
      price: 3.5,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Expresso Illy",
          description: "Expresso Illy.",
        },
        en: {
          name: "Illy Espresso",
          description: "Illy espresso coffee.",
        },
        it: {
          name: "Caffè Espresso Illy",
          description: "Caffè espresso Illy.",
        },
        es: {
          name: "Café Espresso Illy",
          description: "Café espresso Illy.",
        },
      },
    },
    {
      id: "the-infusion",
      category: "boissons-chaudes",
      subcategory: null,
      image: "/su-misura/the-infusion.jpeg",
      price: 6.0,
      allergens: [],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 5, proteines: 0, glucides: 1, lipides: 0 },
      translations: {
        fr: {
          name: "Thé ou infusion bio",
          description: "Thé ou infusion bio.",
        },
        en: {
          name: "Organic Tea or Infusion",
          description: "Organic tea or herbal infusion.",
        },
        it: {
          name: "Tè o infuso bio",
          description: "Tè o infuso biologico.",
        },
        es: {
          name: "Té o infusión bio",
          description: "Té o infusión bio.",
        },
      },
    },
    {
      id: "cappuccino",
      category: "boissons-chaudes",
      subcategory: null,
      image: "/su-misura/cappuccino.jpeg",
      price: 7.0,
      allergens: ["lait"],
      diets: ["sans-gluten", "vegetarien"],
      macros: { calories: 100, proteines: 5, glucides: 8, lipides: 5 },
      translations: {
        fr: {
          name: "Cappuccino au lait bio",
          description: "Cappuccino au lait bio, avec ou sans lactose.",
        },
        en: {
          name: "Organic Milk Cappuccino",
          description:
            "Organic milk cappuccino, available with or without lactose.",
        },
        it: {
          name: "Cappuccino con latte bio",
          description: "Cappuccino con latte biologico, con o senza lattosio.",
        },
        es: {
          name: "Cappuccino con leche bio",
          description: "Cappuccino con leche bio, con o sin lactosa.",
        },
      },
    },
    {
      id: "amaretto",
      category: "digestifs",
      subcategory: null,
      image: "/su-misura/amaretto.jpeg",
      price: 13.0,
      allergens: ["fruits-a-coque", "so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 130, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Amaretto",
          description: "Liqueur d'amande (4cl).",
        },
        en: {
          name: "Amaretto",
          description: "Almond liqueur (4cl).",
        },
        it: {
          name: "Amaretto",
          description: "Liquore alla mandorla (4cl).",
        },
        es: {
          name: "Amaretto",
          description: "Licor de almendra (4cl).",
        },
      },
    },
    {
      id: "limoncello",
      category: "digestifs",
      subcategory: null,
      image: "/su-misura/limoncello.jpeg",
      price: 13.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 130, proteines: 0, glucides: 16, lipides: 0 },
      translations: {
        fr: {
          name: "Limoncello",
          description: "Liqueur de citron (4cl).",
        },
        en: {
          name: "Limoncello",
          description: "Lemon liqueur (4cl).",
        },
        it: {
          name: "Limoncello",
          description: "Liquore al limone (4cl).",
        },
        es: {
          name: "Limoncello",
          description: "Licor de limón (4cl).",
        },
      },
    },
    {
      id: "grappa",
      category: "digestifs",
      subcategory: null,
      image: "/su-misura/grappa.jpeg",
      price: 13.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 110, proteines: 0, glucides: 0, lipides: 0 },
      translations: {
        fr: {
          name: "Grappa",
          description: "Eau de vie de marc de raisin (4cl).",
        },
        en: {
          name: "Grappa",
          description: "Grape marc brandy (4cl).",
        },
        it: {
          name: "Grappa",
          description: "Acquavite di vinaccia (4cl).",
        },
        es: {
          name: "Grappa",
          description: "Aguardiente de orujo de uva (4cl).",
        },
      },
    },
    {
      id: "sambucca-biostilla",
      category: "digestifs",
      subcategory: null,
      image: "/su-misura/sambucca-biostilla.jpeg",
      price: 13.0,
      allergens: ["so2"],
      diets: ["sans-gluten", "vegan", "sans-lactose"],
      macros: { calories: 140, proteines: 0, glucides: 14, lipides: 0 },
      translations: {
        fr: {
          name: "Sambucca Biostilla",
          description: "Liqueur d'anis étoilé (4cl).",
        },
        en: {
          name: "Biostilla Sambucca",
          description: "Star anise liqueur (4cl).",
        },
        it: {
          name: "Sambucca Biostilla",
          description: "Liquore all'anice stellato (4cl).",
        },
        es: {
          name: "Sambucca Biostilla",
          description: "Licor de anís estrellado (4cl).",
        },
      },
    },
    // {
    //   "id": "formule-entree-plat-dessert",
    //   "category": "formules",
    //   "subcategory": null,
    //   "image": "/su-misura/formule-entree-plat-dessert.jpeg",
    //   "price": 28.50,
    //   "allergens": [],
    //   "diets": ["sans-gluten"],
    //   "macros": { "calories": 0, "proteines": 0, "glucides": 0, "lipides": 0 },
    //   "translations": {
    //     "fr": {
    //       "name": "Formule Entrée + Plat + Dessert",
    //       "description": "Formule déjeuner jusqu'à 15h30, hors week-end et jours fériés. Au choix à l'ardoise. Hors boissons."
    //     }
    //   }
    // },
    // {
    //   "id": "formule-deux-plats",
    //   "category": "formules",
    //   "subcategory": null,
    //   "image": "/su-misura/formule-deux-plats.jpeg",
    //   "price": 22.50,
    //   "allergens": [],
    //   "diets": ["sans-gluten"],
    //   "macros": { "calories": 0, "proteines": 0, "glucides": 0, "lipides": 0 },
    //   "translations": {
    //     "fr": {
    //       "name": "Formule Entrée + Plat ou Plat + Dessert",
    //       "description": "Formule déjeuner jusqu'à 15h30, hors week-end et jours fériés. Au choix à l'ardoise. Hors boissons."
    //     }
    //   }
    // }
  ],
}
