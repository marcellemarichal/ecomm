import mongoose from "mongoose";

mongoose.connect(process.env.DB_ACC)

let db = mongoose.connection;

export default db