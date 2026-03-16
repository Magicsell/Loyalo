"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BusinessScanPage() {
  const { user, loading } = useAuth();
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMsg, setSuccessMsg] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // We only want to initialize the scanner once on the client side
    let scanner: Html5QrcodeScanner;

    if (user && user.role === "BUSINESS" && !scanResult && typeof window !== 'undefined') {
      scanner = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );

      scanner.render(onScanSuccess, onScanFailure);
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(error => {
          console.error("Failed to clear html5QrcodeScanner. ", error);
        });
      }
    };
  }, [user, scanResult]);

  const onScanSuccess = async (decodedText: string) => {
    setScanResult(decodedText);
    setIsProcessing(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      const payload = JSON.parse(decodedText);
      const token = localStorage.getItem("loyalo_token");

      const res = await fetch("/api/business/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          customerId: payload.customerId,
          cardId: payload.cardId
        })
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg(data);
      } else {
        setErrorMsg(data.error || "Failed to process scan.");
      }
    } catch (error) {
      setErrorMsg("Invalid QR Code payload.");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const onScanFailure = (error: any) => {
    // Handle expected failures silently, scanner scans continuously
  };

  const resetScanner = () => {
    setScanResult(null);
    setSuccessMsg(null);
    setErrorMsg(null);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>;
  }

  if (!user || user.role !== "BUSINESS") {
    return <div className="p-8 text-center text-red-500">Access Restricted to Businesses.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/business/dashboard">
            <Button variant="ghost" size="icon" className="shrink-0">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Button>
          </Link>
          <h1 className="font-bold text-lg text-slate-800">Scan Customer Code</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto p-4 flex flex-col items-center justify-center">
        <Card className="w-full bg-white shadow-lg border-0 overflow-hidden">
          <CardHeader className="text-center pb-2">
            <CardTitle>QR Scanner</CardTitle>
            <CardDescription>Align customer's QR code within the frame to add a stamp.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            {!scanResult ? (
              <div id="qr-reader" className="w-full overflow-hidden rounded-xl border-2 border-slate-200" />
            ) : (
              <div className="text-center py-6">
                {isProcessing ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                    <p className="text-slate-600 font-medium">Processing scan...</p>
                  </div>
                ) : successMsg ? (
                  <div className="flex flex-col items-center animate-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{successMsg.message}</h3>
                    <p className="text-slate-600 mb-4">
                      Current Stamps: <span className="font-bold text-blue-600">{successMsg.currentStamps}</span>
                    </p>
                    
                    {successMsg.redeemable && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg font-bold mb-6 w-full shadow-sm text-sm">
                        🎉 Reward is ready to be redeemed!
                      </div>
                    )}
                    
                    <Button onClick={resetScanner} className="w-full bg-blue-600 h-11">
                      Scan Next Customer
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Scan Failed</h3>
                    <p className="text-red-600 mb-6 font-medium text-sm text-center px-4 bg-red-50 py-3 rounded-md w-full">{errorMsg}</p>
                    <Button onClick={resetScanner} variant="outline" className="w-full h-11 border-slate-300">
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
