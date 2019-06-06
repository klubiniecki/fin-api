import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType
} from "graphql";
import savingGraphQLType from "./savingType";
import Saving from "../../models/saving";
import getQueryFromFilters from "../../utils/getQueryFromFilters";

const FilterType = new GraphQLInputObjectType({
  name: "SavingsFilterType",
  fields: {
    name: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    category: { type: GraphQLString },
    minAmount: { type: GraphQLInt },
    maxAmount: { type: GraphQLInt },
    regular: { type: GraphQLBoolean }
  }
});

const savingsQueries = {
  savings: {
    type: new GraphQLList(savingGraphQLType),
    args: {
      filters: { type: FilterType }
    },
    resolve(parent, args) {
      return Saving.find(
        args.filters ? getQueryFromFilters(args.filters) : {}
      ).sort({ date: "desc" });
    }
  },
  saving: {
    type: savingGraphQLType,
    args: { id: { type: GraphQLString } },
    resolve(parent, args) {
      return Saving.findById(args.id);
    }
  }
};

export default savingsQueries;
