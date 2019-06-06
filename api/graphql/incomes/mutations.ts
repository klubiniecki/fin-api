import { GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";
import incomeGraphQLType from "./incomeType";
import { ExpenseInterface } from "../../types";
import Income from "../../models/income";

const incomeMutations = {
  addIncome: {
    type: incomeGraphQLType,
    args: {
      name: { type: GraphQLString },
      date: { type: GraphQLString },
      amount: { type: GraphQLInt },
      category: { type: GraphQLString },
      regular: { type: GraphQLBoolean }
    },
    resolve(parent, args: ExpenseInterface) {
      const newIncome = new Income({
        name: args.name,
        date: args.date,
        amount: args.amount,
        category: args.category,
        regular: args.regular
      });
      return newIncome.save();
    }
  },
  deleteIncome: {
    type: incomeGraphQLType,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return Income.findByIdAndDelete(args.id)
        .then((income: any) => {
          income.remove();
          return income;
        })
        .then((deletedIncome): any => deletedIncome)
        .catch((err): void => console.log(err));
    }
  }
};

export default incomeMutations;
