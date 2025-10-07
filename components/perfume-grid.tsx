"use client"

import { PerfumeCard } from "./perfume-card"

const perfumes = [
  {
    id: 1,
    name: "Rose Éternelle",
    description: "Bulgarian rose, jasmine, vanilla",
    price: "$89.00",
    image: "/luxury-pink-rose-perfume-bottle-elegant.jpg",
  },
  {
    id: 2,
    name: "Ambre Mystique",
    description: "Amber, sandalwood, musk",
    price: "$95.00",
    image: "/luxury-amber-perfume-bottle-gold-elegant.jpg",
  },
  {
    id: 3,
    name: "Fleur de Lune",
    description: "White lily, peony, cedar",
    price: "$92.00",
    image: "/luxury-white-floral-perfume-bottle-elegant.jpg",
  },
  {
    id: 4,
    name: "Velours Noir",
    description: "Black orchid, patchouli, truffle",
    price: "$105.00",
    image: "/luxury-black-perfume-bottle-elegant-sophisticated.jpg",
  },
  {
    id: 5,
    name: "Citrus Soleil",
    description: "Bergamot, neroli, white tea",
    price: "$85.00",
    image: "/luxury-citrus-perfume-bottle-yellow-elegant.jpg",
  },
  {
    id: 6,
    name: "Jardin Secret",
    description: "Gardenia, tuberose, iris",
    price: "$98.00",
    image: "/luxury-garden-perfume-bottle-green-elegant.jpg",
  },
]

export function PerfumeGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {perfumes.map((perfume) => (
        <PerfumeCard key={perfume.id} perfume={perfume} />
      ))}
    </div>
  )
}
