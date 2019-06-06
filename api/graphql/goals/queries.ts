import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import goalGraphQLType from "./goalType";
import Goal from "../../models/goal";
import getQueryFromFilters from "../../utils/getQueryFromFilters";

const FilterType = new GraphQLInputObjectType({
  name: "GoalsFilterType",
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

const goalsQueries = {
  goals: {
    type: new GraphQLList(goalGraphQLType),
    args: {
      filters: { type: FilterType }
    },
    resolve(parent, args) {
      return Goal.find(
        args.filters ? getQueryFromFilters(args.filters) : {}
      ).sort({ date: "desc" });
    }
  },
  goal: {
    type: goalGraphQLType,
    args: { id: { type: GraphQLString } },
    resolve(parent, args) {
      return Goal.findById(args.id);
    }
  }
};

export default goalsQueries;
