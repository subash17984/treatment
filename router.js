const app = require("express").Router();
const userRouter = require('./src/router/user.router')
const tokenChek = require('./src/middleware/user.middleware');
// app.use("/user",tokenChek, userRouter);
app.use("/user", userRouter);

module.exports = app;