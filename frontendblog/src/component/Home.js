import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
  const api = "http://localhost:8000/Blogs";
  const { data, isPending, error } = useFetch(api);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <h1>Loading.......</h1>}
      {data && <BlogList blogs={data} title="All blogs" />}
    </div>
  );
}
