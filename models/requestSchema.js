import { Schema, model, models } from "mongoose";

const requestSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  ammount: {
    type: String,
    required: true,
  },
  addressTo: {
    type: String,
    required: true,
  },
  Campaign: { type: Schema.Types.ObjectId, ref: "Request" },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Request = models.Request || model("Request", requestSchema);

export default Request;
