import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import CustomerWallet from "@/models/CustomerWallet";
import LoyaltyCard from "@/models/LoyaltyCard";
import BusinessProfile from "@/models/BusinessProfile";
import { authMiddleware } from "@/lib/auth/middleware";

export async function GET(req: Request) {
  try {
    const user = await authMiddleware(req, "CUSTOMER");
    if (user instanceof NextResponse) return user;

    await dbConnect();

    // Fetch the caller's wallet items and populate card + business details
    const walletItems = await CustomerWallet.find({ customerId: user.userId })
      .populate({
        path: "loyaltyCardId",
        select: "name totalStampsRequired rewardDescription",
      })
      .populate({
        path: "businessId",
        select: "name category logoUrl",
        model: BusinessProfile,
      });

    return NextResponse.json({ wallet: walletItems }, { status: 200 });
  } catch (error: any) {
    console.error("Wallet fetch error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
