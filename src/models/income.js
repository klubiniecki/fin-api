import mongoose from "mongoose";
import TransactionSchema from "./transactionSchema.js";
import { INCOME_CATEGORIES } from "../utils/constants";

const Income = mongoose.model("Income", TransactionSchema(INCOME_CATEGORIES));

export default Income;
