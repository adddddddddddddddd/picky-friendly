"use client"

import {
  HandPlatterIcon,
  ChevronUpIcon,
  EyeIcon,
  HomeIcon,
  LeafIcon,
  RadioIcon,
  ScrollTextIcon,
  TriangleAlertIcon,
  TrendingUpIcon,
  UtensilsCrossedIcon,
  UtensilsIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

const menuRoutes = [
  { label: "Accueil", icon: HomeIcon, path: "" },
  { label: "Gérer Menu", icon: UtensilsIcon, path: "manage-menu" },
  { label: "Gérer Plats", icon: HandPlatterIcon, path: "manage-dish" },
  { label: "Gérer Ingrédients", icon: LeafIcon, path: "manage-ingredient" },
  { label: "Alertes", icon: TriangleAlertIcon, path: "manage-alerts" },
  { label: "Règles de cuisine", icon: ScrollTextIcon, path: "manage-rule" },
]

const insightsRoutes = [
  { label: "Insights", icon: TrendingUpIcon, path: "insights" },
  { label: "Preview", icon: EyeIcon, path: "preview", external: true },
]

export function AppSidebar() {
  const pathname = usePathname()
  const match = pathname.match(/\/restaurant\/([^/]+)\/dashboard/)
  const slug = match?.[1] ?? ""
  const base = slug ? `/restaurant/${slug}/dashboard` : "/dashboard"

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                  P
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Picky</span>
                  <span className="text-xs text-muted-foreground">Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuRoutes.map((item) => {
                const href = item.path ? `${base}/${item.path}` : base
                const isActive = item.path ? pathname.startsWith(href) : pathname === base
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={href}>
                        <item.icon />
                        {item.label}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {insightsRoutes.map((item) => {
                const href = item.external ? `/restaurant/${slug}` : `${base}/${item.path}`
                const isActive = !item.external && pathname.startsWith(href)
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>
                        <item.icon />
                        {item.label}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <Avatar className="size-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">R</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold text-sm">Restaurant</span>
                    <span className="text-xs text-muted-foreground truncate">admin@restaurant.fr</span>
                  </div>
                  <ChevronUpIcon className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>Mon profil</DropdownMenuItem>
                <DropdownMenuItem>Paramètres du compte</DropdownMenuItem>
                <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
