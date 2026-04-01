"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Puzzle, FileCheck, Activity, Layers, Cpu, Workflow } from "lucide-react"

const features = [
  {
    icon: Puzzle,
    title: "Composable by Design",
    description:
      "Build agents from reusable, well-defined components. Mix specialists, tools, and memory systems like building blocks.",
    code: `agent = compose(
  analyst,
  writer,
  tools=[search, summarize]
)`,
    highlights: ["Modular architecture", "Reusable components", "Clean abstractions"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: FileCheck,
    title: "Governable & Auditable",
    description:
      "Every decision your agent makes is traceable. Define policies, enforce boundaries, and maintain complete audit trails.",
    code: `audit.trace(agent_id="research-1")
# => 147 decisions logged
# => 0 boundary violations
# => Full replay available`,
    highlights: ["Full audit trails", "Policy enforcement", "Compliance ready"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Activity,
    title: "Predictable in Production",
    description:
      "Ship with confidence knowing exactly how your agents will behave. Clear boundaries prevent unexpected actions.",
    code: `boundary.check(action="delete:user")
# => DENIED: action not in allowlist
# => Fallback: human_approval()`,
    highlights: ["Behavior guarantees", "Clear boundaries", "Real-time monitoring"],
    gradient: "from-amber-500/20 to-amber-500/5",
  },
]

const additionalFeatures = [
  {
    icon: Layers,
    title: "Multi-Agent Orchestration",
    description: "Coordinate complex workflows across specialized agents with automatic handoffs and context sharing.",
  },
  {
    icon: Cpu,
    title: "Model Agnostic",
    description: "Use any LLM provider. Switch between OpenAI, Anthropic, or local models without code changes.",
  },
  {
    icon: Workflow,
    title: "Built-in Workflows",
    description: "Pre-built patterns for common use cases like RAG, tool calling, and multi-step reasoning.",
  },
]

function CodeSnippet({ code }: { code: string }) {
  return (
    <div className="mt-4 rounded-xl bg-background/80 border border-border/50 overflow-hidden">
      <pre className="p-4 text-xs font-mono overflow-x-auto">
        <code className="text-muted-foreground">
          {code.split("\n").map((line, i) => {
            // Simple syntax highlighting
            const highlighted = line
              .replace(/(#.*)/g, '<span class="text-muted-foreground/60 italic">$1</span>')
              .replace(/(".*?")/g, '<span class="text-emerald-400">$1</span>')
              .replace(/(\b(?:agent|boundary|audit|compose)\b)/g, '<span class="text-primary">$1</span>')
              .replace(/(=>)/g, '<span class="text-primary/70">$1</span>')
              .replace(/(\d+)/g, '<span class="text-amber-400">$1</span>')
              .replace(/(DENIED)/g, '<span class="text-destructive">$1</span>')
            
            return (
              <span
                key={i}
                className="block"
                dangerouslySetInnerHTML={{ __html: highlighted }}
              />
            )
          })}
        </code>
      </pre>
    </div>
  )
}

export function ValueProps() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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
            Why teams choose{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              OpenKnot AI
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Build AI systems that your team can understand, your stakeholders can trust, 
            and your users can rely on.
          </p>
        </motion.div>

        {/* Main feature cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="relative text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Code snippet */}
                <div className="relative">
                  <CodeSnippet code={feature.code} />
                </div>

                {/* Highlights */}
                <ul className="relative mt-6 space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features - smaller cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid sm:grid-cols-3 gap-4">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/20 hover:bg-card transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
