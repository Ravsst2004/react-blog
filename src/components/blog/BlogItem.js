import Link from "next/link";

const BlogItem = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col p-5 mt-8 border rounded-lg border-slate-400 gap-y-2"
        >
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p>
            <i>by user {blog.author}</i>
          </p>
          <p className="">{blog.content}</p>

          <Link
            href={`/detail-blog/${blog.id}`}
            className="max-w-[10rem] text-center p-2 bg-blue-300 border border-black rounded-lg"
          >
            Read More
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
