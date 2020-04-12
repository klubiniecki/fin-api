import AggregationService from "../../services/aggregationService";
import getTotalAmount from "../../utils/getTotalAmount";
import Saving from "../../models/saving";

const SavingsController = () => {
  const getPipeline = (query: string) =>
    AggregationService().getPipelineFromQuery(query);

  const getSavings = async ({ query }, res: any) => {
    try {
      const savings = await Saving.aggregate(getPipeline(query));
      if (savings.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(savings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalSavings = async ({ query }, res: any) => {
    try {
      const savings = await Saving.aggregate(getPipeline(query));

      if (savings.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }

      const totalSavings = getTotalAmount(savings);

      res.json({ totalSavings });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getSaving = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Saving.findById(id);
      if (!item) {
        res.status(404).json({ message: `No saving found for id: ${id}!` });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addSaving = async ({ body }, res: any) => {
    try {
      const newItem = new Saving(body);
      const item = await Saving.create(newItem);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateSaving = async ({ params, body }, res: any) => {
    try {
      const { id } = params;
      const item = await Saving.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const deleteSaving = async ({ params }, res: any) => {
    try {
      const { id } = params;
      const item = await Saving.findByIdAndDelete(id);
      res.status(200).json({ message: `Saving ${item._id} deleted.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

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
