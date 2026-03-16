import { NextResponse } from "next/server";
import { authMiddleware } from "@/lib/auth/middleware";
import User from "@/models/User";
import BusinessProfile from "@/models/BusinessProfile";
import dbConnect from "@/lib/db/connect";

export async function GET(req: Request) {
  try {
    const user = await authMiddleware(req);
    if (user instanceof NextResponse) return user;

    await dbConnect();

    const userData = await User.findById(user.userId).select("-passwordHash");
    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let profile = null;
    if (userData.role === "BUSINESS") {
      profile = await BusinessProfile.findOne({ businessId: userData._id });
    }

    return NextResponse.json({ user: userData, profile }, { status: 200 });
  } catch (error: any) {
    console.error("Fetch me error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
