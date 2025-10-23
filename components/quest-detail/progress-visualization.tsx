"use client"

import { TrendingUp } from "lucide-react"

export function ProgressVisualization() {
  const progressData = [
    { time: "00:00", value: 0 },
    { time: "04:00", value: 2400 },
    { time: "08:00", value: 5200 },
    { time: "12:00", value: 8100 },
    { time: "16:00", value: 12500 },
    { time: "20:00", value: 18200 },
  ]

  const maxValue = 20000

  return (
    <div className="glass p-8 rounded-2xl border border-accent/30">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-accent" />
        Live Progress
      </h3>

      <div className="space-y-6">
        {/* Chart */}
        <div className="h-48 flex items-end justify-between gap-2">
          {progressData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-card rounded-t-lg overflow-hidden relative group">
                <div
                  className="bg-gradient-to-t from-primary to-secondary transition-all duration-300 group-hover:from-secondary group-hover:to-accent"
                  style={{ height: `${(data.value / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{data.time}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card/50 p-4 rounded-lg border border-primary/20 text-center">
            <div className="text-sm text-muted-foreground mb-1">Current</div>
            <div className="text-2xl font-bold text-primary">18.2K</div>
          </div>
          <div className="bg-card/50 p-4 rounded-lg border border-secondary/20 text-center">
            <div className="text-sm text-muted-foreground mb-1">Target</div>
            <div className="text-2xl font-bold text-secondary">20K</div>
          </div>
          <div className="bg-card/50 p-4 rounded-lg border border-accent/20 text-center">
            <div className="text-sm text-muted-foreground mb-1">Progress</div>
            <div className="text-2xl font-bold text-accent">91%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
