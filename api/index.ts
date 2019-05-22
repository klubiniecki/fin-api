import { GraphQLSchema } from "graphql";
import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as dotenv from "dotenv";
import * as cors from "cors";
import initDB from "./db";
import query from "./graphql/queries";
import mutation from "./graphql/mutations";

dotenv.config();

initDB();

const app = express();
app.on("error", err => {
  console.log("server error", err);
});
app.use(cors());

const schema = new GraphQLSchema({ query, mutation });
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 9000);
