"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Perfume {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface PerfumeCardProps {
  perfume: Perfume
}

export function PerfumeCard({ perfume }: PerfumeCardProps) {
  const router = useRouter()

  const handleSelect = () => {
    const params = new URLSearchParams({
      id: perfume.id.toString(),
      name: perfume.name,
      description: perfume.description,
      price: perfume.price,
      image: perfume.image,
    })
    router.push(`/order?${params.toString()}`)
  }

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <Image
            src={perfume.image || "/placeholder.svg"}
            alt={perfume.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>
        <div className="p-5">
          <h4 className="mb-2 text-lg font-bold text-foreground">{perfume.name}</h4>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{perfume.description}</p>
          <p className="text-2xl font-bold text-accent">{perfume.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          onClick={handleSelect}
          className="w-full bg-accent font-semibold uppercase tracking-wide text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
        >
          Sélectionner
        </Button>
      </CardFooter>
    </Card>
  )
}
