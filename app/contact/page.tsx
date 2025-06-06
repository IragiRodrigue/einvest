"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Votre message a été envoyé avec succès ! Nous vous recontacterons sous 24h.");
  };

  const offices = [
    {
      city: "Bujumbura (Siège social)",
      address: "Avenue de l'Independence, Quartier Rohero",
      phone: "+257 69 11 68 60",
      email: "bujumbura@e-invest.bi",
      hours: "Lun-Ven: 8h00-17h00, Sam: 8h00-12h00"
    },
    {
      city: "Gitega",
      address: "Avenue de la République, Centre-ville",
      phone: "+257 69 22 33 44",
      email: "gitega@e-invest.bi",
      hours: "Lun-Ven: 8h00-16h30"
    },
    {
      city: "Ngozi",
      address: "Rue du Commerce, Quartier Central",
      phone: "+257 69 55 66 77",
      email: "ngozi@e-invest.bi",
      hours: "Lun-Ven: 8h00-16h30"
    }
  ];

  const faqs = [
    {
      question: "Comment devenir membre d'E-invest ?",
      answer: "Vous pouvez vous inscrire en ligne sur notre site web ou vous rendre dans l'un de nos bureaux avec une pièce d'identité et un justificatif de domicile."
    },
    {
      question: "Quel est le montant minimum pour investir ?",
      answer: "Le montant minimum d'investissement est de 500€ pour la plupart de nos projets, avec des options de financement progressif."
    },
    {
      question: "Quels sont les taux d'intérêt pour les prêts ?",
      answer: "Nos taux varient selon le type de prêt et votre profil. Ils démarrent à partir de 2.9% pour les prêts véhicules et 3.2% pour l'immobilier."
    },
    {
      question: "Comment suivre mes investissements ?",
      answer: "Vous avez accès à un espace membre en ligne où vous pouvez suivre en temps réel l'évolution de vos investissements et les rapports de projets."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e2a36] to-[#2c3e50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-<span className="text-[#D4A63C]">nous</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner 
              dans vos projets d'investissement et de financement.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Phone className="w-10 h-10 text-[#D4A63C] mx-auto mb-3" />
                <div className="text-lg font-semibold mb-1">Téléphone</div>
                <div className="text-gray-300">+257 69 11 68 60</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Mail className="w-10 h-10 text-[#D4A63C] mx-auto mb-3" />
                <div className="text-lg font-semibold mb-1">Email</div>
                <div className="text-gray-300">contact@e-invest.bi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Clock className="w-10 h-10 text-[#D4A63C] mx-auto mb-3" />
                <div className="text-lg font-semibold mb-1">Horaires</div>
                <div className="text-gray-300">Lun-Ven: 8h-17h</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact et informations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un <span className="text-[#D4A63C]">message</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#D4A63C] focus:outline-none focus:ring-2 focus:ring-[#D4A63C]/20"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="investment">Opportunités d'investissement</option>
                      <option value="loan">Demande de prêt</option>
                      <option value="membership">Adhésion à la coopérative</option>
                      <option value="partnership">Partenariat</option>
                      <option value="support">Support technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white py-6 text-lg font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Nos bureaux */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Bureaux</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">{office.city}</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#D4A63C] mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-[#D4A63C] flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-[#D4A63C] flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-[#D4A63C] flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Support d'urgence */}
              <Card className="p-6 bg-gradient-to-r from-[#D4A63C]/10 to-[#1b7ab3]/10 border border-[#D4A63C]/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#D4A63C]" />
                  <h3 className="text-xl font-bold text-gray-900">Support d'Urgence</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pour les urgences liées à vos comptes ou investissements :
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#D4A63C]" />
                    <span className="font-semibold">+257 69 99 88 77</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Disponible 24h/7j pour les urgences
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions <span className="text-[#D4A63C]">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Button variant="outline" className="border-[#D4A63C] text-[#D4A63C] hover:bg-[#D4A63C] hover:text-white">
              Contactez notre support
            </Button>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trouvez-nous
            </h2>
            <p className="text-xl text-gray-600">
              Notre siège social à Bujumbura
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Carte interactive</p>
                <p>Avenue de l'Independence, Quartier Rohero</p>
                <p>Bujumbura, Burundi</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}