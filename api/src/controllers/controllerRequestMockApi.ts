import { Request, Response } from "express";
export const getHello = async (_: Request, res: Response) => {
  const message = "Love";
  try {
    res.status(200);
    res.json(message);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
};
