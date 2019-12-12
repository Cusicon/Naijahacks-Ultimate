let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let dashboardRouter = require("./api/routes/dashboard");
let profileRouter = require("./api/routes/profile");
let examBoard = require("./api/routes/examboard");
let loginAuth = require("./api/auth/login");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// GENERAL

app.use("/", dashboardRouter);
app.use("/profile", profileRouter);
app.use("/examboard", examBoard);

// AUTH
app.use("/auth/", loginAuth);

module.exports = app;
