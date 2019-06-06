import { GraphQLObjectType } from "graphql";
import expensesMutations from "./expenses/mutations";
import goalsMutations from "./goals/mutations";
import incomesMutations from "./incomes/mutations";
import savingsMutations from "./savings/mutations";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...expensesMutations,
    ...incomesMutations,
    ...savingsMutations,
    ...goalsMutations
  }
});

export default mutation;
