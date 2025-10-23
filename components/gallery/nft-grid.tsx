"use client"
import { NFTCard } from "./nft-card"

export function NFTGrid({ filter }: { filter: string }) {
  const nfts = [
    {
      id: 1,
      title: "Aura Genesis #001",
      creator: "@vibemaster",
      rarity: "legendary",
      auraValue: 5000,
      image: "/nft-aura-genesis.jpg",
    },
    {
      id: 2,
      title: "Vibe Collector",
      creator: "@cryptoqueen",
      rarity: "rare",
      auraValue: 2500,
      image: "/nft-vibe-collector.jpg",
    },
    {
      id: 3,
      title: "Creator's Crown",
      creator: "@nftgod",
      rarity: "legendary",
      auraValue: 4200,
      image: "/nft-creators-crown.jpg",
    },
    {
      id: 4,
      title: "Market Predictor",
      creator: "@astrocat",
      rarity: "rare",
      auraValue: 1800,
      image: "/nft-market-predictor.jpg",
    },
    {
      id: 5,
      title: "Circle Guardian",
      creator: "@defiwhiz",
      rarity: "epic",
      auraValue: 3200,
      image: "/nft-circle-guardian.jpg",
    },
    {
      id: 6,
      title: "Quest Master",
      creator: "@vibemaster",
      rarity: "epic",
      auraValue: 2800,
      image: "/nft-quest-master.jpg",
    },
    {
      id: 7,
      title: "Aura Ascended",
      creator: "@cryptoqueen",
      rarity: "legendary",
      auraValue: 6500,
      image: "/nft-aura-ascended.jpg",
    },
    {
      id: 8,
      title: "Social Butterfly",
      creator: "@nftgod",
      rarity: "common",
      auraValue: 500,
      image: "/nft-social-butterfly.jpg",
    },
  ]

  const filteredNFTs = nfts.filter((nft) => {
    if (filter === "all") return true
    if (filter === "rare") return nft.rarity === "rare" || nft.rarity === "legendary"
    if (filter === "legendary") return nft.rarity === "legendary"
    return true
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredNFTs.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  )
}
