import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { SocialProof } from "@/components/landing/social-proof"
import { ValueProps } from "@/components/landing/value-props"
import { HowItWorks } from "@/components/landing/how-it-works"
// import { VSCodeExtensionCTA } from "@/components/landing/vscode-extension-cta"
import { OurProducts } from "@/components/landing/our-products"
import { UseCases } from "@/components/landing/use-cases"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
// import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        <HowItWorks />
        {/* <VSCodeExtensionCTA /> */}
        <OurProducts />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
