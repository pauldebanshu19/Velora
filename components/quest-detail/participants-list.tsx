"use client"

import { Users } from "lucide-react"

export function ParticipantsList() {
  const participants = [
    { id: 1, name: "@vibemaster", aura: 5000, status: "winning" },
    { id: 2, name: "@cryptoqueen", aura: 3500, status: "leading" },
    { id: 3, name: "@nftgod", aura: 2800, status: "active" },
    { id: 4, name: "@astrocat", aura: 1200, status: "active" },
    { id: 5, name: "@defiwhiz", aura: 800, status: "active" },
  ]

  return (
    <div className="glass p-8 rounded-2xl border border-secondary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-secondary" />
        Participants ({participants.length})
      </h3>

      <div className="space-y-3">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <div className="font-semibold text-foreground">{participant.name}</div>
                <div className="text-xs text-muted-foreground capitalize">{participant.status}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-accent">{participant.aura.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Staked</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
