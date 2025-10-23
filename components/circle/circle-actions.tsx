"use client"

import { Plus, Share2 } from "lucide-react"

export function CircleActions() {
  return (
    <div className="glass p-8 rounded-2xl border border-accent/30 sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6">Circle Actions</h3>

      <div className="space-y-3 mb-6">
        <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Stake in Circle
        </button>

        <button className="w-full py-3 border-2 border-accent rounded-lg text-accent font-bold hover:bg-accent/10 transition-all flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" />
          Invite Members
        </button>
      </div>

      <div className="space-y-3">
        <div className="p-4 bg-card/50 rounded-lg border border-primary/20">
          <div className="text-xs text-muted-foreground mb-2">Your Contribution</div>
          <div className="text-2xl font-bold text-primary mb-2">$5,240</div>
          <div className="w-full bg-card rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: "42%" }} />
          </div>
          <div className="text-xs text-muted-foreground mt-2">42% of circle average</div>
        </div>

        <div className="p-4 bg-card/50 rounded-lg border border-secondary/20">
          <div className="text-xs text-muted-foreground mb-2">Your Rewards</div>
          <div className="text-2xl font-bold text-secondary">$1,840</div>
          <div className="text-xs text-accent mt-2">Claim available</div>
        </div>
      </div>
    </div>
  )
}
