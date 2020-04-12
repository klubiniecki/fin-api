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
} = ExpensesController();

expensesRouter.get("/total", getTotalExpenses);
expensesRouter.get("/", getExpenses);
expensesRouter.get("/:id", getExpense);
expensesRouter.post("/", addExpense);
expensesRouter.patch("/:id", updateExpense);
expensesRouter.delete("/:id", deleteExpense);

export default expensesRouter;
