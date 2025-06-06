"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion
    console.log("Connexion:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e2a36] via-[#2c3e50] to-[#1e2a36] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Section gauche - Informations */}
        <div className="text-white space-y-6 lg:pr-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/logo2.png"
              alt="Logo E-invest"
              className='rounded-lg object-cover'
              width={60}
              height={60}
            />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] bg-clip-text text-transparent">
              E-invest
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Bienvenue dans votre <span className="text-[#D4A63C]">espace membre</span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Accédez à vos investissements, suivez vos projets et gérez vos finances 
            en toute sécurité avec votre coopérative.
          </p>

          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#D4A63C] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-300">Suivi en temps réel de vos investissements</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#D4A63C] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-300">Gestion simplifiée de vos prêts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#D4A63C] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-300">Accès aux opportunités exclusives</span>
            </div>
          </div>
        </div>

        {/* Section droite - Formulaire */}
        <Card className="p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Connexion</h2>
              <p className="text-gray-600">Connectez-vous à votre compte membre</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Votre mot de passe"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#D4A63C] focus:ring-[#D4A63C] border-gray-300 rounded"
                  />
                  <Label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                    Se souvenir de moi
                  </Label>
                </div>

                <Link href="/auth/forgot-password" className="text-sm text-[#D4A63C] hover:text-[#1b7ab3] transition-colors">
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white py-6 text-lg font-medium"
              >
                Se connecter
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="py-3">
                <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
                Google
              </Button>
              <Button variant="outline" className="py-3">
                <Image src="/microsoft-icon.svg" alt="Microsoft" width={20} height={20} className="mr-2" />
                Microsoft
              </Button>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Pas encore membre ?{" "}
                <Link href="/auth/register" className="text-[#D4A63C] hover:text-[#1b7ab3] font-medium transition-colors">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}