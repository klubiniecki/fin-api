import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from "graphql";
import expenseGraphQLType from "./expenseType";
import Expense from "../models/expense";
import { ExpenseInterface } from "../types";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
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

    updateExpense: {
      type: expenseGraphQLType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        amount: { type: GraphQLInt },
        category: { type: GraphQLString },
        regular: { type: GraphQLBoolean }
      },
      resolve(parent, args) {
        return Expense.findById(args.id)
          .then(
            (expense: ExpenseInterface): ExpenseInterface => {
              expense.name = args.name;
              expense.date = args.date;
              expense.amount = args.amount;
              expense.category = args.category;
              expense.regular = args.regular;
              expense.save();
              return expense;
            }
          )
          .then((updatedExpense): ExpenseInterface => updatedExpense)
          .catch((err): void => console.log(err));
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
  }
});

export default mutation;
