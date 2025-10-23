"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MarketChart } from "@/components/market/market-chart"
import { BetInterface } from "@/components/market/bet-interface"
import { FarcasterFeed } from "@/components/market/farcaster-feed"
import { MarketStats } from "@/components/market/market-stats"

export default function MarketPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Prediction Market</h1>
            <p className="text-muted-foreground">Bet on creator growth and earn from accurate predictions</p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Chart & Stats */}
            <div className="lg:col-span-2 space-y-8">
              <MarketChart />
              <MarketStats />
            </div>

            {/* Right: Bet Interface & Feed */}
            <div className="space-y-8">
              <BetInterface />
              <FarcasterFeed />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
