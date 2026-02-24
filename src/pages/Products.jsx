import { useState } from "react";
import { productsData } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // 1. Search ko naya state

  const categories = ["All", "Luxury", "Sports", "Smart", "Minimalist"];

  // 2. Modified Filter Logic: Category ra Search dubai check garchha
  const filteredItems = productsData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      
      {/* 3. Search Bar Section - Full Width */}
      <div className="mb-10 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input 
            type="text"
            placeholder="Search by watch name or brand (e.g. Rolex, Apple)..."
            className="w-full bg-gray-900 border border-gray-800 text-white px-5 py-3 rounded-full focus:outline-none focus:border-gold transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-5 top-3 text-gray-500">
            🔍
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-6 text-gold italic">Filters</h2>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-2 rounded-md border transition-all ${
                  activeCategory === cat 
                  ? "bg-gold text-black border-gold font-bold" 
                  : "border-gray-800 hover:border-gray-500 text-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Clear Search Button (Optional) */}
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-5 text-sm text-red-500 hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Product Listing */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
            <div>
              <h1 className="text-3xl font-bold">{activeCategory} Collections</h1>
              {searchTerm && <p className="text-sm text-gold mt-1">Results for: "{searchTerm}"</p>}
            </div>
            <p className="text-gray-500">{filteredItems.length} Products found</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-gray-900/30 rounded-lg border border-dashed border-gray-700">
              <p className="text-xl text-gray-500 mb-2">Oops! No watches found.</p>
              <p className="text-gray-600">Try searching for something else or change the category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;