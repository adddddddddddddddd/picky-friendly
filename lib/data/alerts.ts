import { menuItems } from "@/lib/data/menu"

const judyDishes = menuItems.judy ?? []
const d = (id: string) => judyDishes.find((dish) => dish.id === id)?.translations.fr.name ?? id

export type Severity = "faible" | "modérée" | "haute"
export type Source = "app" | "utilisateur"
export type Category = "complétion" | "allergènes" | "prix" | "traduction" | "incohérence" | "disponibilité"
export type Status = "ouverte" | "résolue"

export interface Alert {
  id: string
  title: string
  description: string
  severity: Severity
  source: Source
  category: Category
  dish?: string
  duration: string
  status: Status
}

export const SEVERITY_STYLES: Record<Severity, string> = {
  faible: "bg-yellow-100 text-yellow-800 border-yellow-200",
  modérée: "bg-orange-100 text-orange-800 border-orange-200",
  haute: "bg-red-100 text-red-800 border-red-200",
}

export const CATEGORY_LABELS: Record<Category, string> = {
  complétion: "Complétion",
  allergènes: "Allergènes",
  prix: "Prix",
  traduction: "Traduction",
  incohérence: "Incohérence",
  disponibilité: "Disponibilité",
}

export const SEVERITY_ORDER: Record<Severity, number> = { haute: 0, modérée: 1, faible: 2 }

export const ALERTS: Alert[] = [
  {
    id: "1",
    title: "Prix manquant",
    description: "Aucun prix n'est renseigné pour ce plat. Les clients ne peuvent pas voir le tarif.",
    severity: "haute",
    source: "app",
    category: "prix",
    dish: d("scrambled-eggs"),
    duration: "3j",
    status: "ouverte",
  },
  {
    id: "2",
    title: "Allergènes incomplets",
    description: "Les allergènes déclarés ne couvrent pas tous les ingrédients listés.",
    severity: "haute",
    source: "app",
    category: "allergènes",
    dish: d("avoloco-bowl"),
    duration: "5j",
    status: "ouverte",
  },
  {
    id: "3",
    title: "Image absente",
    description: "Aucune photo n'est associée à ce plat. Cela réduit l'attractivité du menu.",
    severity: "faible",
    source: "app",
    category: "complétion",
    dish: d("chia-pudding"),
    duration: "12j",
    status: "ouverte",
  },
  {
    id: "4",
    title: "Traduction manquante",
    description: "Le nom et la description de ce plat ne sont pas traduits en anglais.",
    severity: "faible",
    source: "app",
    category: "traduction",
    dish: d("mediterranean-bowl"),
    duration: "8j",
    status: "ouverte",
  },
  {
    id: "5",
    title: "Description trop courte",
    description: "La description fait moins de 20 caractères. Ajoutez plus de détails pour les clients.",
    severity: "faible",
    source: "app",
    category: "complétion",
    dish: d("sweet-pancakes"),
    duration: "2j",
    status: "ouverte",
  },
  {
    id: "6",
    title: "Plat sans catégorie",
    description: "Ce plat n'est rattaché à aucune section du menu.",
    severity: "modérée",
    source: "app",
    category: "complétion",
    dish: d("savoury-pancakes"),
    duration: "1j",
    status: "ouverte",
  },
  {
    id: "7",
    title: "Allergène potentiel non déclaré",
    description: "L'ingrédient « sésame » est listé mais l'allergène sésame n'est pas coché.",
    severity: "haute",
    source: "app",
    category: "allergènes",
    dish: d("granola-bowl"),
    duration: "4j",
    status: "ouverte",
  },
  {
    id: "8",
    title: "Prix incohérent",
    description: "Le prix affiché (0,00 €) semble être une valeur par défaut non mise à jour.",
    severity: "modérée",
    source: "app",
    category: "prix",
    dish: d("brownie"),
    duration: "6j",
    status: "ouverte",
  },
  {
    id: "9",
    title: "Plat signalé indisponible",
    description: "Un client a signalé que ce plat était absent de la carte lors de sa visite.",
    severity: "modérée",
    source: "utilisateur",
    category: "disponibilité",
    dish: d("scrambled-eggs"),
    duration: "1j",
    status: "ouverte",
  },
  {
    id: "10",
    title: "Incohérence allergènes signalée",
    description: "Un client allergique aux noix a signalé une réaction après consommation. Le menu ne déclare pas cet allergène.",
    severity: "haute",
    source: "utilisateur",
    category: "allergènes",
    dish: d("avoloco-bowl"),
    duration: "2j",
    status: "ouverte",
  },
  {
    id: "11",
    title: "Description inexacte",
    description: "Un client indique que la description mentionne du fromage de chèvre mais le plat en contient du vache.",
    severity: "modérée",
    source: "utilisateur",
    category: "incohérence",
    dish: d("banana-bread"),
    duration: "3j",
    status: "ouverte",
  },
  {
    id: "12",
    title: "Prix différent en salle",
    description: "Le prix affiché sur Picky (12 €) diffère du prix en salle (14 €) selon un client.",
    severity: "modérée",
    source: "utilisateur",
    category: "prix",
    dish: d("chia-pudding"),
    duration: "5j",
    status: "ouverte",
  },
  {
    id: "13",
    title: "Plat non végétarien malgré le badge",
    description: "Un client signale que le plat contient du bouillon de poule alors qu'il est marqué végétarien.",
    severity: "haute",
    source: "utilisateur",
    category: "incohérence",
    dish: d("mediterranean-bowl"),
    duration: "1j",
    status: "ouverte",
  },
  {
    id: "14",
    title: "Portion différente",
    description: "La description indique une portion pour 2 personnes mais le plat serait servi individuel selon le client.",
    severity: "faible",
    source: "utilisateur",
    category: "incohérence",
    dish: d("savoury-pancakes"),
    duration: "7j",
    status: "résolue",
  },
  {
    id: "15",
    title: "Image absente résolue",
    description: "Photo ajoutée après signalement client.",
    severity: "faible",
    source: "app",
    category: "complétion",
    dish: d("sweet-pancakes"),
    duration: "14j",
    status: "résolue",
  },
]
