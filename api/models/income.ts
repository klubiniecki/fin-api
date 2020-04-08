import * as mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now },
  amount: Number,
  category: String,
  regular: { type: Boolean, default: false },
});
const Income = mongoose.model("Income", IncomeSchema);

export default Income;
