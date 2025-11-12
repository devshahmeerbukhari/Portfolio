"use client";

import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-700 bg-opacity-35 text-gray-400 px-6 md:px-20 lg:px-[57px]">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-white font-bold text-lg hover:text-gray-200 whitespace-nowrap">
          <Link href="/#" scroll={false}>
            Shahmeer Bukhari
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/components/about" scroll={false} className="hover:text-white whitespace-nowrap">
            About
          </Link>
          <Link href="/components/work" scroll={false} className="hover:text-white whitespace-nowrap">
            Work
          </Link>
          <Link href="/#" scroll={false} className="hover:text-white whitespace-nowrap">
            Services
          </Link>
          <Link href="/components/contact" scroll={false} className="hover:text-white whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* Connect Button (Desktop) */}
        <div className="hidden md:block ml-12">
          <button className="border border-white px-5 py-1 rounded-3xl hover:text-white whitespace-nowrap">
            Let&apos;s Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
            {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border rounded-2xl border-none bg-opacity-35 text-gray-400 px-6 py-4 space-y-4">
          <Link href="/components/about" scroll={false} className="block hover:text-white">
            About
          </Link>
          <Link href="/components/work" scroll={false} className="block hover:text-white">
            Work
          </Link>
          <Link href="/#" scroll={false} className="block hover:text-white">
            Services
          </Link>
          <Link href="/components/contact" scroll={false} className="block hover:text-white">
            Contact
          </Link>
          <button className="w-full border border-white px-5 py-1 rounded-3xl hover:text-white mt-2 whitespace-nowrap">
            Let&apos;s Connect
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;