import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-richblack-800 text-white w-full">
      <div className="w-full max-w-screen-xl mx-auto py-10 px-5">
        
       
        {/* Footer Bottom */}
        <div className="border-t border-richblack-700 pt-4 text-center text-sm text-richblack-400">
          <div className="flex justify-center gap-8">
            <div className="cursor-pointer hover:text-richblack-50 transition-all duration-300">
              <Link to="/">Home</Link>
            </div>
            <div className="cursor-pointer hover:text-richblack-50 transition-all duration-300">
              <Link to="/about">About</Link>
            </div>
            <div className="cursor-pointer hover:text-richblack-50 transition-all duration-300">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
