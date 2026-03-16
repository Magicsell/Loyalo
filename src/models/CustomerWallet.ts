import mongoose, { Schema, Document } from "mongoose";

export interface ICustomerWallet extends Document {
  customerId: mongoose.Types.ObjectId;
  businessId: mongoose.Types.ObjectId;
  loyaltyCardId: mongoose.Types.ObjectId;
  currentStamps: number;
  redeemable: boolean;
  updatedAt: Date;
}

const CustomerWalletSchema: Schema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    businessId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    loyaltyCardId: {
      type: Schema.Types.ObjectId,
      ref: "LoyaltyCard",
      required: true,
    },
    currentStamps: {
      type: Number,
      required: true,
      default: 0,
    },
    redeemable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Prevent duplicate wallet entries for the same customer and card
CustomerWalletSchema.index({ customerId: 1, loyaltyCardId: 1 }, { unique: true });

export default mongoose.models.CustomerWallet ||
  mongoose.model<ICustomerWallet>("CustomerWallet", CustomerWalletSchema);
