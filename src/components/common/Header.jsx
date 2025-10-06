import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchMe } from "../../services/auth";
import CartButton from "./CartButton";
import { useFavorites } from "../../context/FavoritesContext"; // adjust path if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const { count } = useFavorites();
  const displayCount = count > 99 ? "99+" : count;
  // helper: active path check
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path);

  const handleLoginClick = () => navigate("/signin");

  // Load current user if token exists
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const u = await fetchMe(); // returns null if not logged in
        if (mounted) setUser(u);
      } catch {
        if (mounted) setUser(null);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!userDropdownOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [userDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setUserDropdownOpen(false);
    navigate("/signin");
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section - Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/images/img_frame.svg"
              alt="StoreOne Logo"
              className="w-8 h-8"
            />
            <span className="text-xl lg:text-2xl font-bold text-gray-900 font-['Plus_Jakarta_Sans']">
              StoreOne
            </span>
          </div>

          {/* Center Section - Navigation & Search */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 max-w-4xl mx-8">
            {/* Navigation Menu */}
            <nav className="flex items-center space-x-8">
              {/* Home */}
              <button
                onClick={() => navigate("/")}
                className={`text-lg font-semibold transition-colors font-['Plus_Jakarta_Sans'] ${
                  isActive("/")
                    ? "text-green-600"
                    : "text-gray-900 hover:text-green-600"
                }`}
              >
                Home
              </button>

              {/* Category */}
              <div className="relative group">
                <button
                  onClick={() => navigate("/products")}
                  className={`flex items-center gap-2 text-lg font-semibold transition-colors font-['Plus_Jakarta_Sans'] ${
                    isActive("/products")
                      ? "text-green-600"
                      : "text-gray-900 hover:text-green-600"
                  }`}
                >
                  Category
                  <img
                    src="/images/img_vector.svg"
                    alt="Dropdown"
                    className="w-4 h-2"
                  />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50 mt-1">
                  <button
                    onClick={() => navigate("/products?cat=clothing")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 font-['Plus_Jakarta_Sans']"
                  >
                    Clothing
                  </button>
                  <button
                    onClick={() => navigate("/products?cat=shoes")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 font-['Plus_Jakarta_Sans']"
                  >
                    Shoes
                  </button>
                  <button
                    onClick={() => navigate("/products?cat=accessories")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 font-['Plus_Jakarta_Sans']"
                  >
                    Accessories
                  </button>
                </div>
              </div>

              {/* Promo (aligned to /promo-products) */}
              <button
                onClick={() => navigate("/promo-products")}
                className={`text-lg font-semibold transition-colors font-['Plus_Jakarta_Sans'] ${
                  isActive("/promo-products")
                    ? "text-green-600"
                    : "text-gray-900 hover:text-green-600"
                }`}
              >
                Promo
              </button>
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-12 pr-4 py-3 text-gray-700 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-500 font-['Plus_Jakarta_Sans'] text-base"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <img
                    src="/images/img_search.svg"
                    alt="Search"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Language (dummy) */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <img
                  src="/images/img_flag.png.jpg"
                  alt="Flag"
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
                <img
                  src="/images/img_vector.svg"
                  alt="Dropdown"
                  className="w-3 h-2"
                />
              </button>
            </div>

            {/* Favorites */}
            <div className="relative">
              <button
                className="p-2 hover:opacity-80 transition-opacity"
                onClick={() => navigate("/favorites")}
                aria-label="Open favorites"
                title="Favorites"
              >
                <img
                  src="/images/img_favorite_icon.svg"
                  alt="Favorites"
                  className="w-6 h-6"
                />
              </button>

              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans']">
                  {displayCount}
                </span>
              )}
            </div>

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="p-2 hover:opacity-80 transition-opacity"
                onClick={() => setUserDropdownOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={userDropdownOpen}
              >
                <img
                  src="/images/img_user_alt.svg"
                  alt="User Account"
                  className="w-6 h-6"
                />
              </button>

              {userDropdownOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg py-4 px-6 min-w-[220px] z-50 mt-2 border border-gray-200">
                  {!user ? (
                    // Logged OUT UI
                    <div className="flex flex-col items-center space-y-3">
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigate("/signup-email");
                        }}
                        className="text-gray-700 hover:text-gray-900 transition-colors font-['Plus_Jakarta_Sans'] text-sm"
                      >
                        Register your account
                      </button>

                      <div className="text-gray-400 font-['Plus_Jakarta_Sans'] text-xs">
                        OR
                      </div>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          handleLoginClick();
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-['Plus_Jakarta_Sans'] text-sm font-medium w-full"
                      >
                        Login to your account
                      </button>
                    </div>
                  ) : (
                    // Logged IN UI
                    <div className="flex flex-col gap-3">
                      <div className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">
                        Signed in as
                        <br />
                        <span className="font-semibold text-gray-800">
                          {user.name || user.email}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigate("/account");
                        }}
                        className="text-gray-700 hover:text-gray-900 text-left transition-colors font-['Plus_Jakarta_Sans'] text-sm"
                      >
                        My Account
                      </button>
                      <button
                        onClick={handleLogout}
                        className="text-red-600 hover:text-red-700 text-left font-semibold transition-colors font-['Plus_Jakarta_Sans'] text-sm"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative">
              <CartButton />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="block lg:hidden p-2"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Search Bar Mobile */}
              <div className="px-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-12 pr-4 py-3 text-gray-700 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-500 font-['Plus_Jakarta_Sans'] text-base"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <img
                      src="/images/img_search.svg"
                      alt="Search"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2 px-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/");
                  }}
                  className={`text-left text-lg font-semibold py-2 font-['Plus_Jakarta_Sans'] ${
                    isActive("/")
                      ? "text-green-600"
                      : "text-gray-900 hover:text-green-600"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/products");
                  }}
                  className={`text-left text-lg font-semibold py-2 font-['Plus_Jakarta_Sans'] ${
                    isActive("/products")
                      ? "text-green-600"
                      : "text-gray-900 hover:text-green-600"
                  }`}
                >
                  Category
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/promo-products");
                  }}
                  className={`text-left text-lg font-semibold py-2 font-['Plus_Jakarta_Sans'] ${
                    isActive("/promo-products")
                      ? "text-green-600"
                      : "text-gray-900 hover:text-green-600"
                  }`}
                >
                  Promo
                </button>

                {/* Auth actions for mobile */}
                {!user ? (
                  <div className="flex gap-3 px-2 pt-2">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/signin");
                      }}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-['Plus_Jakarta_Sans'] text-sm font-medium"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/signup");
                      }}
                      className="flex-1 border border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors font-['Plus_Jakarta_Sans'] text-sm font-medium"
                    >
                      Register
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 px-2 pt-2">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/account");
                      }}
                      className="flex-1 border border-gray-300 text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors font-['Plus_Jakarta_Sans'] text-sm font-medium"
                    >
                      My Account
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleLogout();
                      }}
                      className="flex-1 border border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors font-['Plus_Jakarta_Sans'] text-sm font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
