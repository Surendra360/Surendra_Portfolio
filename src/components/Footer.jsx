

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Surendra Kumar. All rights reserved.
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="text-sm hover:underline">About Us</a>
          <a href="/contact" className="text-sm hover:underline">Contact</a>
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
