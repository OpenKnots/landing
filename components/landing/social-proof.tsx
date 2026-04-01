"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Blocks, Eye, Shield, Zap, Lock, GitBranch } from "lucide-react"

const audiences = [
  "AI Engineers",
  "Platform Teams",
  "Startups",
  "Enterprises",
  "Research Labs",
  "DevOps Teams",
]

const principles = [
  {
    icon: Blocks,
    label: "Composable",
    description: "Mix and match agents, tools, and memory systems like building blocks",
    metric: "50+",
    metricLabel: "integrations",
  },
  {
    icon: Eye,
    label: "Inspectable",
    description: "Full visibility into every decision with complete audit trails",
    metric: "100%",
    metricLabel: "traceable",
  },
  {
    icon: Shield,
    label: "Boundary-first",
    description: "Clear guardrails and policies that keep your AI operating safely",
    metric: "Zero",
    metricLabel: "trust issues",
  },
]

const stats = [
  { icon: Zap, value: "10x", label: "Faster development" },
  { icon: Lock, value: "99.9%", label: "Uptime SLA" },
  { icon: GitBranch, value: "Open", label: "Source" },
]

export function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-widest uppercase">
            Built for teams who need AI they can rely on
          </p>

          {/* Audience chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <div className="px-5 py-2.5 text-sm font-medium rounded-full bg-card border border-border text-foreground/80 hover:border-foreground/30 hover:text-foreground transition-all duration-300 cursor-default">
                  {audience}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-20 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="h-4 w-4 text-foreground" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</span>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Core principles - large feature cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 overflow-hidden">
                {/* Top section with icon and metric */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="p-4 rounded-xl bg-muted border border-border group-hover:bg-foreground/5 transition-all duration-300">
                    <principle.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{principle.metric}</div>
                    <div className="text-xs text-muted-foreground">{principle.metricLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-3">
                  {principle.label}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
