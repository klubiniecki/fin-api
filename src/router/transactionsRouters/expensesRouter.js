import * as express from "express";
import ExpensesController from "../../controllers/transactions/expenses";

const expensesRouter = express.Router();

const {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  getTotalExpenses,
  getTotalExpensesByCategory,
} = ExpensesController();

expensesRouter.get("/total", getTotalExpenses);
expensesRouter.get("/totalByCategory", getTotalExpensesByCategory);

expensesRouter.get("/", getExpenses);
expensesRouter.get("/:id", getExpense);
expensesRouter.post("/", addExpense);
expensesRouter.patch("/:id", updateExpense);
expensesRouter.delete("/:id", deleteExpense);

export default expensesRouter;
