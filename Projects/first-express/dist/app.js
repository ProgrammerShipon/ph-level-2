"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//  parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log("user :>> ", user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log("user :>> ", course);
    res.json({
        success: true,
        message: "User is created successfully",
        data: course,
    });
});
// middleware
const logger = (req, res, next) => {
    console.log("req.url :>> ", req.url);
    console.log("req.method :>> ", req.method);
    console.log("req.hostname :>> ", req.hostname);
    next();
};
app.get("/", logger, (req, res) => {
    console.log("req.query :>> ", req.query);
    if (typeof req.query) {
        console.log("empty object :>> ", req.query);
    }
    res.send("hi World!");
});
app.get("/:userId/:subId", logger, (req, res) => {
    console.log(req.params);
    res.send("Successful");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({ message: "successfully received data" });
});
exports.default = app;
