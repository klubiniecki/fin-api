import {
  TransactionCategory,
  ExpenseCategory,
  IncomeCategory,
  SavingCategory,
} from "../types";

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  "Groceries",
  "Home",
  "Fun",
  "Baby",
  "Car",
  "Health",
  "Cosmetics",
  "Travel",
  "Other",
];

export const INCOME_CATEGORIES: IncomeCategory[] = ["Salary", "Sales", "Other"];

export const SAVING_CATEGORIES: SavingCategory[] = ["Savings", "Gaia"];

export const TRANSACTION_CATEGORIES: TransactionCategory[] = [
  ...EXPENSE_CATEGORIES,
  ...INCOME_CATEGORIES,
  ...SAVING_CATEGORIES,
];
