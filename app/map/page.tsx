"use client"
import dynamic from "next/dynamic"

const ParisMap = dynamic(() => import("@/components/map/ParisMap"), {
  ssr: false,
  loading: () => <div className="h-screen w-full animate-pulse bg-muted" />,
})
export default function Page() {
  return <ParisMap />
}
