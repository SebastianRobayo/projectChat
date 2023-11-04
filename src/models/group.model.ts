import { Schema, model } from "mongoose";
import { IGroup } from "../interface/group.interface";

const GroupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const GroupModel = model("group", GroupSchema);
export default GroupModel;
