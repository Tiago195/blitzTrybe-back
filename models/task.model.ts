/* eslint-disable linebreak-style */
import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';
import User from './user.model';


const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  branch: DataTypes.STRING,
  content: DataTypes.STRING,
  user_id: DataTypes.INTEGER,
  status: {
    type: DataTypes.STRING,
    defaultValue: 0
  }
}, {
  timestamps: false
});

// User.hasMany(Task, {
//   as: 'tasks',
//   foreignKey: 'user_id'
// });

// Task.belongsTo(User, {
//   as: 'user',
//   foreignKey: 'user_id'
// });

export default Task;
