import { NavLink } from "react-router-dom";
import boy from "../assets/imgs/boy.jpg";
import userIcon from "../assets/imgs/usericon.png";
import basket from "../assets/imgs/basket.png";
import addr from "../assets/imgs/addr.png";
import { useEffect, useState } from "react";
import axios from "axios";

function CartSidebar() {
  const [user, setUser] = useState(null);

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
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const baseClasses =
    "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition";
  const activeClasses =
    "bg-green-100 text-green-700 border-l-4 border-green-600";
  const inactiveClasses = "hover:bg-gray-100 text-gray-700";

  return (
    <div className="w-full max-w-xs md:w-[260px] md:h-[440px] border border-gray-400 rounded-2xl flex flex-col p-3 shadow-md hover:shadow-lg transition bg-white mb-8 md:mb-0 md:mr-8">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={boy}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover"
        />
        <p className="text-lg font-semibold text-black">
          {user?.name || "User Name"}
        </p>
        <p className="text-sm text-gray-500">
          {user?.email || user?.phone || "+61 123 456 7890"}
        </p>
      </div>

      {/* Menu Section */}
      <div className="mt-6 flex flex-col gap-3 w-full">
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <img src={basket} alt="basket" className="w-6 h-6" />
          <span className="text-base font-medium text-left">Order History</span>
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <img src={userIcon} alt="usericon" className="w-6 h-6" />
          <span className="text-base font-medium text-left">
            Account Information
          </span>
        </NavLink>

        <NavLink
          to="/address"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <img src={addr} alt="addressicon" className="w-6 h-6" />
          <span className="text-base font-medium text-left">Address</span>
        </NavLink>
      </div>
    </div>
  );
}

export default CartSidebar;
