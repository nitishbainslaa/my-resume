"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setShow(true); // Show navbar after scrolling past Hero
      } else {
        setShow(false); // Hide navbar while in Hero
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null; // Navbar hidden

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Nitish Bainsla</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Experience</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
