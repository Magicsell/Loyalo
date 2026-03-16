"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, QrCode, LogOut, Ticket, Loader2 } from "lucide-react";
import Link from "next/link";

interface LoyaltyCardType {
  _id: string;
  name: string;
  totalStampsRequired: number;
  rewardDescription: string;
}

export default function BusinessDashboard() {
  const { user, loading, logout } = useAuth();
  const [cards, setCards] = useState<LoyaltyCardType[]>([]);
  const [fetchingCards, setFetchingCards] = useState(true);
  
  // Create Card State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newCardName, setNewCardName] = useState("");
  const [stampsRequired, setStampsRequired] = useState(10);
  const [rewardDesc, setRewardDesc] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (user && user.role === "BUSINESS") {
      fetchCards();
    }
  }, [user]);

  const fetchCards = async () => {
    try {
      const token = localStorage.getItem("loyalo_token");
      const res = await fetch("/api/business/cards", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setCards(data.cards);
      }
    } catch (error) {
      console.error("Failed to fetch cards", error);
    } finally {
      setFetchingCards(false);
    }
  };

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const token = localStorage.getItem("loyalo_token");
      const res = await fetch("/api/business/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: newCardName,
          totalStampsRequired: stampsRequired,
          rewardDescription: rewardDesc
        })
      });

      if (res.ok) {
        setIsCreateOpen(false);
        setNewCardName("");
        setStampsRequired(10);
        setRewardDesc("");
        fetchCards(); // Refresh lists
      }
    } catch (error) {
      console.error("Card creation error", error);
    } finally {
      setCreating(false);
    }
  };

  if (loading || fetchingCards) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  if (!user || user.role !== "BUSINESS") {
    return <div className="p-8 text-center text-red-500">Access Restricted to Businesses.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StoreIcon className="text-blue-600 w-6 h-6" />
            <h1 className="font-bold text-xl tracking-tight text-slate-800">Loyalo Business</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={logout} className="text-slate-500">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
            <p className="text-slate-500">Manage your loyalty campaigns and scan customers.</p>
          </div>
          <Link href="/business/scan">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto shadow-sm">
              <QrCode className="w-5 h-5 mr-2" />
              Scan Customer Code
            </Button>
          </Link>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Your Loyalty Cards</h3>
            
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white">
                  <Plus className="w-4 h-4 mr-2" /> Create Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleCreateCard}>
                  <DialogHeader>
                    <DialogTitle>Create Loyalty Card</DialogTitle>
                    <DialogDescription>
                      Design a new loyalty program for your customers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Card Name</Label>
                      <Input id="cardName" placeholder="e.g. Free Coffee Rewards" value={newCardName} onChange={e => setNewCardName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stamps">Stamps required for reward</Label>
                      <Input id="stamps" type="number" min={1} max={50} value={stampsRequired} onChange={e => setStampsRequired(Number(e.target.value))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reward">Reward Description</Label>
                      <Input id="reward" placeholder="e.g. 1 Free Artisan Coffee" value={rewardDesc} onChange={e => setRewardDesc(e.target.value)} required />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                    <Button type="submit" className="bg-blue-600" disabled={creating}>
                      {creating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                      Save Card
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

          </div>

          {cards.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-xl border-dashed">
              <Ticket className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-1">No loyalty cards yet</h3>
              <p className="text-slate-500 max-w-sm mx-auto mb-4">You haven't created any loyalty programs. Create one to start rewarding your customers.</p>
              <Button onClick={() => setIsCreateOpen(true)} className="bg-blue-600">Create your first card</Button>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <Card key={card._id} className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{card.name}</CardTitle>
                    <CardDescription>Require {card.totalStampsRequired} stamps</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded-lg font-medium border border-blue-100 flex items-start gap-2">
                       <Ticket className="w-4 h-4 mt-0.5 shrink-0 text-blue-600" />
                       Reward: {card.rewardDescription}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function StoreIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
