import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import CustomerWallet from "@/models/CustomerWallet";
import Transaction from "@/models/Transaction";
import LoyaltyCard from "@/models/LoyaltyCard";
import { authMiddleware } from "@/lib/auth/middleware";

export async function POST(req: Request) {
  try {
    const user = await authMiddleware(req, "BUSINESS");
    if (user instanceof NextResponse) return user;

    await dbConnect();

    // The QR code scanned from the customer's phone
    const { customerId, cardId } = await req.json();

    if (!customerId || !cardId) {
      return NextResponse.json(
        { error: "Invalid QR payload" },
        { status: 400 }
      );
    }

    // Verify the card belongs to this business
    const card = await LoyaltyCard.findOne({ _id: cardId, businessId: user.userId });
    if (!card) {
      return NextResponse.json(
        { error: "Invalid card or card does not belong to your business" },
        { status: 404 }
      );
    }

    // Find or create customer wallet entry
    let wallet = await CustomerWallet.findOne({
      customerId,
      loyaltyCardId: cardId,
    });

    if (!wallet) {
      wallet = await CustomerWallet.create({
        customerId,
        businessId: user.userId,
        loyaltyCardId: cardId,
        currentStamps: 1,
        redeemable: 1 >= card.totalStampsRequired,
      });
    } else {
      wallet.currentStamps += 1;
      
      if (wallet.currentStamps >= card.totalStampsRequired) {
        wallet.redeemable = true;
      }
      
      await wallet.save();
    }

    // Record the transaction
    await Transaction.create({
      customerId,
      businessId: user.userId,
      type: "STAMP_ADDED",
      amount: 1,
    });

    return NextResponse.json(
      { message: "Stamp added successfully", currentStamps: wallet.currentStamps, redeemable: wallet.redeemable },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Scan error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
