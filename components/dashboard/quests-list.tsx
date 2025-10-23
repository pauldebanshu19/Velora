"use client"

import { Zap, Clock, Users } from "lucide-react"

export function QuestsList() {
  const quests = [
    {
      id: 1,
      title: "Share Your Vibe",
      description: "Post about your favorite creator and tag them",
      reward: 250,
      participants: 1240,
      timeLeft: "2h 30m",
      difficulty: "Easy",
      color: "from-primary to-secondary",
    },
    {
      id: 2,
      title: "Market Prediction",
      description: "Predict if @cryptoqueen reaches 20K aura by midnight",
      reward: 500,
      participants: 340,
      timeLeft: "4h 15m",
      difficulty: "Medium",
      color: "from-secondary to-accent",
    },
    {
      id: 3,
      title: "Circle Contribution",
      description: "Contribute 100 AURA to your favorite circle",
      reward: 750,
      participants: 89,
      timeLeft: "1d 6h",
      difficulty: "Hard",
      color: "from-accent to-primary",
    },
  ]

  return (
    <div className="glass p-8 rounded-2xl border border-primary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6">Active Quests</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${quest.color} p-2 mb-4 group-hover:scale-110 transition-transform`}
            >
              <Zap className="w-full h-full text-white" />
            </div>

            <h4 className="font-bold text-foreground mb-2">{quest.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{quest.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Reward</span>
                <span className="font-bold text-accent">{quest.reward} AURA</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Participants
                </span>
                <span className="font-semibold text-foreground">{quest.participants}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Time Left
                </span>
                <span className="font-semibold text-primary">{quest.timeLeft}</span>
              </div>
            </div>

            <button className="w-full py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all">
              Join Quest
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
