"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-gray-700"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/investissements" 
              className="text-gray-700 hover:text-[#D4A63C] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Investissements
            </Link>
            <Link 
              href="/credits" 
              className="text-gray-700 hover:text-[#D4A63C] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Crédits
            </Link>
            <Link 
              href="/nos-membres" 
              className="text-gray-700 hover:text-[#D4A63C] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Nos Membres
            </Link>
            <Link 
              href="/a-propos" 
              className="text-gray-700 hover:text-[#D4A63C] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-[#D4A63C] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t">
              <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white">
                  Connexion
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}