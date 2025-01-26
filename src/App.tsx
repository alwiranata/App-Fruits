import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Navbar from "./pages/Navbar"


function App () {
  return( 
    <>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
