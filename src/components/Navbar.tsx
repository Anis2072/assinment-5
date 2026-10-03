import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-pink-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
            DS
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Dev Stack</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-gray-500 font-medium text-sm">
          <a href="#home" className="text-pink-600 font-semibold transition">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition cursor-pointer px-3 py-1.5">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full font-medium text-sm hover:opacity-95 transition shadow-sm cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-pink-600 font-medium">Home</a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="block text-gray-600">Technologies</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-600">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-600">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-600">Contact</a>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button className="w-full py-2 text-gray-700 bg-gray-50 rounded-lg font-medium text-sm">Sign In</button>
            <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-medium text-sm">Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
};