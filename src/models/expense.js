import mongoose from "mongoose";
import TransactionSchema from "./transactionSchema.js";
import { EXPENSE_CATEGORIES } from "../utils/constants";

const Expense = mongoose.model(
  "Expense",
  TransactionSchema(EXPENSE_CATEGORIES)
);

export default Expense;
