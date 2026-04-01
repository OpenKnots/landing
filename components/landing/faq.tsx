"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What makes OpenKnot AI different from other agent frameworks?",
    answer:
      "OpenKnot AI is built with boundaries as a first-class concept. While other frameworks focus on capability, we focus on controllability. Every agent you build has clear, enforceable limits on what it can do, making it suitable for enterprise and regulated environments where trust and auditability are essential.",
  },
  {
    question: "Do I need to be an AI expert to use OpenKnot AI?",
    answer:
      "Not at all. OpenKnot AI is designed to be accessible to developers of all skill levels. If you can write configuration files and work with APIs, you can build sophisticated AI agents. Our declarative approach means you describe what you want, not how to implement it at the model level.",
  },
  {
    question: "How does OpenKnot AI handle data privacy and security?",
    answer:
      "Security is built into the core architecture. You define exactly what data your agents can access through our boundary system. All interactions are logged with full audit trails, and we support deployment in your own infrastructure for complete data sovereignty. We're also working toward SOC 2 and GDPR compliance.",
  },
  {
    question: "Can I integrate OpenKnot AI with my existing tools and systems?",
    answer:
      "Yes. OpenKnot AI is designed to integrate seamlessly with your existing stack. We provide SDKs for Python and TypeScript, REST APIs, and pre-built connectors for popular services. Our tool binding system makes it easy to expose your internal APIs to agents in a controlled way.",
  },
  {
    question: "What LLM providers are supported?",
    answer:
      "OpenKnot AI is model-agnostic and supports all major LLM providers including OpenAI, Anthropic, Google, and open-source models. You can switch providers without changing your agent logic, and even use different models for different specialists within the same workflow.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "We offer multiple tiers of support. Our community Discord is active and helpful for general questions. Pro plans include priority support with guaranteed response times. Enterprise customers get dedicated support engineers and custom SLAs. We also provide comprehensive documentation and tutorials.",
  },
]

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-card border transition-all duration-300 ${
          isOpen 
            ? "border-foreground/20" 
            : "border-border hover:border-foreground/10"
        }`}
      >
        {/* Question button */}
        <button
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 p-6 text-left"
        >
          <span className="text-base font-medium text-foreground pr-4">
            {faq.question}
          </span>
          <div 
            className={`shrink-0 p-2 rounded-lg transition-all duration-300 ${
              isOpen 
                ? "bg-foreground/10 text-foreground" 
                : "bg-muted text-muted-foreground group-hover:bg-foreground/5 group-hover:text-foreground"
            }`}
          >
            {isOpen ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </div>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0">
                <div className="h-px w-full bg-border mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/50" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Everything you need to know about getting started with OpenKnot AI.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a 
              href="https://github.com/openknots/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              Join our community
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
