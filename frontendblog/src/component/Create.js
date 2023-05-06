import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [Author, setAuthor] = useState("");
  const [isPending, setisPending] = useState(false);
  const navigate = useNavigate();
  const handelAdd = (e) => {
    setisPending(true);
    e.preventDefault();
    const blog = { title, body, Author };
    fetch(`http://localhost:8000/Blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => setisPending(false))
      .then(() => navigate("/"));
  };
  return (
    <div className="create">
      <h2>Add a New blog </h2>
      <form onSubmit={handelAdd}>
        <label>Blog Title :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
          {" "}
        </textarea>
        <label>Blog Author :</label>
        <input
          type="text"
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding..</button>}
      </form>
    </div>
  );
}
