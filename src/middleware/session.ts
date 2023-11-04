import { NextFunction, Request, Response } from "express";
import { IValidate } from "../interface/validate.interface";
import { verifyToken } from "../utils/jwt.handle";

export const checkJwt = (req: IValidate, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("El token no es valido");
    } else {
      req.user = isUser;
      console.log({ jwtByUser });
      next();
    }
    next();
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("La session no es valida");
  }
};
