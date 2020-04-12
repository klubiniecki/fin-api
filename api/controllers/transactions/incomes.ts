import Income from "../../models/income";
import AggregationService from "../../services/aggregationService";
import getTotalAmount from "../../utils/getTotalAmount";

const IncomesController = () => {
  const getPipeline = (query: string) =>
    AggregationService().getPipelineFromQuery(query);

  const getIncomes = async ({ query }, res: any) => {
    try {
      const incomes = await Income.aggregate(getPipeline(query));

      if (incomes.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(incomes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalIncomes = async ({ query }, res: any) => {
    try {
      const incomes = await Income.aggregate(getPipeline(query));

      if (incomes.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }

      const totalIncomes = getTotalAmount(incomes);

      res.json({ totalIncomes });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getIncome = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Income.findById(id);
      if (!item) {
        res.status(404).json({ message: `No income found for id: ${id}!` });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addIncome = async ({ body }, res: any) => {
    try {
      const newItem = new Income(body);
      const item = await Income.create(newItem);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateIncome = async ({ params, body }, res: any) => {
    try {
      const { id } = params;
      const item = await Income.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const deleteIncome = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Income.findByIdAndDelete(id);
      res.status(200).json({ message: `Income ${item._id} deleted.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

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
