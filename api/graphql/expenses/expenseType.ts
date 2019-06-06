import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} from "graphql";

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

export default ExpenseType;
