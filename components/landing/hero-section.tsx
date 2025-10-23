"use client"

import { useEffect, useRef } from "react"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        color: ["#6c63ff", "#ff5c8d", "#00f6a3"][Math.floor(Math.random() * 3)],
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 15, 26, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Welcome to the future of social DeFi</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-up">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Earn Your Aura
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Social + DeFi had a Gen Z baby. Gamify every interaction, build your reputation, and earn real value.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 neon-glow">
            Start Farming Aura
          </button>
          <button className="px-8 py-4 border-2 border-primary rounded-2xl text-primary font-bold text-lg hover:bg-primary/10 transition-all duration-300">
            Explore Creators
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="glass p-4 rounded-xl border border-primary/20">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Creators</div>
          </div>
          <div className="glass p-4 rounded-xl border border-secondary/20">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">$2.5M</div>
            <div className="text-sm text-muted-foreground">Total Aura Staked</div>
          </div>
          <div className="glass p-4 rounded-xl border border-primary/20">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Active Quests</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
