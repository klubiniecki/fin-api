import * as mongoose from "mongoose";

const initDB = () => {
  const { DB_USER, DB_PASSWORD } = process.env;
  mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@ds149146.mlab.com:49146/fin-api`,
    { useNewUrlParser: true }
  );
  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

export default initDB;
