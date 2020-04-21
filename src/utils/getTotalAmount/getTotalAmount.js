const getTotalAmount = (transactions) =>
  transactions.map((t) => t.amount).reduce((a, b) => a + b);

export default getTotalAmount;
