"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Quote, Building2, Briefcase, Home, Tractor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NosMembresPage() {
  const testimonials = [
    {
      id: 1,
      name: "Marie Uwimana",
      role: "Entrepreneure",
      company: "Atelier de Couture Moderne",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      testimonial: "Grâce au financement d'E-invest, j'ai pu équiper mon atelier et former 8 jeunes femmes. Aujourd'hui, nous vendons nos créations dans tout le pays.",
      investment: "25,000€",
      sector: "Artisanat",
      memberSince: "2022",
      rating: 5
    },
    {
      id: 2,
      name: "Jean-Baptiste Niyonzima",
      role: "Agriculteur",
      company: "Ferme Biologique du Lac",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      testimonial: "Le prêt agricole m'a permis d'acheter des équipements modernes. Ma production a doublé et je peux maintenant exporter vers les pays voisins.",
      investment: "45,000€",
      sector: "Agriculture",
      memberSince: "2021",
      rating: 5
    },
    {
      id: 3,
      name: "Diane Ndayisenga",
      role: "Directrice",
      company: "École Technique Avenir",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b190?auto=format&fit=crop&w=300&q=80",
      testimonial: "L'investissement participatif nous a aidés à construire nos nouveaux laboratoires. 200 étudiants bénéficient maintenant d'une formation de qualité.",
      investment: "120,000€",
      sector: "Éducation",
      memberSince: "2020",
      rating: 5
    },
    {
      id: 4,
      name: "Patrick Habimana",
      role: "Entrepreneur",
      company: "Boulangerie Moderne",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      testimonial: "Avec le soutien d'E-invest, j'ai ouvert 3 nouvelles boulangeries. L'accompagnement de l'équipe a été précieux pour développer mon business plan.",
      investment: "35,000€",
      sector: "Alimentaire",
      memberSince: "2023",
      rating: 5
    },
    {
      id: 5,
      name: "Esperance Mukamana",
      role: "Médecin",
      company: "Clinique Santé Plus",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      testimonial: "Le financement m'a permis d'équiper ma clinique avec du matériel moderne. Je peux maintenant offrir des soins de qualité à ma communauté.",
      investment: "80,000€",
      sector: "Santé",
      memberSince: "2022",
      rating: 5
    },
    {
      id: 6,
      name: "Emmanuel Bizimana",
      role: "Ingénieur",
      company: "Solutions Tech BDI",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      testimonial: "Grâce à E-invest, j'ai lancé ma startup tech. Nous développons maintenant des solutions digitales pour les PME burundaises.",
      investment: "60,000€",
      sector: "Technologie",
      memberSince: "2023",
      rating: 5
    }
  ];

  const stats = [
    { label: "Membres actifs", value: "1,250+", icon: Users },
    { label: "Projets financés", value: "450+", icon: Building2 },
    { label: "Emplois créés", value: "2,800+", icon: Briefcase },
    { label: "Satisfaction", value: "98%", icon: Star }
  ];

  const sectorIcons = {
    "Artisanat": Building2,
    "Agriculture": Tractor,
    "Éducation": Building2,
    "Alimentaire": Building2,
    "Santé": Building2,
    "Technologie": Building2
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e2a36] to-[#2c3e50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-[#D4A63C]">Membres</span> Témoignent
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez les histoires inspirantes de ceux qui ont transformé leurs rêves en réalité 
              grâce au soutien de notre coopérative
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <stat.icon className="w-10 h-10 text-[#D4A63C] mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Histoires de <span className="text-[#D4A63C]">Réussite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque membre a une histoire unique. Découvrez comment E-invest a contribué 
              à leur succès et à leur épanouissement professionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((member) => {
              const SectorIcon = sectorIcons[member.sector] || Building2;
              
              return (
                <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#D4A63C] text-white">{member.sector}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <SectorIcon className="w-5 h-5 text-[#D4A63C]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(member.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4A63C] text-[#D4A63C]" />
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#1b7ab3] font-medium mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.company}</p>
                    
                    <div className="relative mb-4">
                      <Quote className="w-6 h-6 text-[#D4A63C] opacity-50 absolute -top-2 -left-1" />
                      <p className="text-gray-700 italic pl-5 text-sm leading-relaxed">
                        "{member.testimonial}"
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-gray-500">Financement</div>
                        <div className="font-semibold text-[#D4A63C]">{member.investment}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Membre depuis</div>
                        <div className="font-semibold">{member.memberSince}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#D4A63C] text-[#D4A63C] hover:bg-[#D4A63C] hover:text-white px-8 py-3">
              Voir plus de témoignages
            </Button>
          </div>
        </div>
      </section>

      {/* Section Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                L'Impact de Notre <span className="text-[#1b7ab3]">Communauté</span>
              </h2>
              <p className="text-lg text-gray-600">
                Ensemble, nos membres créent un impact durable dans leurs communautés. 
                Chaque projet financé contribue au développement économique et social du Burundi.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2,800+", label: "Emplois créés" },
                  { value: "15,000+", label: "Bénéficiaires directs" },
                  { value: "35+", label: "Communes touchées" },
                  { value: "98%", label: "Taux de remboursement" }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#D4A63C] mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link href="/auth/register">
                  <Button className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white px-8 py-6 text-lg font-medium">
                    Rejoindre la communauté
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
                  alt="Réunion communautaire"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover h-40 w-full"
                />
                <Image
                  src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?auto=format&fit=crop&w=300&q=80"
                  alt="Formation entrepreneuriale"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover h-40 w-full mt-8"
                />
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=80"
                  alt="Projet agricole"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover h-40 w-full -mt-4"
                />
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80"
                  alt="Atelier artisanal"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover h-40 w-full mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Votre Histoire Commence Ici
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez une communauté de plus de 1,250 membres qui transforment leurs rêves en réalité
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