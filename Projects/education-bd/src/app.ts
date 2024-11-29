import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlwares/globalErrorHandler";
import notFount from "./app/middlwares/notFound";
import router from "./app/routers";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handling
app.use(globalErrorHandler);

// Not fount api
app.use(notFount);

export default app;
