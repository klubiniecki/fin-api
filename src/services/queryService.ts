import getFirstDateOfMonth from "../utils/getFirstDateOfMonth";

const QueryService = () => {
  const getMatchFromQuery = (query = "") => {
    let match: any = {
      date: { $gte: getFirstDateOfMonth() },
    };

    if (query["name"]) {
      match.name = { $in: [query["name"]] };
    }

    if (query["category"]) {
      const categories = query["category"].split(",");

      match.category = { $in: categories };
    }

    if (query["startDate"]) {
      const date = new Date(query["from"]);
      match.date = { $gte: date };
    }

    if (query["endDate"]) {
      const date = new Date(query["from"]);
      match.date = { $lte: date };
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
