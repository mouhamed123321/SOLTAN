"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { OrderForm } from "@/components/order-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, MapPin, ShoppingCart, User, Phone, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

function OrderPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const perfume = {
    id: searchParams.get("id") || "",
    name: searchParams.get("name") || "",
    description: searchParams.get("description") || "",
    price: searchParams.get("price") || "",
    image: searchParams.get("image") || "",
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-accent px-4 py-3 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent-foreground md:text-base">
          🚚 Livraison Toute La Tunisie - Livraison Gratuite Dès 3 Parfums
        </p>
      </div>

      <header className="border-b border-border bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between border-b border-primary-foreground/10 py-2 text-xs text-primary-foreground/80">
            <div className="flex items-center gap-4">
              <a
                href="tel:28271312"
                className="flex items-center gap-1 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-3 w-3" />
                <span>28.27.13.12</span>
              </a>
              <a
                href="https://maps.app.goo.gl/9YuuisEzqjc4vxyA6"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1 transition-colors hover:text-primary-foreground md:flex"
              >
                <MapPin className="h-3 w-3" />
                <span>Notre localisation</span>
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Ouvert: 9:00 - 23:00</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="relative hidden flex-1 max-w-md md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cherchez le produit qui vous convient"
                className="w-full rounded-full bg-muted/20 pl-10 text-sm text-primary-foreground placeholder:text-muted-foreground border-primary-foreground/20"
              />
            </div>

            <div className="flex-shrink-0 text-center">
              <button onClick={() => router.push("/")} className="transition-opacity hover:opacity-80">
                <h1
                  className="font-serif text-2xl font-bold tracking-wider text-primary-foreground md:text-4xl"
                  style={{ fontFamily: "serif" }}
                >
                  السلطان لعطور
                </h1>
                <p className="text-xs tracking-widest text-primary-foreground/70 md:text-sm">AL SULTAN PERFUMES</p>
              </button>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="hidden gap-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:flex"
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Nos magasins</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <User className="h-4 w-4" />
                <span className="hidden text-sm md:inline">Connexion</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="relative text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                  1
                </span>
              </Button>
            </div>
          </div>

          <nav className="border-t border-primary-foreground/10 py-3">
            <ul className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-wide md:gap-6 md:text-sm">
              <li>
                <a href="#" className="text-accent transition-colors hover:text-accent/80">
                  Bons Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground transition-colors hover:text-accent">
                  Les Xlusifs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground transition-colors hover:text-accent">
                  Marques
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground transition-colors hover:text-accent">
                  Parfum
                </a>
              </li>
              <li>
                <a href="#" className="hidden text-primary-foreground transition-colors hover:text-accent md:block">
                  Maquillage
                </a>
              </li>
              <li>
                <a href="#" className="hidden text-primary-foreground transition-colors hover:text-accent md:block">
                  Soin Visage
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push("/")} className="gap-2 text-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" />
            Retour à la collection
          </Button>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold uppercase tracking-wider md:text-4xl">Complétez votre commande</h2>
          <p className="text-base text-muted-foreground">Vous êtes à un pas de votre parfum signature</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Selected Perfume Display */}
          <div>
            <Card className="overflow-hidden border-border shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image src={perfume.image || "/placeholder.svg"} alt={perfume.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                    Parfum sélectionné
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{perfume.name}</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">{perfume.description}</p>
                  <p className="text-3xl font-bold text-accent">{perfume.price}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div>
            <OrderForm selectedPerfume={perfume} />
          </div>
        </div>
      </div>

      <footer className="border-t border-border bg-primary px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h4 className="mb-3 font-serif text-xl font-bold text-primary-foreground">السلطان لعطور</h4>
              <p className="text-sm text-primary-foreground/70">AL SULTAN PERFUMES</p>
              <p className="mt-2 text-sm text-primary-foreground/60">Votre destination pour les parfums de luxe</p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground">Contact</h5>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:28271312" className="transition-colors hover:text-primary-foreground">
                    28.27.13.12
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <a
                    href="https://maps.app.goo.gl/9YuuisEzqjc4vxyA6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Notre localisation
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>9:00 - 23:00</span>
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-right">
              <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground">Livraison</h5>
              <p className="text-sm text-primary-foreground/70">🚚 Livraison dans toute la Tunisie</p>
              <p className="mt-2 text-sm text-primary-foreground/70">Gratuite dès 3 parfums</p>
            </div>
          </div>

          <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-xs text-primary-foreground/60">© 2025 Al Sultan Perfumes. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <OrderPageContent />
    </Suspense>
  )
}
