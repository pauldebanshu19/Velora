"use client"

import { useEffect, useRef } from "react"
import { ArrowLeft, Users } from "lucide-react"

export function CircleBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      ctx.fillStyle = "rgba(15, 15, 26, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw rotating aura ring
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 80

      ctx.strokeStyle = "rgba(108, 99, 255, 0.4)"
      ctx.lineWidth = 2

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius + i * 20, time, time + Math.PI * 1.5)
        ctx.stroke()
      }

      // Draw particles around ring
      for (let i = 0; i < 8; i++) {
        const angle = (time + (i / 8) * Math.PI * 2) * 0.5
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.fillStyle = ["#6c63ff", "#ff5c8d", "#00f6a3"][i % 3]
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="relative">
      <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Circles
      </button>

      <div className="relative h-64 rounded-2xl overflow-hidden glass border border-primary/30">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Creator's Circle</h1>
          <p className="text-lg text-muted-foreground flex items-center gap-2">
            <Users className="w-5 h-5" />
            2,340 members • Est. 2024
          </p>
        </div>
      </div>
    </div>
  )
}
