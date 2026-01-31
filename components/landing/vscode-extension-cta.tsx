"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Plug, Sparkles, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const highlights = [
  {
    icon: Sparkles,
    title: "Guided setup",
    description:
      "Run the OpenClaw setup flow inside VS Code to install Node.js and the OpenClaw CLI with prompts.",
  },
  {
    icon: Plug,
    title: "One-click connect",
    description:
      "A status bar shortcut runs your configured OpenClaw command in a dedicated terminal.",
  },
  {
    icon: Terminal,
    title: "Fast reconnects",
    description:
      "Reuse the terminal session and enable auto-connect when you want OpenClaw ready on startup.",
  },
]

export function VSCodeExtensionCTA() {
  return (
    <section id="vscode-extension" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-400">
              Guided install in VS Code
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Install OpenClaw with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                the VS Code Extension
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl text-pretty">
              The OpenClaw VS Code extension ships with a guided setup flow so you
              can install OpenClaw and get connected without leaving your editor.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
              >
                <Link
                  href="https://github.com/OpenKnots/openclaw-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install VS Code Extension
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://github.com/OpenKnots/openclaw-extension#quick-start-macos--windows"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View quick start
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground/80">
              Works on macOS, Windows, and WSL. Includes auto-connect and terminal reuse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/50 bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">What you get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <item.icon className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
