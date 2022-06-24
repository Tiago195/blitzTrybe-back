import app from './app';
import sequelize from './models/sequelize';
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`open port: ${PORT}`);
});