import { GraphQLString, GraphQLInt } from "graphql";
import Saving from "../../models/saving";
import savingGraphQLType from "../savings/savingType";

const savingsMutations = {
  addSaving: {
    type: savingGraphQLType,
    args: {
      name: { type: GraphQLString },
      date: { type: GraphQLString },
      amount: { type: GraphQLInt },
      goal: { type: GraphQLString }
    },
    resolve(parent, args) {
      const newSaving = new Saving({
        name: args.name,
        date: args.date,
        amount: args.amount,
        goal: args.goal
      });
      return newSaving.save();
    }
  },
  deleteSaving: {
    type: savingGraphQLType,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return Saving.findByIdAndDelete(args.id)
        .then((saving: any) => {
          saving.remove();
          return saving;
        })
        .then((deletedSaving): any => deletedSaving)
        .catch((err): void => console.log(err));
    }
  }
};

export default savingsMutations;
