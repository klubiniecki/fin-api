import * as express from "express";
import ExpensesController from "../controllers/expenses";
import IncomesController from "../controllers/incomes";
import SavingsController from "../controllers/savings";
import AccountsController from "../controllers/accounts";

const router = express.Router();

// Expenses
const {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
} = ExpensesController();

router.get("/expenses", getExpenses);
router.get("/expenses/:id", getExpense);
router.post("/expenses", addExpense);
router.patch("/expenses/:id", updateExpense);
router.delete("/expenses/:id", deleteExpense);

// Incomes
const {
  getIncome,
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
} = IncomesController();

router.get("/incomes", getIncomes);
router.get("/incomes/:id", getIncome);
router.post("/incomes", addIncome);
router.patch("/incomes/:id", updateIncome);
router.delete("/incomes/:id", deleteIncome);

// Savings
const {
  getSaving,
  getSavings,
  addSaving,
  updateSaving,
  deleteSaving,
} = SavingsController();

router.get("/savings", getSavings);
router.get("/savings/:id", getSaving);
router.post("/savings", addSaving);
router.patch("/savings/:id", updateSaving);
router.delete("/savings/:id", deleteSaving);

// Accounts
const {
  getAccount,
  getAccounts,
  addAccount,
  updateAccount,
  deleteAccount,
} = AccountsController();

router.get("/accounts", getAccount);
router.get("/accounts/:id", getAccounts);
router.post("/accounts", addAccount);
router.patch("/accounts/:id", updateAccount);
router.delete("/accounts/:id", deleteAccount);

export default router;
