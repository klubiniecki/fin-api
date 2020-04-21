import mongoose from "mongoose";
import TransactionSchema from "./transactionSchema.js";
import { EXPENSE_CATEGORIES } from "../utils/constants";

const ExpenseSchema = TransactionSchema(
  {
    type: { type: String, default: "expense" },
  },
  EXPENSE_CATEGORIES
);

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;
