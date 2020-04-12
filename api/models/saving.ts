import * as mongoose from "mongoose";
import TransactionSchema from "./transactionSchema";
import { SAVING_CATEGORIES } from "../utils/constants";

const SavingSchema = TransactionSchema(
  {
    name: { type: String, default: "Saving" },
  },
  SAVING_CATEGORIES
);

const Saving = mongoose.model("Saving", SavingSchema);

export default Saving;
