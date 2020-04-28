import mongoose from "mongoose";

const TransactionSchema = (categories) =>
  new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    amount: { type: Number, min: 1 },
    category: {
      type: String,
      enum: categories,
      required: true,
    },
    regular: { type: Boolean, default: false },
  });

export default TransactionSchema;
