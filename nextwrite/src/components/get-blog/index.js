"use client";
import { Card } from "@/components/ui/card";
import DeleteBlog from "@/components/delete-blog";
import EditBlog from "@/components/edit-blog";

export default function GetBlog() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Blog Title</h2>
                    <div className="gap-2 flex items-center">
                        <DeleteBlog />
                        <EditBlog />
                    </div>
                </div>
                <p className="text-xl font-light">Blog description goes here.</p>
            </Card>
        </div>
    );
}
