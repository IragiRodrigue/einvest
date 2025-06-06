"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "individual",
    agreeTerms: false,
    agreeNewsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription
    console.log("Inscription:", formData);
  };

  const benefits = [
    "Accès aux opportunités d'investissement exclusives",
    "Prêts à taux préférentiels pour les membres",
    "Suivi transparent de vos investissements",
    "Accompagnement personnalisé par nos experts",
    "Participation aux bénéfices de la coopérative",
    "Formation gratuite en finance et investissement"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e2a36] via-[#2c3e50] to-[#1e2a36] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-start">
        {/* Section gauche - Informations */}
        <div className="text-white space-y-6 lg:pr-8 lg:sticky lg:top-8">
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
            Rejoignez <span className="text-[#D4A63C]">1,250+</span> membres qui transforment l'avenir
          </h1>
          
          <p className="text-xl text-gray-300">
            Devenez membre de notre coopérative et accédez à un écosystème 
            financier innovant et solidaire.
          </p>

          <div className="space-y-4 pt-8">
            <h3 className="text-xl font-semibold text-[#D4A63C] mb-4">Avantages membres :</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#D4A63C] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section droite - Formulaire */}
        <Card className="p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-[#D4A63C] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-[#D4A63C]' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentStep === 1 && "Informations personnelles"}
                {currentStep === 2 && "Sécurité du compte"}
                {currentStep === 3 && "Type de compte"}
              </h2>
              <p className="text-gray-600">
                {currentStep === 1 && "Commençons par vos informations de base"}
                {currentStep === 2 && "Sécurisez votre compte avec un mot de passe fort"}
                {currentStep === 3 && "Choisissez le type de compte qui vous convient"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Adresse email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Numéro de téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="+257 XX XX XX XX"
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <Label htmlFor="password">Mot de passe *</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Minimum 8 caractères"
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
                    <div className="mt-2 text-sm text-gray-600">
                      Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirmer le mot de passe *</Label>
                    <div className="relative mt-1">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirmez votre mot de passe"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div>
                    <Label htmlFor="accountType">Type de compte *</Label>
                    <select
                      id="accountType"
                      name="accountType"
                      required
                      value={formData.accountType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#D4A63C] focus:outline-none focus:ring-2 focus:ring-[#D4A63C]/20"
                    >
                      <option value="individual">Particulier - Investir et emprunter</option>
                      <option value="business">Entreprise - Financer des projets</option>
                      <option value="investor">Investisseur - Portfolio diversifié</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        required
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-[#D4A63C] focus:ring-[#D4A63C] border-gray-300 rounded"
                      />
                      <Label htmlFor="agreeTerms" className="ml-3 text-sm text-gray-600">
                        J'accepte les{" "}
                        <Link href="/terms" className="text-[#D4A63C] hover:text-[#1b7ab3] underline">
                          conditions générales
                        </Link>{" "}
                        et la{" "}
                        <Link href="/privacy" className="text-[#D4A63C] hover:text-[#1b7ab3] underline">
                          politique de confidentialité
                        </Link>
                      </Label>
                    </div>

                    <div className="flex items-start">
                      <input
                        id="agreeNewsletter"
                        name="agreeNewsletter"
                        type="checkbox"
                        checked={formData.agreeNewsletter}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-[#D4A63C] focus:ring-[#D4A63C] border-gray-300 rounded"
                      />
                      <Label htmlFor="agreeNewsletter" className="ml-3 text-sm text-gray-600">
                        Je souhaite recevoir les actualités et opportunités d'investissement par email
                      </Label>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    className="px-8"
                  >
                    Retour
                  </Button>
                )}
                
                {currentStep < 3 ? (
                  <Button 
                    type="button"
                    onClick={handleNextStep}
                    className={`bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white px-8 ${currentStep === 1 ? 'ml-auto' : ''}`}
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white px-8 ml-auto"
                  >
                    Créer mon compte
                  </Button>
                )}
              </div>
            </form>

            {currentStep === 1 && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou s'inscrire avec</span>
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
              </>
            )}

            <div className="text-center">
              <p className="text-gray-600">
                Déjà membre ?{" "}
                <Link href="/auth/login" className="text-[#D4A63C] hover:text-[#1b7ab3] font-medium transition-colors">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}