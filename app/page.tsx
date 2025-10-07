"use client"

import { PerfumeGrid } from "@/components/perfume-grid"
import { Search, MapPin, ShoppingCart, User, Phone, Clock, Code2, Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="group h-auto flex-col gap-2 rounded-2xl bg-[#007ACC] px-6 py-4 shadow-2xl transition-all hover:scale-105 hover:bg-[#005A9E] hover:shadow-[#007ACC]/50"
          onClick={() => {
            const modal = document.getElementById("dev-modal")
            if (modal) modal.classList.remove("hidden")
          }}
        >
          <Code2 className="h-6 w-6 text-white" />
          <span className="text-xs font-semibold text-white">Open in VS Code</span>
        </Button>
      </div>

      <div
        id="dev-modal"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.currentTarget.classList.add("hidden")
          }
        }}
      >
        <div className="relative mx-4 max-w-2xl rounded-2xl bg-[#1E1E1E] p-8 shadow-2xl">
          <button
            onClick={() => document.getElementById("dev-modal")?.classList.add("hidden")}
            className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
          >
            ✕
          </button>

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-[#007ACC] p-3">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Open in VS Code</h3>
              <p className="text-sm text-white/60">Get the source code</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-[#2D2D2D] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Download className="h-5 w-5 text-[#007ACC]" />
                <h4 className="font-semibold text-white">Option 1: Download ZIP</h4>
              </div>
              <ol className="ml-6 list-decimal space-y-1 text-sm text-white/80">
                <li>Click the three dots (⋯) in the top right corner</li>
                <li>Select "Download ZIP"</li>
                <li>Extract and open the folder in VS Code</li>
              </ol>
            </div>

            <div className="rounded-lg bg-[#2D2D2D] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Github className="h-5 w-5 text-[#007ACC]" />
                <h4 className="font-semibold text-white">Option 2: Push to GitHub</h4>
              </div>
              <ol className="ml-6 list-decimal space-y-1 text-sm text-white/80">
                <li>Click the GitHub logo in the top right corner</li>
                <li>Create a new repository</li>
                <li>Clone to your local machine and open in VS Code</li>
              </ol>
            </div>

            <div className="rounded-lg bg-[#007ACC]/10 border border-[#007ACC]/30 p-4">
              <h4 className="mb-2 font-semibold text-[#007ACC]">After opening in VS Code:</h4>
              <div className="space-y-2">
                <div className="rounded bg-[#1E1E1E] p-3 font-mono text-sm text-white">
                  <div>npm install</div>
                  <div className="text-white/40"># Install dependencies</div>
                </div>
                <div className="rounded bg-[#1E1E1E] p-3 font-mono text-sm text-white">
                  <div>npm run dev</div>
                  <div className="text-white/40"># Start development server</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={() => document.getElementById("dev-modal")?.classList.add("hidden")}
              className="bg-[#007ACC] hover:bg-[#005A9E]"
            >
              Got it!
            </Button>
          </div>
        </div>
      </div>

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

          {/* Top bar with search, logo, and actions */}
          <div className="flex items-center justify-between gap-4 py-4">
            {/* Search */}
            <div className="relative hidden flex-1 max-w-md md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cherchez le produit qui vous convient"
                className="w-full rounded-full bg-muted/20 pl-10 text-sm text-primary-foreground placeholder:text-muted-foreground border-primary-foreground/20"
              />
            </div>

            <div className="flex-shrink-0 text-center">
              <h1
                className="font-serif text-2xl font-bold tracking-wider text-primary-foreground md:text-4xl"
                style={{ fontFamily: "serif" }}
              >
                السلطان لعطور
              </h1>
              <p className="text-xs tracking-widest text-primary-foreground/70 md:text-sm">AL SULTAN PERFUMES</p>
            </div>

            {/* Actions */}
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
                  0
                </span>
              </Button>
            </div>
          </div>

          {/* Navigation menu */}
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

      <section className="relative h-[400px] overflow-hidden md:h-[600px]">
        <Image
          src="/luxury-perfume-bottle-on-beach-with-pink-flowers-a.jpg"
          alt="Featured Perfume"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-16">
          <h2
            className="font-script text-5xl text-white drop-shadow-2xl md:text-8xl"
            style={{ fontFamily: "cursive", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Alfred Ritchy
          </h2>
          <p className="mt-2 text-sm text-white/90 drop-shadow-lg md:text-lg">Collection Exclusive</p>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h3 className="mb-2 flex items-center justify-center gap-3 text-2xl font-bold uppercase tracking-wider md:text-4xl">
              <span className="text-3xl">🌟</span>
              Nouveautés
              <span className="text-3xl">🌟</span>
            </h3>
            <p className="text-sm text-muted-foreground md:text-base">Découvrez notre collection exclusive</p>
          </div>
          <PerfumeGrid />
        </div>
      </section>

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
