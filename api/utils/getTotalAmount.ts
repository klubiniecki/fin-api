import { Transaction } from "../types";

const getTotalAmount = (transactions: Transaction[]): Number =>
  transactions.map((t) => t.amount).reduce((a, b) => a + b);

export default getTotalAmount;
