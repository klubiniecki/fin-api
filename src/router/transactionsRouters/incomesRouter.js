import * as express from "express";
import IncomesController from "../../controllers/transactions/incomes";

const incomesRouter = express.Router();

const {
  getIncome,
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
  getTotalIncomes,
  getTotalIncomesByCategory,
} = IncomesController();

incomesRouter.get("/total", getTotalIncomes);
incomesRouter.get("/totalByCategory", getTotalIncomesByCategory);

incomesRouter.get("/", getIncomes);
incomesRouter.get("/:id", getIncome);
incomesRouter.post("/", addIncome);
incomesRouter.patch("/:id", updateIncome);
incomesRouter.delete("/:id", deleteIncome);

export default incomesRouter;
