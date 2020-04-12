import Saving from "../../models/saving";
import RequestService from "../../services/requestService";

const SavingsController = () => {
  const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getTotalAmount,
  } = RequestService();

  const getSavings = ({ query }: any, res: any) => getItems(query, res, Saving);
  const getSaving = ({ params }, res: any) => getItem(params.id, res, Saving);
  const addSaving = ({ body }, res: any) => addItem(body, res, Saving);
  const updateSaving = (req: any, res: any) => updateItem(req, res, Saving);
  const deleteSaving = ({ params }, res: any) =>
    deleteItem(params.id, res, Saving);

  const getTotalSavings = ({ query }, res: any) =>
    getTotalAmount(query, res, Saving);

  return {
    getSaving,
    getSavings,
    addSaving,
    updateSaving,
    deleteSaving,
    getTotalSavings,
  };
};

export default SavingsController;
