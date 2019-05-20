import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";
import initDB from "./db";
require("dotenv").config();

initDB();

const app = express();
app.on("error", err => {
  log.error("server error", err);
});

app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 9000);
