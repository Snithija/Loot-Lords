import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Modal from "../../components/common/Modal";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice } = useCart();
  const [shippingType, setShippingType] = useState("delivery");
  const [selectedAddress, setSelectedAddress] = useState("address1");
  const [shippingMethod, setShippingMethod] = useState("regular");

  const subtotal = getTotalPrice();
  const taxRate = 0.1;

  const [addresses, setAddresses] = useState({
    address1: {
      name: "Benjamin Harrison Whitmore",
      phone: "+1(555)246-8097",
      email: "benjamin.whitmore@example.com",
      address:
        "4567 Oakwood Heights Avenue, Building 12, Apartment 34B, Riverview District, New York, NY 10001, USA",
      type: "delivery",
    },
    address2: {
      name: "Benjamin Harrison Whitmore",
      phone: "+1(555)246-8097",
      email: "benjamin.whitmore@example.com",
      address:
        "4567 Oakwood Heights Avenue, Building 12, Apartment 34B, Riverview District, New York, NY 10001, USA",
      type: "pickup",
    },
  });

  const shippingMethods = {
    free: {
      label: "Free",
      description: "7-14 business days",
      price: 0,
    },
    regular: {
      label: "Regular shipping",
      description: "4-7 business days",
      price: 2,
    },
    express: {
      label: "Express shipping",
      description: "1-3 business days",
      price: 5,
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    type: "delivery",
  });
  const [editKey, setEditKey] = useState(null);

  // New state for promo modal and promo code
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  // New loading state for overlay
  const [loading, setLoading] = useState(false);

  const tax = subtotal * taxRate;
  const shippingCost = shippingMethods[shippingMethod]?.price || 0;
  const total = subtotal + tax + shippingCost - discountAmount;

  const openAddModal = () => {
    setModalMode("add");
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      type: shippingType,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (key) => {
    setModalMode("edit");
    setEditKey(key);
    setFormData({ ...addresses[key] });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditKey(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      const newKey = `address${Date.now()}`;
      setAddresses((prev) => ({ ...prev, [newKey]: formData }));
      setSelectedAddress(newKey);
    } else if (modalMode === "edit" && editKey) {
      setAddresses((prev) => ({ ...prev, [editKey]: formData }));
    }
    closeModal();
  };

  const deleteAddress = (key) => {
    setAddresses((prev) => {
      const newAddresses = { ...prev };
      delete newAddresses[key];
      return newAddresses;
    });
    if (selectedAddress === key) {
      const remainingKeys = Object.keys(addresses).filter(
        (k) => k !== key && addresses[k].type === shippingType
      );
      setSelectedAddress(remainingKeys.length > 0 ? remainingKeys[0] : null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout - StoreOne</title>
        <meta name="description" content="Complete your order checkout" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-1">
          <div className="min-h-screen bg-white p-6 max-w-7xl mx-auto">
            <h1 className="text-lg font-semibold mb-6">Order Details</h1>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-6 mb-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span className="mt-1 text-xs text-gray-600">Cart</span>
              </div>
              {/* Line */}
              <div className="flex-1 h-[2px] bg-green-600"></div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-2 border-green-600 flex items-center justify-center text-green-600 text-xs font-semibold">
                  2
                </div>
                <span className="mt-1 text-xs font-semibold text-green-600">
                  Checkout
                </span>
              </div>
              {/* Line */}
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-300 text-xs font-semibold">
                  3
                </div>
                <span className="mt-1 text-xs text-gray-400">Pay</span>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left side */}
              <div className="flex-1">
                {/* Delivery / Pickup toggle */}
                <div className="flex gap-3 mb-4">
                  <button
                    onClick={() => setShippingType("delivery")}
                    className={`px-4 py-1 rounded-full font-semibold text-sm border ${
                      shippingType === "delivery"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    Delivery
                  </button>
                  <button
                    onClick={() => setShippingType("pickup")}
                    className={`px-4 py-1 rounded-full font-semibold text-sm border ${
                      shippingType === "pickup"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    Pick Up
                  </button>
                </div>

                {/* Shipping Address Section */}
                <div className="mb-6 border border-gray-300 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-lg">
                      {shippingType === "pickup"
                        ? "Pickup Address"
                        : "Shipping Address"}
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          if (selectedAddress) openEditModal(selectedAddress);
                        }}
                        disabled={!selectedAddress}
                        className={`text-green-600 text-sm font-semibold border border-green-600 rounded px-3 py-1 transition ${
                          selectedAddress
                            ? "hover:bg-green-50 cursor-pointer"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={openAddModal}
                        className="text-red-600 text-sm font-semibold border border-red-600 rounded px-3 py-1"
                      >
                        Add New
                      </button>
                    </div>
                  </div>
                  {(() => {
                    const filteredAddresses = Object.entries(addresses).filter(
                      ([key, addr]) => addr.type === shippingType
                    );
                    if (shippingType === "pickup" && filteredAddresses.length === 0) {
                      return (
                        <div className="border rounded-md p-4 bg-gray-50">
                          <p className="font-semibold">
                            StoreOne Warehouse NY District
                          </p>
                          <p className="text-sm">+1(555)123-456-7890</p>
                          <p className="text-xs">
                            4567 Oakwood Heights Avenue, Building 12, Apartment 34B,
                            Riverview District, New York, NY 10001, USA
                          </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex gap-4">
                          {filteredAddresses.map(([key, addr]) => (
                            <div
                              key={key}
                              onClick={() => setSelectedAddress(key)}
                              className={`border rounded-md p-4 cursor-pointer w-1/2 ${
                                selectedAddress === key
                                  ? "border-green-600 bg-green-50"
                                  : "border-gray-300 bg-gray-100"
                              }`}
                            >
                              <div>
                                <p className="font-semibold">{addr.name}</p>
                                <p className="text-sm">{addr.phone}</p>
                                <p className="text-xs">{addr.email}</p>
                                <p className="text-xs">{addr.address}</p>
                              </div>
                              <div className="flex gap-2 mt-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteAddress(key);
                                  }}
                                  className="text-red-600 text-xs"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                  })()}
                </div>

                {/* Buttons for Pickup mode */}
                {shippingType === "pickup" && (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => navigate("/cart")}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                    >
                      Back To Cart
                    </button>
                    <button
                      onClick={() => {
                        setLoading(true);
                        setIsPromoModalOpen(false);
                        setTimeout(() => {
                          setLoading(false);
                          navigate("/pay");
                        }, 3000);
                      }}
                      className="px-6 py-2 bg-orange-300 text-white rounded font-semibold hover:bg-orange-400 transition"
                    >
                      Save and Pay
                    </button>
                  </div>
                )}

                {/* Shipping Method */}
                {shippingType !== "pickup" && (
                  <>
                    <div className="mb-6">
                      <h2 className="font-semibold mb-3">Shipping Method</h2>
                      <div className="flex flex-col gap-3">
                        {Object.entries(shippingMethods).map(([key, method]) => (
                          <label
                            key={key}
                            className={`flex items-center justify-between border rounded-md p-3 cursor-pointer ${
                              shippingMethod === key
                                ? "border-green-600 bg-green-50"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            <div>
                              <input
                                type="radio"
                                name="shippingMethod"
                                value={key}
                                checked={shippingMethod === key}
                                onChange={() => setShippingMethod(key)}
                                className="mr-3"
                              />
                              <span className="font-semibold">{method.label}</span>
                              <p className="text-xs text-gray-600">
                                {method.description}
                              </p>
                            </div>
                            <div className="font-semibold">${method.price}</div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => navigate("/cart")}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                      >
                        Back To Cart
                      </button>
                      <button
                        onClick={() => {
                          setLoading(true);
                          setIsPromoModalOpen(false);
                          setTimeout(() => {
                            setLoading(false);
                            navigate("/pay");
                          }, 3000);
                        }}
                        className="px-6 py-2 bg-orange-300 text-white rounded font-semibold hover:bg-orange-400 transition"
                      >
                        Save and Pay
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Right side */}
              <div className="w-full lg:w-80 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setIsPromoModalOpen(true);
                    setPromoError("");
                  }}
                  className="relative flex items-center border border-blue-500 rounded-lg p-3 w-full text-blue-500 text-sm font-semibold hover:bg-blue-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-full p-2 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-blue-600 font-semibold">
                        Apply Promo, Coupon, or Voucher
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Get Discount with your order
                      </p>
                    </div>
                  </div>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width="20"
                    height="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="border border-gray-300 rounded-lg p-4 text-sm">
                  <h3 className="font-semibold mb-3">Order Summary</h3>
                  <div className="flex justify-between mb-1">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {shippingType !== "pickup" && (
                    <div className="flex justify-between mb-1">
                      <span>Shipping</span>
                      <span>${shippingCost.toFixed(2)}</span>
                    </div>
                  )}
                  {discountAmount > 0 && (
                    <div className="flex justify-between mb-1">
                      <span>Discount ({appliedPromoCode})</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between mb-1">
                    <span>Tax(10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for Add/Edit Address */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg w-full max-w-md">
                  <h2 className="text-lg font-semibold mb-4">
                    {modalMode === "add" ? "Add New Address" : "Edit Address"}
                  </h2>
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        rows="3"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Type</label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      >
                        <option value="delivery">Delivery</option>
                        <option value="pickup">Pickup</option>
                      </select>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                      >
                        {modalMode === "add" ? "Add" : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 bg-gray-100 bg-opacity-70 flex items-center justify-center rounded-lg z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-75"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-150"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-300"></span>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">
                    Preparing your order
                  </span>
                </div>
              </div>
            )}

            {/* Promo Code Modal */}
            <Modal
              isOpen={isPromoModalOpen}
              onClose={() => setIsPromoModalOpen(false)}
              className="max-h-80 h-auto"
            >
              <h2 className="text-lg font-semibold mb-4">Promo</h2>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-3 mb-6 text-lg"
                placeholder="DISCOUNT10"
              />
              {promoError && (
                <p className="text-red-500 text-sm mb-2">{promoError}</p>
              )}
              <button
                onClick={() => {
                  setPromoError("");
                  if (promoCode.toUpperCase() === "DISCOUNT10") {
                    const discount = subtotal * 0.1;
                    setDiscountAmount(discount);
                    setAppliedPromoCode(promoCode.toUpperCase());
                    setPromoCode("");
                    setIsPromoModalOpen(false);
                  } else {
                    setPromoError("Invalid promo code. Try DISCOUNT10");
                  }
                }}
                className="w-full bg-green-600 text-white py-3 rounded font-semibold text-lg hover:bg-green-700 transition"
              >
                Apply
              </button>
            </Modal>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Checkout;