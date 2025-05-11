import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: '#FEF3E2' }}
      className="sticky top-0 z-50 bg-[#FEF3E2] shadow-lg backdrop-blur-md animate-gradient"
    >
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <a href="/" className="text-xl font-bold text-black no-underline">
          <img
            src="/images/logo-ennac.png"
            alt="ENACTUS Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </a>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden space-x-8 md:flex">
          <a href="#about" className="text-xl font-bold text-black">About</a>
          <a href="#team" className="text-xl font-bold text-black">Team</a>
          <a href="#events" className="text-xl font-bold text-black">Events</a>
          <a href="#join" className="text-xl font-bold text-black">Join us</a>
          <a href="#contact" className="text-xl font-bold text-black">Contact</a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 py-4 md:hidden bg-[#FEF3E2]">
          <a href="#about" className="text-lg font-semibold text-black">About</a>
          <a href="#team" className="text-lg font-semibold text-black">Team</a>
          <a href="#events" className="text-lg font-semibold text-black">Events</a>
          <a href="#join" className="text-lg font-semibold text-black">Join us</a>
          <a href="#contact" className="text-lg font-semibold text-black">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
