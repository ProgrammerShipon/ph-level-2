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
