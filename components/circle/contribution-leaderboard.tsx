"use client"

import { Award } from "lucide-react"

export function ContributionLeaderboard() {
  const contributors = [
    { rank: 1, name: "@vibemaster", contribution: 12500, badge: "👑" },
    { rank: 2, name: "@cryptoqueen", contribution: 9800, badge: "🥈" },
    { rank: 3, name: "@nftgod", contribution: 8200, badge: "🥉" },
    { rank: 4, name: "@astrocat", contribution: 5240, badge: "⭐" },
    { rank: 5, name: "@defiwhiz", contribution: 3100, badge: "🚀" },
  ]

  return (
    <div className="glass p-8 rounded-2xl border border-secondary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
        <Award className="w-5 h-5 text-secondary" />
        Top Contributors
      </h3>

      <div className="space-y-3">
        {contributors.map((contributor) => (
          <div
            key={contributor.rank}
            className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {contributor.rank}
              </div>
              <div>
                <div className="font-semibold text-foreground">{contributor.name}</div>
                <div className="text-xs text-muted-foreground">{contributor.badge}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-accent">${contributor.contribution.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Contributed</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
