import { Clock, LocateFixedIcon, PhoneCall, Send } from "lucide-react";
import Appstore from "../../../assets/appstore.png";
import Playstore from "../../../assets/googleplay.png";
import Payment from "../../../assets/payment-method.png.png";

import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-[#253D4E] p-5 gap-8 md:gap-4">
        {/* first div starts */}
        <div className="flex items-start flex-col gap-3 w-full md:w-auto">
          <h1>Brime| e-shop</h1>
          <p>Awesome products</p>
          <h1 className="flex gap-3 items-center">
            <LocateFixedIcon className="text-[#3BB77E] " size={15} />
            <span className="font-semibold">Address</span>: 15, Tom Mboya
            street,Nairobi
          </h1>
          <h1 className="flex gap-3 items-center">
            <PhoneCall className="text-[#3BB77E] " size={15} />
            <span className="font-semibold">Call Us</span>: +254 758939807
          </h1>
          <h1 className="flex gap-3 items-center">
            <Send className="text-[#3BB77E] " size={15} />
            <span className="font-semibold">Email</span>: sales@brimeeshop.com
          </h1>
          <h1 className="flex gap-3 items-center">
            <Clock className="text-[#3BB77E] " size={15} />
            <span className="font-semibold">Hours</span>: 8:00am - 10:00pm
            Mon-sat
          </h1>
        </div>
        {/* first div ends */}
        {/* second div starts */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="font-semibold">Company</h1>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/delivery-information">
            <p>Delivery Information</p>
          </Link>
          <Link to="/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
          <Link to="/terms-and-conditions">
            <p>Terms & Conditions</p>
          </Link>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
          <Link to="/support-center">
            <p>Support center</p>
          </Link>
          <Link to="/careers">
            <p>Careers</p>
          </Link>
        </div>
        {/* second div ends */}
        {/* third div starts */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="font-semibold">Account</h1>
          <Link to="/login">
            <p>Sign In</p>
          </Link>
          <Link to="/cart">
            <p>View Cart</p>
          </Link>
          <Link to="/wishlist">
            <p>My Wishlist</p>
          </Link>
          <Link to="/track-order">
            <p>Track Order</p>
          </Link>
          <Link to="/help">
            <p>Help Ticket</p>
          </Link>
          <Link to="/shoppin-details">
            <p>Shopping Details</p>
          </Link>
          <Link to="/compare-products">
            <p>Compare Products</p>
          </Link>
        </div>
        {/* third div ends */}
        {/* fourth div starts */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="font-semibold">Quick Links</h1>
          <Link to="/products">
            <p>Products</p>
          </Link>
          <Link to="/categories">
            <p>Categories</p>
          </Link>
          <Link to="/brands">
            <p>Brands</p>
          </Link>
          <Link to="/my-account">
            <p>My Account</p>
          </Link>
          <Link to="/store">
            <p>Store</p>
          </Link>
          <Link to="/track-order">
            <p>Track Order</p>
          </Link>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
        </div>
        {/* fourth div ends */}
        {/* fifth div starts */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="font-semibold">Popular</h1>
          <Link to="/food">
            <p>Food</p>
          </Link>
          <Link to="/electronics">
            <p>Electronics</p>
          </Link>
          <Link to="/home-appliances">
            <p>Home appliances</p>
          </Link>
          <Link to="/funiture">
            <p>Funiture</p>
          </Link>
          <Link to="/office-supplies">
            <p>Office supplies</p>
          </Link>
          <Link to="/cosmetics">
            <p>Cosmetics</p>
          </Link>
          <Link to="/toys">
            <p>Toys</p>
          </Link>
        </div>
        {/* fifth div ends */}
        {/* sixth div starts */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h1 className="font-semibold">Install Apps</h1>
          <div className="flex items-center gap-3">
            <img src={Playstore} alt="" className="w-32 md:w-auto" />
            <img src={Appstore} alt="" className="w-32 md:w-auto" />
          </div>
          <h1 className="font-semibold">Payment Methods</h1>
          <div className="flex items-center gap-3">
            <img src={Payment} alt="" className="w-full md:w-auto" />
          </div>
          <h1 className="font-semibold text-lg mb-2">Newsletter</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3BB77E] w-full md:w-48"
            />
            <button className="px-4 py-2 bg-[#3BB77E] text-white rounded-lg hover:bg-[#2d8b60] transition-colors w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
        {/* sixth div ends */}
      </div>
    </div>
  );
};

export default Top;
