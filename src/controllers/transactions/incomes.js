import Income from "../../models/income";
import RequestService from "../../services/requestService";

const IncomesController = () => {
  const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getTotalAmount,
    getTotalAmountByCategory,
  } = RequestService();

  const getIncomes = ({ query }, res) => getItems(query, res, Income);
  const getIncome = ({ params }, res) => getItem(params.id, res, Income);
  const addIncome = ({ body }, res) => addItem(body, res, Income);
  const updateIncome = (req, res) => updateItem(req, res, Income);
  const deleteIncome = ({ params }, res) => deleteItem(params.id, res, Income);

  const getTotalIncomes = ({ query }, res) =>
    getTotalAmount(query, res, Income);

  const getTotalIncomesByCategory = ({ query }, res) =>
    getTotalAmountByCategory(query, res, Income);

  return {
    getTotalIncomes,
    getTotalIncomesByCategory,
    getIncome,
    getIncomes,
    addIncome,
    updateIncome,
    deleteIncome,
  };
};

export default IncomesController;
