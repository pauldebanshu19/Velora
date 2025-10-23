"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CircleBanner } from "@/components/circle/circle-banner"
import { CircleStats } from "@/components/circle/circle-stats"
import { ProposalsFeed } from "@/components/circle/proposals-feed"
import { ContributionLeaderboard } from "@/components/circle/contribution-leaderboard"
import { CircleActions } from "@/components/circle/circle-actions"

export default function CirclePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CircleBanner />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CircleStats />
              <ProposalsFeed />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <CircleActions />
              <ContributionLeaderboard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
