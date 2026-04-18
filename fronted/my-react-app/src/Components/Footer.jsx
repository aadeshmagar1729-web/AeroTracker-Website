import React from 'react'


function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            AeroTracker ✈️
          </h2>
          <p className="text-gray-400">
            Track flights in real-time with ease. Get updates on flight status,
            departure, and arrival instantly.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Track Flight</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@aerotracker.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2026 AeroTracker. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

