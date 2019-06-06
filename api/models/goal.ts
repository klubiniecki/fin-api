import * as mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  currentAmount: Number
});
const goal = mongoose.model("Goal", GoalSchema);

export default goal;
