"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InvestissementsPage() {
  const projects = [
    {
      id: 1,
      title: "Ferme Solaire de Gitega",
      description: "Installation de panneaux solaires pour alimenter 500 foyers ruraux",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      target: 150000,
      raised: 89000,
      investors: 47,
      duration: "24 mois",
      returnRate: "8.5%",
      category: "Énergie Renouvelable",
      status: "En cours"
    },
    {
      id: 2,
      title: "Coopérative Agricole du Bururi",
      description: "Modernisation des équipements pour augmenter la productivité du café",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
      target: 80000,
      raised: 80000,
      investors: 32,
      duration: "18 mois",
      returnRate: "7.2%",
      category: "Agriculture",
      status: "Financé"
    },
    {
      id: 3,
      title: "Atelier de Menuiserie Communautaire",
      description: "Création d'un atelier équipé pour former et employer 15 jeunes artisans",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      target: 45000,
      raised: 23000,
      investors: 18,
      duration: "12 mois",
      returnRate: "9.1%",
      category: "Artisanat",
      status: "En cours"
    },
    {
      id: 4,
      title: "École Technique de Muyinga",
      description: "Construction d'ateliers techniques pour former aux métiers du numérique",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      target: 200000,
      raised: 45000,
      investors: 23,
      duration: "36 mois",
      returnRate: "6.8%",
      category: "Éducation",
      status: "En cours"
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
              Opportunités d'<span className="text-[#D4A63C]">Investissement</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez des projets à fort impact social et environnemental avec des rendements attractifs
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <TrendingUp className="w-12 h-12 text-[#D4A63C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">8.5%</h3>
                <p className="text-gray-300">Rendement moyen annuel</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Users className="w-12 h-12 text-[#D4A63C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">120+</h3>
                <p className="text-gray-300">Investisseurs actifs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <DollarSign className="w-12 h-12 text-[#D4A63C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">475k€</h3>
                <p className="text-gray-300">Total investi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres et projets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filtres */}
            <div className="lg:w-1/4">
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Filtrer par</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Catégorie</h4>
                    <div className="space-y-2">
                      {["Tous", "Agriculture", "Énergie Renouvelable", "Artisanat", "Éducation"].map((cat) => (
                        <label key={cat} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Statut</h4>
                    <div className="space-y-2">
                      {["En cours", "Financé", "Terminé"].map((status) => (
                        <label key={status} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Rendement</h4>
                    <div className="space-y-2">
                      {["5-7%", "7-9%", "9%+"].map((rate) => (
                        <label key={rate} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{rate}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Liste des projets */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">{projects.length} projets disponibles</h2>
                <select className="border border-gray-300 rounded-lg px-4 py-2">
                  <option>Trier par popularité</option>
                  <option>Trier par rendement</option>
                  <option>Trier par montant</option>
                </select>
              </div>

              <div className="grid gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge 
                            variant={project.status === 'Financé' ? 'default' : 'secondary'}
                            className={project.status === 'Financé' ? 'bg-green-500' : 'bg-[#D4A63C]'}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <Badge variant="outline" className="mb-2">{project.category}</Badge>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#D4A63C]">{project.returnRate}</div>
                            <div className="text-sm text-gray-500">Rendement annuel</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500">Objectif</div>
                            <div className="font-semibold">{project.target.toLocaleString()}€</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Collecté</div>
                            <div className="font-semibold">{project.raised.toLocaleString()}€</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Investisseurs</div>
                            <div className="font-semibold">{project.investors}</div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Progression</span>
                            <span className="text-sm font-medium">{Math.round((project.raised / project.target) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(project.raised / project.target) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {project.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {project.investors} investisseurs
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white">
                            Investir maintenant
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" className="border-[#D4A63C] text-[#D4A63C] hover:bg-[#D4A63C] hover:text-white">
                  Charger plus de projets
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-[#D4A63C] to-[#1b7ab3] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à commencer votre parcours d'investissement ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez notre communauté d'investisseurs et contribuez au développement durable
          </p>
          <Link href="/auth/register">
            <Button className="bg-white text-[#D4A63C] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
              Créer mon compte investisseur
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}