import { Document } from "mongoose";

export type Category =
  | "clothes"
  | "groceries"
  | "restaurant"
  | "car"
  | "home"
  | "";

export interface QueryInterface {
  name: string;
  date?: string | {};
  amount: number | {};
  goal: string;
  category: Category;
  regular: boolean;
}

export interface ExpenseInterface extends QueryInterface, Document {}
