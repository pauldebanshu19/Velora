"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:glow-pulse transition-all">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">Aura</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/quests" className="text-muted-foreground hover:text-foreground transition-colors">
              Quests
            </Link>
            <Link href="/market" className="text-muted-foreground hover:text-foreground transition-colors">
              Market
            </Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </Link>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 neon-glow">
            Sign in with Farcaster
          </button>
        </div>
      </div>
    </nav>
  )
}
