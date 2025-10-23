"use client"

import { useState } from "react"
import { Zap, TrendingUp } from "lucide-react"

export function JoinStakeButtons() {
  const [stakeAmount, setStakeAmount] = useState(100)

  return (
    <div className="glass p-8 rounded-2xl border border-accent/30 sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6">Join Challenge</h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Stake Amount (AURA)</label>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(Number(e.target.value))}
            className="w-full px-4 py-2 bg-card border border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="bg-card/50 p-4 rounded-lg border border-accent/20">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Potential Reward</span>
            <span className="text-accent font-bold">{(stakeAmount * 2.5).toLocaleString()} AURA</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Win Probability</span>
            <span className="text-primary font-bold">68%</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          Join & Stake
        </button>

        <button className="w-full py-3 border-2 border-accent rounded-lg text-accent font-bold hover:bg-accent/10 transition-all flex items-center justify-center gap-2">
          <TrendingUp className="w-4 h-4" />
          View Analytics
        </button>
      </div>

      <div className="mt-6 p-4 bg-card/50 rounded-lg border border-primary/20">
        <p className="text-xs text-muted-foreground">
          By joining, you agree to the quest terms and conditions. Rewards are distributed after challenge completion.
        </p>
      </div>
    </div>
  )
}
