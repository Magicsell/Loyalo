import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, QrCode, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-green-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="w-6 h-6 text-green-600" />
            <span className="font-bold text-xl tracking-tight text-slate-900">Loyalo</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors">
              Sign In
            </Link>
            <Link href="/register">
              <Button className="bg-green-600 hover:bg-green-700 text-sm h-9 px-4 text-white">Start Free</Button>
            </Link>
            <Link href="/business/dashboard" className="hidden sm:inline-flex">
              <Button variant="outline" className="text-sm h-9 px-4 border-green-200 text-green-700 hover:bg-green-50">Login to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[30rem] bg-green-100/50 rounded-full blur-3xl -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
            Say goodbye to paper stamp cards
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6 leading-tight">
            Digital Loyalty Programs for <span className="text-green-600">Local Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
            Create custom reward cards in minutes. Customers scan their QR code to collect stamps. No apps to download, no paper to lose.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 h-14 px-8 text-lg font-medium shadow-lg shadow-green-200 text-white">
                Start Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/business/dashboard" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-medium bg-white border-green-200 text-green-700 hover:bg-green-50">
                Login to Dashboard
              </Button>
            </Link>
          </div>

          {/* Dashboard Mockup */}
          <div className="w-full max-w-5xl mx-auto rounded-xl border border-green-200 bg-white shadow-2xl overflow-hidden shadow-green-900/10">
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white rounded-md px-32 py-1 flex items-center text-xs text-slate-400 border border-slate-200 shadow-sm">
                <Store className="w-3 h-3 mr-2" /> loyalo.app/dashboard
              </div>
            </div>
            <div className="p-8 bg-slate-50 flex gap-8 text-left">
               {/* Sidebar mock */}
               <div className="w-48 hidden md:flex flex-col gap-2">
                  <div className="h-10 rounded-lg bg-green-100 text-green-700 flex items-center px-4 text-sm font-medium gap-2"><Store className="w-4 h-4"/> Overview</div>
                  <div className="h-10 rounded-lg bg-white text-slate-600 flex items-center px-4 text-sm font-medium gap-2 border border-slate-200 shadow-sm"><QrCode className="w-4 h-4"/> Scan Code</div>
                  <div className="h-10 rounded-lg bg-transparent text-slate-500 hover:bg-slate-200 flex items-center px-4 text-sm font-medium gap-2 mt-4">Settings</div>
               </div>
               {/* Content mock */}
               <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-center">
                     <div>
                       <div className="h-6 w-48 bg-slate-800 rounded mb-2"></div>
                       <div className="h-4 w-64 bg-slate-400 rounded"></div>
                     </div>
                     <div className="h-10 w-32 bg-green-600 rounded-lg shadow-sm"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="h-28 bg-white border border-green-100 rounded-xl shadow-sm p-4 border-l-4 border-l-green-500">
                        <div className="h-4 w-16 bg-green-100 rounded mb-3"></div>
                        <div className="h-8 w-12 bg-slate-800 rounded"></div>
                     </div>
                     <div className="h-28 bg-white border border-slate-200 rounded-xl shadow-sm p-4">
                        <div className="h-4 w-16 bg-slate-100 rounded mb-3"></div>
                        <div className="h-8 w-12 bg-slate-800 rounded"></div>
                     </div>
                     <div className="h-28 bg-white border border-slate-200 rounded-xl shadow-sm p-4">
                        <div className="h-4 w-16 bg-slate-100 rounded mb-3"></div>
                        <div className="h-8 w-12 bg-slate-800 rounded"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-24 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
              <p className="text-slate-600 text-lg">A simple, paperless experience for you and your customers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Store className="w-8 h-8 text-green-600" />}
                title="1. Create your program"
                description="Set up your business profile and design your custom loyalty cards in our dashboard."
              />
              <FeatureCard 
                icon={<Smartphone className="w-8 h-8 text-green-600" />}
                title="2. Customers get a QR"
                description="Customers sign up in seconds and get a personal QR code in their digital wallet."
              />
              <FeatureCard 
                icon={<QrCode className="w-8 h-8 text-green-600" />}
                title="3. Scan & Reward"
                description="Scan their QR code with your phone to add stamps. Once full, they redeem their reward!"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-green-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why businesses love Loyalo</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <BenefitItem text="Increase customer retention by up to 40%" />
              <BenefitItem text="No app download required for customers" />
              <BenefitItem text="Track real analytics and check-in history" />
              <BenefitItem text="Prevent fraud (no fake rubber stamps)" />
              <BenefitItem text="Works on any smartphone or tablet" />
              <BenefitItem text="Setup takes less than 5 minutes" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-900 py-24 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to grow your regular customers?</h2>
             <p className="text-green-200 text-lg md:text-xl mb-10 max-w-xl mx-auto">Join hundreds of cafes, barbershops, and salons already using Loyalo.</p>
             <Link href="/register">
               <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 h-14 px-8 text-lg font-bold shadow-xl">
                 Create your Business Account
               </Button>
             </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-800 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Store className="w-5 h-5 text-green-500" />
          <span className="font-bold text-lg text-white">Loyalo</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Loyalo Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
      <span className="text-slate-800 font-medium">{text}</span>
    </div>
  );
}
