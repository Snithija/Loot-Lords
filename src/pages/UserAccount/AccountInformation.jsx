import React, { useEffect, useState } from "react";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import CartSidebar from '../../components/CartSidebar';
import axios from "axios";
import { toast } from "react-toastify";

function AccountInformation() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Fetch user info from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data?.user) {
          setUser(res.data.user);
          setFormData({
            name: res.data.user.name || "",
            email: res.data.user.email || "",
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  // Handle form input changes
  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Handle save changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return toast.error("Not authenticated");

      const res = await axios.patch(
        "http://localhost:5000/api/auth/me",
        { name: formData.name, email: formData.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.user) {
        setUser(res.data.user);
        toast.success("Profile updated successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.error || "Failed to update profile");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center py-8 px-2 sm:px-4">
        <CartSidebar />
        <div className="flex-1 w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-10 overflow-x-auto">
          <h3 className="text-[#5DA96A] font-bold text-3xl md:text-4xl mb-6">
            Account Information
          </h3>

          <div className="border-2 border-[#DFDFE2] rounded-xl p-5 flex flex-col gap-8">
            <h4 className="font-bold text-xl md:text-2xl text-black">
              Personal Info
            </h4>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name + Email */}
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
              <div className="flex justify-left mt-6">
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
