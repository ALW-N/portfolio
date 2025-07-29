import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-black text-white font-mono shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold">
        MyLogo
      </div>

      {/* Nav Links */}
      <div className="space-x-6 text-sm">
        <a href="#about" className="hover:underline transition-all">
          About
        </a>
        <a href="#projects" className="hover:underline transition-all">
          Projects
        </a>
        <a href="#contact" className="hover:underline transition-all">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
