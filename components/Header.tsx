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
          <Link href="/"><Image src="/logo.svg" width={48} height={48} alt="stackroot" className="fill-white text-white" /></Link>
          <div className="flex flex-col">
            <h1 className="font-title text-xl md:text-2xl text-black dark:text-white">stackroot</h1>
            <span className="font-sans text-sm text-zinc-500 -my-1 hidden sm:block">
              build from the ground up
            </span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-sans">
          <Link href="#modules" className="hover:text-zinc-600">Modules</Link>
          <Link href="#about" className="hover:text-zinc-600">About</Link>
          <Link href="#contact" className="hover:text-zinc-600">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-800 dark:text-neutral-200 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {/* <ThemeToggle /> */}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-sans">
          <Link href="#modules" className="block hover:text-zinc-600">Modules</Link>
          <Link href="#about" className="block hover:text-zinc-600">About</Link>
          <Link href="#contact" className="block hover:text-zinc-600">Contact</Link>
        </div>
      )}

     
    </header>
  );
}