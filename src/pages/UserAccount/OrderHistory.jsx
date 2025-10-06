import CartSidebar from '../../components/CartSidebar'
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { useState } from "react";
import { Link } from "react-router-dom";


function OrderHistory() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const orders = [
    {
      id: 1,
      number: "#123321220133",
      date: "7 Mar 2025",
      info: "1 Product",
      orderStatus: "Pending",
      statusColor: "text-yellow-500",
      paymentStatus: "Paid",
      payStatusColor: "text-green-500",
      total: "100.00",
    },
    {
      id: 2,
      number: "#12332122002",
      date: "6 Mar 2025",
      info: "2 Products",
      orderStatus: "Pending",
      statusColor: "text-yellow-500",
      paymentStatus: "Paid",
      payStatusColor: "text-green-500",
      total: "90.00",
    },
    // ...add more orders
  ];

  const handleMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center py-8 px-2 sm:px-4">
      <CartSidebar />
      <div className="flex-1 w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md p-5 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Order History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-gray-700 font-medium bg-gray-100">
                <th className="py-2 px-2 text-left">OrderDetails</th>
                <th className="py-2 px-2 text-left">Info</th>
                <th className="py-2 px-2 text-left">Order Status</th>
                <th className="py-2 px-2 text-left">Payment Status</th>
                <th className="py-2 px-2 text-left">Total</th>
                <th className="py-2 px-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="py-2 px-2">
                    <div className="font-medium text-blue-700">{order.number}</div>
                    <div className="text-xs text-gray-400">{order.date}</div>
                  </td>
                  <td className="py-2 px-2">{order.info}</td>
                  <td className={`py-2 px-2 font-medium ${order.statusColor}`}>{order.orderStatus}</td>
                  <td className={`py-2 px-2 font-medium ${order.payStatusColor}`}>{order.paymentStatus}</td>
                  <td className="py-2 px-2">${order.total}</td>
                  <td className="py-2 px-2 relative">
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      onClick={() => handleMenuToggle(order.id)}
                    >
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                        <circle cx="5" cy="12" r="2" />
                      </svg>
                    </button>
                    {openMenuId === order.id && (
                      <div className="absolute z-10 right-0 mt-2 w-28 bg-white border border-gray-200 rounded shadow-md">
                        <Link
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          to={`/orders/${order.id}`}
                        >
                          View
                        </Link>
                        <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                          Download
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4 gap-2">
            <button className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-700">Prev</button>
            <button className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-700">Next</button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default OrderHistory;
