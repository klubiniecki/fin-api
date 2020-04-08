import Saving from "../models/saving";

const SavingsController = () => {
  const getSavings = async ({ query }, res: any) => {
    try {
      const saving = await Saving.find();
      if (saving.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(saving);
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

  return { getSaving, getSavings, addSaving, updateSaving, deleteSaving };
};

export default SavingsController;
