import QueryService from "./queryService";

const { getMatchFromQuery, getSortFromQuery } = QueryService();

const AggregationService = () => {
  const getPipelineFromQuery = (query: string) => [
    {
      $match: getMatchFromQuery(query),
    },
    {
      $sort: getSortFromQuery(query),
    },
  ];

  return { getPipelineFromQuery };
};

export default AggregationService;
