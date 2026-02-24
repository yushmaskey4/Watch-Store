import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg hover:border-gold transition-all group flex flex-col h-full">
      
      <div className="w-full h-64 overflow-hidden rounded-md bg-black flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <div className="flex flex-col grow mt-4">
        <h3 className="text-xl font-bold line-clamp-1">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{product.category}</p>
        
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className="text-gold font-bold text-lg">Rs. {product.price}</span>
          <div className="mt-auto pt-4 flex flex-col gap-2">
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-gold text-black py-2 font-bold rounded hover:bg-white transition-all text-sm"
        >
          ADD TO CART
        </button>
        
        <Link to={`/product/${product.id}`} className="text-center text-xs text-gray-500 hover:text-white">
          VIEW DETAILS
        </Link>
      </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;