"use client"

import { cn } from "@/lib/utils"

interface AppBrandingProps {
  className?: string
}

export function AppBranding({ className }: AppBrandingProps) {
  return (
    <div className={cn("select-none", className)}>
      <h1 className="font-heading text-xl font-bold leading-tight">
        Picky Friendly
      </h1>
      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
        Trouvez les restaurants adaptés à votre régime
      </p>
    </div>
  )
}
