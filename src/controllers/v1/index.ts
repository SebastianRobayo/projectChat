import { Container } from "typedi";
import { UserController } from "./user.controller";

export const userController = Container.get(UserController);
