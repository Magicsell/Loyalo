import { NextResponse } from "next/server";
import { authMiddleware } from "@/lib/auth/middleware";
import QRCode from 'qrcode';

export async function GET(req: Request) {
  try {
    const user = await authMiddleware(req, "CUSTOMER");
    if (user instanceof NextResponse) return user;

    const { searchParams } = new URL(req.url);
    const cardId = searchParams.get('cardId');

    if (!cardId) {
       return NextResponse.json({ error: "Card ID required" }, { status: 400 });
    }

    // Create a payload that the business will scan
    const payload = JSON.stringify({
      customerId: user.userId,
      cardId: cardId,
      timestamp: Date.now() // Optional: add simple expiry validation later
    });

    const qrDataUrl = await QRCode.toDataURL(payload, {
        width: 300,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#ffffff'
        }
    });

    return NextResponse.json({ qrCode: qrDataUrl }, { status: 200 });
  } catch (error: any) {
    console.error("QR gen error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
