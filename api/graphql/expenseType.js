const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} = graphql;

const ExpenseType = new GraphQLObjectType({
  name: "Expense",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    amount: { type: GraphQLInt },
    category: { type: GraphQLString },
    regular: { type: GraphQLBoolean }
  })
});

module.exports = ExpenseType;
