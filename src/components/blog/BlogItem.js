const BlogItem = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="p-5 mt-8 border rounded-lg border-slate-400"
        >
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p>
            <i>by user {blog.author}</i>
          </p>
          <p className="mt-3">{blog.content}</p>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
