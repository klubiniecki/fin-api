import * as mongoose from "mongoose";
import TransactionSchema from "./transactionSchema";
import { EXPENSE_CATEGORIES } from "../utils/constants";

const ExpenseSchema = TransactionSchema(
  {
    type: { type: String, default: "expense" },
  },
  EXPENSE_CATEGORIES
);

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;
