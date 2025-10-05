import { useState } from "react";
// import CartSidebar from "../components/CartSidebar";
import CartSidebar from '../../components/CartSidebar'
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

function Address() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [addresses, setAddresses] = useState([
    {
      fullName: "Roberts Adams",
      phone: "+61 400 123 456",
      address:
        "25 Smith Street, Apartment 12B, Springfield Heights Complex, Melbourne, VIC 3000"
    },
    {
      fullName: "Roberts Adams",
      phone: "+61 400 123 456",
      address:
        "78 Wellington Road, Unit 5A, Harbor View Apartments, Sydney, NSW 2000"
    }
  ]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    street: ""
  });

  // open modal for Add
  const openModal = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      zip: "",
      street: ""
    });
    setIsEditing(false);
    setEditIndex(null);
    setShowModal(true);
  };

  // open modal for Edit
  const openEditModal = (index) => {
    const addr = addresses[index];
    const parts = addr.address.split(",").map((p) => p.trim());
    setForm({
      fullName: addr.fullName,
      email: addr.email || "",
      phone: addr.phone,
      country: "",
      state: parts[2] || "",
      city: parts[1] || "",
      zip: parts[3] || "",
      street: parts[0] || ""
    });
    setIsEditing(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle Add / Edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.fullName &&
      form.phone &&
      form.street &&
      form.city &&
      form.state &&
      form.zip
    ) {
      if (isEditing && editIndex !== null) {
        // update existing
        const updated = [...addresses];
        updated[editIndex] = {
          ...updated[editIndex],
          fullName: form.fullName,
          phone: form.phone,
          address: `${form.street}, ${form.city}, ${form.state}, ${form.zip}`
        };
        setAddresses(updated);
      } else {
        // add new
        setAddresses((prev) => [
          ...prev,
          {
            fullName: form.fullName,
            phone: form.phone,
            address: `${form.street}, ${form.city}, ${form.state}, ${form.zip}`
          }
        ]);
      }
      closeModal();
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center py-8 px-2 sm:px-4">
        <CartSidebar />
        <div className="flex-1 w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-10 overflow-x-auto">
          <h3 className="text-[#5DA96A] font-bold text-3xl md:text-4xl mb-6">
            Address
          </h3>
          <div className="border-2 border-[#DFDFE2] rounded-xl p-5 flex flex-col gap-8">
            {/* Address Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((addr, idx) => (
                <div
                  key={idx}
                  className="bg-[#EBEBEB] rounded-2xl p-4 flex flex-col gap-3 w-full"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-black">
                      {addr.fullName}
                    </span>
                    <button
                      className="p-1 hover:opacity-80 transition"
                      onClick={() => openEditModal(idx)}
                    >
                      ✎
                    </button>
                  </div>
                  <p className="text-base md:text-lg text-black">
                    {addr.phone}, {addr.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Add New Address */}
            <div className="flex justify-start">
              <button
                className="flex items-center w-full max-w-[460px] gap-4 p-8 bg-green-50 rounded-2xl my-4 hover:bg-green-100 transition"
                onClick={openModal}
              >
                <span className="w-8 h-8 text-[#5DA96A] text-2xl">+</span>
                <span className="text-xl font-bold text-[#5DA96A]">
                  Add New Address
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal popup for Add/Edit */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50 overflow-auto p-4">
          <div className="bg-white rounded-2xl border-2 border-[#DFDFE2] w-full max-w-[920px] p-8 flex flex-col gap-6">
            <h4 className="text-2xl font-semibold text-black mb-1">
              Personal Info
            </h4>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold text-lg text-black">
                    Full Name *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    Email *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    Phone *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    Country *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    State *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    City *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    Zip Code *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-lg text-black">
                    Street Address *
                  </label>
                  <input
                    className="w-full mt-1 border-2 border-[#CBCBCB] rounded-lg px-4 py-3"
                    name="street"
                    value={form.street}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4 justify-start">
                <button
                  type="submit"
                  className="bg-[#5DA96A] font-bold text-lg text-white px-8 py-3 rounded-full"
                >
                  {isEditing ? "Save Address" : "Add Address"}
                </button>
                <button
                  type="button"
                  className="bg-[#EDEDED] font-bold text-lg text-black px-8 py-3 rounded-full"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Address;
