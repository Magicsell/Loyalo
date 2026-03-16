import { NextResponse } from "next/server";
import { verifyJwt, JwtPayload } from "@/lib/auth/jwt";

export async function getUserFromHeader(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyJwt(token);

  return decoded;
}

export async function authMiddleware(request: Request, requiredRole?: "CUSTOMER" | "BUSINESS"): Promise<JwtPayload | NextResponse> {
  const user = await getUserFromHeader(request);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (requiredRole && user.role !== requiredRole) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return user;
}
