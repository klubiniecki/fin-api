import * as mongoose from "mongoose";

const SavingSchema = new mongoose.Schema({
  category: String,
  date: { type: Date, default: Date.now },
  amount: Number,
});
const Saving = mongoose.model("Saving", SavingSchema);

export default Saving;
