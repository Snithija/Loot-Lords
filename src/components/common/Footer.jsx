// Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import store from '../../assets/imgs/store.png'
// import face from '../assets/imgs/face.png'
import face from '../../assets/imgs/face.png'
import x from '../../assets/imgs/x.png'
import insta from '../../assets/imgs/insta.png'
import yt from '../../assets/imgs/yt.png'
import location from '../../assets/imgs/location.png'
import email from '../../assets/imgs/email.png'
import app from '../../assets/imgs/app.png'
import google from '../../assets/imgs/google.png'

const Footer = () => (
  <footer className="w-full bg-[#1A371F] px-6 py-12 md:px-16 md:py-16">
    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 max-w-[1310px] mx-auto">
      {/* Left: Logo and Newsletter */}
      <div className="w-full md:w-[294px]">
        <div className="flex items-center gap-2 mb-6">
          <img src={store} alt="StoreOne Logo" className="w-8 h-8" />
          <span className="font-plus font-bold text-2xl text-white">
            StoreOne
          </span>
        </div>
        <div className="mb-5 font-plus font-semibold text-base md:text-lg text-white">
          Subscribe to Our NewsLetter
        </div>
        <form className="relative w-full h-10 mb-6 flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-full px-4 py-2 text-xs text-gray-600 bg-gray-300 outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 rounded-full bg-[#5DA96A] text-white text-xs font-medium"
          >
            Subscribe
          </button>
        </form>
        <div className="flex gap-4">
          <img src={face} className="w-8 h-8" alt="Facebook" />
          <img src={x} className="w-8 h-8" alt="X" />
          <img src={insta} className="w-8 h-8" alt="Instagram" />
          <img src={yt} className="w-8 h-8" alt="YouTube" />
        </div>
      </div>

      {/* Middle: Support */}
      <div className="w-full md:w-[177px]">
        <div className="font-plus font-bold text-2xl text-white mb-8">
          Support
        </div>
        <ul className="flex flex-col gap-5">
          <li>
            <Link to="/faq" className="font-semibold text-lg text-white hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/return-exchange" className="font-semibold text-lg text-white hover:underline">
              Return & Exchange
            </Link>
          </li>
          <li>
            <Link to="/shipping" className="font-semibold text-lg text-white hover:underline">
              Shipping
            </Link>
          </li>
          <li>
            <Link to="/size-chart" className="font-semibold text-lg text-white hover:underline">
              Size Chart
            </Link>
          </li>
        </ul>
      </div>

      {/* Middle: Legal */}
      <div className="w-full md:w-[172px]">
        <div className="font-plus font-bold text-2xl text-white mb-8">
          Legal
        </div>
        <ul className="flex flex-col gap-5">
          <li><Link to="/cookies-policy" className="font-semibold text-lg text-white hover:underline">Cookies Policy</Link></li>
          <li><Link to="/terms" className="font-semibold text-lg text-white hover:underline">Terms & Condition</Link></li>
          <li><Link to="/privacy" className="font-semibold text-lg text-white hover:underline">Privacy Policy</Link></li>
          <li><Link to="/aboutus" className="font-semibold text-lg text-white hover:underline">About Us</Link></li>
          <li><Link to="/contact" className="font-semibold text-lg text-white hover:underline">Contact Us</Link></li>
        </ul>
      </div>

      {/* Right: Contact */}
      <div className="w-full md:w-[331px]">
        <div className="font-plus font-bold text-2xl text-white mb-6">
          Contact
        </div>
        {/* Address */}
        <div className="flex items-start gap-4 mb-4">
          <img src={location} className="w-8 h-8 rounded-full" alt="Location" />
          <span className="font-plus font-semibold text-lg text-white">
            Professional Services Hub <br />
            123 Main Street, Suite 456 <br />
            New York, NY 10001 <br />
            USA
          </span>
        </div>
        {/* Email */}
        <div className="flex items-center gap-5 mb-6">
          <img src={email} className="w-8 h-8" alt="Email" />
          <span className="font-plus font-semibold text-lg text-white">
            help@storeone.com
          </span>
        </div>
        {/* App Store Badges */}
        <div className="flex items-center gap-6">
          <img src={app} className="w-30 h-10" alt="App Store" />
          <img src={google} className="w-30 h-10" alt="Google Play" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
