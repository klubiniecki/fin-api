const getQueryFromFilters = filters => {
  const query = {};
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
  if ("category" in filters) {
    if (!query.category) {
      query.category = {};
    }
    query.category = filters.category;
  }
  if ("regular" in filters) {
    if (!query.regular) {
      query.regular = {};
    }
    query.regular = filters.regular;
  }
  return query;
};

export default getQueryFromFilters;
