import AggregationService from "../../services/aggregationService";
import Expense from "../../models/expense";
import Income from "../../models/income";
import Saving from "../../models/saving";
import { Transaction } from "../../types";
import getTotalAmount from "../../utils/getTotalAmount";

const TransactionsController = () => {
  const getPipeline = (query: string) =>
    AggregationService().getPipelineFromQuery(query);

  const getTransactions = async ({ query }, res: any) => {
    try {
      const aggregation = getPipeline(query);
      const expenses = await Expense.aggregate(aggregation);
      const incomes = await Income.aggregate(aggregation);
      const savings = await Saving.aggregate(aggregation);
      const transactions: Transaction[] = [
        ...expenses,
        ...incomes,
        ...savings,
      ].sort((a, b) => b.date - a.date);

      if (transactions.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalTransactions = async ({ query }, res: any) => {
    try {
      const aggregation = getPipeline(query);
      const expenses = await Expense.aggregate(aggregation);
      const incomes = await Income.aggregate(aggregation);
      const savings = await Saving.aggregate(aggregation);

      const transactions = {
        totalExpenses: getTotalAmount(expenses),
        totalIncomes: getTotalAmount(incomes),
        totalSavings: getTotalAmount(savings),
      };

      if (Object.keys(transactions).length === 0) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }

      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  return { getTransactions, getTotalTransactions };
};

export default TransactionsController;
