"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Link2, Users, Rocket, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

function InteractiveCodeBlock({ code, filename, language = "yaml" }: { code: string; filename: string; language?: string }) {
  const [copied, setCopied] = React.useState(false)
  const lines = code.split("\n")

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (line: string) => {
    if (language === "yaml") {
      // Comments
      if (line.trim().startsWith("#")) {
        return <span className="text-muted-foreground/60 italic">{line}</span>
      }
      
      // Key-value pairs
      const keyMatch = line.match(/^(\s*)([a-zA-Z_-]+)(:)(.*)/)
      if (keyMatch) {
        const [, indent, key, colon, value] = keyMatch
        const trimmedValue = value.trim()
        
        let valueElement: React.ReactNode = value
        if (trimmedValue.startsWith('"') || trimmedValue.startsWith("'")) {
          valueElement = <span className="text-emerald-400">{value}</span>
        } else if (trimmedValue.startsWith("[")) {
          valueElement = <span className="text-foreground/70">{value}</span>
        } else {
          valueElement = <span className="text-primary/80">{value}</span>
        }

        return (
          <>
            {indent}
            <span className="text-cyan-400">{key}</span>
            <span className="text-foreground/50">{colon}</span>
            {valueElement}
          </>
        )
      }

      // List items
      if (line.trim().startsWith("-")) {
        const match = line.match(/^(\s*)(-)(.*)/)
        if (match) {
          const [, indent, dash, rest] = match
          return (
            <>
              {indent}
              <span className="text-primary/70">{dash}</span>
              <span className="text-foreground/80">{rest}</span>
            </>
          )
        }
      }
    }
    
    return <span className="text-foreground/80">{line}</span>
  }

  return (
    <div className="relative group rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/20">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/50 group-hover:bg-destructive/70 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-amber-500/50 group-hover:bg-amber-500/70 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500/70 transition-colors" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">{filename}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="p-5 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="hover:bg-primary/5 -mx-5 px-5 transition-colors">
                <span className="inline-block w-6 text-right mr-4 text-muted-foreground/40 select-none">
                  {index + 1}
                </span>
                {highlightCode(line)}
              </div>
            ))}
          </code>
        </pre>
      </div>
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
    code: `# Define what your agent can access
boundaries:
  name: "research-agent"
  allow:
    - "read:public-docs"
    - "read:user-owned"
    - "search:web"
  deny:
    - "write:admin"
    - "delete:*"
    - "access:pii"
  rate_limit: "100/hour"`,
    filename: "boundaries.yaml",
  },
  {
    step: "02",
    icon: Link2,
    title: "Bind Tools + Memory",
    description:
      "Connect your agent to the tools and context it needs. Bind APIs, databases, and memory systems with type-safe interfaces that enforce your boundaries.",
    code: `# Connect tools and memory
tools:
  - name: "search_documents"
    params: { query: string, limit: int }
    returns: DocumentResult[]
  
  - name: "create_summary"
    params: { content: string, style: enum }
    returns: Summary

memory:
  type: "conversation"
  ttl: "24h"
  max_tokens: 8000`,
    filename: "tools.yaml",
  },
  {
    step: "03",
    icon: Users,
    title: "Compose Specialists",
    description:
      "Combine specialized agents for complex workflows. Each specialist handles its domain, while the orchestrator manages handoffs and maintains context.",
    code: `# Compose multi-agent workflows
specialists:
  analyst:
    role: "data interpretation"
    model: "gpt-4o"
    
  writer:
    role: "content generation"  
    model: "claude-3-opus"
    
  reviewer:
    role: "quality assurance"
    model: "gpt-4o"

orchestrator:
  type: "sequential"
  fallback: "human_review"`,
    filename: "agents.yaml",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deploy with Confidence",
    description:
      "Ship to production with built-in monitoring, rollback capabilities, and real-time alerting. Scale automatically while maintaining full auditability.",
    code: `# Production deployment config
deploy:
  environment: "production"
  replicas: 3
  
monitoring:
  traces: true
  metrics: true
  alerts:
    - type: "boundary_violation"
      notify: ["slack", "pagerduty"]
    - type: "latency_spike"
      threshold: "2s"
      
rollback:
  enabled: true
  keep_versions: 5`,
    filename: "deploy.yaml",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            How it works
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Four simple steps to build production-ready AI agents with clear 
            boundaries and full auditability.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    {/* Step number with timeline dot */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Timeline dot - desktop */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />
                      
                      <span className="text-6xl font-bold text-primary/20 leading-none">
                        {step.step}
                      </span>
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Code block */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <InteractiveCodeBlock code={step.code} filename={step.filename} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
