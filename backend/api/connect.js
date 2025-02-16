import { MongoClient } from 'mongodb';

const URI = `mongodb+srv://davifer104:xYTveuZ2jxWZ4tqr@spotify-db.8zzif.mongodb.net/?retryWrites=true&w=majority&appName=spotify-db`;

const client = new MongoClient(URI);

const db = client.db('spotify-database');



export { db };

