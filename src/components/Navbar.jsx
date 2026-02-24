import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-black border-b border-gray-800 sticky top-0 z-50">
        {/* Left Side: Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tighter">
          TIME FUSION
        </Link>

        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-500 transition">Products</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </div>

        {/* Right Side: Cart Icon */}
        <div 
          className="relative cursor-pointer group flex items-center gap-2 text-white"
          onClick={() => setIsCartOpen(true)}
        >
          <div className="relative">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-black animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          <span className="hidden sm:inline font-medium group-hover:text-yellow-500 transition">
            Cart
          </span>
        </div>

        <div className={`absolute top-full left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center gap-5 py-6 transition-all duration-300 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">Products</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">Contact</Link>
        </div>
      </nav>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Navbar;