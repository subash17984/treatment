const app = require("express").Router();
const userController = require("../controller/user.controller");
const tokenChek = require('../middleware/user.middleware');
app.post("/login", userController.login);
app.get("/treatment",tokenChek, userController.findAllTreatment);
app.post("/question",tokenChek, userController.QuestionsList_controller);
app.post("/answer",tokenChek, userController.Answer_saveController);
module.exports = app;