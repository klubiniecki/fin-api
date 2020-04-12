import AggregationService from "./aggregationService";
import getTotal from "../utils/getTotalAmount";

const RequestService = () => {
  const getPipeline = (query: string) =>
    AggregationService().getPipelineFromQuery(query);

  const getItems = async (query: string, res: any, model: any) => {
    try {
      const items = await model.aggregate(getPipeline(query));

      if (items.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalAmount = async (query: string, res: any, model: any) => {
    try {
      const items = await model.aggregate(getPipeline(query));
      const name = model.modelName;
      if (items.length < 1) {
        res.status(404).json({ error: `Wrong query: ${query}` });
      }

      const amount = getTotal(items);

      res.json({ [name]: amount });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getItem = async (id: string, res: any, model: any) => {
    try {
      const item = await model.findById(id);
      if (!item) {
        res.status(404).json({ message: `No expense found for id: ${id}!` });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addItem = async (body: {}, res: any, model: any) => {
    try {
      const newItem = new model(body);
      const item = await model.create(newItem);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateItem = async (req: any, res: any, model: any) => {
    try {
      const item = await model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const deleteItem = async (id: string, res: any, model: any) => {
    try {
      const item = await model.findByIdAndDelete(id);
      res.status(200).json({ message: `Expense ${item._id} deleted.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  return { getItems, getItem, addItem, updateItem, deleteItem, getTotalAmount };
};

export default RequestService;
