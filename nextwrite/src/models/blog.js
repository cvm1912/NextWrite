import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
   
}, {
    timestamps: true
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);