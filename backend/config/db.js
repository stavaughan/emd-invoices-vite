import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const MONGODB_URL = process.env.MONGODB_URL;
const connectionOptions = {
  maxIdleTimeMS: 5 * 60 * 1000,
  maxConnecting: 3,
  maxPoolSize: process.env.MONGODB_POOLSIZE || 1,
  bufferCommands: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!MONGODB_URL) {
  throw new Error('MONGODB_URL is not defined');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const connectDB = await mongoose.connect(MONGODB_URL, connectionOptions);
    cached.promise = connectDB;
  }
  cached.conn = await cached.promise;
};

export default connectDB;
