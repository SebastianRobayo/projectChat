import { Schema } from "mongoose";

export interface IMessage {
  sender: Schema.Types.ObjectId;
  content: string;
  timestamp: Date;
  filePath: string;
}
