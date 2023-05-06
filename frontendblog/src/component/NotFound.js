import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>WE ARE SORRY !! </h1>
      <p>this page does not exsist</p>
      <Link to={"/"}>go back to homepage..</Link>
    </div>
  );
}
