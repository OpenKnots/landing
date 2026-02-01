"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Github, Plug, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    id: "chat-with-files",
    badge: "Chat with docs + repos",
    title: "Chat-with-Files",
    description:
      "Chat with any docs site or GitHub repo and get structured summaries with citations. Ideal for onboarding, audits, and quick answers from large codebases.",
    highlights: [
      {
        icon: BookOpen,
        title: "Docs-aware answers",
        description: "Turn any docs URL into a searchable, summarized knowledge base.",
      },
      {
        icon: Github,
        title: "Repo intelligence",
        description: "Query folders, files, and APIs with contextual insights.",
      },
      {
        icon: Terminal,
        title: "Fast exploration",
        description: "Get the gist quickly with minimal setup and clear attribution.",
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
    badge: "VS Code extension",
    title: "OpenClaw Extension",
    description:
      "Install OpenClaw inside VS Code with guided setup, one-click connect, and auto-reconnect. Stay in your editor while OpenClaw keeps a ready terminal session.",
    highlights: [
      {
        icon: Plug,
        title: "Guided install",
        description: "Set up OpenClaw in minutes with prompts and safe defaults.",
      },
      {
        icon: Terminal,
        title: "One-click connect",
        description: "Launch your configured OpenClaw command from a status shortcut.",
      },
      {
        icon: Github,
        title: "Open source",
        description: "Browse the extension code and contribute improvements.",
      },
    ],
    primaryCta: {
      label: "Install VS Code Extension",
      href: "https://github.com/OpenKnots/openclaw-extension",
    },
    secondaryCta: {
      label: "View quick start",
      href: "https://github.com/OpenKnots/openclaw-extension#quick-start-macos--windows",
    },
  },
]

export function OurProducts() {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Explore{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              our products
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tools that make OpenKnot AI faster to adopt, easier to explore, and ready
            for production use.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border-border/50 bg-card/70 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-400">
                    {product.badge}
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl">{product.title}</CardTitle>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                    >
                      <Link href={product.primaryCta.href} target="_blank" rel="noopener noreferrer">
                        {product.primaryCta.label}
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href={product.secondaryCta.href} target="_blank" rel="noopener noreferrer">
                        {product.secondaryCta.label}
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {product.highlights.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <item.icon className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
