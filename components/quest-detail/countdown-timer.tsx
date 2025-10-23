"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    minutes: 15,
    seconds: 42,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="glass p-4 rounded-lg border border-primary/20 text-center">
      <div className="text-3xl font-bold text-primary mb-1">{String(value).padStart(2, "0")}</div>
      <div className="text-xs text-muted-foreground uppercase">{label}</div>
    </div>
  )

  return (
    <div className="glass p-8 rounded-2xl border border-primary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-accent" />
        Challenge Duration
      </h3>

      <div className="grid grid-cols-4 gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}
