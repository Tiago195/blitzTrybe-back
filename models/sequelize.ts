import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('blitzTrybe', 'root', 'tutu', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

export default sequelize;