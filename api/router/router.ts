import * as express from "express";
import expensesRouter from "./transactionsRouters/expensesRouter";
import transactionsRouter from "./transactionsRouters/transactionsRouter";
import savingsRouter from "./transactionsRouters/savingsRouter";
import incomesRouter from "./transactionsRouters/incomesRouter";
import accountsRouter from "./accountsRouters/accountRouter";

const router = express.Router();

router.use("/transactions", transactionsRouter);
router.use("/expenses", expensesRouter);
router.use("/savings", savingsRouter);
router.use("/incomes", incomesRouter);
router.use("/accounts", accountsRouter);

export default router;
