"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { QuestBanner } from "@/components/quest-detail/quest-banner"
import { CountdownTimer } from "@/components/quest-detail/countdown-timer"
import { ParticipantsList } from "@/components/quest-detail/participants-list"
import { JoinStakeButtons } from "@/components/quest-detail/join-stake-buttons"
import { ProgressVisualization } from "@/components/quest-detail/progress-visualization"

export default function QuestDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuestBanner />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CountdownTimer />
              <ProgressVisualization />
              <ParticipantsList />
            </div>

            {/* Sidebar */}
            <div>
              <JoinStakeButtons />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
