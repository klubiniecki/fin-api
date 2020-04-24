import Expense from "../../models/expense";
import RequestService from "../../services/requestService";

const ExpensesController = () => {
  const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getTotalAmount,
    getTotalAmountByCategory,
  } = RequestService();

  const getExpenses = ({ query }, res) => getItems(query, res, Expense);
  const getExpense = ({ params }, res) => getItem(params.id, res, Expense);
  const addExpense = ({ body }, res) => addItem(body, res, Expense);
  const updateExpense = (req, res) => updateItem(req, res, Expense);
  const deleteExpense = ({ params }, res) =>
    deleteItem(params.id, res, Expense);

  const getTotalExpenses = ({ query }, res) =>
    getTotalAmount(query, res, Expense);

  const getTotalExpensesByCategory = ({ query }, res) =>
    getTotalAmountByCategory(query, res, Expense);

  return {
    getExpense,
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
    getTotalExpenses,
    getTotalExpensesByCategory,
  };
};

export default ExpensesController;
