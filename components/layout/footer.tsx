import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1e2a36] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo2.png"
                alt="Logo E-invest"
                className='rounded-lg object-cover'
                width={40}
                height={40}
              />
              <span className="text-xl font-extrabold bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] bg-clip-text text-transparent">
                E-invest
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Une coopérative financière au service de ses membres et de la communauté.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Accueil</Link></li>
              <li><Link href="/investissements" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Investissements</Link></li>
              <li><Link href="/credits" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Crédits</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-[#D4A63C] transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Légal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Conditions générales</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#D4A63C] transition-colors">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>123 Rue de la Coopération</p>
              <p>75000 Bujumbura, Burundi</p>
              <p>contact@E-invest.com</p>
              <p>+25769116860</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} E-invest. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6">
            <Image
              src="/fdic-logo.svg"
              alt="E-invest"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src="/security-shield-svgrepo-com.svg"
              alt="Certification de Sécurité"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}