import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

const envPath = path.join(__dirname, `../.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });

const app = express();

const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✅ Server listening on: ${BASE_URL}:${PORT}`);
};

app.listen(PORT, handleListening);
