module.exports = (sequelize, Sequelize) => {
    const treatment = sequelize.define("treatment", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        treatmentName: {
            type: Sequelize.STRING,
        },
    });
    return treatment;
}