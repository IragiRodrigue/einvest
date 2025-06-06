"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Heart, Eye, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
  const values = [
    {
      icon: Heart,
      title: "Solidarité",
      description: "Nous croyons en la force du collectif et en l'entraide mutuelle pour construire un avenir meilleur."
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Nous agissons avec une transparence totale dans nos opérations et notre gouvernance."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous innovons constamment pour offrir les meilleures solutions financières à nos membres."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Chacune de nos actions vise à créer un impact positif durable sur nos communautés."
    }
  ];

  const team = [
    {
      name: "Dr. Jean Manirakiza",
      role: "Président du Conseil d'Administration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      bio: "Économiste de formation, 15 ans d'expérience dans la finance coopérative en Afrique de l'Est."
    },
    {
      name: "Marie Ndayishimiye",
      role: "Directrice Générale",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b190?auto=format&fit=crop&w=300&q=80",
      bio: "Experte en microfinance, elle dirige E-invest avec passion depuis sa création."
    },
    {
      name: "Patrick Uwimana",
      role: "Directeur des Opérations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      bio: "Spécialiste en gestion de projets, il supervise tous nos programmes d'investissement."
    },
    {
      name: "Esperance Mukamana",
      role: "Responsable Crédit",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      bio: "Experte en analyse financière, elle accompagne nos membres dans leurs projets de financement."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Création d'E-invest",
      description: "Lancement de la coopérative avec 50 membres fondateurs"
    },
    {
      year: "2019",
      title: "Premiers investissements",
      description: "Financement de 25 projets pour un montant de 500k€"
    },
    {
      year: "2020",
      title: "Expansion régionale",
      description: "Ouverture de bureaux dans 5 provinces du Burundi"
    },
    {
      year: "2021",
      title: "1000 membres",
      description: "Franchissement du cap des 1000 membres actifs"
    },
    {
      year: "2022",
      title: "Reconnaissance internationale",
      description: "Prix de l'innovation en finance coopérative en Afrique"
    },
    {
      year: "2023",
      title: "Impact majeur",
      description: "Plus de 2000 emplois créés et 15M€ investis"
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
                Une Coopérative au Service de <span className="text-[#D4A63C]">l'Avenir</span>
              </h1>
              <p className="text-xl text-gray-300">
                Depuis 2018, E-invest accompagne les entrepreneurs et investisseurs burundais 
                dans la construction d'une économie plus juste et durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/nos-membres">
                  <Button className="bg-[#D4A63C] hover:bg-[#008a48] text-white px-8 py-6 text-lg font-medium">
                    Découvrir nos membres
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-gray-400 hover:bg-white/10 hover:text-gray-300 px-8 py-6 text-lg font-medium">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                  alt="Équipe E-invest"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Une équipe dédiée à votre réussite</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <Card className="p-8 border-l-4 border-l-[#D4A63C]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#D4A63C]/10 rounded-full">
                  <Target className="w-8 h-8 text-[#D4A63C]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Démocratiser l'accès au financement et à l'investissement au Burundi en créant 
                une plateforme coopérative qui connecte les épargnants aux entrepreneurs, 
                favorisant ainsi le développement économique local et la création d'emplois durables.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-[#1b7ab3]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#1b7ab3]/10 rounded-full">
                  <Eye className="w-8 h-8 text-[#1b7ab3]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Devenir la référence en matière de finance coopérative en Afrique de l'Est, 
                en construisant un écosystème financier inclusif qui permet à chaque individu 
                de réaliser son potentiel entrepreneurial et d'investir dans l'avenir de sa communauté.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-[#D4A63C]">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-[#D4A63C]/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-[#D4A63C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-[#1b7ab3]">Histoire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un parcours jalonné d'innovations et de succès partagés
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#D4A63C] to-[#1b7ab3]"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-[#D4A63C] mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#D4A63C] rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-[#D4A63C]">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés au service de votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#1b7ab3] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-[#1b7ab3]">Partenaires</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ensemble, nous construisons un écosystème financier robuste
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">Partenaire {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ensemble, construisons une économie plus juste et durable pour le Burundi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button className="bg-white text-[#D4A63C] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                Devenir membre
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-gray-400 hover:bg-white/10 hover:text-gray-300 px-8 py-6 text-lg font-medium">
                Nous rencontrer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}