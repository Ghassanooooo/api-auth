import environment from "../lib/environment";
import jwt from "../lib/jwt";
import redis from "../lib/redis";
import model from "../models";
import { Request } from "express";

export async function findModel({ name }: { name: string }) {
  const payload = model(name);
  return payload;
}

/************* GET Route (/find/one)******************/

export async function findOne({ query, cookies }: any) {
  const { refresh_token: refreshToken } = cookies || query;

  try {
    if (!refreshToken) throw new Error("No refresh token provided");
    const user: any = jwt.tokenVerify(refreshToken);

    const model = await findModel({ name: user.id.toString() });
    const token: any = await model.findOne(query);

    if (!token) throw new Error("No token found");

    return token;
  } catch (err) {
    throw new Error("No token found");
  }
}

/************* GET Route (/find/many)******************/

export async function findMany(req: {}) {}
