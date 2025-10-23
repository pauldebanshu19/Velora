"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CTASection } from "@/components/landing/cta-section"
import { WalletConnect } from "@/components/wallet-connect";


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <div>
        <WalletConnect />
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CTASection />
      </div>
      </div>
      <Footer />
    </main>
  )
}
