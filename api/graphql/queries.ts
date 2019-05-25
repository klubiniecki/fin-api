import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import expenseGraphQLType from "./expenseType";
import Expense from "../models/expense";
import getQueryFromFilters from "../utils/getQueryFromFilters";

const FilterType = new GraphQLInputObjectType({
  name: "FilterType",
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

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    expenses: {
      type: new GraphQLList(expenseGraphQLType),
      args: {
        filters: { type: FilterType }
      },
      resolve(parent, args) {
        return Expense.find(
          args.filters ? getQueryFromFilters(args.filters) : {}
        ).sort({ date: "desc" });
      }
    },
    expense: {
      type: expenseGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Expense.findById(args.id);
      }
    }
  }
});

export default query;
