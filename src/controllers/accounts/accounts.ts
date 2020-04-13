import * as fetch from "node-fetch";
import Account from "../../models/account";
import RequestService from "../../services/requestService";

const AccountsController = () => {
  const { getItem, addItem, updateItem, deleteItem } = RequestService();

  const getAccounts = async (_: any, res: any) => {
    try {
      const currencyRes = await fetch(process.env.CURRENCY_URI);
      const currency = await currencyRes.json();
      const accounts = await Account.find();

      const accountsWithAmountEUR = accounts.map((acc: any) => ({
        _id: acc.id,
        name: acc.name,
        amount: acc.amount,
        currency: acc.currency,
        amountEUR: Math.round(acc.amount / currency.rates[acc.currency]),
      }));

      res.json(accountsWithAmountEUR);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getAccount = ({ params }, res: any) => getItem(params.id, res, Account);
  const addAccount = ({ body }, res: any) => addItem(body, res, Account);
  const updateAccount = (req: any, res: any) => updateItem(req, res, Account);
  const deleteAccount = ({ params }, res: any) =>
    deleteItem(params.id, res, Account);

  return { getAccount, getAccounts, addAccount, updateAccount, deleteAccount };
};

export default AccountsController;
