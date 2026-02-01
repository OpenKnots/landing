"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  MessageSquare,
  FileSearch,
  ShoppingCart,
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

const useCases = [
  {
    id: "support",
    icon: Headphones,
    label: "Customer Support",
    title: "Intelligent Support Agents",
    description:
      "Deploy AI agents that handle customer inquiries with empathy and accuracy, while staying within defined response boundaries.",
    outcomes: [
      "Reduction in first-response time",
      "Consistent tone and brand voice",
      "Seamless human handoff when needed",
      "Complete conversation audit trails",
    ],
    gradient: "from-primary/20 to-primary/5",
    accentColor: "primary",
    size: "large" as const,
  },
  {
    id: "research",
    icon: FileSearch,
    label: "Research & Analysis",
    title: "Research Assistants",
    description:
      "Build agents that synthesize information from multiple sources, generate insights, and maintain clear attribution.",
    outcomes: [
      "Cross-reference multiple data sources",
      "Automatic citation and attribution",
      "Bias detection and flagging",
      "Reproducible analysis pipelines",
    ],
    gradient: "from-primary/15 to-primary/5",
    accentColor: "primary",
    size: "medium" as const,
  },
  {
    id: "commerce",
    icon: ShoppingCart,
    label: "E-commerce",
    title: "Shopping Assistants",
    description:
      "Create personalized shopping experiences with agents that understand preferences while respecting privacy boundaries.",
    outcomes: [
      "Personalized product recommendations",
      "Natural language product search",
      "Privacy-preserving personalization",
      "Clear data usage policies",
    ],
    gradient: "from-primary/15 to-primary/5",
    accentColor: "primary",
    size: "medium" as const,
  },
  {
    id: "internal",
    icon: MessageSquare,
    label: "Internal Tools",
    title: "Enterprise Assistants",
    description:
      "Build internal AI tools that help teams work faster while maintaining strict data access controls and compliance.",
    outcomes: [
      "Role-based access controls",
      "Compliance with data policies",
      "Integration with existing tools",
      "Audit-ready activity logs",
    ],
    gradient: "from-primary/20 to-primary/10",
    accentColor: "primary",
    size: "large" as const,
  },
]

const accentStyles = {
  primary: {
    icon: "bg-primary/20 border-primary/30 text-primary/90",
    dot: "bg-primary",
    hover: "group-hover:border-primary/50 group-hover:shadow-primary/20",
    button: "text-primary/90 group-hover:text-primary",
  },
}

function BentoCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const styles = accentStyles[useCase.accentColor as keyof typeof accentStyles]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative overflow-hidden rounded-3xl
        backdrop-blur-xl bg-white/5 dark:bg-white/5
        border border-white/10 dark:border-white/10
        shadow-xl shadow-black/5
        transition-all duration-500 cursor-pointer
        ${styles.hover}
        ${useCase.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}
      `}
    >
      {/* Background gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${useCase.gradient}
          transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className={`relative flex flex-col ${useCase.size === "large" ? "p-8" : "p-6"}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-2xl border backdrop-blur-sm ${styles.icon}`}>
            <useCase.icon className={useCase.size === "large" ? "h-6 w-6" : "h-5 w-5"} />
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {useCase.label}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className={`font-bold text-foreground mb-2 ${useCase.size === "large" ? "text-2xl" : "text-lg"}`}>
          {useCase.title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed mb-6 ${useCase.size === "large" ? "text-base" : "text-sm"}`}>
          {useCase.description}
        </p>

        {/* Outcomes - only show on large cards or when hovered on medium */}
        <div
          className={`
            flex-1 space-y-2 transition-all duration-300
            ${useCase.size === "large" ? "opacity-100" : isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto"}
          `}
        >
          {useCase.outcomes.slice(0, useCase.size === "large" ? 4 : 2).map((outcome, outcomeIndex) => (
            <motion.div
              key={outcomeIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
              transition={{ delay: outcomeIndex * 0.05 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className={`h-4 w-4 shrink-0 ${styles.button}`} />
              <span className="text-sm text-foreground/80">{outcome}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer action */}
        <div className="mt-auto pt-6">
          <div
            className={`
              inline-flex items-center gap-2 text-sm font-medium
              transition-all duration-300
              ${styles.button}
            `}
          >
            <span>Learn more</span>
            <ArrowRight
              className={`
                h-4 w-4 transition-transform duration-300
                ${isHovered ? "translate-x-1" : "translate-x-0"}
              `}
            />
          </div>
        </div>

        {/* Corner accent */}
        <div
          className={`
            absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl
            transition-opacity duration-500
            ${isHovered ? "opacity-50" : "opacity-0"}
          `}
          style={{
            background: `radial-gradient(circle, var(--tw-gradient-from) 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  )
}

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-20 md:py-32 overflow-hidden">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Built for real-world applications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Use OpenKnot AI to build trustworthy AI experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)]">
          {useCases.map((useCase, index) => (
            <BentoCard key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
