"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Link2, Users, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

// Syntax highlighting for YAML
function highlightYaml(code: string) {
  return code.split("\n").map((line, lineIndex) => {
    const tokens: React.ReactNode[] = []
    let remaining = line
    let keyIndex = 0

    // Match leading whitespace
    const leadingSpaceMatch = remaining.match(/^(\s*)/)
    if (leadingSpaceMatch && leadingSpaceMatch[1]) {
      tokens.push(leadingSpaceMatch[1])
      remaining = remaining.slice(leadingSpaceMatch[1].length)
    }

    // Match list item dash
    if (remaining.startsWith("- ")) {
      tokens.push(
        <span key={`dash-${lineIndex}`} className="text-primary/70">
          -
        </span>
      )
      remaining = remaining.slice(1)
    }

    // Process remaining content
    while (remaining.length > 0) {
      // Match key: value pattern
      const keyValueMatch = remaining.match(/^([a-zA-Z_-]+)(:)(.*)/)
      if (keyValueMatch) {
        const [, key, colon, value] = keyValueMatch
        tokens.push(
          <span key={`key-${lineIndex}-${keyIndex}`} className="text-primary">
            {key}
          </span>
        )
        tokens.push(
          <span key={`colon-${lineIndex}-${keyIndex}`} className="text-foreground/50">
            {colon}
          </span>
        )
        
        // Handle the value part
        const trimmedValue = value.trim()
        if (trimmedValue.startsWith('"') || trimmedValue.startsWith("'")) {
          // String value
          tokens.push(
            <span key={`value-${lineIndex}-${keyIndex}`} className="text-foreground">
              {value}
            </span>
          )
        } else if (trimmedValue.startsWith("[")) {
          // Array value - highlight brackets and strings inside
          const parts = value.split(/(".*?")/)
          parts.forEach((part, i) => {
            if (part.startsWith('"') && part.endsWith('"')) {
              tokens.push(
                <span key={`arr-str-${lineIndex}-${keyIndex}-${i}`} className="text-foreground">
                  {part}
                </span>
              )
            } else {
              tokens.push(
                <span key={`arr-${lineIndex}-${keyIndex}-${i}`} className="text-foreground/60">
                  {part}
                </span>
              )
            }
          })
        } else {
          // Other value (could be a reference or plain text)
          tokens.push(
            <span key={`val-${lineIndex}-${keyIndex}`} className="text-primary/80">
              {value}
            </span>
          )
        }
        remaining = ""
        keyIndex++
      } else {
        // Match quoted strings
        const stringMatch = remaining.match(/^"([^"]*)"/)
        if (stringMatch) {
          tokens.push(
            <span key={`str-${lineIndex}-${keyIndex}`} className="text-foreground">
              {stringMatch[0]}
            </span>
          )
          remaining = remaining.slice(stringMatch[0].length)
          keyIndex++
        } else {
          // Default: add character as-is
          tokens.push(remaining[0])
          remaining = remaining.slice(1)
        }
      }
    }

    return (
      <span key={lineIndex} className="block">
        {tokens}
      </span>
    )
  })
}

function InteractiveCodeBlock({ code, filename }: { code: string; filename: string }) {
  const [copied, setCopied] = React.useState(false)
  const [hoveredLine, setHoveredLine] = React.useState<number | null>(null)
  const lines = code.split("\n")

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-2xl bg-black/80 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary/40 group-hover:bg-primary/70 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-primary/40 group-hover:bg-primary/70 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-primary/40 group-hover:bg-primary/70 transition-colors" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono">{filename}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-muted-foreground hover:text-foreground hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-primary" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span className="ml-1.5 text-xs">{copied ? "Copied!" : "Copy"}</span>
        </Button>
      </div>

      {/* Code content with line numbers */}
      <div className="relative overflow-x-auto">
        <pre className="p-4 text-sm font-mono">
          <code className="block">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`flex transition-colors duration-150 -mx-4 px-4 ${
                  hoveredLine === index ? "bg-primary/10" : ""
                }`}
                onMouseEnter={() => setHoveredLine(index)}
                onMouseLeave={() => setHoveredLine(null)}
              >
                <span className="select-none w-8 text-right pr-4 text-foreground/40 shrink-0">
                  {index + 1}
                </span>
                <span className="text-foreground/85">{highlightYaml(line)}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
  )
}

const steps = [
  {
    step: "01",
    icon: Shield,
    title: "Define Boundaries",
    description:
      "Start by declaring what your agent can and cannot do. Set clear policies, permissions, and guardrails that keep your AI operating safely within defined limits.",
    code: `boundaries:
  - name: "data-access"
    allow: ["read:public", "read:user-owned"]
    deny: ["write:admin", "delete:*"]`,
  },
  {
    step: "02",
    icon: Link2,
    title: "Bind Tools + Memory",
    description:
      "Connect your agent to the tools and context it needs. Bind APIs, databases, and memory systems with type-safe interfaces that enforce your boundaries.",
    code: `tools:
  - search_documents(query: string)
  - create_summary(content: string)
memory:
  - conversation_history
  - user_preferences`,
  },
  {
    step: "03",
    icon: Users,
    title: "Compose Specialists",
    description:
      "Combine specialized agents for complex workflows. Each specialist handles its domain, while the orchestrator manages handoffs and maintains context.",
    code: `specialists:
  - analyst: "data interpretation"
  - writer: "content generation"
  - reviewer: "quality assurance"
orchestrator: "workflow-manager"`,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three simple steps to build production-ready AI agents with clear 
            boundaries and full auditability.
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary/20">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <InteractiveCodeBlock code={step.code} filename="config.yaml" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
