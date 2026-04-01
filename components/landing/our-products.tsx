"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Github, Plug, Terminal, ArrowUpRight, MessageSquare, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const products = [
  {
    id: "chat-with-files",
    badge: "AI-Powered",
    badgeIcon: MessageSquare,
    title: "Chat-with-Files",
    tagline: "Chat with any docs site or GitHub repo",
    description:
      "Get structured summaries with citations. Ideal for onboarding, audits, and quick answers from large codebases.",
    highlights: [
      {
        icon: BookOpen,
        title: "Docs-aware answers",
        description: "Turn any docs URL into a searchable knowledge base.",
      },
      {
        icon: Github,
        title: "Repo intelligence",
        description: "Query folders, files, and APIs with contextual insights.",
      },
      {
        icon: Terminal,
        title: "Fast exploration",
        description: "Get the gist quickly with minimal setup.",
      },
    ],
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/OpenKnots/chat-with-files",
    },
    secondaryCta: {
      label: "Try the demo",
      href: "https://chat-with-files-pi.vercel.app",
    },
  },
  {
    id: "openclaw-extension",
    badge: "VS Code",
    badgeIcon: Code2,
    title: "OpenClaw Extension",
    tagline: "AI coding assistant for VS Code",
    description:
      "Install OpenClaw inside VS Code with guided setup, one-click connect, and auto-reconnect. Stay in your editor while OpenClaw keeps a ready terminal session.",
    highlights: [
      {
        icon: Plug,
        title: "Guided install",
        description: "Set up in minutes with prompts and safe defaults.",
      },
      {
        icon: Terminal,
        title: "One-click connect",
        description: "Launch from a status shortcut.",
      },
      {
        icon: Github,
        title: "Open source",
        description: "Browse and contribute improvements.",
      },
    ],
    primaryCta: {
      label: "Install Extension",
      href: "https://github.com/OpenKnots/openclaw-extension",
    },
    secondaryCta: {
      label: "Quick start guide",
      href: "https://github.com/OpenKnots/openclaw-extension#quick-start-macos--windows",
    },
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-xl bg-card border border-border overflow-hidden hover:border-foreground/20 transition-all duration-500">
        <div className="relative p-8 lg:p-10 lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Left content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted">
                <product.badgeIcon className="h-3.5 w-3.5 text-foreground" />
                <span className="text-xs font-medium text-foreground">{product.badge}</span>
              </div>
            </div>

            {/* Title & tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{product.title}</h3>
            <p className="text-lg text-muted-foreground font-medium mb-4">{product.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button asChild size="lg">
                <Link href={product.primaryCta.href} target="_blank" rel="noopener noreferrer">
                  {product.primaryCta.label}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={product.secondaryCta.href} target="_blank" rel="noopener noreferrer">
                  {product.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right content - highlights */}
          <div className="mt-8 lg:mt-0">
            <div className="space-y-4">
              {product.highlights.map((item) => (
                <div 
                  key={item.title} 
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-foreground/10 transition-colors"
                >
                  <div className="shrink-0 p-3 rounded-lg bg-background border border-border">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function OurProducts() {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Explore our products
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tools that make OpenKnot faster to adopt, easier to explore, and ready
            for production use.
          </p>
        </motion.div>

        {/* Products - stacked full-width cards */}
        <div className="space-y-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Coming soon teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-sm font-medium">More products coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
