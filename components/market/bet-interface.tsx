"use client"

import { useState } from "react"
import { Zap } from "lucide-react"

export function BetInterface() {
  const [betAmount, setBetAmount] = useState(100)
  const [prediction, setPrediction] = useState("yes")
  const [isLoading, setIsLoading] = useState(false)

  const handleSettle = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const potentialWin = prediction === "yes" ? betAmount * 1.68 : betAmount * 2.1

  return (
    <div className="glass p-8 rounded-2xl border border-secondary/30 sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6">Place Your Bet</h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Prediction</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setPrediction("yes")}
              className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                prediction === "yes"
                  ? "bg-gradient-to-r from-primary to-secondary text-white neon-glow"
                  : "bg-card border border-primary/20 text-muted-foreground hover:text-foreground"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setPrediction("no")}
              className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                prediction === "no"
                  ? "bg-gradient-to-r from-secondary to-accent text-white neon-glow"
                  : "bg-card border border-primary/20 text-muted-foreground hover:text-foreground"
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Bet Amount (AURA)</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full px-4 py-2 bg-card border border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="bg-card/50 p-4 rounded-lg border border-accent/20 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Odds</span>
            <span className="text-accent font-bold">{prediction === "yes" ? "1.68x" : "2.10x"}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Potential Win</span>
            <span className="text-primary font-bold">{potentialWin.toLocaleString()} AURA</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Win Probability</span>
            <span className="text-secondary font-bold">{prediction === "yes" ? "68%" : "32%"}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleSettle}
        disabled={isLoading}
        className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Settling...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            Place Bet
          </>
        )}
      </button>

      <div className="mt-4 p-3 bg-card/50 rounded-lg border border-primary/20">
        <p className="text-xs text-muted-foreground">
          Bets are settled 24 hours after market close. Winnings are automatically distributed.
        </p>
      </div>
    </div>
  )
}
