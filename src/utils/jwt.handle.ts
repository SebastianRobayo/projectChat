import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.2023";

export const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  const validated = verify(jwt, JWT_SECRET);
  return validated;
};
