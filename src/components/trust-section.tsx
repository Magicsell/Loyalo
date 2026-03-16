import { Scissors, Coffee, UtensilsCrossed, Sparkles, Dumbbell } from "lucide-react"

const businesses = [
  { icon: Scissors, name: "Barbers" },
  { icon: Coffee, name: "Cafes" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Sparkles, name: "Salons" },
  { icon: Dumbbell, name: "Gyms" },
]

export function TrustSection() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Headline */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
            Social Proof
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Trusted by 500+ Local Businesses
          </h2>
        </div>
        
        {/* Category badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {businesses.map((business) => (
            <div 
              key={business.name} 
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <business.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{business.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
