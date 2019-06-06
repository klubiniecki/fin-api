import { GraphQLObjectType } from "graphql";
import expensesQueries from "./expenses/queries";
import incomesQueries from "./incomes/queries";
import savingsQueries from "./savings/queries";
import goalsQueries from "./goals/queries";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...expensesQueries,
    ...incomesQueries,
    ...savingsQueries,
    ...goalsQueries
  }
});

export default query;
