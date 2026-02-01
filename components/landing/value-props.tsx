"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Puzzle, FileCheck, Activity } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Puzzle,
    title: "Composable by Design",
    description:
      "Build agents from reusable, well-defined components. Mix specialists, tools, and memory systems like building blocks. No monolithic architectures, just clean composition.",
    highlights: ["Modular architecture", "Reusable components", "Clean abstractions"],
  },
  {
    icon: FileCheck,
    title: "Governable & Auditable",
    description:
      "Every decision your agent makes is traceable. Define policies, enforce boundaries, and maintain complete audit trails for compliance and debugging.",
    highlights: ["Full audit trails", "Policy enforcement", "Compliance ready"],
  },
  {
    icon: Activity,
    title: "Predictable in Production",
    description:
      "Ship with confidence knowing exactly how your agents will behave. Clear boundaries prevent unexpected actions, and comprehensive monitoring keeps you informed.",
    highlights: ["Behavior guarantees", "Clear boundaries", "Real-time monitoring"],
  },
]

export function ValueProps() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Why teams choose{" "}
            <span className="bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              OpenKnot AI
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Build AI systems that your team can understand, your stakeholders can trust, 
            and your users can rely on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
