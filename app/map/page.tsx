"use client"
import dynamic from "next/dynamic"
import Image from "next/image"

function MapSplash() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <Image
          src="/icon-512.png"
          alt="Picky"
          width={96}
          height={96}
          priority
        />
      </div>
    </div>
  )
}

const ParisMap = dynamic(() => import("@/components/map/ParisMap"), {
  ssr: false,
  loading: () => <MapSplash />,
})

export default function Page() {
  return <ParisMap />
}
