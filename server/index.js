import express from "express";
import pg from "pg";
import cors from "cors";

let config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: true
}

const { Client } = pg;

const connectDB = async () => {
  const client = new Client(config);
  await client.connect();
  return client;
};

const app = express();
const port = 3004;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});