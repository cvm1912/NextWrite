import connectDB from "@/database";
import { NextResponse } from "next/server";
import Joi from "joi";
// Always import your model
import Blog from "@/models/blog";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// POST must be uppercase in Next.js
export async function POST(request) {
  try {
    await connectDB();

    const blogData = await request.json();
    console.log("Received blog data:", blogData);
    const { error } = AddNewBlog.validate(blogData);
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    const newlyCreatedBlog = await Blog.create(blogData);

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog: newlyCreatedBlog,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating blog:", err);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while creating the blog",
      },
      { status: 500 }
    );
  }
}

