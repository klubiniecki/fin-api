const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require("graphql");
const expenseGraphQLType = require("./expenseType");
const Expense = require("../models/expense");

const Mutation = new GraphQLObjectType({
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
      resolve(parent, args) {
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
          .then(expense => {
            (expense.name = args.name),
              (expense.date = args.date),
              (expense.amount = args.amount),
              (expense.category = args.category);
            return expense.save();
          })
          .then(updatedExpense => updatedExpense)
          .catch(err => console.log(err));
      }
    },

    deleteExpense: {
      type: expenseGraphQLType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Expense.findOneAndDelete(args.id)
          .then(expense => expense.remove())
          .then(deletedExpense => deletedExpense)
          .catch(err => console.log(err));
      }
    }
  }
});

module.exports = Mutation;
