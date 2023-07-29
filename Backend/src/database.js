import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

const run = async () => {
  await client.connect();
  console.log("DATABASE : Connected successfully");
};

run().catch((err) => console.log(err));

export default client;
