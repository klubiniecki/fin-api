import { Document } from "mongoose";

type Category = "clothes" | "groceries" | "restaurant" | "";

export interface QueryInterface {
  name?: string;
  date?: string | {};
  amount?: number | {};
  category?: Category;
  regular?: boolean;
}

export interface ExpenseInterface extends QueryInterface, Document {}
