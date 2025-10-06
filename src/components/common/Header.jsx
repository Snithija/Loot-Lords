import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchMe } from "../../services/auth";
import { useFavorites } from "../../context/FavoritesContext";
import CartButton from "./CartButton";
// import { useFavorites } from "../../context/FavoritesContext"; // adjust path if needed

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const { count } = useFavorites();
  const displayCount = count > 99 ? "99+" : count;

  // Sample products data
  const allProducts = [
    { id: 201, title: "Hoodie Gray", category: "clothing" },
    { id: 202, title: "White Hoodie", category: "clothing" },
    { id: 203, title: "Audere Hoodie", category: "clothing" },
    { id: 204, title: "Hoodie Black White", category: "clothing" },
    { id: 205, title: "Running Shoes Black", category: "shoes" },
    { id: 206, title: "Casual T-Shirt", category: "clothing" },
    { id: 207, title: "Sports Sneakers", category: "shoes" },
    { id: 208, title: "Leather Jacket", category: "clothing" },
    { id: 209, title: "Denim Jeans", category: "clothing" },
    { id: 210, title: "Canvas Shoes", category: "shoes" },
    { id: 211, title: "Winter Jacket", category: "clothing" },
    { id: 212, title: "Leather Wallet", category: "accessories" },
    { id: 213, title: "Sunglasses", category: "accessories" },
    { id: 214, title: "Baseball Cap", category: "accessories" },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const urlSearchQuery = urlParams.get("search") || "";
    setSearchQuery(urlSearchQuery);
    setMobileSearchQuery(urlSearchQuery);
  }, [location.search]);

  useEffect(() => {
    // Load user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser?.name ? storedUser : null);
  }, [location.pathname]);

  const generateSuggestions = (query) => {
    if (!query.trim()) return [];

    const lowercaseQuery = query.toLowerCase();

    // Product suggestions
    const productSuggestions = allProducts.filter(product =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 6);

    // Category suggestions
    const categories = ["clothing", "shoes", "accessories"];
    const categorySuggestions = categories
      .filter(cat => cat.toLowerCase().includes(lowercaseQuery))
      .map(cat => ({
        id: `cat_${cat}`,
        title: `${cat.charAt(0).toUpperCase() + cat.slice(1)}`,
        category: cat,
        isCategory: true,
      }));

    return [...categorySuggestions, ...productSuggestions];
  };

  const handleSearchInputChange = (value) => {
    setSearchQuery(value);
    const newSuggestions = generateSuggestions(value);
    setSuggestions(newSuggestions);
    setShowSuggestions(value.length > 0 && newSuggestions.length > 0);
  };

  const handleMobileSearchInputChange = (value) => {
    setMobileSearchQuery(value);
    const newSuggestions = generateSuggestions(value);
    setSuggestions(newSuggestions);
    setShowMobileSuggestions(value.length > 0 && newSuggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.isCategory) {
      navigate(`/products?cat=${suggestion.category}`);
    } else {
      setSearchQuery(suggestion.title);
      navigate(`/products?search=${encodeURIComponent(suggestion.title)}`);
    }
    setShowSuggestions(false);
    setShowMobileSuggestions(false);
  };

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
    localStorage.removeItem("user");
    setUser(null);
    setUserDropdownOpen(false);
    navigate("/signin");
  };

  const handleLoginClick = () => navigate("/signin");

  const handleSearch = (query) => {
    const trimmedQuery = query?.trim() || "";
    if (trimmedQuery) {
      const cleanQuery = trimmedQuery.replace(/[<>]/g, "");
      if (cleanQuery.length > 0 && cleanQuery.length <= 100) {
        navigate(`/products?search=${encodeURIComponent(cleanQuery)}`);
      }
    } else {
      navigate("/products");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(mobileSearchQuery);
    setMenuOpen(false);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
      setShowSuggestions(false);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handleMobileSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(mobileSearchQuery);
      setMenuOpen(false);
      setShowMobileSuggestions(false);
    } else if (e.key === "Escape") {
      setShowMobileSuggestions(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) {
        setShowSuggestions(false);
        setShowMobileSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path);
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
            <div className="flex-1 max-w-md search-container">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchInputChange(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  onFocus={() => {
                    if (searchQuery.trim()) {
                      handleSearchInputChange(searchQuery);
                    }
                  }}
                  className="w-full pl-12 pr-10 py-3 text-gray-700 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-500 font-['Plus_Jakarta_Sans'] text-base"
                />
                <button
                  type="submit"
                  className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                  aria-label="Search"
                >
                  <img
                    src="/images/img_search.svg"
                    alt="Search"
                    className="w-5 h-5"
                  />
                </button>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setShowSuggestions(false);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </form>

              {/* Desktop Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={suggestion.id || index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 text-sm text-gray-700 font-['Plus_Jakarta_Sans']"
                    >
                      {suggestion.title}
                      {suggestion.isCategory && (
                        <span className="text-xs text-gray-500 ml-2">(Category)</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
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
              <div className="px-2 search-container">
                <form onSubmit={handleMobileSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={mobileSearchQuery}
                    onChange={(e) => handleMobileSearchInputChange(e.target.value)}
                    onKeyPress={handleMobileSearchKeyPress}
                    onFocus={() => {
                      if (mobileSearchQuery.trim()) {
                        handleMobileSearchInputChange(mobileSearchQuery);
                      }
                    }}
                    className="w-full pl-12 pr-10 py-3 text-gray-700 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-500 font-['Plus_Jakarta_Sans'] text-base"
                  />
                  <button
                    type="submit"
                    className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                    aria-label="Search"
                  >
                    <img
                      src="/images/img_search.svg"
                      alt="Search"
                      className="w-5 h-5"
                    />
                  </button>
                  {mobileSearchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileSearchQuery("");
                        setShowMobileSuggestions(false);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity text-gray-400 hover:text-gray-600"
                      aria-label="Clear search"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </form>

                {/* Mobile Suggestions Dropdown */}
                {showMobileSuggestions && suggestions.length > 0 && (
                  <div className="absolute left-2 right-2 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={suggestion.id || index}
                        onClick={() => {
                          handleSuggestionClick(suggestion);
                          setMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 text-sm text-gray-700 font-['Plus_Jakarta_Sans']"
                      >
                        {suggestion.title}
                        {suggestion.isCategory && (
                          <span className="text-xs text-gray-500 ml-2">(Category)</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
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
