import { IAuth } from "../../interface/auth.interface";
import { IUser } from "../../interface/user.interface";
import UserModel from "../../models/user.model";
import { encrypt, verified } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";
import { Service } from "typedi";
import message from "../../lang/message";

@Service()
export class UserController {
  // Service to create user
  createUser = async ({
    fullName,
    phone,
    birthdate,
    email,
    password,
  }: IUser) => {
    try {
      const validation = await UserModel.findOne({ email });

      if (validation) {
        return {
          status: 400,
          message: message.user.createError,
        };
      }

      const passHash = await encrypt(password);
      const saveUser = await UserModel.create({
        fullName,
        phone,
        birthdate,
        email,
        password: passHash,
      });

      if (!saveUser) {
        return {
          status: 400,
          message: message.user.createError,
        };
      }

      return {
        status: 201,
        message: message.user.created,
      };
    } catch (e) {
      return {
        status: 500,
        message: message.general.error,
      };
    }
  };
}
