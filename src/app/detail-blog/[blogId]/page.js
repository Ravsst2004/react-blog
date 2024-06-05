"use client";

import ConfirmModal from "@/components/ui/ConfirmModal";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogDetail = () => {
  const router = useRouter();
  const id = useParams().blogId;

  // State to control the visibility of the confirmation modal
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Fetch the blog data using the custom hook useFetch
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  // Function to delete the blog by making a DELETE request
  const deleteBlog = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/blogs/${id}`);
      // Redirect to home page after successful deletion
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Delete Function to Make a confirm modal appear
  const handleModalDelete = () => {
    setConfirmDelete(true);
  };

  // Function to handle the confirmation or cancellation of deletion
  const handleConfirmDelete = () => {
    deleteBlog();
    setConfirmDelete(false);
  };
  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  /* Conditionally render the loading and error states */
  if (loading) return <p className="mt-5 font-bold text-3xl">Loading...</p>;
  if (error)
    return <p className="mt-5 font-bold text-3xl text-red-600">Not Found</p>;
  return (
    <>
      {/* Conditionally render the ConfirmModal and pass the handleConfirm and handleCancel functions */}
      {confirmDelete && (
        <ConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      <div className="mx-4 md:mx-32">
        <div className="container px-5 py-10 mx-auto mt-5 border border-black rounded-xl">
          <h1 className="text-3xl font-bold">{blog && blog.title}</h1>
          <h3 className="mb-4 text-xl font-medium text-gray-500">
            <i>By {blog && blog.author}</i>
          </h3>
          <p className="text-gray-600">{blog && blog.content}</p>

          {/* Button to trigger the delete confirmation */}
          <button
            onClick={handleModalDelete}
            className="p-2 mt-5 text-white bg-red-500 border border-red-500 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
