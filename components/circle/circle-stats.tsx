"use client"

import { TrendingUp, Lock, Gift } from "lucide-react"

export function CircleStats() {
  const stats = [
    {
      icon: TrendingUp,
      label: "Group Aura Balance",
      value: "$125,400",
      change: "+8.2%",
      color: "from-primary to-secondary",
    },
    {
      icon: Lock,
      label: "Staking Pool",
      value: "$89,200",
      change: "+12.5%",
      color: "from-secondary to-accent",
    },
    {
      icon: Gift,
      label: "Rewards Earned",
      value: "$34,800",
      change: "+24.1%",
      color: "from-accent to-primary",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group"
          >
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} p-2 mb-4 group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-full h-full text-white" />
            </div>
            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-accent font-semibold">{stat.change}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
