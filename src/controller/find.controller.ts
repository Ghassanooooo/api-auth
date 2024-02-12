import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import service from "../service";

/************* GET Route (/find/one)******************/

export async function findOne(req: Request, res: Response) {
  console.log("req.cookies", req.cookies);
  try {
    const payload = await service.find.findOne({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });

    res.status(StatusCodes.OK).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

/************* GET Route (/find/many)******************/

export async function findMany(req: Request, res: Response) {
  try {
    const payload = await service.find.findMany({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });

    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}
