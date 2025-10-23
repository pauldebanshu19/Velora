"use client"

import { useState } from "react"

export function AuraScoreMeter() {
  const [auraScore, setAuraScore] = useState(7850)
  const maxScore = 10000

  const percentage = (auraScore / maxScore) * 100

  return (
    <div className="glass p-8 rounded-2xl border border-primary/30 h-full flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-muted-foreground mb-6">Aura Score</h3>

      <div className="relative w-32 h-32 mx-auto mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(108, 99, 255, 0.1)" strokeWidth="8" />

          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray={`${(percentage / 100) * 314} 314`}
            strokeLinecap="round"
            className="transition-all duration-500"
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#ff5c8d" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">{auraScore}</div>
            <div className="text-xs text-muted-foreground">/ {maxScore}</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Level</span>
          <span className="text-accent font-semibold">Legendary</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Rank</span>
          <span className="text-primary font-semibold">#42</span>
        </div>
      </div>
    </div>
  )
}
