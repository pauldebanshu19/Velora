"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"

interface NFT {
  id: number
  title: string
  creator: string
  rarity: string
  auraValue: number
  image: string
}

export function NFTCard({ nft }: { nft: NFT }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const rarityColors = {
    common: "from-gray-400 to-gray-600",
    rare: "from-blue-400 to-blue-600",
    epic: "from-purple-400 to-purple-600",
    legendary: "from-yellow-400 to-red-600",
  }

  const rarityColor = rarityColors[nft.rarity as keyof typeof rarityColors] || rarityColors.common

  return (
    <div
      className="glass rounded-xl border border-primary/20 overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-card">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.title}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Glow Frame */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${rarityColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur rounded-lg hover:bg-card transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorited ? "fill-secondary text-secondary" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Rarity Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${rarityColor} capitalize`}
        >
          {nft.rarity}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-1 truncate">{nft.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{nft.creator}</p>

        {/* Metadata */}
        {isHovered && (
          <div className="mb-4 p-3 bg-card/50 rounded-lg border border-primary/20 fade-up">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Aura Value</span>
              <span className="text-accent font-bold">{nft.auraValue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Floor Price</span>
              <span className="text-primary font-bold">0.5 ETH</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className="py-2 px-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            Trade
          </button>
          <button className="py-2 px-3 border border-accent rounded-lg text-accent text-sm font-semibold hover:bg-accent/10 transition-all">
            Mint
          </button>
        </div>
      </div>
    </div>
  )
}
