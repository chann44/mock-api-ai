import { Request, Response } from "express";

export const getHello = async (_: Request, res: Response) => {
  const message = "hello";
  res.status(200);
  res.json(message);
};
