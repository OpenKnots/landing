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
    gradient: "from-primary/20 via-primary/10 to-transparent",
    featured: true,
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
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    featured: false,
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${product.featured ? "lg:col-span-2" : ""}`}
    >
      <div className="relative h-full rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className={`relative p-8 lg:p-10 ${product.featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
          {/* Left content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                <product.badgeIcon className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">{product.badge}</span>
              </div>
            </div>

            {/* Title & tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{product.title}</h3>
            <p className="text-lg text-primary/80 font-medium mb-4">{product.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
              >
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
          <div className={`${product.featured ? "mt-8 lg:mt-0" : "mt-8"}`}>
            <div className="space-y-4">
              {product.highlights.map((item) => (
                <div 
                  key={item.title} 
                  className="flex gap-4 p-4 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/20 transition-colors"
                >
                  <div className="shrink-0 p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
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

        {/* Corner decoration */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export function OurProducts() {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
            Explore{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              our products
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tools that make OpenKnot faster to adopt, easier to explore, and ready
            for production use.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">More products coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
