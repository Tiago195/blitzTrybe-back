/* eslint-disable linebreak-style */
import { DataTypes } from 'sequelize';
import sequelize from './sequelize';
import User from './user.model';


const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  branch: DataTypes.STRING,
  content: DataTypes.STRING,
  user_id: DataTypes.INTEGER,
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

export default Task;
