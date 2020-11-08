const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    aadharNo: {
      type: Number,
      required: true,
    },
    vendorName: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Feedback = mongoose.model("feedback", FeedbackSchema);
