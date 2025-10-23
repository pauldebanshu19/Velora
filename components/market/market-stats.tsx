"use client"

import { BarChart3, Users, Zap } from "lucide-react"

export function MarketStats() {
  const stats = [
    {
      icon: BarChart3,
      label: "Total Volume",
      value: "$2.4M",
      change: "+24%",
      color: "from-primary to-secondary",
    },
    {
      icon: Users,
      label: "Active Traders",
      value: "3,240",
      change: "+18%",
      color: "from-secondary to-accent",
    },
    {
      icon: Zap,
      label: "Avg. Odds",
      value: "1.85x",
      change: "+5%",
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
            className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} p-2 mb-4`}>
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
