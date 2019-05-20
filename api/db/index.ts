import * as mongoose from "mongoose";

const initDB = () => {
  const DB_USER = process.env.DB_USER || "user";
  const DB_PASSWORD = process.env.DB_PASSWORD || "password";

  mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@ds149146.mlab.com:49146/fin-api`,
    { useNewUrlParser: true }
  );

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

export default initDB;
