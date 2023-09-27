import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { user?: mongoDB.Collection } = {};

dotenv.config();

export async function ConnectDatabase() {
  try {
    if (
      !process.env.DB_CONN_STRING ||
      !process.env.DB_NAME ||
      !process.env.USER_COLLECTION_NAME
    ) {
      throw new Error("environment variables not defined");
    }

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      process.env.DB_CONN_STRING || ''
    );

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME || '');

    const userCollection: mongoDB.Collection = db.collection(
      process.env.USER_COLLECTION_NAME || ''
    );

    collections.user = userCollection;

    console.log(`conected to database ${db.databaseName}`);
  } catch (error) {
    console.error(error);
  }
}
