import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  customerId: mongoose.Types.ObjectId;
  businessId: mongoose.Types.ObjectId;
  type: "STAMP_ADDED" | "REWARD_REDEEMED";
  amount: number;
  createdAt: Date;
}

const TransactionSchema: Schema = new Schema(
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
    type: {
      type: String,
      enum: ["STAMP_ADDED", "REWARD_REDEEMED"],
      required: true,
    },
    amount: {
      type: Number, // Number of stamps added or rewards claimed
      default: 1,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", TransactionSchema);
