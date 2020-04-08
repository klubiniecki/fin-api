import * as mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  name: String,
  localAmount: Number,
  amount: Number,
});
const Account = mongoose.model("Account", AccountSchema);

export default Account;
