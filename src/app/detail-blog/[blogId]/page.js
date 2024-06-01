"use client";

import useFetch from "@/hooks/useFetch";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const id = useParams().blogId;
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  // console.log(id);

  return (
    <div className="container px-5 py-10 mx-auto mt-5 border border-black">
      <div className="mb-6">
        <h1 className="mb-4 text-3xl font-bold">Blog Detail</h1>
        <h1 className="text-xl text-gray-700">{blog && blog.title}</h1>
      </div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Content</h2>
        <p className="text-gray-600">{blog && blog.content}</p>
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-500">
          Author: {blog && blog.author}
        </h3>
      </div>
    </div>
  );
};

export default BlogDetail;
