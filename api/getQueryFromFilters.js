getQueryFromFilters = filters => {
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
  if ("regular" in filters) {
    if (!query.regular) {
      query.regular = {};
    }
    query.regular = filters.regular;
  }
  return query;
};

module.exports = getQueryFromFilters;
