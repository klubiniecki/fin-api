import mongoose from "mongoose";

const initializeDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

export default initializeDatabase;
