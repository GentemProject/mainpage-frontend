import { MongoClient, Db } from 'mongodb';
import { config } from './config';

let databaseConnection: Db;

export async function connectMongo() {
  if (databaseConnection) return databaseConnection;
  try {
    const mongoClient = new MongoClient(config.X_MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const client = await mongoClient.connect();
    databaseConnection = client.db(config.X_MONGO_DATABASE);
    console.log('DB is connected');
  } catch (error) {
    console.log('Error: Could not connect to mongoDB', error);
  }
  return databaseConnection;
}
