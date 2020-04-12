import Account from "../../models/account";

const AccountsController = () => {
  const getAccounts = async ({ query }, res: any) => {
    try {
      const accounts = await Account.find();
      if (accounts.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(accounts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getAccount = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Account.findById(id);
      if (!item) {
        res.status(404).json({ message: `No account found for id: ${id}!` });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addAccount = async ({ body }, res: any) => {
    try {
      const newItem = new Account(body);
      const item = await Account.create(newItem);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateAccount = async ({ params, body }, res: any) => {
    try {
      const { id } = params;
      const item = await Account.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const deleteAccount = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Account.findByIdAndDelete(id);
      res.status(200).json({ message: `Account ${item._id} deleted.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  return { getAccount, getAccounts, addAccount, updateAccount, deleteAccount };
};

export default AccountsController;
