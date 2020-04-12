import * as express from "express";
import TransactionsController from "../../controllers/transactions/transactions";

const transactionsRouter = express.Router();

const { getTransactions, getTotalTransactions } = TransactionsController();

transactionsRouter.get("/total", getTotalTransactions);
transactionsRouter.get("/", getTransactions);

export default transactionsRouter;
