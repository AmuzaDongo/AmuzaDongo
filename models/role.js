import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;
const roleSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
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

export default mongoose.model("Role", roleSchema);