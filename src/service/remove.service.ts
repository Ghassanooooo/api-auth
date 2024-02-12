import model from "../models";
import jwt from "../lib/jwt";

export async function removeModel({ name }: { name: string }) {
  const payload = model(name);
  return payload;
}

/************* DELETE Route (/remove/one)******************/

export async function removeOne({ query, cookies, body }: any) {
  const refreshToken: any = jwt.tokenVerify(cookies.refresh_token);
  const model = await removeModel({ name: refreshToken.id.toString() });
  const token = await model.findOneAndDelete({
    refreshToken: cookies.refresh_token,
  });
  console.log("findOneAndDelete =====> ", token);
  return token;
}

/************* DELETE Route (/remove/many)******************/

export async function removeMany({ query, cookies, body }: any) {}
