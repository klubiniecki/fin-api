import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import incomeGraphQLType from "./incomeType";
import Income from "../../models/income";
import getQueryFromFilters from "../../utils/getQueryFromFilters";

const FilterType = new GraphQLInputObjectType({
  name: "IncomesFilterType",
  fields: {
    name: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    category: { type: GraphQLString },
    minAmount: { type: GraphQLInt },
    maxAmount: { type: GraphQLInt },
    regular: { type: GraphQLBoolean }
  }
});

const incomesQueries = {
  incomes: {
    type: new GraphQLList(incomeGraphQLType),
    args: {
      filters: { type: FilterType }
    },
    resolve(parent, args) {
      return Income.find(
        args.filters ? getQueryFromFilters(args.filters) : {}
      ).sort({ date: "desc" });
    }
  },
  income: {
    type: incomeGraphQLType,
    args: { id: { type: GraphQLString } },
    resolve(parent, args) {
      return Income.findById(args.id);
    }
  }
};

export default incomesQueries;
