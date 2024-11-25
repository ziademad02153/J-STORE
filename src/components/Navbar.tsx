import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, toggleCart } = useCartStore();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container-custom mx-auto px-4 sm:px-6 h-16">
          <div className="flex items-center justify-between h-full">
            {/* Logo and Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <a href="#" className="flex items-center gap-2">
                <img 
                  src="https://i.imgur.com/izEdImU.jpg"
                  alt="JAGUAR"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-base sm:text-lg font-bold">JAGUAR</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8">
              <a href="#products" className="nav-link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                Products
              </a>
              <a href="#contact" className="nav-link text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                Contact Us
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <button 
                onClick={toggleCart}
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white dark:bg-gray-800 md:hidden">
            <div className="container-custom mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-8">
                <a href="#" className="flex items-center gap-2">
                  <img 
                    src="https://i.imgur.com/izEdImU.jpg"
                    alt="JAGUAR"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-lg font-bold">JAGUAR</span>
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <a 
                  href="#products" 
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}