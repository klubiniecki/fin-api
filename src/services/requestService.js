import AggregationService from "./aggregationService";
import getTotal from "../utils/getTotalAmount";

const RequestService = () => {
  const getPipeline = (query) =>
    AggregationService().getPipelineFromQuery(query);

  const getItems = async (query, res, model) => {
    try {
      const items = await model.aggregate(getPipeline(query));
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalAmount = async (query, res, model) => {
    try {
      const items = await model.aggregate(getPipeline(query));
      const name = model.modelName;
      const amount = getTotal(items);
      res.json({ [name]: amount });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getTotalAmountByCategory = async (query, res, model) => {
    try {
      const items = await model.aggregate(
        getPipeline(query).concat({
          $group: {
            _id: "$category",
            total: { $sum: "$amount" },
          },
        })
      );
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getItem = async (id, res, model) => {
    try {
      const item = await model.findById(id);
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addItem = async (body, res, model) => {
    try {
      const newItem = new model(body);
      const item = await model.create(newItem);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateItem = async (req, res, model) => {
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

  const deleteItem = async (id, res, model) => {
    try {
      const item = await model.findByIdAndDelete(id);
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  return {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getTotalAmount,
    getTotalAmountByCategory,
  };
};

export default RequestService;
