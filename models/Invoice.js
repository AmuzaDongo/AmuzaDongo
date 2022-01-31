const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
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
        type: Array,
        required: false,
    },
    due_date: {
        type: Array,
        required: false,
    },
    status: {
        type: Array,
        required: false,
    },
    item: {
        type: Array,
        required: false,
    },
    qty: {
        type: Array,
        required: false,
    },
    price: {
        type: Array,
        required: false,
    },
    total: {
        type: Array,
        required: false,
    },
    terms: {
        type: Array,
        required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
