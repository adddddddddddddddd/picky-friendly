import type { MenuItem } from '@/lib/types'

// Pexels CDN — free to use, no API key required (Pexels License)
// IDs confirmed from pexels.com/photo/{slug}-{id}/ URL slugs
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`

const localImage = (path: string) => `/public/${path}`

export const menuItems: Record<string, MenuItem[]> = {
  // ─── Entrées ───────────────────────────────────────────────────────────────
  
  "default" : [{
    id: 'soupe-oignon',
    category: 'entrees',
    subcategory: 'soupes',
    // "Soup With Onion and Meat" — pexels.com/photo/soup-with-onion-and-meat-750827
    image: pexels(750827),
    translations: {
      fr: { name: 'Soupe à l\'oignon', description: 'Soupe gratinée à l\'oignon avec croûtons et gruyère fondu' },
      en: { name: 'French Onion Soup', description: 'Gratinated onion soup with croutons and melted Gruyère' },
      it: { name: 'Zuppa di cipolla', description: 'Zuppa di cipolla gratinata con crostini e Gruyère fuso' },
      es: { name: 'Sopa de cebolla', description: 'Sopa de cebolla gratinada con picatostes y Gruyère derretido' },
    },
    price: 9.5,
    allergens: ['gluten', 'lait', 'oeufs'],
    diets: ['vegetarien'],
    macros: { calories: 320, proteines: 12, glucides: 38, lipides: 14 },
  },
  {
    id: 'salade-cesar',
    category: 'entrees',
    subcategory: 'salades',
    // "Close up of Caesar Salad" — pexels.com/photo/close-up-of-caesar-salad-8251537
    image: pexels(8251537),
    translations: {
      fr: { name: 'Salade César', description: 'Romaine croquante, parmesan, croûtons dorés, sauce César maison' },
      en: { name: 'Caesar Salad', description: 'Crispy romaine, parmesan, golden croutons, house Caesar dressing' },
      it: { name: 'Insalata Cesare', description: 'Romana croccante, parmigiano, crostini dorati, salsa Cesare fatta in casa' },
      es: { name: 'Ensalada César', description: 'Romana crujiente, parmesano, picatostes dorados, aderezo César casero' },
    },
    price: 12,
    allergens: ['gluten', 'lait', 'oeufs', 'poissons', 'moutarde'],
    diets: [],
    macros: { calories: 380, proteines: 14, glucides: 22, lipides: 26 },
  },
  {
    id: 'escargots',
    category: 'entrees',
    subcategory: 'mets',
    // "Close-up of Seafood with Bread" — pexels.com/photo/close-up-of-seafood-with-bread-12173358
    image: pexels(12173358),
    translations: {
      fr: { name: 'Escargots de Bourgogne', description: 'Six escargots au beurre persillé à l\'ail, servis en coquille' },
      en: { name: 'Burgundy Snails', description: 'Six snails in garlic parsley butter, served in shell' },
      it: { name: 'Lumache di Borgogna', description: 'Sei lumache al burro aromatizzato all\'aglio e prezzemolo, servite nel guscio' },
      es: { name: 'Caracoles de Borgoña', description: 'Seis caracoles con mantequilla de ajo y perejil, servidos en su concha' },
    },
    price: 14,
    allergens: ['lait', 'gluten', 'mollusques'],
    diets: [],
    macros: { calories: 210, proteines: 16, glucides: 4, lipides: 15 },
  },
  {
    id: 'foie-gras',
    category: 'entrees',
    subcategory: 'mets',
    // "A Person Preparing a Charcuterie Board" — pexels.com/photo/a-person-preparing-a-charcuterie-board-6004233
    image: pexels(6004233),
    translations: {
      fr: { name: 'Foie gras maison', description: 'Terrine de foie gras de canard, chutney de figues, brioche toastée' },
      en: { name: 'House Foie Gras', description: 'Duck foie gras terrine, fig chutney, toasted brioche' },
      it: { name: 'Foie gras della casa', description: 'Terrina di foie gras di anatra, chutney di fichi, brioche tostata' },
      es: { name: 'Foie gras de la casa', description: 'Terrina de foie gras de pato, chutney de higos, brioche tostado' },
    },
    price: 22,
    allergens: ['gluten', 'oeufs', 'lait', 'so2'],
    diets: [],
    macros: { calories: 490, proteines: 8, glucides: 18, lipides: 44 },
  },

  // ─── Plats ─────────────────────────────────────────────────────────────────
  {
    id: 'steak-frites',
    category: 'plats',
    subcategory: 'viandes',
    // "Steak with French Fries and Red Fruits" — pexels.com/photo/steak-with-french-fries-and-red-fruits-1352262
    image: pexels(1352262),
    translations: {
      fr: { name: 'Steak frites', description: 'Entrecôte 200 g cuite à votre goût, frites maison, sauce au poivre' },
      en: { name: 'Steak & Fries', description: '200 g ribeye cooked to your liking, homemade fries, pepper sauce' },
      it: { name: 'Bistecca e patatine', description: 'Entrecôte 200 g cotta a piacere, patatine fritte fatte in casa, salsa al pepe' },
      es: { name: 'Bistec con patatas fritas', description: 'Entrecot 200 g al punto deseado, patatas fritas caseras, salsa de pimienta' },
    },
    price: 26,
    allergens: ['lait', 'moutarde'],
    diets: ['halal'],
    macros: { calories: 720, proteines: 48, glucides: 52, lipides: 34 },
  },
  {
    id: 'sole-meuniere',
    category: 'plats',
    subcategory: 'poissons',
    // "Cooked Fish on Plate" — pexels.com/photo/cooked-fish-on-plate-2374946
    image: pexels(2374946),
    translations: {
      fr: { name: 'Sole meunière', description: 'Sole entière dorée au beurre noisette, câpres, citron, persil frais' },
      en: { name: 'Sole Meunière', description: 'Whole sole in brown butter, capers, lemon, fresh parsley' },
      it: { name: 'Sogliola alla mugnaia', description: 'Sogliola intera dorata nel burro noisette, capperi, limone, prezzemolo fresco' },
      es: { name: 'Lenguado a la molinera', description: 'Lenguado entero dorado en mantequilla avellana, alcaparras, limón, perejil fresco' },
    },
    price: 28,
    allergens: ['poissons', 'lait', 'gluten'],
    diets: ['sans-gluten'],
    macros: { calories: 460, proteines: 36, glucides: 8, lipides: 32 },
  },
  {
    id: 'poulet-roti',
    category: 'plats',
    subcategory: 'viandes',
    // "Roasted Chicken Wings on White Plate" — pexels.com/photo/2338407
    image: pexels(2338407),
    translations: {
      fr: { name: 'Poulet rôti fermier', description: 'Demi-poulet Label Rouge rôti au four, jus de volaille, légumes de saison' },
      en: { name: 'Roast Farm Chicken', description: 'Half Label Rouge chicken roasted, poultry jus, seasonal vegetables' },
      it: { name: 'Pollo arrosto di fattoria', description: 'Mezzo pollo Label Rouge arrosto, sugo di pollame, verdure di stagione' },
      es: { name: 'Pollo de granja asado', description: 'Medio pollo Label Rouge asado al horno, jugo de ave, verduras de temporada' },
    },
    price: 22,
    allergens: ['lait', 'celeri'],
    diets: ['halal', 'casher', 'sans-gluten'],
    macros: { calories: 580, proteines: 52, glucides: 18, lipides: 34 },
  },
  {
    id: 'ratatouille',
    category: 'plats',
    subcategory: 'vegetarien',
    // "Colourful Salad of Cooked Vegetables" — pexels.com/photo/colourful-salad-of-cooked-vegetables-11213759
    image: pexels(11213759),
    translations: {
      fr: { name: 'Ratatouille provençale', description: 'Courgettes, aubergines, poivrons et tomates mijotés aux herbes de Provence' },
      en: { name: 'Provençal Ratatouille', description: 'Zucchini, eggplant, peppers and tomatoes simmered with Provençal herbs' },
      it: { name: 'Ratatouille provenzale', description: 'Zucchine, melanzane, peperoni e pomodori in umido con erbe di Provenza' },
      es: { name: 'Ratatouille provenzal', description: 'Calabacín, berenjena, pimientos y tomates guisados con hierbas de Provenza' },
    },
    price: 17,
    allergens: [],
    diets: ['vegan', 'vegetarien', 'halal', 'casher', 'sans-gluten', 'sans-lactose'],
    macros: { calories: 220, proteines: 6, glucides: 28, lipides: 10 },
  },
  {
    id: 'boeuf-bourguignon',
    category: 'plats',
    subcategory: 'viandes',
    // "Cooked Meat With Vegetable Garnish on White Plate" — pexels.com/photo/cooked-meat-with-vegetable-garnish-on-white-plate-1327393
    image: pexels(1327393),
    translations: {
      fr: { name: 'Bœuf bourguignon', description: 'Joue de bœuf braisée au Pinot Noir, lardons, champignons, purée maison' },
      en: { name: 'Beef Bourguignon', description: 'Beef cheek braised in Pinot Noir, lardons, mushrooms, homemade mash' },
      it: { name: 'Bœuf bourguignon', description: 'Guancia di manzo brasata al Pinot Noir, pancetta, funghi, purè fatto in casa' },
      es: { name: 'Bœuf bourguignon', description: 'Carrillera de ternera braseada al Pinot Noir, lardons, champiñones, puré casero' },
    },
    price: 29,
    allergens: ['gluten', 'lait', 'celeri', 'so2'],
    diets: [],
    macros: { calories: 650, proteines: 42, glucides: 36, lipides: 32 },
  },
  {
    id: 'risotto-champignons',
    category: 'plats',
    subcategory: 'vegetarien',
    // "Photo of Risotto on a Black and White Plate" — pexels.com/photo/photo-of-risotto-on-a-black-and-white-plate-6406460
    image: pexels(6406460),
    translations: {
      fr: { name: 'Risotto aux champignons', description: 'Risotto crémeux aux cèpes et girolles, parmesan, huile de truffe blanche' },
      en: { name: 'Mushroom Risotto', description: 'Creamy risotto with porcini and chanterelles, parmesan, white truffle oil' },
      it: { name: 'Risotto ai funghi', description: 'Risotto cremoso con porcini e finferli, parmigiano, olio al tartufo bianco' },
      es: { name: 'Risotto de setas', description: 'Risotto cremoso con boletus y rebozuelos, parmesano, aceite de trufa blanca' },
    },
    price: 21,
    allergens: ['lait', 'celeri'],
    diets: ['vegetarien', 'sans-gluten'],
    macros: { calories: 520, proteines: 14, glucides: 72, lipides: 20 },
  },

  // ─── Fromages ──────────────────────────────────────────────────────────────
  {
    id: 'plateau-fromages',
    category: 'fromages',
    subcategory: 'plateau',
    // "Cheese and Wine on Brown Wooden Chopping Board" — pexels.com/photo/cheese-and-wine-on-brown-wooden-chopping-board-3522515
    image: pexels(3522515),
    translations: {
      fr: { name: 'Plateau de fromages', description: 'Sélection de 5 fromages affinés, accompagnés de pain aux noix et confiture' },
      en: { name: 'Cheese Board', description: 'Selection of 5 aged cheeses, walnut bread and jam' },
      it: { name: 'Piatto di formaggi', description: 'Selezione di 5 formaggi stagionati, pane alle noci e confettura' },
      es: { name: 'Tabla de quesos', description: 'Selección de 5 quesos curados, pan de nueces y mermelada' },
    },
    price: 18,
    allergens: ['lait', 'gluten', 'fruits-a-coque'],
    diets: ['vegetarien'],
    macros: { calories: 560, proteines: 28, glucides: 22, lipides: 42 },
  },
  {
    id: 'brie-meaux',
    category: 'fromages',
    subcategory: 'pates-molles',
    // "A Wine Glasses Near the Wooden Plate with Cheese and Grapes" — pexels.com/photo/...8473176
    image: pexels(8473176),
    translations: {
      fr: { name: 'Brie de Meaux AOP', description: 'Portion généreuse de Brie de Meaux AOP, miel de fleurs, noix fraîches' },
      en: { name: 'Brie de Meaux AOP', description: 'Generous portion of Brie de Meaux AOP, flower honey, fresh walnuts' },
      it: { name: 'Brie de Meaux AOP', description: 'Porzione generosa di Brie de Meaux AOP, miele di fiori, noci fresche' },
      es: { name: 'Brie de Meaux AOP', description: 'Porción generosa de Brie de Meaux AOP, miel de flores, nueces frescas' },
    },
    price: 11,
    allergens: ['lait', 'fruits-a-coque'],
    diets: ['vegetarien', 'sans-gluten'],
    macros: { calories: 340, proteines: 18, glucides: 8, lipides: 28 },
  },
  {
    id: 'roquefort',
    category: 'fromages',
    subcategory: 'pates-persillees',
    // "Cheese And Red Tomato On Brown Wooden Chopping Board" — pexels.com/photo/...3756498
    image: pexels(3756498),
    translations: {
      fr: { name: 'Roquefort Société', description: 'Roquefort Société AOP, poire Williams rôtie, pain de seigle grillé' },
      en: { name: 'Roquefort Société', description: 'Roquefort Société AOP, roasted Williams pear, toasted rye bread' },
      it: { name: 'Roquefort Société', description: 'Roquefort Société AOP, pera Williams arrostita, pane di segale tostato' },
      es: { name: 'Roquefort Société', description: 'Roquefort Société AOP, pera Williams asada, pan de centeno tostado' },
    },
    price: 13,
    allergens: ['lait', 'gluten'],
    diets: ['vegetarien'],
    macros: { calories: 290, proteines: 16, glucides: 14, lipides: 22 },
  },

  // ─── Desserts ──────────────────────────────────────────────────────────────
  {
    id: 'creme-brulee',
    category: 'desserts',
    subcategory: 'classiques',
    // "Top View Photo of Food Dessert" — pexels.com/photo/top-view-photo-of-food-dessert-1099680
    image: pexels(1099680),
    translations: {
      fr: { name: 'Crème brûlée à la vanille', description: 'Crème brûlée à la vanille de Tahiti, caramel craquant maison' },
      en: { name: 'Vanilla Crème Brûlée', description: 'Tahitian vanilla crème brûlée with homemade crackled caramel' },
      it: { name: 'Crème brûlée alla vaniglia', description: 'Crème brûlée alla vaniglia di Tahiti con caramello croccante fatto in casa' },
      es: { name: 'Crème brûlée de vainilla', description: 'Crème brûlée de vainilla de Tahití con caramelo crujiente casero' },
    },
    price: 9,
    allergens: ['lait', 'oeufs'],
    diets: ['vegetarien', 'sans-gluten'],
    macros: { calories: 380, proteines: 7, glucides: 44, lipides: 20 },
  },
  {
    id: 'tarte-tatin',
    category: 'desserts',
    subcategory: 'classiques',
    // "Close-up Of Tasty Looking Baked Goods" (mini apple pies) — pexels.com/photo/...2955816
    image: pexels(2955816),
    translations: {
      fr: { name: 'Tarte Tatin', description: 'Tarte aux pommes caramélisées à l\'envers, crème fraîche épaisse' },
      en: { name: 'Tarte Tatin', description: 'Upside-down caramelised apple tart, thick crème fraîche' },
      it: { name: 'Tarte Tatin', description: 'Crostata di mele caramellata al rovescio, crème fraîche densa' },
      es: { name: 'Tarte Tatin', description: 'Tarta de manzanas caramelizadas invertida, crème fraîche espesa' },
    },
    price: 10,
    allergens: ['gluten', 'lait', 'oeufs'],
    diets: ['vegetarien'],
    macros: { calories: 420, proteines: 5, glucides: 62, lipides: 18 },
  },
  {
    id: 'mousse-chocolat',
    category: 'desserts',
    subcategory: 'chocolat',
    // "Chocolate Desert in Autumn Ambient" — pexels.com/photo/chocolate-desert-in-autumn-ambient-14056746
    image: pexels(14056746),
    translations: {
      fr: { name: 'Mousse au chocolat', description: 'Mousse légère au chocolat noir 70 %, fleur de sel, éclats de cacao' },
      en: { name: 'Chocolate Mousse', description: 'Light 70 % dark chocolate mousse, fleur de sel, cacao nibs' },
      it: { name: 'Mousse al cioccolato', description: 'Mousse leggera al cioccolato fondente 70 %, fleur de sel, granella di cacao' },
      es: { name: 'Mousse de chocolate', description: 'Mousse ligera de chocolate negro 70 %, flor de sal, pepitas de cacao' },
    },
    price: 9,
    allergens: ['oeufs', 'lait', 'soja'],
    diets: ['vegetarien', 'sans-gluten'],
    macros: { calories: 340, proteines: 8, glucides: 28, lipides: 22 },
  },
  {
    id: 'ile-flottante',
    category: 'desserts',
    subcategory: 'classiques',
    // "Shallow Focus of White Icing-covered Cake" — pexels.com/photo/...1721934
    image: pexels(1721934),
    translations: {
      fr: { name: 'Île flottante', description: 'Blancs en neige pochés sur crème anglaise à la vanille, pralin caramélisé' },
      en: { name: 'Floating Island', description: 'Poached meringue on vanilla custard cream, caramelised praline' },
      it: { name: 'Isola galleggiante', description: 'Meringa pochée su crema inglese alla vaniglia, pralinato caramellato' },
      es: { name: 'Isla flotante', description: 'Merengue pochado sobre crema inglesa de vainilla, pralinado caramelizado' },
    },
    price: 8,
    allergens: ['oeufs', 'lait', 'fruits-a-coque'],
    diets: ['vegetarien', 'sans-gluten'],
    macros: { calories: 290, proteines: 10, glucides: 38, lipides: 12 },
  },

  // ─── Boissons ──────────────────────────────────────────────────────────────
  {
    id: 'eau-minerale',
    category: 'boissons',
    subcategory: 'eaux',
    // "Close-up of Bottle Pouring Water on Glass" — pexels.com/photo/...327090
    image: pexels(327090),
    translations: {
      fr: { name: 'Eau minérale', description: 'Eau minérale naturelle Évian ou Perrier gazeuse, 50 cl' },
      en: { name: 'Mineral Water', description: 'Still Évian or sparkling Perrier mineral water, 50 cl' },
      it: { name: 'Acqua minerale', description: 'Acqua minerale naturale Évian o Perrier frizzante, 50 cl' },
      es: { name: 'Agua mineral', description: 'Agua mineral natural Évian o Perrier con gas, 50 cl' },
    },
    price: 4,
    allergens: [],
    diets: ['vegan', 'vegetarien', 'halal', 'casher', 'sans-gluten', 'sans-lactose'],
    macros: { calories: 0, proteines: 0, glucides: 0, lipides: 0 },
  },
  {
    id: 'vin-rouge',
    category: 'boissons',
    subcategory: 'vins',
    // "Wine Glass on Restaurant Table" — pexels.com/photo/wine-glass-on-restaurant-table-225228
    image: pexels(225228),
    translations: {
      fr: { name: 'Vin rouge maison', description: 'Bordeaux AOP sélectionné par notre sommelier, verre 15 cl' },
      en: { name: 'House Red Wine', description: 'Bordeaux AOP selected by our sommelier, 15 cl glass' },
      it: { name: 'Vino rosso della casa', description: 'Bordeaux AOP selezionato dal nostro sommelier, calice da 15 cl' },
      es: { name: 'Vino tinto de la casa', description: 'Bordeaux AOP seleccionado por nuestro sumiller, copa de 15 cl' },
    },
    price: 7,
    allergens: ['so2'],
    diets: ['vegan', 'vegetarien', 'sans-gluten', 'sans-lactose'],
    macros: { calories: 120, proteines: 0, glucides: 4, lipides: 0 },
  },
  {
    id: 'jus-fruits',
    category: 'boissons',
    subcategory: 'jus',
    // "Fresh Fruit Juice with Oranges and Lemon" — pexels.com/photo/96974
    image: pexels(96974),
    translations: {
      fr: { name: 'Jus de fruits frais', description: 'Jus pressé du jour : orange, pomme-gingembre ou carotte-citron, 25 cl' },
      en: { name: 'Fresh Fruit Juice', description: 'Freshly pressed: orange, apple-ginger or carrot-lemon, 25 cl' },
      it: { name: 'Succo di frutta fresco', description: 'Succo del giorno: arancia, mela-zenzero o carota-limone, 25 cl' },
      es: { name: 'Zumo de frutas natural', description: 'Zumo del día: naranja, manzana-jengibre o zanahoria-limón, 25 cl' },
    },
    price: 5.5,
    allergens: [],
    diets: ['vegan', 'vegetarien', 'halal', 'casher', 'sans-gluten', 'sans-lactose'],
    macros: { calories: 90, proteines: 1, glucides: 22, lipides: 0 },
  },
  
],
  "judy": [
  { "id": "purist", "category": "feelGoodDrinks", "subcategory": "coldPressedJuices","image": "/judy/purist.jpeg", "price": 7.4, "allergens": ["celeri"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 50, "proteines": 2, "glucides": 10, "lipides": 0 }, "translations": { "fr": { "name": "Purist — Digestion", "description": "Concombre, blette, fenouil, kale, épinards, carotte, céleri, persil, coriandre, citron — 25 cl" }, "en": { "name": "Purist — Digestion", "description": "Cucumber, chard, fennel, kale, spinach, carrot, celery, parsley, coriander, lemon — 25 cl" }, "it": { "name": "Purist — Digestion", "description": "Cetriolo, bietola, finocchio, cavolo riccio, spinaci, carota, sedano, prezzemolo, coriandolo, limone — 25 cl" }, "es": { "name": "Purist — Digestion", "description": "Pepino, acelga, hinojo, col rizada, espinacas, zanahoria, apio, perejil, cilantro, limón — 25 cl" } } },
  { "id": "elevate", "category": "feelGoodDrinks", "subcategory": "coldPressedJuices","image": "/judy/elevate.jpeg", "price": 7.4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 60, "proteines": 1, "glucides": 14, "lipides": 0 }, "translations": { "fr": { "name": "Elevate — Energie", "description": "Carotte, pomme, citron, gingembre, curcuma — 25 cl" }, "en": { "name": "Elevate — Energie", "description": "Carrot, apple, lemon, ginger, turmeric — 25 cl" }, "it": { "name": "Elevate — Energie", "description": "Carota, mela, limone, zenzero, curcuma — 25 cl" }, "es": { "name": "Elevate — Energie", "description": "Zanahoria, manzana, limón, jengibre, cúrcuma — 25 cl" } } },
  { "id": "recover", "category": "feelGoodDrinks", "subcategory": "coldPressedJuices","image": "/judy/recover.jpeg", "price": 7.4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 65, "proteines": 2, "glucides": 14, "lipides": 0 }, "translations": { "fr": { "name": "Recover — Recharge", "description": "Pomme, ananas, concombre, épinards, spiruline — 25 cl" }, "en": { "name": "Recover — Recharge", "description": "Apple, pineapple, cucumber, spinach, spirulina — 25 cl" }, "it": { "name": "Recover — Recharge", "description": "Mela, ananas, cetriolo, spinaci, spirulina — 25 cl" }, "es": { "name": "Recover — Recharge", "description": "Manzana, piña, pepino, espinacas, espirulina — 25 cl" } } },
  { "id": "cleanse", "category": "feelGoodDrinks", "subcategory": "coldPressedJuices","image": "/judy/cleanse.jpeg", "price": 7.4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 55, "proteines": 1, "glucides": 12, "lipides": 0 }, "translations": { "fr": { "name": "Cleanse — Equilibre", "description": "Ananas, pomme, chou kale, eau de coco, charbon actif — 25 cl" }, "en": { "name": "Cleanse — E", "description": "Pineapple, apple, kale, coconut water, activated charcoal — 25 cl" }, "it": { "name": "Cleanse — E", "description": "Ananas, mela, cavolo riccio, acqua di cocco, carbone attivo — 25 cl" }, "es": { "name": "Cleanse — E", "description": "Piña, manzana, col rizada, agua de coco, carbón activado — 25 cl" } } },
  { "id": "radiance", "category": "feelGoodDrinks", "subcategory": "coldPressedJuices","image": "/judy/radiance.jpeg", "price": 7.4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 60, "proteines": 1, "glucides": 13, "lipides": 0 }, "translations": { "fr": { "name": "Radiance — Tonifie", "description": "Carotte, orange, gingembre, citron, vinaigre de cidre — 25 cl" }, "en": { "name": "Radiance — Tonifie", "description": "Carrot, orange, ginger, lemon, apple cider vinegar — 25 cl" }, "it": { "name": "Radiance — Tonifie", "description": "Carota, arancia, zenzero, limone, aceto di mele — 25 cl" }, "es": { "name": "Radiance — Tonifie", "description": "Zanahoria, naranja, jengibre, limón, vinagre de manzana — 25 cl" } } },
  { "id": "glow", "category": "feelGoodDrinks", "subcategory": "coldPressedJuices","image": "/judy/glow.jpeg", "price": 7.4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 55, "proteines": 1, "glucides": 12, "lipides": 0 }, "translations": { "fr": { "name": "Glow — Eclat", "description": "Pomme, fraise, citron — 25 cl" }, "en": { "name": "Glow — E", "description": "Apple, strawberry, lemon — 25 cl" }, "it": { "name": "Glow — E", "description": "Mela, fragola, limone — 25 cl" }, "es": { "name": "Glow — E", "description": "Manzana, fresa, limón — 25 cl" } } },
  { "id": "fortify", "category": "feelGoodDrinks", "subcategory": "coldPressedShots","image": "/judy/fortify.jpeg", "price": 4.5, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 20, "proteines": 0, "glucides": 5, "lipides": 0 }, "translations": { "fr": { "name": "Fortify — Récupération", "description": "Pomme, citron, gingembre, piment de Cayenne — 6 cl" }, "en": { "name": "Fortify — Récupération", "description": "Apple, lemon, ginger, cayenne pepper — 6 cl" }, "it": { "name": "Fortify — Récupération", "description": "Mela, limone, zenzero, pepe di Cayenna — 6 cl" }, "es": { "name": "Fortify — Récupération", "description": "Manzana, limón, jengibre, pimienta de Cayena — 6 cl" } } },
  { "id": "switchel-shot", "category": "feelGoodDrinks", "subcategory": "coldPressedShots", "image": "/judy/switchel-shot.jpeg","price": 4.5, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 18, "proteines": 0, "glucides": 4, "lipides": 0 }, "translations": { "fr": { "name": "Switchel — Vitalité", "description": "Pomme, citron, gingembre, vinaigre de cidre — 6 cl" }, "en": { "name": "Switchel — Vitalité", "description": "Apple, lemon, ginger, apple cider vinegar — 6 cl" }, "it": { "name": "Switchel — Vitalité", "description": "Mela, limone, zenzero, aceto di mele — 6 cl" }, "es": { "name": "Switchel — Vitalité", "description": "Manzana, limón, jengibre, vinagre de manzana — 6 cl" } } },
  { "id": "sesame-latte", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte","image": "/judy/sesame-latte.jpeg", "price": 6.5, "allergens": ["sesame", "lait" ], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 110, "proteines": 3, "glucides": 14, "lipides": 5 }, "translations": { "fr": { "name": "Sésame Latte", "description": "Sésame, sirop de datte, charbon végétal actif, gingembre, poivre" }, "en": { "name": "Sesame Latte", "description": "Sesame, date syrup, activated vegetable charcoal, ginger, pepper" }, "it": { "name": "Sesame Latte", "description": "Sesamo, sciroppo di dattero, carbone vegetale attivo, zenzero, pepe" }, "es": { "name": "Sesame Latte", "description": "Sésamo, sirope de dátil, carbón vegetal activo, jengibre, pimienta" } } },
  { "id": "rose-latte", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte","image": "/judy/rose-latte.jpeg", "price": 6.5, "allergens": ["lait"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 100, "proteines": 1, "glucides": 12, "lipides": 5 }, "translations": { "fr": { "name": "Rose Latte", "description": "Pétale de rose, coco, shatavari, cardamome" }, "en": { "name": "Rose Latte", "description": "Rose petal, coconut, shatavari, cardamom" }, "it": { "name": "Rose Latte", "description": "Petalo di rosa, cocco, shatavari, cardamomo" }, "es": { "name": "Rose Latte", "description": "Pétalo de rosa, coco, shatavari, cardamomo" } } },
  { "id": "matcha-latte", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte","image": "/judy/matcha-latte.jpeg", "price": 6.5, "allergens": ["lait"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 80, "proteines": 1, "glucides": 10, "lipides": 3 }, "translations": { "fr": { "name": "Matcha Latte", "description": "Thé vert matcha japonais de chez Umami" }, "en": { "name": "Matcha Latte", "description": "Japanese matcha green tea from Umami" }, "it": { "name": "Matcha Latte", "description": "Tè verde matcha giapponese di Umami" }, "es": { "name": "Matcha Latte", "description": "Té verde matcha japonés de Umami" } } },
  { "id": "chai-latte", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte", "image": "/judy/choco-reishi.jpeg","price": 6.5, "allergens": ["lait"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 90, "proteines": 1, "glucides": 16, "lipides": 2 }, "translations": { "fr": { "name": "Chaï Latte", "description": "Thé noir, mélange d'épices indiennes, sirop d'érable" }, "en": { "name": "Chai Latte", "description": "Black tea, Indian spice blend, maple syrup" }, "it": { "name": "Chai Latte", "description": "Tè nero, miscela di spezie indiane, sciroppo d'acero" }, "es": { "name": "Chai Latte", "description": "Té negro, mezcla de especias indias, sirope de arce" } } },
  { "id": "golden-mylk", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte", "image": "/judy/golden-mylk.jpeg","price": 6.5, "allergens": ["lait"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 85, "proteines": 1, "glucides": 11, "lipides": 4 }, "translations": { "fr": { "name": "Golden Mylk", "description": "Curcuma, poivre noir, cardamome verte, gingembre, muscade" }, "en": { "name": "Golden Mylk", "description": "Turmeric, black pepper, green cardamom, ginger, nutmeg" }, "it": { "name": "Golden Mylk", "description": "Curcuma, pepe nero, cardamomo verde, zenzero, noce moscata" }, "es": { "name": "Golden Mylk", "description": "Cúrcuma, pimienta negra, cardamomo verde, jengibre, nuez moscada" } } },
  { "id": "spicy-choco", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte", "image": "/judy/spicy-choco.jpeg","price": 6.5, "allergens": ["lait", "soja"], "diets": ["vegetarien", "halal", "sans-gluten"], "macros": { "calories": 120, "proteines": 2, "glucides": 14, "lipides": 6 }, "translations": { "fr": { "name": "Spicy Choco", "description": "Chocolat noir, mélange d'épices" }, "en": { "name": "Spicy Choco", "description": "Dark chocolate, spice blend" }, "it": { "name": "Spicy Choco", "description": "Cioccolato fondente, miscela di spezie" }, "es": { "name": "Spicy Choco", "description": "Chocolate negro, mezcla de especias" } } },
  { "id": "choco-reishi", "category": "feelGoodDrinks", "subcategory": "naturopathicLatte", "image": "/judy/choco-reishi.jpeg","price": 6.5, "allergens": ["lait", "soja"], "diets": ["vegetarien", "halal", "sans-gluten"], "macros": { "calories": 115, "proteines": 2, "glucides": 13, "lipides": 6 }, "translations": { "fr": { "name": "Choco Reishi", "description": "Chocolat noir, reishi, mélange d'épices" }, "en": { "name": "Choco Reishi", "description": "Dark chocolate, reishi mushroom, spice blend" }, "it": { "name": "Choco Reishi", "description": "Cioccolato fondente, reishi, miscela di spezie" }, "es": { "name": "Choco Reishi", "description": "Chocolate negro, reishi, mezcla de especias" } } },
  { "id": "sunset-skin-balance", "category": "feelGoodDrinks", "subcategory": "naturopathicSmoothies", "image": "/judy/sunset-skin-balance.jpeg","price": 10, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 210, "proteines": 3, "glucides": 32, "lipides": 8 }, "translations": { "fr": { "name": "Sunset Skin Balance", "description": "Carotte, pomme, orange, ananas, mangue, avocat, graines de lin, curcuma, eau de coco, cannelle" }, "en": { "name": "Sunset Skin Balance", "description": "Carrot, apple, orange, pineapple, mango, avocado, flax seeds, turmeric, coconut water, cinnamon" }, "it": { "name": "Sunset Skin Balance", "description": "Carota, mela, arancia, ananas, mango, avocado, semi di lino, curcuma, acqua di cocco, cannella" }, "es": { "name": "Sunset Skin Balance", "description": "Zanahoria, manzana, naranja, piña, mango, aguacate, semillas de lino, cúrcuma, agua de coco, canela" } } },
  { "id": "scrambled-eggs", "category": "brunch", "subcategory": null, "image": "/judy/scrambled-eggs.jpeg","price": 13.5, "allergens": ["oeufs" , "fruits-a-coque", "sesame"], "diets": [ "sans-gluten", "sans-lactose"], "macros": { "calories": 380, "proteines": 22, "glucides": 28, "lipides": 20 }, "translations": { "fr": { "name": "Scrambled Eggs", "description": "Trois œufs brouillés, pain aux graines, légumes fermentés, dukkah rouge, pistou de persil" }, "en": { "name": "Scrambled Eggs", "description": "Three scrambled eggs, seeded bread, fermented vegetables, red dukkah, parsley pistou" }, "it": { "name": "Scrambled Eggs", "description": "Tre uova strapazzate, pane ai semi, verdure fermentate, dukkah rosso, pistou al prezzemolo" }, "es": { "name": "Scrambled Eggs", "description": "Tres huevos revueltos, pan con semillas, verduras fermentadas, dukkah rojo, pistou de perejil" } } },
  { "id": "sweet-pancakes", "category": "brunch", "subcategory": null,"image": "/judy/sweet-pancakes.jpeg", "price": 13, "allergens": ["oeufs" ], "diets": [ "sans-gluten", "sans-lactose"], "macros": { "calories": 360, "proteines": 8, "glucides": 58, "lipides": 10 }, "translations": { "fr": { "name": "Sweet Pancakes — Fruits rouges", "description": "Compote de fruits rouges, verveine, yaourt de coco" }, "en": { "name": "Sweet Pancakes — Red Berries", "description": "Red berry compote, verbena, coconut yoghurt" }, "it": { "name": "Sweet Pancakes — Frutti rossi", "description": "Composta di frutti rossi, verbena, yogurt di cocco" }, "es": { "name": "Sweet Pancakes — Frutos rojos", "description": "Compota de frutos rojos, verbena, yogur de coco" } } },
  { "id": "savoury-pancakes", "category": "brunch", "subcategory": null, "image": "/judy/savoury-pancakes.jpeg","price": 18, "allergens": ["poissons", "soja", "oeufs", ], "diets": ["sans-gluten", "sans-lactose"], "macros": { "calories": 460, "proteines": 30, "glucides": 42, "lipides": 18 }, "translations": { "fr": { "name": "Savoury Pancakes", "description": "Saumon fumé de l'Atlantique, crème de tofu au gingembre, edamame, pickles d'oignon rouge, kimchi" }, "en": { "name": "Savoury Pancakes", "description": "Atlantic smoked salmon, ginger tofu cream, edamame, pickled red onion, kimchi" }, "it": { "name": "Savoury Pancakes", "description": "Salmone affumicato atlantico, crema di tofu allo zenzero, edamame, cipolle rosse in agrodolce, kimchi" }, "es": { "name": "Savoury Pancakes", "description": "Salmón ahumado del Atlántico, crema de tofu con jengibre, edamame, pickles de cebolla roja, kimchi" } } },
  { "id": "avoloco-bowl", "category": "brunch", "subcategory": null, "image": "/judy/avoloco-bowl.jpeg","price": 17.5, "allergens": ["oeufs" , "sesame"], "diets": [ "sans-gluten", "sans-lactose"], "macros": { "calories": 420, "proteines": 16, "glucides": 34, "lipides": 24 }, "translations": { "fr": { "name": "Avoloco Bowl", "description": "Avocat, œuf poché, légumes de printemps, légumes fermentés, pain aux graines" }, "en": { "name": "Avoloco Bowl", "description": "Avocado, poached egg, spring vegetables, fermented vegetables, seeded bread" }, "it": { "name": "Avoloco Bowl", "description": "Avocado, uovo in camicia, verdure primaverili, verdure fermentate, pane ai semi" }, "es": { "name": "Avoloco Bowl", "description": "Aguacate, huevo pochado, verduras de primavera, verduras fermentadas, pan con semillas" } } },
  { "id": "mediterranean-bowl", "category": "brunch", "subcategory": null, "image": "/judy/mediterranean-bowl.jpeg","price": 17.6, "allergens": ["sesame", "fruits-a-coque", "lait"], "diets": [ "sans-gluten"], "macros": { "calories": 390, "proteines": 14, "glucides": 52, "lipides": 14 }, "translations": { "fr": { "name": "Mediterranean Bowl", "description": "Taboulé de pois verts et concombre pressé, kefta de haricots rouges, fenouil rôti, yaourt tahini, tomates cerises rôties, dukkah rouge" }, "en": { "name": "Mediterranean Bowl", "description": "Green pea and pressed cucumber tabbouleh, red bean kefta, roasted fennel, tahini yoghurt, roasted cherry tomatoes, red dukkah" }, "it": { "name": "Mediterranean Bowl", "description": "Tabulé di piselli e cetriolo pressato, kefta di fagioli rossi, finocchio arrostito, yogurt tahini, pomodorini arrostiti, dukkah rosso" }, "es": { "name": "Mediterranean Bowl", "description": "Taboulé de guisantes verdes y pepino prensado, kefta de alubias rojas, hinojo asado, yogur tahini, tomates cherry asados, dukkah rojo" } } },
  { "id": "kids-bento", "category": "brunch", "subcategory": null, "image": "/judy/kids-bento.jpeg","price": 15, "allergens": ["oeufs"], "diets": ["sans-gluten", "sans-lactose"], "macros": { "calories": 440, "proteines": 28, "glucides": 46, "lipides": 14 }, "translations": { "fr": { "name": "Kid's Bento — Kids only", "description": "Poulet français des Poulardes Saint-Martory, légumes de printemps, taboulé de pois verts, madeleine, Ice-Tea maison" }, "en": { "name": "Kid's Bento — Kids only", "description": "French chicken from Poulardes Saint-Martory, spring vegetables, green pea tabbouleh, madeleine, homemade iced tea" }, "it": { "name": "Kid's Bento — Kids only", "description": "Pollo francese delle Poulardes Saint-Martory, verdure primaverili, tabulé di piselli verdi, madeleine, tè freddo fatto in casa" }, "es": { "name": "Kid's Bento — Kids only", "description": "Pollo francés de Poulardes Saint-Martory, verduras de primavera, taboulé de guisantes verdes, madeleine, té helado casero" } } },
  { "id": "energy-ball-choco", "category": "judysBakery", "subcategory": null,"image": "/judy/energyball-choco.jpeg", "price": 2.8, "allergens": ["fruits-a-coque", "soja"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 90, "proteines": 4, "glucides": 10, "lipides": 4 }, "translations": { "fr": { "name": "Energy Ball Choco Protein", "description": "Boule énergétique au chocolat et protéines" }, "en": { "name": "Energy Ball Choco Protein", "description": "Chocolate protein energy ball" }, "it": { "name": "Energy Ball Choco Protein", "description": "Pallina energetica al cioccolato e proteine" }, "es": { "name": "Energy Ball Choco Protein", "description": "Bola energética de chocolate y proteína" } } },
  { "id": "energy-ball-carrot", "category": "judysBakery", "subcategory": null,"image": "/judy/energyball-carrot.jpeg", "price": 2.8, "allergens": ["fruits-a-coque"], "diets": ["sans-gluten", "sans-lactose"], "macros": { "calories": 85, "proteines": 4, "glucides": 10, "lipides": 3 }, "translations": { "fr": { "name": "Energy Ball Carrot Collagen", "description": "Boule énergétique à la carotte et collagène" }, "en": { "name": "Energy Ball Carrot Collagen", "description": "Carrot collagen energy ball" }, "it": { "name": "Energy Ball Carrot Collagen", "description": "Pallina energetica alla carota e collagene" }, "es": { "name": "Energy Ball Carrot Collagen", "description": "Bola energética de zanahoria y colágeno" } } },
  { "id": "cinnamon-roll", "category": "judysBakery", "subcategory": null,"image": "/judy/cinammon-roll.jpeg", "price": 5, "allergens": [ "oeufs", "lait"], "diets": ["sans-gluten"], "macros": { "calories": 280, "proteines": 5, "glucides": 42, "lipides": 10 }, "translations": { "fr": { "name": "Cinnamon Roll", "description": "Roulé à la cannelle fait maison" }, "en": { "name": "Cinnamon Roll", "description": "Homemade cinnamon roll" }, "it": { "name": "Cinnamon Roll", "description": "Rotolo alla cannella fatto in casa" }, "es": { "name": "Cinnamon Roll", "description": "Rollo de canela casero" } } },
  { "id": "brownie", "category": "judysBakery", "subcategory": null,"image": "/judy/brownie.jpeg", "price": 6, "allergens": ["oeufs", "fruits-a-coque", "soja"], "diets": ["vegan", "casher", "halal",  "vegetarien", "sans-gluten", "sans-lactose"], "macros": { "calories": 310, "proteines": 5, "glucides": 36, "lipides": 16 }, "translations": { "fr": { "name": "Brownie", "description": "Brownie au chocolat noir fait maison" }, "en": { "name": "Brownie", "description": "Homemade dark chocolate brownie" }, "it": { "name": "Brownie", "description": "Brownie al cioccolato fondente fatto in casa" }, "es": { "name": "Brownie", "description": "Brownie de chocolate negro casero" } } },
  { "id": "aussie-cookie", "category": "judysBakery", "subcategory": null,"image": "/judy/aussie-cookie.jpeg", "price": 4, "allergens": [ "fruits-a-coque"], "diets": ["vegan", "casher", "halal","vegetarien", "sans-gluten"], "macros": { "calories": 220, "proteines": 4, "glucides": 28, "lipides": 10 }, "translations": { "fr": { "name": "Aussie Cookie", "description": "Cookie australien fait maison" }, "en": { "name": "Aussie Cookie", "description": "Homemade Australian-style cookie" }, "it": { "name": "Aussie Cookie", "description": "Cookie australiano fatto in casa" }, "es": { "name": "Aussie Cookie", "description": "Cookie australiano casero" } } },
  { "id": "cookie-cajou", "category": "judysBakery", "subcategory": null,"image": "/judy/cookie-cajou.jpeg", "price": 4, "allergens": [ "oeufs", "fruits-a-coque"], "diets": ["sans-gluten"], "macros": { "calories": 210, "proteines": 4, "glucides": 26, "lipides": 10 }, "translations": { "fr": { "name": "Cookie Cajou", "description": "Cookie aux noix de cajou fait maison" }, "en": { "name": "Cashew Cookie", "description": "Homemade cashew cookie" }, "it": { "name": "Cookie Cajou", "description": "Cookie agli anacardi fatto in casa" }, "es": { "name": "Cookie de anacardo", "description": "Cookie de anacardo casero" } } },
  { "id": "banana-bread", "category": "judysBakery", "subcategory": null,"image": "/judy/banana-bread.jpeg", "price": 7, "allergens": [ "oeufs", "fruits-a-coque", "lait"], "diets": ["sans-gluten"], "macros": { "calories": 320, "proteines": 6, "glucides": 44, "lipides": 14 }, "translations": { "fr": { "name": "Banana Bread", "description": "Toasté et beurre d'amande" }, "en": { "name": "Banana Bread", "description": "Toasted with almond butter" }, "it": { "name": "Banana Bread", "description": "Tostato con burro di mandorle" }, "es": { "name": "Banana Bread", "description": "Tostado con mantequilla de almendras" } } },
  { "id": "cake-choco", "category": "judysBakery", "subcategory": null,"image": "/judy/cake-choco.jpeg", "price": 5, "allergens": [ "oeufs", "lait", "soja"], "diets": [ "sans-gluten"], "macros": { "calories": 270, "proteines": 5, "glucides": 34, "lipides": 12 }, "translations": { "fr": { "name": "Cake Choco", "description": "Cake au chocolat noir fait maison" }, "en": { "name": "Chocolate Cake", "description": "Homemade dark chocolate cake" }, "it": { "name": "Cake Choco", "description": "Torta al cioccolato fondente fatta in casa" }, "es": { "name": "Cake de chocolate", "description": "Bizcocho de chocolate negro casero" } } },
  { "id": "cake-citron-pavot", "category": "judysBakery", "subcategory": null,"image": "/judy/cake-citron-pavot.jpeg", "price": 5, "allergens": [ "oeufs"], "diets": ["sans-lactose", "sans-gluten"], "macros": { "calories": 240, "proteines": 4, "glucides": 32, "lipides": 10 }, "translations": { "fr": { "name": "Cake Citron Pavot", "description": "Cake au citron et graines de pavot fait maison" }, "en": { "name": "Lemon Poppy Seed Cake", "description": "Homemade lemon and poppy seed cake" }, "it": { "name": "Cake Limone e Papavero", "description": "Torta al limone e semi di papavero fatta in casa" }, "es": { "name": "Cake de limón y amapola", "description": "Bizcocho de limón y semillas de amapola casero" } } },
  { "id": "madeleine", "category": "judysBakery", "subcategory": null,"image": "/judy/madeleine.jpeg", "price": 2.6, "allergens": [ "oeufs"], "diets": ["sans-lactose", "sans-gluten"], "macros": { "calories": 110, "proteines": 2, "glucides": 14, "lipides": 5 }, "translations": { "fr": { "name": "Madeleine", "description": "Madeleine moelleuse faite maison" }, "en": { "name": "Madeleine", "description": "Homemade soft madeleine" }, "it": { "name": "Madeleine", "description": "Madeleine morbida fatta in casa" }, "es": { "name": "Madeleine", "description": "Madeleine esponjosa casera" } } },
  { "id": "gateau-cru-chocolat", "category": "desserts", "subcategory": null,"image": "/judy/gateau-cru-chocolat.jpeg", "price": 9.5, "allergens": ["fruits-a-coque"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 380, "proteines": 6, "glucides": 32, "lipides": 26 }, "translations": { "fr": { "name": "Gâteau cru au chocolat", "description": "Chocolat noir, noix de pécan, noisettes, noix, amandes, dattes" }, "en": { "name": "Raw Chocolate Cake", "description": "Dark chocolate, pecans, hazelnuts, walnuts, almonds, dates" }, "it": { "name": "Torta cruda al cioccolato", "description": "Cioccolato fondente, noci pecan, nocciole, noci, mandorle, datteri" }, "es": { "name": "Tarta cruda de chocolate", "description": "Chocolate negro, nueces pecán, avellanas, nueces, almendras, dátiles" } } },
  { "id": "cheesecake-cru", "category": "desserts", "subcategory": null,"image": pexels(1207918), "price": 9, "allergens": ["fruits-a-coque"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 360, "proteines": 6, "glucides": 28, "lipides": 24 }, "translations": { "fr": { "name": "Cheesecake cru", "description": "Agrumes infusés aux épices chaï, crème de cajou, noix de pécan, noisettes, noix, amandes, dattes" }, "en": { "name": "Raw Cheesecake", "description": "Chai-spiced citrus, cashew cream, pecans, hazelnuts, walnuts, almonds, dates" }, "it": { "name": "Cheesecake crudo", "description": "Agrumi infusi alle spezie chai, crema di anacardi, noci pecan, nocciole, noci, mandorle, datteri" }, "es": { "name": "Cheesecake crudo", "description": "Cítricos infusionados con especias chai, crema de anacardo, nueces pecán, avellanas, nueces, almendras, dátiles" } } },
  { "id": "granola-bowl", "category": "desserts", "subcategory": null,"image": "/judy/granola-bowl.jpeg", "price": 10, "allergens": ["fruits-a-coque", ], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 310, "proteines": 5, "glucides": 48, "lipides": 10 }, "translations": { "fr": { "name": "Granola Bowl", "description": "Yaourt de coco, mangue, coulis mangue-citron vert, fruit de la passion, granola" }, "en": { "name": "Granola Bowl", "description": "Coconut yoghurt, mango, mango-lime coulis, passion fruit, granola" }, "it": { "name": "Granola Bowl", "description": "Yogurt di cocco, mango, coulis mango-lime, frutto della passione, granola" }, "es": { "name": "Granola Bowl", "description": "Yogur de coco, mango, coulis de mango y lima, maracuyá, granola" } } },
  { "id": "chia-pudding", "category": "desserts", "subcategory": null,"image": "/judy/chia-pudding.jpeg", "price": 9, "allergens": ["fruits-a-coque"], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 290, "proteines": 6, "glucides": 34, "lipides": 14 }, "translations": { "fr": { "name": "Chia Pudding", "description": "Graines de chia, lait de coco, lait d'amande maison, fraise, confiture de fraise et rhubarbe, pistaches" }, "en": { "name": "Chia Pudding", "description": "Chia seeds, coconut milk, homemade almond milk, strawberry, strawberry-rhubarb jam, pistachios" }, "it": { "name": "Chia Pudding", "description": "Semi di chia, latte di cocco, latte di mandorla fatto in casa, fragola, confettura di fragole e rabarbaro, pistacchi" }, "es": { "name": "Chia Pudding", "description": "Semillas de chía, leche de coco, leche de almendra casera, fresa, mermelada de fresa y ruibarbo, pistachos" } } },
  { "id": "espresso", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/espresso.jpeg", "price": 3, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 0, "lipides": 0 }, "translations": { "fr": { "name": "Espresso", "description": "Torréfié à Paris par Coutume" }, "en": { "name": "Espresso", "description": "Roasted in Paris by Coutume" }, "it": { "name": "Espresso", "description": "Tostato a Parigi da Coutume" }, "es": { "name": "Espresso", "description": "Tostado en París por Coutume" } } },
  { "id": "cafe-allonge", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/cafe-allonge.jpeg", "price": 3, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 0, "lipides": 0 }, "translations": { "fr": { "name": "Café Allongé", "description": "Espresso allongé, torréfié à Paris par Coutume" }, "en": { "name": "Lungo", "description": "Long espresso, roasted in Paris by Coutume" }, "it": { "name": "Caffè Allungato", "description": "Espresso allungato, tostato a Parigi da Coutume" }, "es": { "name": "Café Largo", "description": "Espresso largo, tostado en París por Coutume" } } },
  { "id": "double-espresso", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/double-espresso.jpeg", "price": 4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 10, "proteines": 0, "glucides": 0, "lipides": 0 }, "translations": { "fr": { "name": "Double Espresso", "description": "Double espresso, torréfié à Paris par Coutume" }, "en": { "name": "Double Espresso", "description": "Double espresso, roasted in Paris by Coutume" }, "it": { "name": "Doppio Espresso", "description": "Doppio espresso, tostato a Parigi da Coutume" }, "es": { "name": "Doble Espresso", "description": "Doble espresso, tostado en París por Coutume" } } },
  { "id": "cafe-filtre", "category": "cafeDeSpecialite", "subcategory": null,"image": pexels(302899), "price": 4, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 0, "lipides": 0 }, "translations": { "fr": { "name": "Café Filtre", "description": "Café filtre, torréfié à Paris par Coutume" }, "en": { "name": "Filter Coffee", "description": "Filter coffee, roasted in Paris by Coutume" }, "it": { "name": "Caffè Filtro", "description": "Caffè filtro, tostato a Parigi da Coutume" }, "es": { "name": "Café de Filtro", "description": "Café de filtro, tostado en París por Coutume" } } },
  { "id": "cortado", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/cortado.webp", "price": 4.5, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 30, "proteines": 1, "glucides": 2, "lipides": 1 }, "translations": { "fr": { "name": "Cortado (double)", "description": "Double espresso avec une touche de lait" }, "en": { "name": "Cortado (double)", "description": "Double espresso with a splash of milk" }, "it": { "name": "Cortado (doppio)", "description": "Doppio espresso con un goccio di latte" }, "es": { "name": "Cortado (doble)", "description": "Doble espresso cortado con leche" } } },
  { "id": "cappuccino", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/cappuccino.jpeg", "price": 5.5, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 80, "proteines": 4, "glucides": 8, "lipides": 3 }, "translations": { "fr": { "name": "Cappuccino", "description": "Espresso, mousse de lait onctueuse" }, "en": { "name": "Cappuccino", "description": "Espresso with creamy milk foam" }, "it": { "name": "Cappuccino", "description": "Espresso con schiuma di latte cremosa" }, "es": { "name": "Cappuccino", "description": "Espresso con espuma de leche cremosa" } } },
  { "id": "cafe-latte", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/cafe-latte.jpeg", "price": 5.5, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 100, "proteines": 5, "glucides": 10, "lipides": 4 }, "translations": { "fr": { "name": "Café Latte", "description": "Espresso, lait vapeur onctueux" }, "en": { "name": "Café Latte", "description": "Espresso with steamed milk" }, "it": { "name": "Caffè Latte", "description": "Espresso con latte a vapore" }, "es": { "name": "Café Latte", "description": "Espresso con leche al vapor" } } },
  { "id": "flat-white", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/flat-white.jpeg", "price": 6, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 90, "proteines": 5, "glucides": 9, "lipides": 4 }, "translations": { "fr": { "name": "Flat White", "description": "Double ristretto, lait vapeur micro-texturé" }, "en": { "name": "Flat White", "description": "Double ristretto, micro-textured steamed milk" }, "it": { "name": "Flat White", "description": "Doppio ristretto, latte a vapore micro-texturizzato" }, "es": { "name": "Flat White", "description": "Doble ristretto, leche al vapor micro-texturizada" } } },
  { "id": "almond-butter-latte", "category": "cafeDeSpecialite", "subcategory": null,"image": "/judy/almond-butter-latte.jpeg", "price": 6.5, "allergens": ["lait", "fruits-a-coque"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 160, "proteines": 5, "glucides": 10, "lipides": 10 }, "translations": { "fr": { "name": "Almond Butter Latte", "description": "Espresso, beurre d'amande, lait vapeur" }, "en": { "name": "Almond Butter Latte", "description": "Espresso, almond butter, steamed milk" }, "it": { "name": "Almond Butter Latte", "description": "Espresso, burro di mandorle, latte a vapore" }, "es": { "name": "Almond Butter Latte", "description": "Espresso, mantequilla de almendras, leche al vapor" } } },
  { "id": "the-vert", "category": "thesbios", "subcategory": null,"image": "/judy/the-vert.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Thé Vert", "description": "Gampola Green ou Earl Grey des Jardins de Gaïa" }, "en": { "name": "Green Tea", "description": "Gampola Green or Earl Grey from Jardins de Gaïa" }, "it": { "name": "Tè Verde", "description": "Gampola Green o Earl Grey dei Jardins de Gaïa" }, "es": { "name": "Té Verde", "description": "Gampola Green o Earl Grey de Jardins de Gaïa" } } },
  { "id": "the-noir", "category": "thesbios", "subcategory": null,"image": "/judy/the-noir.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Thé Noir", "description": "English Breakfast des Jardins de Gaïa" }, "en": { "name": "Black Tea", "description": "English Breakfast from Jardins de Gaïa" }, "it": { "name": "Tè Nero", "description": "English Breakfast dei Jardins de Gaïa" }, "es": { "name": "Té Negro", "description": "English Breakfast de Jardins de Gaïa" } } },
  { "id": "the-matcha", "category": "thesbios", "subcategory": null,"image": "/judy/the-matcha.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 10, "proteines": 1, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Thé Matcha", "description": "Matcha de chez Umami" }, "en": { "name": "Matcha Tea", "description": "Matcha from Umami" }, "it": { "name": "Tè Matcha", "description": "Matcha di Umami" }, "es": { "name": "Té Matcha", "description": "Matcha de Umami" } } },
  { "id": "the-hojicha", "category": "thesbios", "subcategory": null,"image": "/judy/the-hojicha.webp", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Thé Hojicha", "description": "Thé vert japonais torréfié de chez Umami" }, "en": { "name": "Hojicha Tea", "description": "Roasted Japanese green tea from Umami" }, "it": { "name": "Tè Hojicha", "description": "Tè verde giapponese tostato di Umami" }, "es": { "name": "Té Hojicha", "description": "Té verde japonés tostado de Umami" } } },
  { "id": "pousse-delice", "category": "infusionsBios", "subcategory": null,"image": "/judy/pousse-delice.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Pousse Délice", "description": "Fenouil, angélique, romarin, verveine, sarriette, menthe, souci" }, "en": { "name": "Pousse Délice", "description": "Fennel, angelica, rosemary, verbena, savory, mint, marigold" }, "it": { "name": "Pousse Délice", "description": "Finocchio, angelica, rosmarino, verbena, santoreggia, menta, calendula" }, "es": { "name": "Pousse Délice", "description": "Hinojo, angélica, romero, verbena, ajedrea, menta, caléndula" } } },
  { "id": "belle-plante", "category": "infusionsBios", "subcategory": null,"image": "/judy/belle-plante.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Belle Plante", "description": "Rose de damas, frêne, framboise, ortie, baie rose, tilleul" }, "en": { "name": "Belle Plante", "description": "Damascus rose, ash, raspberry, nettle, pink berry, linden" }, "it": { "name": "Belle Plante", "description": "Rosa di Damasco, frassino, lampone, ortica, bacca rosa, tiglio" }, "es": { "name": "Belle Plante", "description": "Rosa de damasco, fresno, frambuesa, ortiga, baya rosa, tilo" } } },
  { "id": "elixir", "category": "infusionsBios", "subcategory": null,"image": "/judy/elixir.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 5, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "L'Élixir", "description": "Gingembre, oranger bigaradier, citron, combava" }, "en": { "name": "L'Élixir", "description": "Ginger, bitter orange, lemon, kaffir lime" }, "it": { "name": "L'Elixir", "description": "Zenzero, arancio amaro, limone, lime kaffir" }, "es": { "name": "L'Élixir", "description": "Jengibre, naranja amarga, limón, lima kaffir" } } },
  { "id": "ginger-lemon", "category": "hotNaturalRemedies", "subcategory": null,"image": "/judy/hot-ginger.jpeg", "price": 6.5, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 40, "proteines": 0, "glucides": 10, "lipides": 0 }, "translations": { "fr": { "name": "Ginger Lemon", "description": "Citron, miel, gingembre" }, "en": { "name": "Ginger Lemon", "description": "Lemon, honey, ginger" }, "it": { "name": "Ginger Lemon", "description": "Limone, miele, zenzero" }, "es": { "name": "Ginger Lemon", "description": "Limón, miel, jengibre" } } },
  { "id": "switchel-hot", "category": "hotNaturalRemedies", "subcategory": null,"image": "/judy/switchel.jpeg", "price": 6.5, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 45, "proteines": 0, "glucides": 11, "lipides": 0 }, "translations": { "fr": { "name": "Switchel", "description": "Citronnade maison, vinaigre de cidre, sirop d'érable" }, "en": { "name": "Switchel", "description": "Homemade lemonade, apple cider vinegar, maple syrup" }, "it": { "name": "Switchel", "description": "Limonata fatta in casa, aceto di mele, sciroppo d'acero" }, "es": { "name": "Switchel", "description": "Limonada casera, vinagre de manzana, sirope de arce" } } },
  { "id": "iced-strawberry-matcha-latte", "category": "icedDrinks", "subcategory": null,"image": "/judy/iced-strawberry-matcha-latte.jpeg", "price": 6.5, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 130, "proteines": 4, "glucides": 22, "lipides": 3 }, "translations": { "fr": { "name": "Iced Strawberry Matcha Latte", "description": "Matcha japonais Umami, lait, sirop de fraise, sur glace" }, "en": { "name": "Iced Strawberry Matcha Latte", "description": "Umami Japanese matcha, milk, strawberry syrup, over ice" }, "it": { "name": "Iced Strawberry Matcha Latte", "description": "Matcha giapponese Umami, latte, sciroppo di fragola, su ghiaccio" }, "es": { "name": "Iced Strawberry Matcha Latte", "description": "Matcha japonés Umami, leche, sirope de fresa, con hielo" } } },
  { "id": "iced-mango-matcha-latte", "category": "icedDrinks", "subcategory": null,"image": "/judy/iced-mango-matcha-latte.jpeg", "price": 6.5, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 130, "proteines": 4, "glucides": 22, "lipides": 3 }, "translations": { "fr": { "name": "Iced Mango Matcha Latte", "description": "Matcha japonais Umami, lait, sirop de mangue, sur glace" }, "en": { "name": "Iced Mango Matcha Latte", "description": "Umami Japanese matcha, milk, mango syrup, over ice" }, "it": { "name": "Iced Mango Matcha Latte", "description": "Matcha giapponese Umami, latte, sciroppo di mango, su ghiaccio" }, "es": { "name": "Iced Mango Matcha Latte", "description": "Matcha japonés Umami, leche, sirope de mango, con hielo" } } },
  { "id": "iced-latte", "category": "icedDrinks", "subcategory": null,"image": "/judy/iced-latte.jpeg", "price": 6.5, "allergens": ["lait"], "diets": ["vegetarien", "halal", "casher", "sans-gluten"], "macros": { "calories": 100, "proteines": 4, "glucides": 10, "lipides": 3 }, "translations": { "fr": { "name": "Iced Latte", "description": "Espresso Coutume, lait froid, sur glace" }, "en": { "name": "Iced Latte", "description": "Coutume espresso, cold milk, over ice" }, "it": { "name": "Iced Latte", "description": "Espresso Coutume, latte freddo, su ghiaccio" }, "es": { "name": "Iced Latte", "description": "Espresso Coutume, leche fría, con hielo" } } },
  { "id": "cold-brew", "category": "icedDrinks", "subcategory": null,"image": "/judy/cold-brew.jpeg", "price": 6.5, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 10, "proteines": 0, "glucides": 1, "lipides": 0 }, "translations": { "fr": { "name": "Cold Brew", "description": "Cold brew du jour — demandez à l'équipe ce qui est préparé" }, "en": { "name": "Cold Brew", "description": "Cold brew of the day — ask the team what's on today" }, "it": { "name": "Cold Brew", "description": "Cold brew del giorno — chiedete al team cosa viene preparato oggi" }, "es": { "name": "Cold Brew", "description": "Cold brew del día — pregunta al equipo qué se prepara hoy" } } },
  { "id": "ice-tea", "category": "icedDrinks", "subcategory": null,"image": "/judy/ice-tea.jpeg", "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 20, "proteines": 0, "glucides": 5, "lipides": 0 }, "translations": { "fr": { "name": "Ice Tea Maison", "description": "Thé glacé fait maison — 33 cl" }, "en": { "name": "Homemade Iced Tea", "description": "Homemade iced tea — 33 cl" }, "it": { "name": "Ice Tea Fatto in Casa", "description": "Tè freddo fatto in casa — 33 cl" }, "es": { "name": "Ice Tea Casero", "description": "Té helado casero — 33 cl" } } },
  { "id": "citronnade", "category": "icedDrinks", "subcategory": null,"image": "/judy/citronnade.jpeg", "price": 6, "allergens": [], "diets": ["vegetarien", "halal", "casher", "sans-gluten", "sans-lactose"], "macros": { "calories": 50, "proteines": 0, "glucides": 13, "lipides": 0 }, "translations": { "fr": { "name": "Citronnade Maison", "description": "Citron, gingembre, miel — 33 cl" }, "en": { "name": "Homemade Lemonade", "description": "Lemon, ginger, honey — 33 cl" }, "it": { "name": "Limonata Fatta in Casa", "description": "Limone, zenzero, miele — 33 cl" }, "es": { "name": "Limonada Casera", "description": "Limón, jengibre, miel — 33 cl" } } },
  { "id": "kombucha", "category": "icedDrinks", "subcategory": null,"image": pexels(18285165), "price": 7, "allergens": [], "diets": ["vegan", "vegetarien", "sans-gluten", "sans-lactose"], "macros": { "calories": 30, "proteines": 0, "glucides": 7, "lipides": 0 }, "translations": { "fr": { "name": "Kombucha Archipel", "description": "Brut, feuille de figuier ou de framboisier — 33 cl" }, "en": { "name": "Kombucha Archipel", "description": "Natural, fig leaf or raspberry leaf — 33 cl" }, "it": { "name": "Kombucha Archipel", "description": "Naturale, foglia di fico o di lampone — 33 cl" }, "es": { "name": "Kombucha Archipel", "description": "Natural, hoja de higo o de frambuesa — 33 cl" } } },
  { "id": "biere-blonde-sg", "category": "biereEtVins", "subcategory": null,"image": pexels(25460968), "price": 6, "allergens": [], "diets": ["vegan", "vegetarien", "sans-gluten", "sans-lactose"], "macros": { "calories": 110, "proteines": 1, "glucides": 10, "lipides": 0 }, "translations": { "fr": { "name": "Bière Blonde Sans Gluten", "description": "Bière blonde sans gluten — 25 cl" }, "en": { "name": "Gluten-Free Lager", "description": "Gluten-free blonde lager — 25 cl" }, "it": { "name": "Birra Bionda Senza Glutine", "description": "Birra bionda senza glutine — 25 cl" }, "es": { "name": "Cerveza Rubia Sin Gluten", "description": "Cerveza rubia sin gluten — 25 cl" } } },
  { "id": "sauvignon-blanc", "category": "biereEtVins", "subcategory": null,"image": pexels(28454104), "price": 8, "allergens": ["so2"], "diets": ["vegan", "vegetarien", "sans-gluten", "sans-lactose"], "macros": { "calories": 100, "proteines": 0, "glucides": 3, "lipides": 0 }, "translations": { "fr": { "name": "Sauvignon Blanc", "description": "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl" }, "en": { "name": "Sauvignon Blanc", "description": "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl" }, "it": { "name": "Sauvignon Blanc", "description": "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl" }, "es": { "name": "Sauvignon Blanc", "description": "Le Coude Blanc, Domaine Duvin, Touraine — 14 cl" } } },
  { "id": "languedoc-rouge", "category": "biereEtVins", "subcategory": null,"image": pexels(14465764), "price": 8, "allergens": ["so2"], "diets": ["vegan", "vegetarien", "sans-gluten", "sans-lactose"], "macros": { "calories": 110, "proteines": 0, "glucides": 4, "lipides": 0 }, "translations": { "fr": { "name": "Languedoc Rouge", "description": "Respirait, Château Ollieux Romanis, Languedoc — 14 cl" }, "en": { "name": "Languedoc Red", "description": "Respirait, Château Ollieux Romanis, Languedoc — 14 cl" }, "it": { "name": "Languedoc Rosso", "description": "Respirait, Château Ollieux Romanis, Languedoc — 14 cl" }, "es": { "name": "Languedoc Tinto", "description": "Respirait, Château Ollieux Romanis, Languedoc — 14 cl" } } },
  { "id": "rose-provence", "category": "biereEtVins", "subcategory": null,"image": pexels(5384595), "price": 8, "allergens": ["so2"], "diets": ["vegan", "vegetarien", "sans-gluten", "sans-lactose"], "macros": { "calories": 100, "proteines": 0, "glucides": 3, "lipides": 0 }, "translations": { "fr": { "name": "Rosé de Provence", "description": "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl" }, "en": { "name": "Provence Rosé", "description": "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl" }, "it": { "name": "Rosé di Provenza", "description": "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl" }, "es": { "name": "Rosado de Provenza", "description": "Le Méditerranée, Vigneron Oé, IGP Méditerranée — 14 cl" } } }
]

}
