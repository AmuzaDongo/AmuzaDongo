import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;
const projectratingSchema = new Schema({
    rate: {
        type: [Number],
        maxLength: 5,
        default: 0
    },
    project: {
        type: ObjectId,
        ref: "Project",
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

export default mongoose.model("Projectrating", projectratingSchema);