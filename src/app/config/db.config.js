module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "postgres",
    dialect: "postgres",
    DB_PORT: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }; 


  // const Sequelize = require('sequelize');
  // const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
  //                                 process.env.DB_USER || 'postgres',
  //                                 process.env.DB_PASSWORD || 'postgres',
  //                                 {
  //                                     host: process.env.DB_HOST || 'localhost',
  //                                     port: process.env.DB_PORT || 5432,
  //                                     dialect: process.dialect  || 'postgres',
  //                                     dialectOptions: {
  //                                         ssl: process.env.DB_SSL == "true"
  //                                     }
  //                                 });

  //                                 module.exports = {
  //                                   sequelize: sequelize 
  //                               };