import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/db/connect";
import User from "@/models/User";
import BusinessProfile from "@/models/BusinessProfile";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { email, password, name, role, businessName, businessCategory } =
      await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      passwordHash,
      name,
      role: role === "BUSINESS" ? "BUSINESS" : "CUSTOMER",
    });

    if (user.role === "BUSINESS") {
      if (!businessName || !businessCategory) {
        return NextResponse.json(
          { error: "Business name and category are required for businesses" },
          { status: 400 }
        );
      }

      await BusinessProfile.create({
        businessId: user._id,
        name: businessName,
        category: businessCategory,
      });
    }

    return NextResponse.json(
      { message: "Registration successful", userId: user._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
