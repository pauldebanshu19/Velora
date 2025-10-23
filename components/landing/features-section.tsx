"use client"

import { Sparkles, Zap, TrendingUp, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Earn Your Aura",
      description: "Complete quests, engage with creators, and build your reputation on-chain.",
    },
    {
      icon: Zap,
      title: "Gamified Interactions",
      description: "Every action rewards you with aura points. Level up your vibe.",
    },
    {
      icon: TrendingUp,
      title: "Prediction Markets",
      description: "Bet on creator growth and earn from accurate predictions.",
    },
    {
      icon: Users,
      title: "Creator Circles",
      description: "Join communities, stake together, and share rewards.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Aura Market?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass p-8 rounded-2xl border border-primary/20 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-3 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
