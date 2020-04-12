import Account from "../../models/account";
import RequestService from "../../services/requestService";

const AccountsController = () => {
  const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getTotalAmount,
  } = RequestService();

  const getAccounts = ({ query }: any, res: any) =>
    getItems(query, res, Account);
  const getAccount = ({ params }, res: any) => getItem(params.id, res, Account);
  const addAccount = ({ body }, res: any) => addItem(body, res, Account);
  const updateAccount = (req: any, res: any) => updateItem(req, res, Account);
  const deleteAccount = ({ params }, res: any) =>
    deleteItem(params.id, res, Account);

  return { getAccount, getAccounts, addAccount, updateAccount, deleteAccount };
};

export default AccountsController;
