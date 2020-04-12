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
  } = RequestService();

  const getIncomes = ({ query }: any, res: any) => getItems(query, res, Income);
  const getIncome = ({ params }, res: any) => getItem(params.id, res, Income);
  const addIncome = ({ body }, res: any) => addItem(body, res, Income);
  const updateIncome = (req: any, res: any) => updateItem(req, res, Income);
  const deleteIncome = ({ params }, res: any) =>
    deleteItem(params.id, res, Income);

  const getTotalIncomes = ({ query }, res: any) =>
    getTotalAmount(query, res, Income);

  return {
    getTotalIncomes,
    getIncome,
    getIncomes,
    addIncome,
    updateIncome,
    deleteIncome,
  };
};

export default IncomesController;
