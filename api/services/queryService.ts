import getCamelCase from "../utils/getCamelCase";

const QueryService = () => {
  const getMatchFromQuery = (query = "") => {
    let match: any = {};

    if (query["name"]) {
      match.name = { $in: [getCamelCase(query["name"])] };
    }

    if (query["category"]) {
      const categories = query["category"]
        .split(",")
        .map((category) => getCamelCase(category));

      match.category = { $in: categories };
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

  //   const getLimitFromQuery = ({ page_size }) => {
  //     if (Number(page_size) > MAX_PAGE_SIZE) {
  //       return MAX_PAGE_SIZE;
  //     }

  //     return Number(page_size) || PAGE_SIZE;
  //   };

  //   const getSkipFromQuery = ({ page }) => {
  //     return Number(page) * PAGE_SIZE - PAGE_SIZE || 0;
  //   };
};

export default QueryService;
