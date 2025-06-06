"use client";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/ui/mobile-nav";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo2.png"
              alt="Logo E-invest"
              className='rounded-lg object-cover'
              width={90}
              height={60}
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] bg-clip-text text-transparent">
              E-invest
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/investissements" className="text-gray-700 hover:text-[#D4A63C] font-medium transition-colors duration-200">Investissements</Link>
            <Link href="/credits" className="text-gray-700 hover:text-[#D4A63C] font-medium transition-colors duration-200">Crédits</Link>
            <Link href="/nos-membres" className="text-gray-700 hover:text-[#D4A63C] font-medium transition-colors duration-200">Nos Membres</Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-[#D4A63C] font-medium transition-colors duration-200">À propos</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#D4A63C] font-medium transition-colors duration-200">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
            <Link href="/auth/login">
              <Button className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white hover:opacity-90 transition-opacity shadow-md">
                Connexion
              </Button>
            </Link>
          </div>

          <MobileNav />
        </nav>
      </div>
    </header>
  );
}