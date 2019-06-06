import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const GoalType = new GraphQLObjectType({
  name: "Goal",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    amount: { type: GraphQLInt },
    currentAmount: { type: GraphQLInt }
  })
});

export default GoalType;
