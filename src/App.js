import "./App.css";
import Navbar from "./Compontents/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Package from "./Pages/Package/Package";
import Contact from "./Pages/Contact/Contact";
import Destination from "./Pages/Destination/Destination";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Compontents/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/package" element={<Package></Package>}></Route>
        <Route
          path="/destination"
          element={<Destination></Destination>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
