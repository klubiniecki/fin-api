import Expense from "../../models/expense";
import AggregationService from "../../services/aggregationService";
import getTotalAmount from "../../utils/getTotalAmount";
import RequestService from "../../services/requestService";

const ExpensesController = () => {
  const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getTotalAmount,
  } = RequestService();

  const getExpenses = ({ query }: any, res: any) =>
    getItems(query, res, Expense);
  const getExpense = ({ params }, res: any) => getItem(params.id, res, Expense);
  const addExpense = ({ body }, res: any) => addItem(body, res, Expense);
  const updateExpense = (req: any, res: any) => updateItem(req, res, Expense);
  const deleteExpense = ({ params }, res: any) =>
    deleteItem(params.id, res, Expense);

  const getTotalExpenses = ({ query }, res: any) =>
    getTotalAmount(query, res, Expense);

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
