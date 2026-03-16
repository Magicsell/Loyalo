import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, LogIn } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium gradient glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-accent/20 via-accent/5 to-transparent rounded-full blur-[80px]"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px] opacity-[0.03]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div className="space-y-10">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-muted-foreground">500+ businesses already growing</span>
            </div>
            
            {/* Headline with improved hierarchy */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-foreground leading-[1.08] tracking-tight">
                Turn First-Time Customers into{" "}
                <span className="text-primary relative">
                  Regulars
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Create digital loyalty cards in minutes. No apps, no paper cards — just scan and reward.
              </p>
            </div>
            
            {/* CTA buttons with premium styling */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button 
                  size="lg" 
                  className="group relative gap-2.5 h-13 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Start for Free
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/business/dashboard">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2.5 h-13 px-8 text-base font-medium bg-background/50 backdrop-blur-sm border-border/80 hover:bg-muted/60 hover:border-border transition-all duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  Login to Dashboard
                </Button>
              </Link>
            </div>
            
            {/* Social proof with improved visual balance */}
            <div className="flex items-center gap-5 pt-4">
              <div className="flex -space-x-3">
                {["JW", "SC", "MR", "AK", "TL"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-muted to-muted/70 border-2 border-background flex items-center justify-center text-xs font-semibold text-muted-foreground shadow-sm ring-1 ring-border/20"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm space-y-0.5">
                <p className="font-semibold text-foreground">Trusted by 500+ businesses</p>
                <p className="text-muted-foreground">Barbershops, cafes, salons & more</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard mockup */}
          <div className="relative lg:ml-4">
            {/* Glow behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-2xl opacity-60"></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
