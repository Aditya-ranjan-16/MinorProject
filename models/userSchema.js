import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  invested: [{ type: Schema.Types.ObjectId, ref: "Campaign" }],
  password: {
    type: String,
    required: true,
  },
  walletId: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "",
    require: true,
  },
  createdCampaigns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Users = models.Users || model("Users", userSchema);

export default Users;
