import { GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";
import expenseGraphQLType from "./expenseType";
import { ExpenseInterface } from "../../types";
import Expense from "../../models/expense";

const expensesMutations = {
  addExpense: {
    type: expenseGraphQLType,
    args: {
      name: { type: GraphQLString },
      date: { type: GraphQLString },
      amount: { type: GraphQLInt },
      category: { type: GraphQLString },
      regular: { type: GraphQLBoolean }
    },
    resolve(parent, args: ExpenseInterface) {
      const newExpense = new Expense({
        name: args.name,
        date: args.date,
        amount: args.amount,
        category: args.category,
        regular: args.regular
      });
      return newExpense.save();
    }
  },
  deleteExpense: {
    type: expenseGraphQLType,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return Expense.findByIdAndDelete(args.id)
        .then((expense: ExpenseInterface) => {
          expense.remove();
          return expense;
        })
        .then((deletedExpense): ExpenseInterface => deletedExpense)
        .catch((err): void => console.log(err));
    }
  }
};

export default expensesMutations;
