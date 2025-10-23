"use client"

import { MessageCircle, Heart, Share2 } from "lucide-react"

export function FarcasterFeed() {
  const posts = [
    {
      id: 1,
      author: "@cryptoqueen",
      content: "Just hit 18K aura! The momentum is real. Let's go to 20K!",
      likes: 1240,
      replies: 340,
    },
    {
      id: 2,
      author: "@vibemaster",
      content: "Market odds just shifted to 68%. This is getting interesting.",
      likes: 890,
      replies: 210,
    },
    {
      id: 3,
      author: "@nftgod",
      content: "Betting big on this one. The fundamentals are strong.",
      likes: 650,
      replies: 145,
    },
  ]

  return (
    <div className="glass p-8 rounded-2xl border border-accent/30">
      <h3 className="text-lg font-semibold text-foreground mb-6">Live Farcaster Feed</h3>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {post.author}
            </div>
            <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Heart className="w-3 h-3" />
                {post.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <MessageCircle className="w-3 h-3" />
                {post.replies}
              </button>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Share2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
