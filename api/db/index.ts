import * as mongoose from "mongoose";

const initDB = () => {
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

export default initDB;
