"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2, QrCode } from "lucide-react";
import Image from "next/image";

export default function LoyaltyCardQRView() {
  const { user, loading } = useAuth();
  const params = useParams();
  const router = useRouter();
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (user && user.role === "CUSTOMER" && params.cardId) {
      fetchQR();
    }
  }, [user, params.cardId]);

  const fetchQR = async () => {
    try {
      const token = localStorage.getItem("loyalo_token");
      const res = await fetch(`/api/customer/qr?cardId=${params.cardId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setQrCodeData(data.qrCode);
      } else {
        console.error("Failed to fetch QR");
      }
    } catch (error) {
      console.error("Error fetching QR", error);
    } finally {
      setFetching(false);
    }
  };

  if (loading || fetching) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  if (!user || user.role !== "CUSTOMER") {
    return <div className="p-8 text-center text-red-500">Access Restricted.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-4">
      <div className="w-full max-w-sm absolute top-0 left-0 right-0 p-4">
         <Button variant="ghost" size="icon" onClick={() => router.push("/wallet")} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-6 h-6" />
         </Button>
      </div>

      <div className="w-full max-w-sm text-center">
         <div className="mb-8">
            <QrCode className="w-12 h-12 mx-auto text-blue-400 mb-4" />
            <h1 className="text-2xl font-bold tracking-tight">Scan to get a Stamp</h1>
            <p className="text-slate-400 text-sm mt-2">Show this QR code to the cashier.</p>
         </div>

         <Card className="bg-white border-0 shadow-2xl overflow-hidden p-2 pt-6 pb-6">
            <CardContent className="flex flex-col items-center justify-center p-0 space-y-4">
               {qrCodeData ? (
                 <div className="relative w-64 h-64 border-4 border-slate-100 rounded-xl overflow-hidden shadow-inner">
                   <Image 
                     src={qrCodeData} 
                     alt="Loyalty QR Code" 
                     fill
                     className="object-contain p-2"
                   />
                 </div>
               ) : (
                 <div className="w-64 h-64 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                    <p className="text-slate-400 text-sm">Failed to load QR code</p>
                 </div>
               )}
            </CardContent>
         </Card>
         
         <p className="text-xs font-mono text-slate-500 mt-8 opacity-60">ID: {user.id}</p>
      </div>
    </div>
  );
}
