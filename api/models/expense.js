const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
  amount: Number,
  category: String,
  regular: { type: Boolean, default: false }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
