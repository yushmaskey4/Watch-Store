import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-primaryBlack min-h-screen text-white flex flex-col">
      <Navbar /> 
      
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer /> 
    </div>
  )
}
export default App