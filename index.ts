import app from './app';
import sequelize from './models/sequelize';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`open port: ${PORT}`);
});