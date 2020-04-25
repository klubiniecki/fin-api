export const EXPENSE_CATEGORIES = [
  "Groceries",
  "Rent",
  "Utilities",
  "Gaia",
  "Car",
  "Travel",
  "Fun",
  "Restaurant",
  "Wellness",
  "Medical",
  "Household",
  "Clothes",
  "Subscriptions",
  "Other",
];

export const INCOME_CATEGORIES = ["Salary", "Sales", "Other"];

export const SAVING_CATEGORIES = [
  "Regular",
  "Gaia",
  "Yearly",
  "Travel",
  "Other",
];

export const TRANSACTION_CATEGORIES = [
  ...EXPENSE_CATEGORIES,
  ...INCOME_CATEGORIES,
  ...SAVING_CATEGORIES,
];
