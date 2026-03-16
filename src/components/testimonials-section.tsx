import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "James Wilson",
    role: "Barbershop Owner",
    business: "Classic Cuts",
    content: "Loyalo transformed how we reward our regulars. Setup took 10 minutes and we saw a 35% increase in repeat visits within the first month.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Cafe Manager",
    business: "Bean & Brew",
    content: "Our customers love the simplicity. They just scan and go. The analytics help us understand peak times and plan staffing better.",
    rating: 5,
  },
  {
    name: "Marco Rossi",
    role: "Restaurant Owner",
    business: "Rossi's Kitchen",
    content: "We replaced our old paper punch cards and never looked back. The digital system is cleaner, faster, and our customers actually use it.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Loved by local businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what business owners are saying about their experience with Loyalo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className="relative border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <CardContent className="p-6 lg:p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-sm font-semibold text-accent-foreground">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <p className="text-primary text-xs font-medium">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
