"use client"

import { useEffect, useRef } from "react"
import { ArrowLeft } from "lucide-react"

export function QuestBanner() {
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

      // Draw energy waves
      ctx.strokeStyle = "rgba(108, 99, 255, 0.3)"
      ctx.lineWidth = 2

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin((x + time * 50) * 0.01 + i) * 30
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
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
        Back to Quests
      </button>

      <div className="relative h-64 rounded-2xl overflow-hidden glass border border-primary/30">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Market Prediction Challenge</h1>
          <p className="text-lg text-muted-foreground">Predict if @cryptoqueen reaches 20K aura by midnight UTC</p>
        </div>
      </div>
    </div>
  )
}
