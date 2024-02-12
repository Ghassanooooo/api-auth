import { Request, Response } from "express";
import service from "../service";
import { StatusCodes } from "http-status-codes";

export async function refresh(req: Request, res: Response) {
  try {
    const payload = await service.update.refresh({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

/************* PUT Route (/update/one)******************/

export async function updateOne(req: Request, res: Response) {
  try {
    const payload = await service.update.updateOne({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

/************* PUT Route (/update/many)******************/

export async function updateMany(req: Request, res: Response) {
  try {
    const payload = await service.update.updateMany({
      query: req.query,
      cookies: req.cookies,
      body: req.body,
    });
    res.status(StatusCodes.CREATED).json(payload);
  } catch (e: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}
