import * as mongoose from "mongoose";

const TransactionSchema = (
  extensions: { [key: string]: any },
  categories: string[]
) => {
  const schema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    amount: { type: Number, min: 1 },
    category: {
      type: String,
      enum: categories,
      required: true,
    },
  });

  if (extensions) {
    schema.add(extensions);
  }

  return schema;
};

export default TransactionSchema;
