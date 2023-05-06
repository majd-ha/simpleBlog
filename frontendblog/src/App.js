import { Route, Routes } from "react-router-dom";

import About from "./component/About";
import BlogDetails from "./component/BlogDetails";
import Create from "./component/Create";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
