import { useParams, useNavigate } from "react-router-dom";
import arrow from '../../assets/imgs/arrow.png'
import CartSidebar from '../../components/CartSidebar'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

function OrderConfirmationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const order = {
    id,
    number: `#${id}01000001`,
    date: "7 Jul 2024 06:19 PM",
    status: "Pending",
    paymentStatus: "Waiting Confirmation",
    paymentType: "Manual Transfer",
    name: "Magdalena Succossee",
    phone: "555 123 4567",
    address: "123 Lake Street, Apartment 5B, Springfield District, Springfield, Illinois 62704",
    items: [
      {
        id: 1,
        name: "Shoes Brown",
        color: "Brown",
        quantity: 1,
        price: 120,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=80&q=80",
      },
      {
        id: 2,
        name: "Bomber Jacket",
        color: "Brown",
        quantity: 1,
        price: 160,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=80&q=80",
      },
    ],
    subtotal: 280,
    tax: 24,
    shippingCharge: 2,
    total: 306,
  };

  const steps = [
    { label: "Waiting Payment", completed: true },
    { label: "Waiting Confirmation", completed: true },
    { label: "Processed", completed: true },
    { label: "Delivered", completed: true },
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center py-8 px-4">
      <CartSidebar />
      <div className="flex-1 max-w-4xl bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        {/* Header */}
        <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate(-1)}>
          <img src={arrow} alt="Back" className="w-5 h-5 mr-2" />
          <span className="text-green-600 font-medium">Order Details</span>
        </div>
        {/* Thank You */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold">Thank You</p>
          <p className="text-gray-800 mt-1">Your Order Status is as follows</p>
          <p className="text-green-600 font-semibold mt-2">{order.number}</p>
        </div>
        {/* Progress Bar */}
        <div className="flex flex-row justify-between items-center mb-8 mx-8">
          {steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center w-1/4">
              <div className="relative flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-4 border-green-600 bg-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Only draw connecting line if not the last step */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full ml-0 w-32 h-1 bg-green-600 z-0"></div>
                )}
              </div>
              <span className="mt-4 text-center font-medium text-green-700" style={{ minWidth: 80 }}>{step.label}</span>
            </div>
          ))}
        </div>
        {/* Info Section */}
        <div className="flex gap-6">
          {/* Order Info */}
          <div className="flex-1 space-y-6">
            <div className="border border-gray-300 rounded-2xl p-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Order ID:</span>
                <span>{order.number}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Order Status:</span>
                <span className="text-yellow-500 font-semibold">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Order Date:</span>
                <span>{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Payment Status:</span>
                <span className="text-green-600">{order.paymentStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Payment Type:</span>
                <span>{order.paymentType}</span>
              </div>
            </div>
            <div className="border border-gray-300 rounded-2xl p-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{order.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>{order.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Address:</span>
                <span>{order.address}</span>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="w-96 border border-gray-300 rounded-2xl p-5 space-y-5 text-sm">
            <div className="font-semibold text-lg mb-4">Order Summary</div>
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{item.name}</span>
                  <span>Color: {item.color}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
                <span className="font-semibold ml-auto">${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-3 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>${order.shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            className="py-3 px-10 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            onClick={() => alert("Track Order Clicked")}
          >
            Track Order
          </button>
          <button
            className="py-3 px-10 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            onClick={() => alert("Download Receipt Clicked")}
          >
            Download Receipt
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default OrderConfirmationPage;
