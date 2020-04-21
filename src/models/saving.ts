import * as mongoose from "mongoose";
import TransactionSchema from "./transactionSchema";
import { SAVING_CATEGORIES } from "../utils/constants";

const SavingSchema = TransactionSchema(
  {
    type: { type: String, default: "saving" },
  },
  SAVING_CATEGORIES
);

const Saving = mongoose.model("Saving", SavingSchema);

export default Saving;
