import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Basic loyalty card features.",
    features: [
      "1 loyalty card",
      "Up to 50 customers",
      "QR code scanning",
      "Basic stamp tracking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "£19",
    period: "/month",
    description: "Everything you need to grow.",
    features: [
      "Unlimited customers",
      "Analytics",
      "Team access",
      "Custom branding",
      "Push notifications",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Growth",
    price: "£39",
    period: "/month",
    description: "For expanding businesses.",
    features: [
      "Advanced analytics",
      "Multi-location support",
      "Priority support",
      "API access",
      "Unlimited team members",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Simple pricing for every business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Start free, upgrade as you grow. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative flex flex-col border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary bg-card ring-1 ring-primary shadow-2xl shadow-primary/10 md:-mt-4 md:mb-4' 
                  : 'border-border/60 bg-card hover:border-border hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className={`pb-6 ${plan.popular ? 'pt-10' : 'pt-8'}`}>
                <p className="font-semibold text-foreground text-lg">{plan.name}</p>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-base">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1 pt-0">
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-primary/15' : 'bg-muted'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/register" className="w-full">
                  <Button 
                    className={`w-full h-12 text-sm font-medium transition-all duration-200 ${
                      plan.popular 
                        ? 'shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5' 
                        : 'hover:bg-primary hover:text-primary-foreground'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-12">
          14-day free trial on paid plans. No credit card required.
        </p>
      </div>
    </section>
  )
}
