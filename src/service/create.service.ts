import model from "../models";
import jwt from "../lib/jwt";
import redis from "../lib/redis";
import environment from "../lib/environment";

export async function create({ name }: { name: string }) {
  redis.set("name", name);
  const payload = model(name);
  return payload;
}

/************* POST Route (/create/one)******************/

export async function createOne({ body, query }: any) {
  console.log("createOne input => ", body);
  try {
    const token = jwt.createToken(body);
    const model = await create({ name: body.id.toString() });
    const payload = new model({
      refreshToken: token.refreshToken.value,
      userId: body.id,
      email: body.email,
    });
    await payload.save();

    return token;
  } catch (err) {
    return null;
  }
}

/************* POST Route (/create/many)******************/

export async function createMany({ body, query }: any) {}
