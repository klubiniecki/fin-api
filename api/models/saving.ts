import * as mongoose from "mongoose";

const SavingSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now },
  amount: Number,
  goal: String
});
const saving = mongoose.model("Saving", SavingSchema);

export default saving;
