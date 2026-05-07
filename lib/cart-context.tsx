"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Allergen, Diet, Macros } from "@/lib/types"

export type CartItem = {
  id: string
  menuItemId: string
  name: string
  basePrice: number
  variant: { name: string; priceOffset: number } | null
  supplements: { id: string; name: string; price: number }[]
  allergens: Allergen[]
  diets: Diet[]
  macros: Macros
  totalPrice: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "id">) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(item: Omit<CartItem, "id">) {
    setItems((prev) => [...prev, { ...item, id: crypto.randomUUID() }])
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function clearCart() {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
