import Expense from "../../models/expense";
import AggregationService from "../../services/aggregationService";
import getTotalAmount from "../../utils/getTotalAmount";

const ExpensesController = () => {
  const getPipeline = (query: string) =>
    AggregationService().getPipelineFromQuery(query);

  const getExpenses = async ({ query }, res: any) => {
    try {
      const expenses = await Expense.aggregate(getPipeline(query));
      if (expenses.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(expenses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalExpenses = async ({ query }, res: any) => {
    try {
      const expenses = await Expense.aggregate(getPipeline(query));
      if (expenses.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }

      const totalExpenses = getTotalAmount(expenses);

      res.json({ totalExpenses });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getExpense = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Expense.findById(id);
      if (!item) {
        res.status(404).json({ message: `No expense found for id: ${id}!` });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addExpense = async ({ body }, res: any) => {
    try {
      const newItem = new Expense(body);
      const item = await Expense.create(newItem);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateExpense = async ({ params, body }, res: any) => {
    try {
      const { id } = params;
      const item = await Expense.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const deleteExpense = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Expense.findByIdAndDelete(id);
      res.status(200).json({ message: `Expense ${item._id} deleted.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  return {
    getExpense,
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
    getTotalExpenses,
  };
};

export default ExpensesController;
