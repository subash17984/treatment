const service = require('../service/user.service');

exports.login = async (req, res) => {
    try {
        var data = req.body;
        if (Object.entries(data).length === 0) {
            throw new Error("Data is not found");
        }
        var responseData = await service.findOneByuser(data);
        return res.send({ status: "success", responseData });
    } catch (error) {
        return res.send({ status: "error", error: error.message });
    }
}
exports.findAllTreatment = async (req, res) => {
    try {
        var responseData = await service.findAllTreatment();
        return res.send({ status: "success", responseData });
    } catch (error) {
        return res.send({ status: "error", error: error.message });
    }
}
exports.QuestionsList_controller = async (req, res) => {
    try {
        var data = req.body;
        if (Object.entries(data).length === 0) {
            throw new Error("Data is not found");
        }
        var responseData = await service.QuestionsList_service(data);
        return res.send({ status: "success", responseData });
    } catch (error) {
        return res.send({ status: "error", error: error.message });
    }
}
exports.Answer_saveController = async (req, res) => {
    try {
        var data = req.body;
        if (Object.entries(data).length === 0) {
            throw new Error("Data is not found");
        }
        var responseData = await service.Save_AnswersService(data);
        return res.send({ status: "success", responseData });
    } catch (error) {
        return res.send({ status: "error", error: error.message });
    }
}