import mongoose, { Schema, Document } from "mongoose";

export interface IBusinessProfile extends Document {
  businessId: mongoose.Types.ObjectId;
  name: string;
  category: string;
  logoUrl?: string;
  description?: string;
  createdAt: Date;
}

const BusinessProfileSchema: Schema = new Schema(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.BusinessProfile ||
  mongoose.model<IBusinessProfile>("BusinessProfile", BusinessProfileSchema);
