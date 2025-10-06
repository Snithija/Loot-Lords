import React, { useEffect, useState } from "react";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import CartSidebar from '../../components/CartSidebar';
import { toast } from "react-toastify";

function AccountInformation() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        name: storedUser.name || "",
        email: storedUser.email || ""
      });
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  // Handle save changes
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Not authenticated");
      return;
    }
    // Save updated user info to localStorage
    const updatedUser = { ...user, name: formData.name, email: formData.email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    toast.success("Profile updated successfully!");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center py-8 px-2 sm:px-4">
        <CartSidebar />
        <div className="flex-1 w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-10 overflow-x-auto">
          <h3 className="text-[#5DA96A] font-bold text-3xl md:text-4xl mb-6">Account Information</h3>
          <div className="border-2 border-[#DFDFE2] rounded-xl p-5 flex flex-col gap-8">
            <h4 className="font-bold text-xl md:text-2xl text-black">Personal Info</h4>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-base text-black">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    className="border border-green-500 rounded-lg p-4 bg-white"
                    required
                  />
                </div>
                {/* Email Input */}
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium text-base text-black">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className="border border-green-500 rounded-lg p-4 bg-white"
                    required
                  />
                </div>
              </div>
              {/* Save Button */}
              <div className="flex justify-start mt-6">
                <button
                  type="submit"
                  className="w-[200px] h-[50px] bg-green-600 rounded-full text-white font-semibold text-lg transition hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountInformation;
