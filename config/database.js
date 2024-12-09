const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // bookRentaldb
  process.env.DB_USER, // azarias
  process.env.DB_PASSWORD, // Ja30104015*
  {
    host: process.env.DB_HOST, // localhost
    dialect: process.env.DB_DIALECT, // mysql
    logging: false, // Desativa logs do Sequelize
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Conexão com banco de dados estabelecida!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = sequelize;
