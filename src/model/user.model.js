module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: Sequelize.STRING,
            unique: true,
            // required:true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return user;
}