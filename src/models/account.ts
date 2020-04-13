import * as mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  currency: String,
});

const Account = mongoose.model("Account", AccountSchema);

export default Account;
