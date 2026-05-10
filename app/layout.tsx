import { Geist_Mono, DM_Sans, Lora, Figtree } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PreferencesProvider } from "@/lib/preferences-context"
import { CartProvider } from "@/lib/cart-context"
import { cn } from "@/lib/utils"
import { Analytics } from '@vercel/analytics/next';

const loraHeading = Lora({subsets:['latin'],variable:'--font-heading'})
const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'})
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://picky-friendly.vercel.app"),
  title: {
    default: "Picky — Restaurants allergie-friendly à Paris",
    template: "%s | Picky",
  },
  description:
    "Trouvez des restaurants sans gluten, vegan, halal et végétariens à Paris. Consultez les menus avec informations allergènes détaillées et filtrez selon vos besoins alimentaires.",
  keywords: [
    "restaurant sans gluten Paris",
    "restaurant allergie Paris",
    "restaurant vegan Paris",
    "restaurant halal Paris",
    "restaurant végétarien Paris",
    "restaurant sans lactose Paris",
    "menu allergènes Paris",
    "restaurant allergie-friendly",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Picky",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  themeColor: "#78716c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable, loraHeading.variable)}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#78716c" />
      </head>
      <body>
        <ThemeProvider>
          <PreferencesProvider>
            <CartProvider>
              <TooltipProvider>
                {children}
                {/* <Analytics /> */}
              </TooltipProvider>
            </CartProvider>
          </PreferencesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
