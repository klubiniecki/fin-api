export interface Transaction {
  name: string;
  date: Date;
  amount: number;
  category: TransactionCategory;
}

export type TransactionCategory =
  | IncomeCategory
  | ExpenseCategory
  | SavingCategory;

export type IncomeCategory = "Salary" | "Sales" | "Other";

export type SavingCategory = "Savings" | "Gaia";

export type ExpenseCategory =
  | "Groceries"
  | "Home"
  | "Fun"
  | "Baby"
  | "Car"
  | "Health"
  | "Cosmetics"
  | "Travel"
  | "Other";
