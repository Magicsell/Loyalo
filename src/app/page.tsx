import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, QrCode, Smartphone, ArrowRight, CheckCircle2, Star, Gift, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <Store className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Loyalo</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#features" className="hover:text-green-600 transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-green-600 transition-colors">How It Works</Link>
            <Link href="#pricing" className="hover:text-green-600 transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-green-600 transition-colors">FAQ</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              Login
            </Link>
            <Link href="/register">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-5 h-9 font-medium shadow-sm transition-transform active:scale-95">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Side: Content */}
              <div className="max-w-xl relative z-10">
                <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-800 mb-6 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
                  The #1 modern loyalty platform
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                  Turn first-time buyers into <span className="text-green-600">regulars</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Ditch the paper punch cards. Loyalo gives your business a powerful, digital rewards program that keeps customers coming back.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-green-600/20 active:scale-95 transition-all">
                      Start Free <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/business/dashboard" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition-all shadow-sm">
                      Login to Dashboard
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex justify-center items-center text-[10px] overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt=""/></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-100 flex justify-center items-center text-[10px] overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt=""/></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex justify-center items-center text-[10px] overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt=""/></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex justify-center items-center text-[10px] overflow-hidden"><img src="https://i.pravatar.cc/100?img=4" alt=""/></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span>Trusted by 1,000+ local businesses</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Mockup Complex */}
              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none mt-10 lg:mt-0 lg:ml-10">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                
                {/* Main Dashboard Mockup */}
                <div className="relative rounded-2xl border border-slate-200/80 bg-white shadow-2xl overflow-hidden z-10 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 shadow-slate-200">
                  {/* Browser Chrome */}
                  <div className="flex items-center border-b border-slate-100 bg-slate-50/80 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto flex h-6 w-1/2 max-w-[200px] items-center justify-center rounded-md bg-white text-[10px] text-slate-400 border border-slate-100 shadow-sm font-medium font-mono">
                      <Store className="w-3 h-3 mr-1.5 text-slate-300" /> loyalo.app/dashboard
                    </div>
                  </div>

                  <div className="flex h-[380px] sm:h-[420px]">
                    {/* Sidebar */}
                    <div className="w-14 sm:w-48 border-r border-slate-100 bg-slate-50 p-2 sm:p-4 flex flex-col items-center sm:items-stretch">
                      <div className="mb-6 flex items-center justify-center sm:justify-start gap-2 font-bold text-slate-800 pt-2">
                        <div className="bg-green-600 text-white p-1 rounded-md"><Store className="h-4 w-4" /></div>
                        <span className="hidden sm:inline">Loyalo</span>
                      </div>
                      <div className="space-y-1.5 w-full">
                        <div className="rounded-md bg-green-100 py-2 sm:px-3 flex justify-center sm:justify-start items-center gap-2 text-xs font-semibold text-green-700">
                           <LayoutDashboardIcon className="w-4 h-4" /> <span className="hidden sm:inline">Dashboard</span>
                        </div>
                        <div className="rounded-md py-2 sm:px-3 flex justify-center sm:justify-start items-center gap-2 text-xs font-medium text-slate-500 hover:bg-slate-100">
                           <Users className="w-4 h-4" /> <span className="hidden sm:inline">Customers</span>
                        </div>
                        <div className="rounded-md py-2 sm:px-3 flex justify-center sm:justify-start items-center gap-2 text-xs font-medium text-slate-500 hover:bg-slate-100">
                           <Gift className="w-4 h-4" /> <span className="hidden sm:inline">Rewards</span>
                        </div>
                        <div className="rounded-md py-2 sm:px-3 flex justify-center sm:justify-start items-center gap-2 text-xs font-medium text-slate-500 hover:bg-slate-100">
                           <QrCode className="w-4 h-4" /> <span className="hidden sm:inline">Scan QR</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="flex-1 p-4 sm:p-6 bg-white overflow-hidden">
                      <div className="mb-6">
                        <div className="h-5 w-32 rounded-md bg-slate-800 mb-2"></div>
                        <div className="h-3 w-48 rounded-md bg-slate-400"></div>
                      </div>
                      
                      {/* Dashboard Cards Area */}
                      <div className="grid gap-4 grid-cols-2 mb-6">
                        <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                          <div className="mb-2 text-xs font-medium text-slate-500">Total Check-ins</div>
                          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">2,845</div>
                          <div className="text-[10px] text-green-600 font-bold bg-green-50 w-fit px-1.5 py-0.5 rounded flex items-center gap-1">
                             <TrendingUpIcon className="w-3 h-3" /> 12.5%
                          </div>
                        </div>
                        <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                          <div className="mb-2 text-xs font-medium text-slate-500">Rewards Claimed</div>
                          <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">428</div>
                          <div className="text-[10px] text-green-600 font-bold bg-green-50 w-fit px-1.5 py-0.5 rounded flex items-center gap-1">
                             <TrendingUpIcon className="w-3 h-3" /> 5.2%
                          </div>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="rounded-xl border border-slate-100 bg-white shadow-sm h-32 w-full p-4 flex flex-col justify-end relative">
                         <div className="absolute top-4 left-4 h-3 w-24 rounded bg-slate-200"></div>
                         <div className="flex items-end gap-2 h-16 w-full justify-between px-2">
                           {[20, 35, 25, 50, 45, 75, 60].map((val, i) => (
                             <div key={i} className="w-full bg-green-500 hover:bg-green-600 transition-colors rounded-t-sm" style={{ height: `${val}%` }}></div>
                           ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements (Absolute Positioned around the Mockup) */}
                
                {/* 1. Floating QR Card (Left) */}
                <div className="absolute left-[-20px] sm:-left-12 top-24 z-20 animate-[float_6s_ease-in-out_infinite]">
                  <div className="rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-4 shadow-xl shadow-slate-200/50 w-40 sm:w-48 transform -rotate-2">
                     <div className="text-center mb-3">
                       <div className="text-xs font-bold text-slate-800">Joe's Coffee</div>
                       <div className="text-[10px] text-slate-500 font-medium">Scan to receive stamp</div>
                     </div>
                     <div className="aspect-square w-full rounded-xl bg-white p-2 border border-slate-100 flex items-center justify-center shadow-inner">
                        <QrCode className="h-full w-full p-2 text-slate-800" strokeWidth={1.5} />
                     </div>
                     <div className="mt-4 flex justify-between items-center px-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Stamps</span>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">8/10</span>
                     </div>
                  </div>
                </div>

                {/* 2. Reward Unlocked Badge (Top Right) */}
                <div className="absolute -right-4 sm:-right-8 top-12 z-20 animate-[float_5s_ease-in-out_infinite_reverse]">
                  <div className="flex items-center gap-3 rounded-full border border-green-200 bg-white py-2 pl-2 pr-4 shadow-lg shadow-green-900/5 transform rotate-3">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                       <Gift className="h-5 w-5 text-green-600" />
                     </div>
                     <div>
                        <div className="text-xs font-bold text-slate-900">Reward Unlocked!</div>
                        <div className="text-[10px] font-medium text-slate-500">Free Artisan Coffee</div>
                     </div>
                  </div>
                </div>

                {/* 3. Stat Card Below (Bottom Right) */}
                <div className="absolute -bottom-6 right-4 sm:-right-4 z-20 hidden sm:block delay-150 animate-[float_7s_ease-in-out_infinite]">
                   <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/50 flex items-center gap-4 min-w-[200px]">
                      <div className="h-12 w-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                         <CheckCircle2 className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                         <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-0.5">Return Rate</div>
                         <div className="text-xl font-extrabold text-slate-900">42.8%</div>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Features / How it Works Segment */}
        <section id="how-it-works" className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-center mb-16 md:mb-24">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Everything you need to grow</h2>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get setup in minutes and start rewarding your customers today. No hardware needed.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-green-600 relative">
                       <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center border border-white">1</div>
                       <Store className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Create your program</h3>
                    <p className="text-slate-600">Design custom reward cards for your business. Set how many stamps are needed to unlock a reward.</p>
                 </div>
                 
                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-green-600 relative">
                       <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center border border-white">2</div>
                       <Smartphone className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Customers get a QR</h3>
                    <p className="text-slate-600">Customers sign up in seconds without downloading any apps. They keep their QR code in their Apple/Google wallet.</p>
                 </div>

                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-green-600 relative">
                       <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center border border-white">3</div>
                       <QrCode className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Scan & Reward</h3>
                    <p className="text-slate-600">Use any smartphone to scan customer QR codes. Add stamps instantly and redeem rewards in one tap.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="bg-white py-24">
           <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-green-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-green-900/20">
                 {/* Decorative background elements inside CTA */}
                 <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
                 <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
                 
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to boost your revenue?</h2>
                    <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">Join smart local businesses who use Loyalo to increase customer retention and drive repeat sales.</p>
                    <Link href="/register">
                      <Button className="bg-white text-green-900 hover:bg-slate-50 rounded-full h-14 px-10 text-lg font-bold shadow-xl transition-transform active:scale-95">
                        Create Your Free Account
                      </Button>
                    </Link>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Store className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">Loyalo</span>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Loyalo Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
             <Link href="#" className="hover:text-green-600 transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-green-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Small UI Icons used in the Mockup
function LayoutDashboardIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"/>
      <rect width="7" height="5" x="14" y="3" rx="1"/>
      <rect width="7" height="9" x="14" y="12" rx="1"/>
      <rect width="7" height="5" x="3" y="16" rx="1"/>
    </svg>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}
