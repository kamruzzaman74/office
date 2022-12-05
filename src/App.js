import React from "react";

import {BrowserRouter ,Route,Routes} from "react-router-dom";
import Home from "./Route/Home";
import About from "./Route/About";
import Contact from "./Route/Contact";
import Services from "./Route/Services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Blog from "./Route/Blog";





function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/blog" element={<Blog/>}/>
    


   </Routes>
   
   
   
   <Footer/>
   </BrowserRouter>

   
  );
}

export default App;
