import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import expenseGraphQLType from "./expenseType";
import Expense from "../models/expense";
import mutation from "./mutations";
import getQueryFromFilters from "../getQueryFromFilters";

const FilterType = new GraphQLInputObjectType({
  name: "FilterType",
  fields: {
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
        return Expense.find(getQueryFromFilters(args.filters));
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

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
