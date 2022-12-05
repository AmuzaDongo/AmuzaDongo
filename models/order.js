import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;
const orderSchema = new Schema({
    title: {
        type: String,
        maxLength: 100,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        maxLength: 2000,
        required: true
    },
    paid: {
        type: Number,
        required: true,
        default: 0
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        required: true
    },
    client: {
        type: ObjectId,
        ref: "Client",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    }
},
{
    timestamps: true
});

export default mongoose.model("Order", orderSchema);