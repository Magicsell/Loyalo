"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, LogOut, Ticket, Loader2, Store, Gift } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

interface WalletItem {
  _id: string;
  currentStamps: number;
  redeemable: boolean;
  loyaltyCardId: {
    _id: string;
    name: string;
    totalStampsRequired: number;
    rewardDescription: string;
  };
  businessId: {
    _id: string;
    name: string;
    category: string;
  };
}

export default function CustomerWalletPage() {
  const { user, loading, logout } = useAuth();
  const [walletItems, setWalletItems] = useState<WalletItem[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (user && user.role === "CUSTOMER") {
      fetchWallet();
    }
  }, [user]);

  const fetchWallet = async () => {
    try {
      const token = localStorage.getItem("loyalo_token");
      const res = await fetch("/api/customer/wallet", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setWalletItems(data.wallet);
      }
    } catch (error) {
      console.error("Failed to fetch wallet", error);
    } finally {
      setFetching(false);
    }
  };

  if (loading || fetching) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  if (!user || user.role !== "CUSTOMER") {
    return <div className="p-8 text-center text-red-500">Access Restricted to Customers.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="text-blue-600 w-6 h-6" />
            <h1 className="font-bold text-xl tracking-tight text-slate-800">My Wallet</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={logout} className="text-slate-500">
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-md">
          <p className="text-blue-100 mb-1 text-sm font-medium">Welcome back,</p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">{user.name}</h2>
          <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            <Ticket className="w-4 h-4" />
            {walletItems.length} Active Cards
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 px-1">Your Loyalty Cards</h3>
          
          {walletItems.length === 0 ? (
            <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl border-dashed">
               <Store className="w-12 h-12 text-slate-300 mx-auto mb-3" />
               <p className="text-slate-500 text-sm max-w-[250px] mx-auto">You don't have any active loyalty cards yet. Visit a partner store to start collecting stamps!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {walletItems.map((item) => {
                const percentage = Math.min((item.currentStamps / item.loyaltyCardId.totalStampsRequired) * 100, 100);
                
                return (
                  <Link href={`/wallet/${item.loyaltyCardId._id}`} key={item._id} className="block group">
                    <Card className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-all hover:border-blue-200 overflow-hidden">
                      <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <Store className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium text-slate-600">{item.businessId.name}</span>
                         </div>
                         {item.redeemable && (
                           <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                              <Gift className="w-3 h-3" /> Reward Ready
                           </span>
                         )}
                      </div>
                      <CardHeader className="pb-2 pt-4">
                        <CardTitle className="text-lg flex justify-between items-center group-hover:text-blue-600 transition-colors">
                          {item.loyaltyCardId.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                         <div className="flex justify-between text-sm mb-2 font-medium">
                            <span className="text-slate-600">Stamps</span>
                            <span className="text-blue-600 font-bold">{item.currentStamps} / {item.loyaltyCardId.totalStampsRequired}</span>
                         </div>
                         <Progress value={percentage} className="h-2.5 bg-slate-100" />
                         
                         <div className="mt-4 bg-amber-50 rounded-lg p-3 border border-amber-100 flex items-start gap-2">
                            <Gift className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                            <p className="text-xs text-amber-900 font-medium leading-tight">Reward: {item.loyaltyCardId.rewardDescription}</p>
                         </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
