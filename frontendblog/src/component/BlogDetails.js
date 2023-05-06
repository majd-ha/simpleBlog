import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://backendblog3.onrender.com/Blogs/${id}`
  );
  const hanelclick = () => {
    fetch(`https://backendblog3.onrender.com/Blogs/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>{data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
      <button onClick={hanelclick}>delete</button>
    </div>
  );
}
