const Sequelize = require('sequelize');
require("dotenv").config();
var sequelize = new Sequelize(
    process.env.SCHEMA,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);
const db = {};
sequelize
    .authenticate()
    .then(() => {
        console.log("connection has been establised successfully");
    })
    .catch((err) => {
        console.error("unable to connect to the database:", err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("../model/user.model")(sequelize, Sequelize);
db.treatment = require("../model/treatment.model")(sequelize, Sequelize);
db.questions = require("../model/questions.model")(sequelize, Sequelize);
db.answers = require("../model/answer.model")(sequelize, Sequelize);

//****treatment and questions association ****//
db.treatment.hasOne(db.questions,{foreignKey:"treatmentId"});
db.questions.belongsTo(db.treatment);


module.exports = db;