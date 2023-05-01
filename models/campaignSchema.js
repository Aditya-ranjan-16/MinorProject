import { Schema, model, models } from "mongoose";

const campaignSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Requests: [{ type: Schema.Types.ObjectId, ref: "Request" }],

  thumbnail: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Campaign = models.Campaign || model("Campaign", campaignSchema);

export default Campaign;
