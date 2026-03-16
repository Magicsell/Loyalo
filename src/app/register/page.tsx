"use client";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Loader2, Store, UserRound } from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState<"CUSTOMER" | "BUSINESS">("CUSTOMER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Need to auto-login after register, or prompt to login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const payload = {
        name,
        email,
        password,
        role,
        ...(role === "BUSINESS" && { businessName, businessCategory })
      };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // After successful registration, automatically log them in
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const loginData = await loginRes.json();
      if (loginRes.ok) {
        login(loginData.token, loginData.user);
      } else {
        window.location.href = "/login"; // fallback redirect
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4 py-8">
      <Card className="w-full max-w-lg shadow-lg border-0 bg-white">
        <CardHeader className="space-y-1 text-center pb-6">
          <CardTitle className="text-3xl font-bold tracking-tight text-blue-600">Join Loyalo</CardTitle>
          <CardDescription className="text-base text-slate-500">
            Create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="CUSTOMER" className="w-full mb-6" onValueChange={(val) => setRole(val as "CUSTOMER" | "BUSINESS")}>
            <TabsList className="grid w-full grid-cols-2 mb-4 h-12 bg-slate-100 p-1">
              <TabsTrigger value="CUSTOMER" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all font-medium py-2">
                <UserRound className="w-4 h-4 mr-2" />
                Customer
              </TabsTrigger>
              <TabsTrigger value="BUSINESS" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all font-medium py-2">
                <Store className="w-4 h-4 mr-2" />
                Business
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              {role === "BUSINESS" && (
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg space-y-4 mt-4">
                  <h3 className="font-semibold text-sm text-slate-700">Business Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      placeholder="e.g. Joe's Coffee"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required={role === "BUSINESS"}
                      className="h-11 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessCategory">Category</Label>
                    <Input
                      id="businessCategory"
                      placeholder="e.g. Cafe, Barbershop, Retail"
                      value={businessCategory}
                      onChange={(e) => setBusinessCategory(e.target.value)}
                      required={role === "BUSINESS"}
                      className="h-11 bg-white"
                    />
                  </div>
                </div>
              )}

              {error && <p className="text-sm text-red-500 font-medium px-1">{error}</p>}

              <Button className="w-full h-11 text-md bg-blue-600 hover:bg-blue-700 mt-6" type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create account"}
              </Button>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center">
          <div className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
