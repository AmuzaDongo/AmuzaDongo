const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const invoiceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    status: {
      type: [String],
      required: true,
    },
    item: {
      type: [String],
      trim: true,
      required: true
    },
    qty: [Number],
    price: {
      type: [Number],
      trim: true,
      required: true,
    },
    total: {
      type: Number,
      trim: true,
      required: true,
    },
    terms: {
      type: String,
      required: true,
      maxLength: 2000
    },
    photo: {
      type: [String],
      required: false,
    },
    project: {
      type: [ObjectId],
      ref: "Project",
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

module.exports = mongoose.model("Invoice", invoiceSchema);
