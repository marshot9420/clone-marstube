import mongoose from 'mongoose';

export const dbConfig = () => {
  mongoose.connect(process.env.DB_URL);

  const dbConnection = mongoose.connection;

  const handleOpen = () => console.log('✅ Connected to DB');
  const handleError = (error) => console.log('❗ DB Error: ', error);
  dbConnection.on('error', handleError);
  dbConnection.once('open', handleOpen);
};
