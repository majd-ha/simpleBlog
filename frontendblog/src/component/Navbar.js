import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <Link to={"/"}>majd blog</Link>
      </h1>

      <div className="links">
        <Link to={"/create"}> New Blog</Link>
        <Link to={"/about"}> About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
