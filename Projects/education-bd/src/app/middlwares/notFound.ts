import { NextFunction, Request, Response } from "express";

const notFount = (req: Request, res: Response, next: NextFunction) => {
  const statusCode = 404;

  res.status(statusCode).json({
    success: false,
    message: "API Not Found !!",
    error: "",
  });
};

export default notFount;
