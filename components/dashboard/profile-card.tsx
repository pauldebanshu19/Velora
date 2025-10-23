"use client"

import { Award, TrendingUp } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="glass p-8 rounded-2xl border border-secondary/30 h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">@astrocat</h3>
          <p className="text-muted-foreground">Creator • Farcaster Verified</p>
        </div>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <Award className="w-8 h-8 text-accent" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
          <div className="text-xs text-muted-foreground mb-1">Followers</div>
          <div className="text-2xl font-bold text-foreground">12.5K</div>
        </div>
        <div className="bg-card/50 p-4 rounded-lg border border-secondary/20">
          <div className="text-xs text-muted-foreground mb-1">Engagement</div>
          <div className="text-2xl font-bold text-secondary">8.2%</div>
        </div>
        <div className="bg-card/50 p-4 rounded-lg border border-accent/20">
          <div className="text-xs text-muted-foreground mb-1">Growth</div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-2xl font-bold text-accent">24%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
