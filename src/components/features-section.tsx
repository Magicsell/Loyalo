import { Card, CardContent } from "@/components/ui/card"
import { Stamp, QrCode, BarChart3, LayoutDashboard, Bell, Users } from "lucide-react"

const features = [
  {
    icon: Stamp,
    title: "Digital Stamp Cards",
    description: "Replace paper stamp cards with digital rewards.",
  },
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description: "Customers scan a QR code to collect stamps.",
  },
  {
    icon: BarChart3,
    title: "Customer Analytics",
    description: "Track visits, rewards and customer retention.",
  },
  {
    icon: LayoutDashboard,
    title: "Simple Dashboard",
    description: "Manage loyalty cards easily.",
  },
  {
    icon: Bell,
    title: "Reward Notifications",
    description: "Customers get notified when rewards unlock.",
  },
  {
    icon: Users,
    title: "Team Access",
    description: "Allow staff members to scan customers.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Everything you need to grow loyalty
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Powerful tools designed specifically for local businesses.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden border-border/60 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="relative p-6 lg:p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
