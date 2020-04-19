import { Sequelize } from 'sequelize'

const {
  DATABASE_URL = '',
} = process.env

const sequelize = new Sequelize(DATABASE_URL);

export default sequelize
