"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Blocks, Eye, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const audiences = [
  "AI Engineers",
  "Platform Teams",
  "Startups",
  "Enterprises",
  "Research Labs",
]

const principles = [
  {
    icon: Blocks,
    label: "Composable",
    description: "Mix and match components",
  },
  {
    icon: Eye,
    label: "Inspectable",
    description: "Full visibility into decisions",
  },
  {
    icon: Shield,
    label: "Boundary-first",
    description: "Clear guardrails by design",
  },
]

export function SocialProof() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Glassmorphic background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground mb-6 tracking-wide uppercase">
            Built for teams who need AI they can rely on
          </p>

          {/* Audience badges - glassmorphic style */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Badge
                  variant="secondary"
                  className="px-5 py-2 text-sm font-medium backdrop-blur-md bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 text-foreground shadow-lg shadow-purple-500/5 hover:bg-white/10 dark:hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  {audience}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Design principles - glassmorphic cards */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative flex flex-col items-center text-center p-8 rounded-2xl backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-purple-500/30 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative mb-4 p-4 rounded-2xl backdrop-blur-sm bg-purple-500/10 border border-purple-500/20 shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 group-hover:scale-110 transition-all duration-300">
                    <principle.icon className="h-7 w-7 text-purple-400" />
                  </div>
                  <h3 className="relative font-semibold text-lg text-foreground mb-2">{principle.label}</h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
