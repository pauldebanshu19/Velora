"use client"

import { ChevronRight } from "lucide-react"

export function LeaderboardCarousel() {
  const leaderboard = [
    { rank: 1, name: "@vibemaster", aura: 15420, badge: "🔥" },
    { rank: 2, name: "@cryptoqueen", aura: 14850, badge: "👑" },
    { rank: 3, name: "@nftgod", aura: 13200, badge: "💎" },
    { rank: 4, name: "@astrocat", aura: 7850, badge: "⭐" },
    { rank: 5, name: "@defiwhiz", aura: 6420, badge: "🚀" },
  ]

  return (
    <div className="glass p-8 rounded-2xl border border-primary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6">Top Creators</h3>

      <div className="space-y-3">
        {leaderboard.map((creator) => (
          <div
            key={creator.rank}
            className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {creator.rank}
              </div>
              <div>
                <div className="font-semibold text-foreground">{creator.name}</div>
                <div className="text-xs text-muted-foreground">{creator.badge}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-accent">{creator.aura.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Aura</div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
