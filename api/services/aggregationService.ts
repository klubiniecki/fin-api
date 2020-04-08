import QueryService from "./queryService";

const { getMatchFromQuery, getSortFromQuery } = QueryService();

const AggregationService = () => {
  const getExpensePipelineFromQuery = (query) => {
    return [
      {
        $match: getMatchFromQuery(query),
      },
      {
        $sort: getSortFromQuery(query),
      },
    ];
  };

  return { getExpensePipelineFromQuery };
};

export default AggregationService;
