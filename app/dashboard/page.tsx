"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AuraScoreMeter } from "@/components/dashboard/aura-score-meter"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { QuestsList } from "@/components/dashboard/quests-list"
import { LeaderboardCarousel } from "@/components/dashboard/leaderboard-carousel"
import { WalletSummary } from "@/components/dashboard/wallet-summary"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Hey creator, your vibe is electric today</p>
          </div>

          {/* Top Row: Aura Score & Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-1">
              <AuraScoreMeter />
            </div>
            <div className="lg:col-span-2">
              <ProfileCard />
            </div>
          </div>

          {/* Middle Row: Wallet & Leaderboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <WalletSummary />
            <LeaderboardCarousel />
          </div>

          {/* Bottom Row: Quests */}
          <div>
            <QuestsList />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
