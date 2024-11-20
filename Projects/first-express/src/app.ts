import express, { NextFunction, Request, Response } from "express";
const app = express();

//  parsers
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log("user :>> ", user);

  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log("user :>> ", course);

  res.json({
    success: true,
    message: "User is created successfully",
    data: course,
  });
});

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("req.url :>> ", req.url);
  console.log("req.method :>> ", req.method);
  console.log("req.hostname :>> ", req.hostname);

  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  console.log("req.query :>> ", req.query);
  if (typeof req.query) {
    console.log("empty object :>> ", req.query);
  }

  res.send("hi World!");
});

app.get("/:userId/:subId", logger, (req: Request, res: Response) => {
  console.log(req.params);

  res.send("Successful");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);

  res.json({ message: "successfully received data" });
});

export default app;
