import mongoose from "mongoose";
import TransactionSchema from "./transactionSchema.js";
import { SAVING_CATEGORIES } from "../utils/constants";

const Saving = mongoose.model("Saving", TransactionSchema(SAVING_CATEGORIES));

export default Saving;
