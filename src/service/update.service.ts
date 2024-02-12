import model from "../models";
import jwt from "../lib/jwt";
import redis from "../lib/redis";
import environment from "../lib/environment";

export async function updateModel({ name }: { name: string }) {
  const payload = model(name);
  return payload;
}

export async function refresh({ query, cookies, body }: any) {
  console.log("refresh ==> ", query, cookies, body);
  const { refresh_token: refreshToken } = cookies;
  if (!refreshToken) return null;
  try {
    const user: any = jwt.tokenVerify(refreshToken);

    const model = await updateModel({ name: user.id.toString() });
    const token: any = await model.findOne(query);
    if (!token) return null;
    const accessToken = jwt.createAccessToken({
      id: token.userId,
      email: token.email,
    });

    return accessToken;
  } catch (err) {
    return null;
  }
}

/************* PUT Route (/update/one)******************/

export async function updateOne({ query, cookies, body }: any) {
  // the refresh token is the same as the user id
}

/************* PUT Route (/update/many)******************/

export async function updateMany({ query, cookies, body }: any) {}
