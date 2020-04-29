const QueryService = () => {
  const getMatchFromQuery = (query = "") => {
    let match = {};

    if (query["name"]) {
      match.name = { $in: [query["name"]] };
    }

    if (query["regular"]) {
      match.regular = { $in: [query["regular"] === "true" ? true : false] };
    }

    if (query["category"]) {
      const categories = query["category"].split(",");
      match.category = { $in: categories };
    }

    if (query["startDate"] && query["endDate"]) {
      const startDate = new Date(query["startDate"]);
      const endDate = new Date(query["endDate"]);
      match.date = { $gte: startDate, $lte: endDate };
    }

    return match;
  };

  const getSortFromQuery = (query) => {
    let sort = { date: -1 };

    if (query["sort"] === "oldest") {
      sort = { date: 1 };
    }

    return sort;
  };

  return { getMatchFromQuery, getSortFromQuery };
};

export default QueryService;
