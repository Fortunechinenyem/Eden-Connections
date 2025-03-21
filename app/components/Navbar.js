import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-900">
          <Image src="/eden.png" width={50} height={50} alt="Logo" priority />
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-indigo-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/login" className="text-gary-400 hover:text-gray-200">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden bg-white px-6 py-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          <Link href="/login" className="text-gary-400 hover:text-gray-200">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
