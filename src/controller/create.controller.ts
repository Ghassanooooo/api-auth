import { Request, Response } from "express";
import service from "../service";

import { StatusCodes } from "http-status-codes";

/************* POST Route (/create/one)******************/

export async function createOne(req: Request, res: Response) {
  try {
    const payload = await service.create.createOne({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

/************* POST Route (/create/many)******************/

export async function createMany(req: Request, res: Response) {
  try {
    const payload = await service.create.createMany({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}
