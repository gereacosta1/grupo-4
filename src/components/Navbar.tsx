import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-[#0000FF]">
              VCO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-[#0000FF]">
              Inicio
            </Link>
            <Link to="/shop" className="text-gray-900 hover:text-[#0000FF]">
              Tienda
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-[#0000FF]">
              Sobre Nosotros
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-[#0000FF]">
              Contacto
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-900 hover:text-[#0000FF]" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0000FF] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-900 hover:text-[#0000FF]"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-900 hover:text-[#0000FF]"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-900 hover:text-[#0000FF]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-900 hover:text-[#0000FF]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-gray-900 hover:text-[#0000FF]"
              onClick={() => setIsMenuOpen(false)}
            >
              Carrito ({itemCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};