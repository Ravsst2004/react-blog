"use client";

import BlogItem from "@/components/blog/BlogItem";
import useFetch from "@/hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="container">
      {error ? (
        <h1 className="mt-8 text-6xl font-bold text-red-600">Error.....</h1>
      ) : (
        <h1 className="mt-8 text-6xl font-bold">BLOG</h1>
      )}
      {loading && <h1>Loading....</h1>}
      {blogs && <BlogItem blogs={blogs} />}
    </div>
  );
};

export default Home;
