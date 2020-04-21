import mongoose from "mongoose";

const TransactionSchema = (extensions, categories) => {
  const schema = new mongoose.Schema({
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

  if (extensions) {
    schema.add(extensions);
  }

  return schema;
};

export default TransactionSchema;
