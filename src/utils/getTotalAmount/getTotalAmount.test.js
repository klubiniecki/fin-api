import getTotalAmount from "./getTotalAmount";

describe("getTotalAmount", () => {
  test("returns correct total amount", () => {
    const transactions = [
      { name: "one", amount: 10 },
      { name: "two", amount: 20 },
    ];
    expect(getTotalAmount(transactions)).toEqual(30);
  });
});
