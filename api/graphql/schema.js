const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType
} = require("graphql");
const expenseGraphQLType = require("./expenseType");
const Expense = require("../models/expense");
const mutation = require("./mutations");
const getQueryFromFilters = require("../getQueryFromFilters");

const FilterType = new GraphQLInputObjectType({
  name: "FilterType",
  fields: {
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
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

module.exports = new GraphQLSchema({
  query,
  mutation
});
