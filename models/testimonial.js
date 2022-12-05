const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;
const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    testimony: {
      type: String,
      maxLength: 1000,
      required: true
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
