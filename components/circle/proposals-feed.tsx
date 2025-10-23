"use client"

import { CheckCircle, Clock, XCircle } from "lucide-react"

export function ProposalsFeed() {
  const proposals = [
    {
      id: 1,
      title: "Increase staking rewards to 15%",
      description: "Proposal to boost rewards for circle members",
      votes: { yes: 1240, no: 340 },
      status: "active",
      timeLeft: "2d 4h",
    },
    {
      id: 2,
      title: "Launch new quest series",
      description: "Create 5 new quests focused on community engagement",
      votes: { yes: 890, no: 120 },
      status: "active",
      timeLeft: "1d 12h",
    },
    {
      id: 3,
      title: "Distribute Q4 profits",
      description: "Vote on profit distribution to circle members",
      votes: { yes: 2100, no: 450 },
      status: "passed",
      timeLeft: "Passed",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="w-5 h-5 text-primary" />
      case "passed":
        return <CheckCircle className="w-5 h-5 text-accent" />
      case "rejected":
        return <XCircle className="w-5 h-5 text-secondary" />
      default:
        return null
    }
  }

  return (
    <div className="glass p-8 rounded-2xl border border-primary/30">
      <h3 className="text-lg font-semibold text-foreground mb-6">Proposals</h3>

      <div className="space-y-4">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="p-6 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(proposal.status)}
                  <h4 className="font-bold text-foreground">{proposal.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{proposal.description}</p>
              </div>
              <div className="text-right text-sm">
                <div className="text-muted-foreground capitalize">{proposal.status}</div>
                <div className="text-primary font-semibold">{proposal.timeLeft}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Yes</span>
                  <span>{proposal.votes.yes.toLocaleString()}</span>
                </div>
                <div className="w-full bg-card rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-primary h-2 rounded-full"
                    style={{
                      width: `${(proposal.votes.yes / (proposal.votes.yes + proposal.votes.no)) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>No</span>
                  <span>{proposal.votes.no.toLocaleString()}</span>
                </div>
                <div className="w-full bg-card rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full"
                    style={{
                      width: `${(proposal.votes.no / (proposal.votes.yes + proposal.votes.no)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {proposal.status === "active" && (
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-4 bg-gradient-to-r from-accent to-primary rounded-lg text-white text-sm font-semibold hover:shadow-lg transition-all">
                  Vote Yes
                </button>
                <button className="flex-1 py-2 px-4 border border-secondary rounded-lg text-secondary text-sm font-semibold hover:bg-secondary/10 transition-all">
                  Vote No
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
