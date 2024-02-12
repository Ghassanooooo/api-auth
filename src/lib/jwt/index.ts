import jwt from "jsonwebtoken";
import environment from "../environment";

const accessTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
const refreshTokenExpires = Date.now() + 365 * 24 * 60 * 60 * 1000; // 1 year

export const createJWT = (user: any, secret: string, expiresIn: string) => {
  const token = jwt.sign(user, secret, { expiresIn: `${expiresIn}` });
  return token;
};

export const tokenVerify = (token: any) =>
  jwt.verify(token, environment.jwtSecret);

export const createAccessToken = (inputs: any) => {
  const accessTokenJWT = createJWT(inputs, environment.jwtSecret, "24h");
  return {
    name: "access_token",
    value: accessTokenJWT,
    accessTokenExpires,
  };
};
export const createRefreshToken = () => {};

export const createToken = (inputs: any) => {
  const accessTokenJWT = createAccessToken(inputs);
  const refreshTokenJWT = createJWT(inputs, environment.jwtSecret, "365d");

  return {
    accessToken: accessTokenJWT,
    refreshToken: {
      name: "refresh_token",
      value: refreshTokenJWT,
      refreshTokenExpires,
    },
  };
};

export default {
  createToken,
  tokenVerify,
  createAccessToken,
};
