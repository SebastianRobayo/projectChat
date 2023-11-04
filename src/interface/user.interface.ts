import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
  fullName: string;
  phone: string;
  birthdate: Date;
}
