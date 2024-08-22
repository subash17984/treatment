const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require("../dbConfig/dbConfig");
const user = db.user;
const questions = db.questions;
const answers = db.answers;
const treatment = db.treatment;
exports.userSignUp = async (data) => {
    try {
        var user = user.create(data);

    } catch (error) {
        throw new Error(error.message);
    }

}

exports.findOneByUser = async (data) => {
    try {
        var userData;
        userData = await user.findOne({
            where: {
                userName: data.userName,
                // password: data.password,
            }, attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
        if (!userData?.dataValues) {
            throw new Error("No user Data found");
        }
        const isPasswordValid = await bcrypt.compare(data.password, userData.dataValues.password);

        if (isPasswordValid) {
            const token = jwt.sign(
                { username: userData.dataValues.userName },
                process.env.SECRET_KEY,
                // { expiresIn: '1h' } 
            );
            return token;
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.treatmentlist = async (data) => {
    try {
        var response = await treatment.findAll();
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}
exports.QuestionsList = async (data) => {
    try {
        var response = await questions.findAll({
            where: {
                treatmentId: data.treatmentId,
                // password: data.password,
            }, attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};
exports.Save_Answers = async (data) => {
    try {
        var response = await answers.bulkCreate(data)
        return  response
    } catch (error) {
        throw new Error(error.message);
    }
}