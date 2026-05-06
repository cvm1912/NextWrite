import connectDB from "@/database";
import { NextResponse } from "next/server";
import Joi from "joi";
import Blog from "@/models/blog";

const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});

export async function POST(request) {
    try {
        await connectDB();
        const blogData = await request.json();
        const { error } = AddNewBlog.validate(blogData);
        if (error) {
            return NextResponse.json({ success: false, message: error.details[0].message }, { status: 400 });
        }
        const newlyCreatedBlog = await Blog.create(blogData);
        return NextResponse.json({ success: true, message: "Blog created successfully", blog: newlyCreatedBlog }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ success: false, message: "An error occurred while creating the blog" }, { status: 500 });
    }
}
