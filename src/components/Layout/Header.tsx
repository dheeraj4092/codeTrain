import React from 'react';
import { Menu, X, BookOpen, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">codeTrain</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <a href="/portal" className="flex items-center text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5 mr-1" />
              Portal
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="/courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <a href="/portal" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portal</a>
              <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}