"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, CreditCard, Home, Building2, Briefcase, Car, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreditsPage() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [duration, setDuration] = useState(60);
  const [rate] = useState(4.5);

  const monthlyPayment = (loanAmount * (rate / 100 / 12)) / (1 - Math.pow(1 + (rate / 100 / 12), -duration));

  const loanTypes = [
    {
      icon: Home,
      title: "Prêt Immobilier",
      description: "Financement pour l'achat, la construction ou la rénovation de votre résidence",
      rate: "À partir de 3.2%",
      duration: "Jusqu'à 25 ans",
      amount: "Jusqu'à 500,000€",
      features: ["Taux fixe ou variable", "Frais de dossier réduits", "Remboursement anticipé possible"]
    },
    {
      icon: Briefcase,
      title: "Prêt Professionnel",
      description: "Soutien financier pour développer votre activité ou créer votre entreprise",
      rate: "À partir de 4.1%",
      duration: "Jusqu'à 7 ans",
      amount: "Jusqu'à 300,000€",
      features: ["Différé de remboursement", "Accompagnement personnalisé", "Conditions préférentielles"]
    },
    {
      icon: Building2,
      title: "Prêt Agricole",
      description: "Financement spécialisé pour les projets agricoles et ruraux",
      rate: "À partir de 3.8%",
      duration: "Jusqu'à 15 ans",
      amount: "Jusqu'à 200,000€",
      features: ["Taux bonifiés", "Saisonnalité adaptée", "Garanties flexibles"]
    },
    {
      icon: Car,
      title: "Prêt Véhicule",
      description: "Financement pour l'achat de véhicules neufs ou d'occasion",
      rate: "À partir de 2.9%",
      duration: "Jusqu'à 7 ans",
      amount: "Jusqu'à 75,000€",
      features: ["Procédure rapide", "Taux compétitifs", "Assurance optionnelle"]
    }
  ];

  const advantages = [
    {
      title: "Taux Préférentiels",
      description: "Bénéficiez de conditions avantageuses réservées aux membres de la coopérative",
      icon: "💰"
    },
    {
      title: "Décision Rapide",
      description: "Réponse de principe sous 48h et déblocage des fonds sous 15 jours",
      icon: "⚡"
    },
    {
      title: "Accompagnement",
      description: "Un conseiller dédié vous accompagne tout au long de votre projet",
      icon: "🤝"
    },
    {
      title: "Flexibilité",
      description: "Solutions de remboursement adaptées à votre situation financière",
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e2a36] to-[#2c3e50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Solutions de <span className="text-[#D4A63C]">Crédit</span> Sur Mesure
              </h1>
              <p className="text-xl text-gray-300">
                Financez vos projets personnels et professionnels avec des conditions avantageuses 
                réservées aux membres de notre coopérative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#D4A63C] hover:bg-[#008a48] text-white px-8 py-6 text-lg font-medium">
                  Faire une demande
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-gray-400 hover:bg-white/10 hover:text-gray-300 px-8 py-6 text-lg font-medium">
                  Simuler mon prêt
                </Button>
              </div>
            </div>
            
            {/* Simulateur de prêt */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-[#D4A63C]" />
                <h3 className="text-xl font-bold">Simulateur de Prêt</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-white">Montant du prêt</Label>
                  <Input
                    type="range"
                    min="5000"
                    max="500000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="mt-2"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-[#D4A63C]">
                    {loanAmount.toLocaleString()}€
                  </div>
                </div>
                
                <div>
                  <Label className="text-white">Durée (mois)</Label>
                  <Input
                    type="range"
                    min="12"
                    max="300"
                    step="12"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="mt-2"
                  />
                  <div className="text-center mt-2 text-xl font-semibold">
                    {Math.round(duration / 12)} ans ({duration} mois)
                  </div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-300">Mensualité estimée</div>
                    <div className="text-3xl font-bold text-[#D4A63C]">
                      {monthlyPayment.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                    </div>
                    <div className="text-sm text-gray-300 mt-1">Taux : {rate}% / an</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Types de prêts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Solutions de <span className="text-[#D4A63C]">Financement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des produits adaptés à tous vos besoins, avec l'expertise d'une coopérative de proximité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-[#D4A63C]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-[#D4A63C]/10 rounded-full">
                    <loan.icon className="w-8 h-8 text-[#D4A63C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{loan.title}</h3>
                    <p className="text-gray-600">{loan.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Taux</div>
                    <div className="font-semibold text-[#D4A63C]">{loan.rate}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Durée</div>
                    <div className="font-semibold">{loan.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Montant</div>
                    <div className="font-semibold">{loan.amount}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {loan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#D4A63C]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white">
                  Demander ce prêt
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir <span className="text-[#1b7ab3]">E-invest</span> ?
            </h2>
            <p className="text-xl text-gray-600">
              Les avantages d'être membre d'une coopérative financière
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment Obtenir Votre <span className="text-[#D4A63C]">Prêt</span> ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent en 4 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Simulation",
                description: "Utilisez notre simulateur pour estimer votre prêt"
              },
              {
                step: "2",
                title: "Demande",
                description: "Remplissez le formulaire de demande en ligne"
              },
              {
                step: "3",
                title: "Étude",
                description: "Notre équipe étudie votre dossier sous 48h"
              },
              {
                step: "4",
                title: "Déblocage",
                description: "Signature et déblocage des fonds sous 15 jours"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Concrétisez Vos Projets Dès Aujourd'hui
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nos conseillers sont à votre disposition pour étudier votre demande
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#D4A63C] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              Faire une demande de prêt
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-gray-400 hover:bg-white/10 hover:text-gray-300 px-8 py-6 text-lg font-medium">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}