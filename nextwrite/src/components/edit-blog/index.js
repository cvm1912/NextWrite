"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function EditBlog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState({ title: "", description: "" });

    
    return (
        <>
            <Pencil size={18} className="cursor-pointer hover:text-blue-500" onClick={() => setOpen(true)} />

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setOpen(false)}>
                    <Card className="w-full max-w-lg p-8 flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
                        <h1 className="text-3xl font-bold text-center">Edit your Blog.</h1>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="title">Title</FieldLabel>
                                <Input id="title" placeholder="write your title." value={blogFormData.title} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="description">Description</FieldLabel>
                                <Input id="description" type="text" placeholder="write your description." value={blogFormData.description}  />
                            </Field>
                            <Field orientation="horizontal">
                                <Button type="submit" disabled={loading} className="w-full" >
                                    {loading ? "Updating..." : "Update"}
                                </Button>
                            </Field>
                            <Field orientation="horizontal">
                                <Button type="button" className="w-full" >
                                    Cancel
                                </Button>
                            </Field>
                        </FieldGroup>
                    </Card>
                </div>
            )}
        </>
    );
}
