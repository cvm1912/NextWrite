"use client";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { useState } from 'react';
export default function GetBlog() {
    const [editingBlogId, setEditingBlogId] = useState(null);
    console.log("Editing Blog ID:", editingBlogId);

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Card className="hover:shadow-lg transition-shadow duration-300 p-6">
            <div className="flex justify-between">
                 <h2 className="text-2xl font-bold">Blog Title</h2>
                 <div className="gap-2 flex items-center justify-between">
                 <span className="text-sm text-gray-500">
                     <Trash2 size={18} />
                 </span>
                 <span className="text-sm text-gray-500"><Pencil size={18} onClick={() =>{}}/></span>
                 </div>
            </div>
            <p className="text-xl font-light">Blog description goes here.</p>
        </Card>
      
    </div>
  )
    
}