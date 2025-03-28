import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">VCO</h1>
              <p className="text-xl md:text-2xl mb-8">Redefining Modern Fashion</p>
              <Link
                to="/shop"
                className="bg-[#0000FF] text-white px-8 py-3 rounded-none hover:bg-blue-700 transition duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-96 group overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Link
                  to="/shop?category=men"
                  className="text-white text-2xl font-bold hover:underline"
                >
                  Men
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 group overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Link
                  to="/shop?category=women"
                  className="text-white text-2xl font-bold hover:underline"
                >
                  Women
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-96 group overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Link
                  to="/shop?category=accessories"
                  className="text-white text-2xl font-bold hover:underline"
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};