import React from 'react'
import { useState } from 'react';

function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
  <div className="fixed top-0 left-0 flex flex-col items-center justify-between w-16 h-full py-4 bg-transparent shadow-lg">
    <button
      className="text-sm font-semibold hover:text-blue-500 focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? "⬆" : "⬇ "}
    </button>

    {isMenuOpen && (
      <div className="flex flex-col items-center justify-center gap-10 mt-4">
        <button className="text-white">
          <span className="text-sm font-semibold hover:text-red-500">Home</span>
        </button>

        <button className="relative text-white">
          <span className="text-sm font-semibold hover:text-red-500">Explore</span>
        </button>

        <button className="text-white">
          <span className="text-sm font-semibold hover:text-red-500">Add</span>
        </button>

        <button className="text-white">
          <span className="text-sm font-semibold hover:text-red-500">Alerts</span>
        </button>

        <button className="text-white">
          <span className="text-sm font-semibold hover:text-red-500">More</span>
        </button>

        <button className="text-white ">
          <span className="text-sm font-semibold hover:text-red-500">Help</span>
        </button>

        <button className="text-white ">
          <span className="text-sm font-semibold hover:text-red-500">Settings</span>
        </button>
      </div>
    )}
  </div>
</div>

  )
}

export default Sidebar
