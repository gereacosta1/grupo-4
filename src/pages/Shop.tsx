import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';

export const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');
  const addItem = useCartStore(state => state.addItem);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (categoryFilter) {
      setFilteredProducts(products.filter(product => product.category === categoryFilter));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shop {categoryFilter && `- ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${product.price}</span>
                <button
                  onClick={() => addItem(product)}
                  className="bg-[#0000FF] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};