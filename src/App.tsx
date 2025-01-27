import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"


function App() {
  return (
    <>
      <Navbar />
      <div className="container-xl d-grid min-vh-100" style={{ gridTemplateRows: "auto 1fr auto" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default App
