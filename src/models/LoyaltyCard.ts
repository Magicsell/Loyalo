import mongoose, { Schema, Document } from "mongoose";

export interface ILoyaltyCard extends Document {
  businessId: mongoose.Types.ObjectId;
  name: string;
  totalStampsRequired: number;
  rewardDescription: string;
  isActive: boolean;
  createdAt: Date;
}

const LoyaltyCardSchema: Schema = new Schema(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Assuming Business is a User with role='BUSINESS'
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    totalStampsRequired: {
      type: Number,
      required: true,
      default: 10,
    },
    rewardDescription: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.LoyaltyCard ||
  mongoose.model<ILoyaltyCard>("LoyaltyCard", LoyaltyCardSchema);
