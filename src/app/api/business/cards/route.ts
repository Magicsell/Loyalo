import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import LoyaltyCard from "@/models/LoyaltyCard";
import { authMiddleware } from "@/lib/auth/middleware";

export async function POST(req: Request) {
  try {
    const user = await authMiddleware(req, "BUSINESS");
    if (user instanceof NextResponse) return user; // Return error response if auth failed

    await dbConnect();

    const { name, totalStampsRequired, rewardDescription } = await req.json();

    if (!name || !totalStampsRequired || !rewardDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newCard = await LoyaltyCard.create({
      businessId: user.userId,
      name,
      totalStampsRequired,
      rewardDescription,
    });

    return NextResponse.json({ card: newCard }, { status: 201 });
  } catch (error: any) {
    console.error("Create card error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const user = await authMiddleware(req, "BUSINESS");
    if (user instanceof NextResponse) return user;

    await dbConnect();

    const cards = await LoyaltyCard.find({ businessId: user.userId });

    return NextResponse.json({ cards }, { status: 200 });
  } catch (error: any) {
    console.error("Get cards error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
