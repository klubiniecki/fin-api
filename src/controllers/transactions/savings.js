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

  const getSavings = ({ query }, res) => getItems(query, res, Saving);
  const getSaving = ({ params }, res) => getItem(params.id, res, Saving);
  const addSaving = ({ body }, res) => addItem(body, res, Saving);
  const updateSaving = (req, res) => updateItem(req, res, Saving);
  const deleteSaving = ({ params }, res) => deleteItem(params.id, res, Saving);

  const getTotalSavings = ({ query }, res) =>
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
