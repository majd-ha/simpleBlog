import React from "react";
import { Link } from "react-router-dom";

export default function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      {blogs?.length > 0 && <h2>{title}</h2>}

      {blogs?.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>writen by : {blog.Author}</p>
        </Link>
      ))}
    </div>
  );
}
