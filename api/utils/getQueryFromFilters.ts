import { QueryInterface } from "../types";

const getQueryFromFilters = (filters): QueryInterface => {
  const query: QueryInterface = {
    name: "",
    category: "",
    amount: {},
    regular: false
  };

  if (filters.startDate) {
    if (!query.date) {
      query.date = {};
    }
    query.date["$gt"] = filters.startDate;
  }
  if (filters.endDate) {
    if (!query.date) {
      query.date = {};
    }
    query.date["$lt"] = filters.endDate;
  }
  if (filters.minAmount) {
    if (!query.amount) {
      query.amount = {};
    }
    query.amount["$gte"] = filters.minAmount;
  }
  if (filters.maxAmount) {
    if (!query.amount) {
      query.amount = {};
    }
    query.amount["$lte"] = filters.maxAmount;
  }
  if ("name" in filters) {
    if (!query.name) {
      query.name = "";
    }
    query.name = filters.name;
  }
  if ("category" in filters) {
    if (!query.category) {
      query.category = "";
    }
    query.category = filters.category;
  }
  if ("regular" in filters) {
    if (!query.regular) {
      query.regular = false;
    }
    query.regular = filters.regular;
  }
  return query;
};

export default getQueryFromFilters;
