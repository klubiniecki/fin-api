import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now },
  amount: Number,
  category: String,
  regular: { type: Boolean, default: false }
});
const expense = mongoose.model("Expense", ExpenseSchema);

export default expense;
