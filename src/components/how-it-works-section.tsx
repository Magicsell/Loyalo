import { Card, CardContent } from "@/components/ui/card"
import { Palette, QrCode, Gift, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Palette,
    step: "01",
    title: "Create Your Loyalty Card",
    description: "Set rewards and visit goals in seconds.",
  },
  {
    icon: QrCode,
    step: "02",
    title: "Customers Scan Your QR",
    description: "Each visit adds a digital stamp instantly.",
  },
  {
    icon: Gift,
    step: "03",
    title: "Reward Loyal Customers",
    description: "Rewards unlock automatically when the card is completed.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Launch in minutes, not days
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            Three simple steps to start building customer loyalty
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:flex absolute top-24 left-1/3 right-1/3 items-center justify-between px-8 pointer-events-none">
            <ArrowRight className="w-5 h-5 text-border" />
            <ArrowRight className="w-5 h-5 text-border" />
          </div>
          
          {steps.map((step) => (
            <Card 
              key={step.step} 
              className="relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/60 bg-card rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Step {step.step}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
