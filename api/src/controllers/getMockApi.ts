import { Request, Response } from "express";
import createData from "../lib/utils";

// function format(source: any) {
//   return JSON.stringify(source, null, 2);
// }

const tempData = '{"name": "name", "age": "age", "address": "address"}';

export const getMockApi = async (_: Request, res: Response) => {
  try {
    var template;
    try {
      template = JSON.parse(tempData);
    } catch (error) {
      return console.log(error);
    }
    const data = createData(template);
    res.status(200);
    res.json(data);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
};
