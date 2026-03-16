import { Card } from "@/components/ui/card"
import { QrCode, Check, Coffee, Gift, TrendingUp, Users, Zap } from "lucide-react"

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background glow effects */}
      <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-[40px] blur-3xl opacity-60" />
      <div className="absolute -inset-8 bg-gradient-to-b from-primary/10 to-transparent rounded-[32px] blur-2xl opacity-50" />
      
      {/* Main dashboard card */}
      <Card className="relative p-5 sm:p-6 shadow-2xl shadow-foreground/5 border-border/50 bg-card backdrop-blur-sm rounded-2xl">
        {/* Window controls and header */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-card-foreground">Loyalo Dashboard</p>
              <p className="text-xs text-muted-foreground">Bean & Brew Cafe</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
        </div>
        
        {/* Loyalty Card Preview - The Hero Element */}
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-5 text-primary-foreground shadow-lg shadow-primary/25 overflow-hidden">
            {/* Card pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-medium opacity-70 uppercase tracking-wider mb-0.5">Loyalty Card</p>
                  <p className="font-semibold text-lg">Bean & Brew Cafe</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center backdrop-blur-sm">
                  <Coffee className="w-5 h-5" />
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mb-3">
                <div className="h-2.5 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-primary-foreground rounded-full transition-all duration-500" />
                </div>
              </div>
              
              {/* Stamps visual */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 aspect-square max-w-7 rounded-lg flex items-center justify-center transition-all ${
                      i < 8 
                        ? "bg-primary-foreground/25 shadow-inner" 
                        : "bg-primary-foreground/10 border border-dashed border-primary-foreground/30"
                    }`}
                  >
                    {i < 8 && (
                      <Check className="w-3 h-3 text-primary-foreground" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold">8/10 stamps</p>
                  <p className="text-xs opacity-70">2 more for your reward</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-70">Reward</p>
                  <p className="text-sm font-semibold">Free Coffee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* QR Scan Success Notification */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-primary/5 rounded-xl blur-sm" />
          <div className="relative bg-gradient-to-r from-accent/60 to-accent/30 rounded-xl p-4 border border-primary/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-card-foreground">QR Scan Successful</p>
                <p className="text-xs text-muted-foreground">+1 stamp added for Sarah M.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  Just now
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-muted/50 rounded-xl p-3 text-center border border-border/50 hover:border-border transition-colors">
            <div className="flex items-center justify-center mb-1">
              <Users className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-card-foreground">247</p>
            <p className="text-xs text-muted-foreground">Customers</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-3 text-center border border-border/50 hover:border-border transition-colors">
            <div className="flex items-center justify-center mb-1">
              <QrCode className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-card-foreground">89</p>
            <p className="text-xs text-muted-foreground">Scans Today</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-3 text-center border border-border/50 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-center mb-1">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-primary">72%</p>
            <p className="text-xs text-muted-foreground">Return Rate</p>
          </div>
        </div>
      </Card>
      
      {/* Floating QR card - positioned for visual balance */}
      <div className="absolute -right-2 top-6 sm:-right-6 sm:top-10 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
          <Card className="relative p-3 sm:p-4 shadow-2xl shadow-foreground/10 border-border/50 bg-card backdrop-blur-sm rounded-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-foreground rounded-lg flex items-center justify-center">
              <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-background" />
            </div>
            <p className="text-xs text-center mt-2 font-medium text-muted-foreground">Scan me</p>
          </Card>
        </div>
      </div>
      
      {/* Floating reward notification */}
      <div className="absolute -left-2 bottom-16 sm:-left-6 sm:bottom-24 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/15 rounded-xl blur-lg" />
          <Card className="relative p-3 shadow-2xl shadow-foreground/10 border-border/50 bg-card backdrop-blur-sm rounded-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Gift className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-card-foreground">Reward Unlocked!</p>
                <p className="text-xs text-muted-foreground">Free coffee earned</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Subtle stamp added indicator */}
      <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 z-10">
        <div className="inline-flex items-center gap-1.5 bg-card/95 backdrop-blur-sm border border-primary/20 text-primary text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          +1 stamp added
        </div>
      </div>
    </div>
  )
}
