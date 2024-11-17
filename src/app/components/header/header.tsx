"use client";
import { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-screen bg-white h-20 fixed top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-full p-4 md:px-8">
        <h1 className="font-bold text-[32px] leading-[22px]">
          <Link href="/">SHOP.CO</Link>
        </h1>
        <div className="hidden md:flex gap-5 text-black opacity-80 text-lg">
          <ul className="flex gap-5 text-black opacity-80 text-lg w-max">
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/onsale">On Sale</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/brands">Brands</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/review">Review</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative hidden md:block w-full max-w-xl min-w-[300px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-black opacity-40" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border text-black opacity-40 bg-[#F0F0F0] border-gray-300 rounded-full focus:outline-none"
            />
          </div>
          <ShoppingCart className="text-xl font-black text-gray-700 hover:text-blue-500 cursor-pointer" />
          <RiAccountCircleLine className="text-2xl font-black text-gray-700 hover:text-blue-500 cursor-pointer" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col mt-4 gap-4 p-4 bg-white shadow-md">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/review" onClick={() => setMenuOpen(false)}>Review</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/onsale" onClick={() => setMenuOpen(false)}>On Sale</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/brands" onClick={() => setMenuOpen(false)}>Brands</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>
            <div className="relative w-full mt-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-black opacity-40" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border text-black opacity-40 bg-[#F0F0F0] border-gray-300 rounded-full focus:outline-none"
              />
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
