"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  MessageSquare,
  FileSearch,
  ShoppingCart,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Bot,
  Database
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
      "80% reduction in first-response time",
      "Consistent tone and brand voice",
      "Seamless human handoff when needed",
      "Complete conversation audit trails",
    ],
    size: "featured" as const,
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
    ],
    size: "medium" as const,
  },
  {
    id: "commerce",
    icon: ShoppingCart,
    label: "E-commerce",
    title: "Shopping Assistants",
    description:
      "Create personalized shopping experiences with agents that understand preferences while respecting privacy.",
    outcomes: [
      "Personalized recommendations",
      "Privacy-preserving personalization",
    ],
    size: "medium" as const,
  },
  {
    id: "internal",
    icon: MessageSquare,
    label: "Internal Tools",
    title: "Enterprise Assistants",
    description:
      "Build internal AI tools that help teams work faster while maintaining strict data access controls.",
    outcomes: [
      "Role-based access controls",
      "Compliance with data policies",
    ],
    size: "small" as const,
  },
  {
    id: "automation",
    icon: Bot,
    label: "Automation",
    title: "Workflow Agents",
    description:
      "Automate complex multi-step workflows with agents that can coordinate across systems.",
    outcomes: [
      "End-to-end process automation",
      "Error handling and recovery",
    ],
    size: "small" as const,
  },
  {
    id: "data",
    icon: Database,
    label: "Data Processing",
    title: "Data Agents",
    description:
      "Process and analyze large datasets with agents that maintain data governance policies.",
    outcomes: [
      "Scalable data processing",
      "Built-in data governance",
    ],
    size: "small" as const,
  },
]

function BentoCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false)

  const sizeClasses = {
    featured: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 cursor-pointer ${sizeClasses[useCase.size]}`}
    >
      {/* Content */}
      <div className={`relative flex flex-col h-full ${useCase.size === "featured" ? "p-8 lg:p-10" : useCase.size === "medium" ? "p-6 lg:p-8" : "p-5 lg:p-6"}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-muted border border-border group-hover:bg-foreground/5 transition-all duration-300 ${useCase.size === "small" ? "p-2.5" : ""}`}>
            <useCase.icon className={`text-foreground ${useCase.size === "small" ? "h-5 w-5" : "h-6 w-6"}`} />
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {useCase.label}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className={`font-bold text-foreground mb-2 ${useCase.size === "featured" ? "text-2xl lg:text-3xl" : useCase.size === "medium" ? "text-xl" : "text-lg"}`}>
          {useCase.title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed ${useCase.size === "featured" ? "text-base mb-8" : "text-sm mb-4"}`}>
          {useCase.description}
        </p>

        {/* Outcomes */}
        <div className={`flex-1 space-y-2 ${useCase.size === "small" ? "hidden group-hover:block" : ""}`}>
          {useCase.outcomes.slice(0, useCase.size === "featured" ? 4 : 2).map((outcome, outcomeIndex) => (
            <motion.div
              key={outcomeIndex}
              initial={{ opacity: 0.7, x: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 4 : 0 }}
              transition={{ delay: outcomeIndex * 0.05 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/50 group-hover:text-foreground transition-colors" />
              <span className="text-sm text-foreground/80">{outcome}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer action */}
        <div className="mt-auto pt-4">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            <span>Learn more</span>
            <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32 relative overflow-hidden">
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
            Built for real-world applications
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Use OpenKnot AI to build trustworthy AI experiences across any industry.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {useCases.map((useCase, index) => (
            <BentoCard key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
