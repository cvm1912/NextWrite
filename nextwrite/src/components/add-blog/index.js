'use client';

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const initialBlogFormData = { title: "", description: "" };

export default function Blog() {
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    console.log(blogFormData);

    async function handleSaveBlogData() {
        try {
            setLoading(true);
            const apiResponse = await fetch("/api/blog", {
                method: "POST",
                body: JSON.stringify(blogFormData),
            });
            const result = await apiResponse.json();
            console.log("API Response:", result);
            if (result.success) {
                alert("Blog created successfully!");
                setBlogFormData(initialBlogFormData);
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (err) {
            console.error("Error saving blog data:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <div className="flex items-center justify-center w-full">
                <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-6 sm:p-10 md:p-14 flex flex-col gap-6 border-2 border-gray-300 rounded-lg shadow-md">
                    <div className="flex items-center justify-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Write your Blog here.</h1>
                    </div>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="title" className="text-base sm:text-lg md:text-2xl">Title</FieldLabel>
                            <Input id="title" placeholder="write your title." className="p-4 sm:p-6 md:p-8" name="title" value={blogFormData.title} onChange={(event) => { setBlogFormData({ ...blogFormData, title: event.target.value }) }} />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="description" className="text-base sm:text-lg md:text-2xl">Description</FieldLabel>
                            <Input
                                id="description"
                                name="description"
                                value={blogFormData.description}
                                onChange={(event) => { setBlogFormData({ ...blogFormData, description: event.target.value }) }}
                                type="text"
                                placeholder="write your description."
                                className="p-4 sm:p-6 md:p-8"
                            />
                        </Field>
                        <Field orientation="horizontal">
                            <Button type="submit" disabled={loading} className="w-full p-4 sm:p-6 md:p-8" onClick={handleSaveBlogData}>
                                {loading ? "Submitting..." : "Submit"}
                            </Button>
                        </Field>
                    </FieldGroup>
                </Card>
            </div>
        </main>
    );
}
