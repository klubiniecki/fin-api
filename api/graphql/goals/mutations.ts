import { GraphQLString, GraphQLInt } from "graphql";
import goalGraphQLType from "./goalType";
import Goal from "../../models/goal";

const goalsMutations = {
  addGoal: {
    type: goalGraphQLType,
    args: {
      name: { type: GraphQLString },
      amount: { type: GraphQLInt },
      currentAmount: { type: GraphQLInt }
    },
    resolve(parent, args) {
      const newGoal = new Goal({
        name: args.name,
        amount: args.amount,
        currentAmount: args.currentAmount
      });

      return newGoal.save();
    }
  }
};

export default goalsMutations;
