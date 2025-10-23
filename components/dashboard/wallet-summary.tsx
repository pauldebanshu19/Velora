"use client"

import { Wallet, Lock, Gift } from "lucide-react"

export function WalletSummary() {
  return (
    <div className="glass p-8 rounded-2xl border border-accent/30">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
        <Wallet className="w-5 h-5 text-accent" />
        Wallet Summary
      </h3>

      <div className="space-y-4">
        <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground text-sm">Aura Balance</span>
            <span className="text-primary font-semibold">$2,450</span>
          </div>
          <div className="w-full bg-card rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: "65%" }} />
          </div>
        </div>

        <div className="bg-card/50 p-4 rounded-lg border border-secondary/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Staked Tokens
            </span>
            <span className="text-secondary font-semibold">$1,200</span>
          </div>
          <div className="w-full bg-card rounded-full h-2">
            <div className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full" style={{ width: "40%" }} />
          </div>
        </div>

        <div className="bg-card/50 p-4 rounded-lg border border-accent/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              <Gift className="w-4 h-4" />
              NFTs Owned
            </span>
            <span className="text-accent font-semibold">24</span>
          </div>
          <div className="w-full bg-card rounded-full h-2">
            <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full" style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
