import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@mongo:27017/?authSource=admin')


let db = mongoose.connection;

export default db