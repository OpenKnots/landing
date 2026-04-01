"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Copy, Check, Terminal, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const codeExample = `from openknot import Agent, Boundary, Tool

# Define clear boundaries
boundary = Boundary(
    allow=["read:docs", "search:web"],
    deny=["write:admin", "delete:*"]
)

# Compose your agent
agent = Agent(
    name="research-assistant",
    boundary=boundary,
    tools=[Tool.search, Tool.summarize],
    memory="conversation"
)

# Ship with confidence
agent.run("Analyze the quarterly report")`

function TerminalPreview() {
  const [copied, setCopied] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<"code" | "output">("code")

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightPython = (code: string) => {
    return code.split("\n").map((line, lineIndex) => {
      const tokens: React.ReactNode[] = []
      let remaining = line
      let tokenIndex = 0

      // Keywords
      const keywords = ["from", "import", "def", "class", "return", "if", "else", "for", "in", "with", "as", "try", "except", "raise", "True", "False", "None"]
      // Built-in functions
      const builtins = ["print", "len", "str", "int", "float", "list", "dict", "tuple", "set"]

      while (remaining.length > 0) {
        // Match comments
        if (remaining.startsWith("#")) {
          tokens.push(
            <span key={`comment-${lineIndex}-${tokenIndex}`} className="text-muted-foreground/60 italic">
              {remaining}
            </span>
          )
          remaining = ""
          tokenIndex++
          continue
        }

        // Match strings (double and single quotes)
        const stringMatch = remaining.match(/^(["'])(.*?)\1/) || remaining.match(/^(["'])([^"']*)(["'])?/)
        if (stringMatch) {
          tokens.push(
            <span key={`str-${lineIndex}-${tokenIndex}`} className="text-emerald-400">
              {stringMatch[0]}
            </span>
          )
          remaining = remaining.slice(stringMatch[0].length)
          tokenIndex++
          continue
        }

        // Match brackets and special chars
        const bracketMatch = remaining.match(/^[\[\](){}=,.:]+/)
        if (bracketMatch) {
          tokens.push(
            <span key={`bracket-${lineIndex}-${tokenIndex}`} className="text-foreground/60">
              {bracketMatch[0]}
            </span>
          )
          remaining = remaining.slice(bracketMatch[0].length)
          tokenIndex++
          continue
        }

        // Match words
        const wordMatch = remaining.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)
        if (wordMatch) {
          const word = wordMatch[0]
          let className = "text-foreground/90"
          
          if (keywords.includes(word)) {
            className = "text-primary font-medium"
          } else if (builtins.includes(word)) {
            className = "text-amber-400"
          } else if (word === "Agent" || word === "Boundary" || word === "Tool") {
            className = "text-cyan-400"
          } else if (word === "openknot") {
            className = "text-primary"
          }

          tokens.push(
            <span key={`word-${lineIndex}-${tokenIndex}`} className={className}>
              {word}
            </span>
          )
          remaining = remaining.slice(word.length)
          tokenIndex++
          continue
        }

        // Default: add character as-is
        tokens.push(remaining[0])
        remaining = remaining.slice(1)
      }

      return (
        <span key={lineIndex} className="block">
          {tokens}
        </span>
      )
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      <div className="relative rounded-2xl bg-card/80 border border-border/50 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  activeTab === "code"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Terminal className="w-3 h-3 inline mr-1.5" />
                agent.py
              </button>
              <button
                onClick={() => setActiveTab("output")}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  activeTab === "output"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="w-3 h-3 inline mr-1.5" />
                output
              </button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>

        {/* Code content */}
        <div className="p-4 overflow-x-auto">
          {activeTab === "code" ? (
            <pre className="text-sm font-mono leading-relaxed">
              <code>{highlightPython(codeExample)}</code>
            </pre>
          ) : (
            <div className="text-sm font-mono space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-emerald-400">[ok]</span>
                <span>Boundary validated</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-emerald-400">[ok]</span>
                <span>Tools bound: search, summarize</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-emerald-400">[ok]</span>
                <span>Memory initialized: conversation</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span className="text-cyan-400">[run]</span>
                <span>Processing: &quot;Analyze the quarterly report&quot;</span>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-foreground/90">
                  The Q4 report shows 23% revenue growth with strong performance in enterprise segment. 
                  Key highlights: reduced churn by 15%, expanded to 3 new markets.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Sources: quarterly-report.pdf, market-analysis.xlsx
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Now in Beta</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              <span className="text-foreground">The platform to </span>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                build & ship
              </span>
              <br />
              <span className="text-foreground">AI agents</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Composable, inspectable, and boundary-first. Build AI agents you can trust, debug, and deploy with confidence.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 text-base"
              >
                <Link href="#get-started">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="https://github.com/openknots" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>SOC 2 Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal Preview */}
          <div className="relative">
            <TerminalPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
