import { useEffect, useState } from "react";
import { Blog } from "../Blog/Blog";

export default function Blogs({ handleAddToBookmark }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">
        Blogs: {blogs.length > 0 ? blogs.length : "Loading..."}
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
          ></Blog>
        ))}
      </h1>
    </div>
  );
}
