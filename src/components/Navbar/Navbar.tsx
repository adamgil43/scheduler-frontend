import React from 'react';

export default function NavBar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <ul className="py-4">
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Services</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}