import * as express from "express";
import AccountsController from "../../controllers/accounts/accounts";

const accountsRouter = express.Router();

const {
  getAccounts,
  getAccount,
  addAccount,
  updateAccount,
  deleteAccount,
} = AccountsController();

accountsRouter.get("/", getAccounts);
accountsRouter.get("/:id", getAccount);
accountsRouter.post("/", addAccount);
accountsRouter.patch("/:id", updateAccount);
accountsRouter.delete("/:id", deleteAccount);

export default accountsRouter;
