import mongoose from "mongoose";

mongoose.connect(process.env.DB_ORDER)

let db = mongoose.connection;

export default db