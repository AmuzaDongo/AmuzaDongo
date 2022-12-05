import mongoose from "mongoose";
const { Schema } = mongoose;


const userSchema = new Schema({
    fname: {
        type: String,
        trim: true,
        required: true,
    },
    lname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        maxLengith: 100,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    role: {
        type: Number,
        default: 0,
    },

},
{
    timestamps: true
});

export default mongoose.model("User", userSchema);