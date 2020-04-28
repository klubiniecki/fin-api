import AggregationService from "../../services/aggregationService";
import Expense from "../../models/expense";
import Income from "../../models/income";
import Saving from "../../models/saving";
import getTotalAmount from "../../utils/getTotalAmount";

const TransactionsController = () => {
  const getPipeline = (query) =>
    AggregationService().getPipelineFromQuery(query);

  const getTransactions = async ({ query }, res) => {
    try {
      const aggregation = getPipeline(query);
      const expenses = await Expense.aggregate(aggregation);
      const incomes = await Income.aggregate(aggregation);
      const savings = await Saving.aggregate(aggregation);
      const transactions = [...expenses, ...incomes, ...savings].sort(
        (a, b) => b.date - a.date
      );
      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalTransactions = async ({ query }, res) => {
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
      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  return { getTransactions, getTotalTransactions };
};

export default TransactionsController;
