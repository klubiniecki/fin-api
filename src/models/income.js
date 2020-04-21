import mongoose from "mongoose";
import TransactionSchema from "./transactionSchema.js";
import { INCOME_CATEGORIES } from "../utils/constants";

const IncomeSchema = TransactionSchema(
  {
    type: { type: String, default: "income" },
  },
  INCOME_CATEGORIES
);

const Income = mongoose.model("Income", IncomeSchema);

export default Income;
