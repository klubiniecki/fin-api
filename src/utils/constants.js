export const EXPENSE_CATEGORIES = [
  "Groceries",
  "Rent",
  "Utilities",
  "Baby",
  "Car",
  "Travel",
  "Fun",
  "Restaurant",
  "Wellness",
  "Medical",
  "Household",
  "Clothes",
  "Subscriptions",
  "Other expense",
];

export const INCOME_CATEGORIES = ["Salary", "Sales", "Other income"];

export const SAVING_CATEGORIES = [
  "Regular",
  "Gaia",
  "Yearly",
  "Vacations",
  "Other saving",
];

export const TRANSACTION_CATEGORIES = [
  ...EXPENSE_CATEGORIES,
  ...INCOME_CATEGORIES,
  ...SAVING_CATEGORIES,
];
