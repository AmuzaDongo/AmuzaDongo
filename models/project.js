import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;
const projectSchema = new Schema({
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
    photo: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        required: true,
        default: false
    },
    category: {
        type: ObjectId,
        ref: "Category",
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

export default mongoose.model("Project", projectSchema);