import { Request, Response } from "express";
import service from "../service";

import { StatusCodes } from "http-status-codes";

/************* DELETE Route (/remove/one)******************/

export async function removeOne(req: Request, res: Response) {
  try {
    const payload = await service.remove.removeOne({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

/************* DELETE Route (/remove/many)******************/

export async function removeMany(req: Request, res: Response) {
  try {
    const payload = await service.remove.removeMany({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}
