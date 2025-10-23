"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { NFTGrid } from "@/components/gallery/nft-grid"
import { FilterBar } from "@/components/gallery/filter-bar"

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Vibe NFT Gallery</h1>
            <p className="text-muted-foreground">Collect, trade, and showcase your aura-powered NFTs</p>
          </div>

          {/* Filters */}
          <FilterBar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

          {/* NFT Grid */}
          <NFTGrid filter={selectedFilter} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
