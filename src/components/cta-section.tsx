import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Check, QrCode, Gift, Coffee } from "lucide-react"

export function CtaSection() {
  return (
    <section id="cta" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 p-8 md:p-12 lg:p-16">
          {/* Gradient mesh background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          
          {/* Animated glow orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[80px]"></div>
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - CTA content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 text-background/80 text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Join 500+ growing businesses
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance tracking-tight leading-[1.1]">
                Stop losing repeat customers.
              </h2>
              <p className="text-lg sm:text-xl text-background/70 max-w-lg mx-auto lg:mx-0 mb-10 text-pretty">
                Start your digital loyalty program today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/register">
                  <Button 
                    size="lg" 
                    className="gap-2 h-14 px-10 text-base font-semibold bg-background text-foreground hover:bg-background/90 shadow-2xl shadow-background/20 hover:shadow-background/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Start for Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-background/50 text-sm mt-8">
                Free forever plan available. No credit card required.
              </p>
            </div>
            
            {/* Right side - Product demo preview */}
            <div className="relative">
              {/* Main demo card */}
              <div className="bg-background rounded-2xl shadow-2xl shadow-black/20 p-6 border border-background/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Bean & Brew Cafe</p>
                      <p className="text-xs text-muted-foreground">Loyalty Card</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    8/10 stamps
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Progress</span>
                    <span className="text-primary font-medium">80%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"></div>
                  </div>
                </div>
                
                {/* Stamp grid */}
                <div className="grid grid-cols-5 gap-2 mb-5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center transition-all ${
                        i < 8
                          ? "bg-primary/15 border-2 border-primary/30"
                          : "bg-muted border-2 border-dashed border-muted-foreground/30"
                      }`}
                    >
                      {i < 8 && <Check className="w-4 h-4 text-primary" strokeWidth={3} />}
                    </div>
                  ))}
                </div>
                
                {/* Reward unlock */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">Reward: Free Coffee</p>
                    <p className="text-xs text-muted-foreground">2 more stamps to unlock</p>
                  </div>
                </div>
                
                {/* Recent activity */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Recent Activity</p>
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50">
                    <div className="w-7 h-7 rounded-md bg-green-500/15 flex items-center justify-center">
                      <QrCode className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">QR Scan Success</p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-500/10 px-2 py-1 rounded-md">+1 stamp</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50">
                    <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">Stamp collected</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">+1 stamp</span>
                  </div>
                </div>
              </div>
              
              {/* Floating notification card */}
              <div className="absolute -top-4 -right-4 bg-background rounded-xl shadow-xl shadow-black/15 p-3 border border-border animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">+1 Stamp Added!</p>
                    <p className="text-[10px] text-muted-foreground">Keep it up!</p>
                  </div>
                </div>
              </div>
              
              {/* Floating QR card */}
              <div className="absolute -bottom-3 -left-3 bg-background rounded-xl shadow-xl shadow-black/15 p-3 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <QrCode className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Scan to Collect</p>
                    <p className="text-[10px] text-muted-foreground">Quick & easy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
