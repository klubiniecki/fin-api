import * as mongoose from "mongoose";
import TransactionSchema from "./transactionSchema";
import { INCOME_CATEGORIES } from "../utils/constants";

const IncomeSchema = TransactionSchema(
  {
    type: { type: String, default: "Income" },
    regular: { type: Boolean, default: false },
  },
  INCOME_CATEGORIES
);

const Income = mongoose.model("Income", IncomeSchema);

export default Income;
