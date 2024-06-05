import { MongoClient } from "mongodb";
import { DB_NAME } from "./constants";

export async function connectDB() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    dbName: DB_NAME,
  });

  return client;
}
