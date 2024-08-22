module.exports = (sequelize, Sequelize) => {
    const questions = sequelize.define("question", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        questions: {
            type: Sequelize.STRING,
            unique: true,
            // required:true
        },
    });
    return questions;
}