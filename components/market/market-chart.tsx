"use client"

import { useEffect, useRef } from "react"
import { TrendingUp } from "lucide-react"

export function MarketChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Generate smooth curve data
    const data = [
      { x: 0, y: 2000 },
      { x: 50, y: 3200 },
      { x: 100, y: 4100 },
      { x: 150, y: 5800 },
      { x: 200, y: 7200 },
      { x: 250, y: 8900 },
      { x: 300, y: 10200 },
      { x: 350, y: 12100 },
      { x: 400, y: 14500 },
      { x: 450, y: 16800 },
      { x: 500, y: 18200 },
    ]

    const padding = 60
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2
    const maxY = 20000

    // Draw background
    ctx.fillStyle = "rgba(26, 26, 46, 0.5)"
    ctx.fillRect(padding, padding, chartWidth, chartHeight)

    // Draw grid
    ctx.strokeStyle = "rgba(108, 99, 255, 0.1)"
    ctx.lineWidth = 1
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(padding + chartWidth, y)
      ctx.stroke()
    }

    // Draw gradient area
    const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight)
    gradient.addColorStop(0, "rgba(108, 99, 255, 0.3)")
    gradient.addColorStop(1, "rgba(108, 99, 255, 0.05)")

    ctx.beginPath()
    ctx.moveTo(padding, padding + chartHeight)

    data.forEach((point) => {
      const x = padding + (point.x / 500) * chartWidth
      const y = padding + chartHeight - (point.y / maxY) * chartHeight
      ctx.lineTo(x, y)
    })

    ctx.lineTo(padding + chartWidth, padding + chartHeight)
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw line
    ctx.strokeStyle = "url(#gradient)"
    ctx.lineWidth = 3
    ctx.beginPath()

    data.forEach((point, index) => {
      const x = padding + (point.x / 500) * chartWidth
      const y = padding + chartHeight - (point.y / maxY) * chartHeight
      if (index === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })

    // Create gradient for line
    const lineGradient = ctx.createLinearGradient(padding, 0, padding + chartWidth, 0)
    lineGradient.addColorStop(0, "#6c63ff")
    lineGradient.addColorStop(0.5, "#ff5c8d")
    lineGradient.addColorStop(1, "#00f6a3")
    ctx.strokeStyle = lineGradient
    ctx.stroke()

    // Draw axes labels
    ctx.fillStyle = "rgba(160, 160, 176, 0.8)"
    ctx.font = "12px Inter"
    ctx.textAlign = "center"

    for (let i = 0; i <= 5; i++) {
      const y = padding + chartHeight - (chartHeight / 5) * i
      const value = (maxY / 5) * i
      ctx.fillText(value.toLocaleString(), padding - 40, y + 4)
    }
  }, [])

  return (
    <div className="glass p-8 rounded-2xl border border-primary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-accent" />
        Market Odds Over Time
      </h3>

      <canvas ref={canvasRef} className="w-full h-64 rounded-lg" />

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-1">Current Odds</div>
          <div className="text-2xl font-bold text-primary">68%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-1">24h Change</div>
          <div className="text-2xl font-bold text-accent">+12%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-1">Volume</div>
          <div className="text-2xl font-bold text-secondary">$450K</div>
        </div>
      </div>
    </div>
  )
}
