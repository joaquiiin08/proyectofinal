const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
console.log(dbConfig.USER);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

   pool: {
     max: dbConfig.pool.max,
     min: dbConfig.pool.min,
     acquire: dbConfig.pool.acquire,
     idle: dbConfig.pool.idle
   }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.cart = require("./cart.model.js")(sequelize, Sequelize);
db.cupon = require("./cupon.model.js")(sequelize, Sequelize);
db.producto = require("./producto.model.js")(sequelize, Sequelize);

db.user = require("./user.model.js")(sequelize, Sequelize);

//agregar relacion

db.cart.belongsTo(db.producto, 
  {
    foreignKey: 'item_id' // es cart
  }
);

module.exports = db;
