"use client"

import { Search } from "lucide-react"

export function FilterBar({
  selectedFilter,
  onFilterChange,
}: {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}) {
  const filters = [
    { id: "all", label: "All NFTs" },
    { id: "creator", label: "By Creator" },
    { id: "circle", label: "By Circle" },
    { id: "rare", label: "Rare" },
    { id: "legendary", label: "Legendary" },
  ]

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search NFTs..."
          className="w-full pl-12 pr-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedFilter === filter.id
                ? "bg-gradient-to-r from-primary to-secondary text-white neon-glow"
                : "bg-card border border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}
