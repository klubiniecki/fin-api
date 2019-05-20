const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const initDB = require("./db");

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
