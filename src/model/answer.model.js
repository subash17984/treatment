module.exports = (sequelize, Sequelize) => {
    const answer = sequelize.define("answer", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        answers: {
            type: Sequelize.STRING,
            required:true
        },
        treatmentId:{
            type: Sequelize.INTEGER,
        }
    });
    return answer;
}