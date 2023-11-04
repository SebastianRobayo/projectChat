import { Schema, model } from "mongoose";
import { IMessage } from "../interface/message.interface";

const MessageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MessageModel = model("message", MessageSchema);
export default MessageModel;
