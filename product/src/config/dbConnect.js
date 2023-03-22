import mongoose from 'mongoose';

mongoose.connect(process.env.DB_PRODUCT)

let db = mongoose.connection;

export default db