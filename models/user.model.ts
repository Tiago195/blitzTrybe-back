/* eslint-disable linebreak-style */
import { DataTypes } from 'sequelize';
import Task from './task.model';
import sequelize from './sequelize';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  github: DataTypes.STRING,
  isAdmin: DataTypes.INTEGER,
}, {
  timestamps: false
});

User.hasMany(Task, {
  as: 'tasks',
  foreignKey: 'user_id'
});

Task.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id'
});

export default User;
