const repository = require('../repository/user.repository');
exports.findOneByuser = async (data) => {
    try {
        const responseData = repository.findOneByUser(data);
        return responseData;
    } catch (error) {
        throw new Error(error.message);
    }
};
exports.findAllTreatment = async () => {
    try {
        const responseData = repository.treatmentlist();
        return responseData;
    } catch (error) {
        throw new Error(error.message);
    }
}
exports.QuestionsList_service = async (data) => {
    try {
        const responseData = repository.QuestionsList(data);
        return responseData;
    } catch (error) {
        throw new Error(error.message);
    }
}
exports.Save_AnswersService = async (data) => {
    try {
        const responseData = repository.Save_Answers(data);
        return responseData;
    } catch (error) {
        throw new Error(error.message);
    }
}