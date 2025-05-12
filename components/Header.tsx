'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-200 bg-white/70 dark:bg-black/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="cursor-pointer transition flex items-center space-x-2">
            <Image
              src="/images/stackroot.png"
              alt="StackRoot Logo"
              width={40}
              height={40}
              className="rounded-full hidden md:block"
              priority
            />
            <div className="flex flex-col">
              <h1 className="font-root font-bold text-2xl md:text-4xl text-sky-700">StackRoot</h1>
              <span className="font-root text-sm text-pink-600 -my-1 ">
                build from the ground up
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-sans">
          <Link href="/#showcases" className="hover:text-sky-600">Showcases</Link>
          <Link href="/#about" className="hover:text-sky-600">About</Link>
          <Link href="/#contact" className="hover:text-sky-600">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sky-600 dark:text-neutral-200 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {/* <ThemeToggle /> */}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-sans">
          <Link href="/#showcases" className="block hover:text-sky-600">Showcases</Link>
          <Link href="/#about" className="block hover:text-sky-600">About</Link>
          <Link href="/#contact" className="block hover:text-sky-600">Contact</Link>
        </div>
      )}


    </header>
  );
}