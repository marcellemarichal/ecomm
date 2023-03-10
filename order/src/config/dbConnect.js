import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:FQLTYrZpXFuFPc5j@ecomm.quvcoiz.mongodb.net/ecomm-order')

let db = mongoose.connection;

export default db