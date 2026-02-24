import { useState } from "react";
import { productsData } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Luxury", "Sports", "Smart", "Minimalist"];

  const filteredItems = productsData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 md:px-6 text-white">
      
      {/* 1. Search Bar - Optimized for Mobile Padding */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input 
            type="text"
            placeholder="Search watches..."
            className="w-full bg-gray-900 border border-gray-800 text-white px-5 py-3 rounded-full focus:outline-none focus:border-yellow-500 transition-all text-sm md:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-5 top-3.5 text-gray-500">🔍</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        
        {/* 2. Responsive Filters */}
        <div className="w-full md:w-1/4">
          <h2 className="hidden md:block text-2xl font-bold mb-6 text-yellow-500 italic">Filters</h2>
          
          {/* Mobile ma Horizontal Scroll, Desktop ma Vertical List */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full md:rounded-md border transition-all text-sm md:text-left ${
                  activeCategory === cat 
                  ? "bg-yellow-500 text-black border-yellow-500 font-bold" 
                  : "border-gray-800 hover:border-gray-500 text-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-3 text-xs text-red-500 hover:underline md:block"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* 3. Product Listing */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 border-b border-gray-800 pb-4 gap-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{activeCategory} Collections</h1>
              {searchTerm && <p className="text-xs text-yellow-500 mt-1">Results for: "{searchTerm}"</p>}
            </div>
            <p className="text-gray-500 text-sm">{filteredItems.length} Items</p>
          </div>

          {/* Grid optimized for all screens */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-gray-900/20 rounded-lg border border-dashed border-gray-800">
              <p className="text-lg text-gray-500">No watches found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;