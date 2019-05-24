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

const { NODE_ENV, PORT } = process.env;
const schema = new GraphQLSchema({ query, mutation });
app.use(
  "/",
  cors(),
  graphqlHTTP({
    schema,
    graphiql: NODE_ENV === "development"
  })
);

app.listen(PORT);
