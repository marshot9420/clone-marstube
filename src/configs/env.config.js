import dotenv from 'dotenv';
import path from 'path';

export const envConfig = () => {
  const envPath = path.join(__dirname, `../../.env.${process.env.NODE_ENV}`);
  dotenv.config({ path: envPath });
};
