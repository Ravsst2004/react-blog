"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Component UI
import AlertModal from "@/components/ui/AlertModal";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Datuk");
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleAddBlog = async (e) => {
    e.preventDefault();
    // console.log(title, content, author);

    const blog = { title, content, author };

    if (blog.title === "" || blog.content === "" || blog.author === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/blogs",
        JSON.stringify(blog),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {error && (
        <AlertModal title={"Error!"} subTitle={"Please fill in all fields."} />
      )}

      <h1 className="mt-8 text-6xl font-bold">BLOG</h1>

      <form
        action="/"
        className="flex flex-col mt-10 gap-y-5"
        onSubmit={handleAddBlog}
      >
        <div>
          <label htmlFor="title" className="block text-3xl font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="w-full p-2 border border-black rounded-lg"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-3xl font-bold">
            Content
          </label>
          <textarea
            type="text"
            id="content"
            name="content"
            placeholder="Your content here"
            className="w-full p-2 border border-black rounded-lg resize-y h-36"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-3xl font-bold">
            Author
          </label>
          <select
            name="author"
            id="author"
            defaultValue={author}
            className="w-full p-2 border border-black rounded-lg"
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Datuk">Datuk</option>
            <option value="Gobler">Gobler</option>
            <option value="Jro">Jro</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-blue-400 border border-black rounded-lg hover:bg-blue-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
