import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, User, Moon, Sun } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useThemeStore } from '../../store/themeStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  const handlePortalClick = () => {
    if (user?.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/portal/dashboard');
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className={`fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-sm`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">codeTrain</span>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>

            {isAuthenticated ? (
              <>
                <button
                  onClick={handlePortalClick}
                  className="flex items-center hover:text-blue-600"
                >
                  <User className="h-5 w-5 mr-1" />
                  {user?.role === 'admin' ? 'Admin Portal' : 'Student Portal'}
                </button>
                <button
                  onClick={handleLogoutClick}
                  className="hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLoginClick}
                  className="hover:text-blue-600"
                >
                  Login
                </button>
                <button
                  onClick={handleEnrollClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Enroll Now
                </button>
              </>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center hover:text-blue-600"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:text-blue-600">Home</Link>
              <Link to="/courses" className="block px-3 py-2 hover:text-blue-600">Courses</Link>
              <Link to="/about" className="block px-3 py-2 hover:text-blue-600">About</Link>
              <Link to="/blog" className="block px-3 py-2 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 hover:text-blue-600">Contact</Link>

              {isAuthenticated ? (
                <>
                  <button
                    onClick={handlePortalClick}
                    className="block w-full text-left px-3 py-2 hover:text-blue-600"
                  >
                    {user?.role === 'admin' ? 'Admin Portal' : 'Student Portal'}
                  </button>
                  <button
                    onClick={handleLogoutClick}
                    className="block w-full text-left px-3 py-2 hover:text-blue-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLoginClick}
                    className="block w-full text-left px-3 py-2 hover:text-blue-600"
                  >
                    Login
                  </button>
                  <button
                    onClick={handleEnrollClick}
                    className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Enroll Now
                  </button>
                </>
              )}

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="block w-full text-left px-3 py-2 hover:text-blue-600"
              >
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
