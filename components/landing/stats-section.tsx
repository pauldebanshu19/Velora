"use client"

import { TrendingUp, Users, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      label: "Total Aura",
      value: "2.5M+",
      color: "from-primary to-secondary",
    },
    {
      icon: Users,
      label: "Active Quests",
      value: "1000+",
      color: "from-secondary to-accent",
    },
    {
      icon: Zap,
      label: "Top Circles",
      value: "500+",
      color: "from-accent to-primary",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Platform Stats</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:glow-pulse"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
