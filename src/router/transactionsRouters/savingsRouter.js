import * as express from "express";
import SavingsController from "../../controllers/transactions/savings";

const savingsRouter = express.Router();

const {
  getSaving,
  getSavings,
  addSaving,
  updateSaving,
  deleteSaving,
  getTotalSavings,
} = SavingsController();

savingsRouter.get("/total", getTotalSavings);
savingsRouter.get("/", getSavings);
savingsRouter.get("/:id", getSaving);
savingsRouter.post("/", addSaving);
savingsRouter.patch("/:id", updateSaving);
savingsRouter.delete("/:id", deleteSaving);

export default savingsRouter;
