"use client"

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-12 rounded-3xl border border-primary/30 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Farm Your Aura?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of creators earning real value through social engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 neon-glow">
              Sign in with Farcaster
            </button>
            <button className="px-8 py-4 border-2 border-accent rounded-2xl text-accent font-bold hover:bg-accent/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
