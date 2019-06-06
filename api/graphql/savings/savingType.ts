import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const SavingType = new GraphQLObjectType({
  name: "Saving",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    amount: { type: GraphQLInt },
    goal: { type: GraphQLString }
  })
});

export default SavingType;
