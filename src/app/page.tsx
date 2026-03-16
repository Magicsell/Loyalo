import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, QrCode, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-slate-900">Loyalo</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Sign In
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm h-9 px-4">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Say goodbye to paper stamp cards
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6 leading-tight">
            Digital Loyalty Programs for <span className="text-blue-600">Local Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
            Create custom reward cards in minutes. Customers scan their QR code to collect stamps. No apps to download, no paper to lose.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-medium shadow-lg shadow-blue-200">
                Start for free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-medium bg-white">
                Login to Dashboard
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
              <p className="text-slate-600 text-lg">A simple, paperless experience for you and your customers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Store className="w-8 h-8 text-blue-600" />}
                title="1. Create your program"
                description="Set up your business profile and design your custom loyalty cards in our dashboard."
              />
              <FeatureCard 
                icon={<Smartphone className="w-8 h-8 text-blue-600" />}
                title="2. Customers get a QR"
                description="Customers sign up in seconds and get a personal QR code in their digital wallet."
              />
              <FeatureCard 
                icon={<QrCode className="w-8 h-8 text-blue-600" />}
                title="3. Scan & Reward"
                description="Scan their QR code with your phone to add stamps. Once full, they redeem their reward!"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
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
        <section className="bg-slate-900 py-20 text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to grow your regular customers?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join hundreds of cafes, barbershops, and salons already using Loyalo.</p>
          <Link href="/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/20">
              Create your Business Account
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Store className="w-5 h-5" />
          <span className="font-bold text-lg text-white">Loyalo</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Loyalo Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}
