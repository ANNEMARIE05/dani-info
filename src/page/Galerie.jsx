import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Search, Filter, Grid, LayoutGrid, MessageCircle, Briefcase, ZoomIn } from 'lucide-react';

export default function Galerie() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [categorieActive, setCategorieActive] = useState('tous');
  const [layoutGrid, setLayoutGrid] = useState('3cols');
  const [projetModal, setProjetModal] = useState(null);

  const categories = [
    { id: 'tous', nom: 'Tous les projets' },
    { id: 'identite', nom: 'Identité Visuelle' },
    { id: 'packaging', nom: 'Packaging' },
    { id: 'affiches', nom: 'Affiches' },
    { id: 'web', nom: 'Design Web' },
    { id: 'illustration', nom: 'Illustrations' },
    { id: 'branding', nom: 'Branding' }
  ];

  const projets = [
    {
      id: 1,
      titre: "Identité Visuelle Café Luna",
      categorie: "identite",
      description: "Création complète d'identité de marque pour un café moderne et élégant",
      client: "Café Luna",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      tags: ["Logo", "Charte graphique", "Cartes de visite"]
    },
    {
      id: 2,
      titre: "Packaging Chocolat Artisanal",
      categorie: "packaging",
      description: "Design d'emballage premium pour une gamme de chocolats artisanaux",
      client: "Choco Délice",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop",
      tags: ["Packaging", "3D", "Print"]
    },
    {
      id: 3,
      titre: "Campagne Publicitaire Festival",
      categorie: "affiches",
      description: "Série d'affiches pour un festival de musique urbaine",
      client: "Urban Vibes Festival",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Affiche", "Print", "Événementiel"]
    },
    {
      id: 4,
      titre: "Site Web Agence Immobilière",
      categorie: "web",
      description: "Interface moderne et intuitive pour une agence immobilière de luxe",
      client: "Prestige Immo",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      tags: ["UI/UX", "Web Design", "Responsive"]
    },
    {
      id: 5,
      titre: "Illustrations Livre Jeunesse",
      categorie: "illustration",
      description: "Série d'illustrations colorées pour un livre d'enfants",
      client: "Éditions Soleil",
      annee: "2023",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
      tags: ["Illustration", "Digital Art", "Jeunesse"]
    },
    {
      id: 6,
      titre: "Branding Startup Tech",
      categorie: "branding",
      description: "Stratégie visuelle complète pour une startup technologique",
      client: "TechFlow",
      annee: "2023",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
      tags: ["Branding", "Logo", "Guidelines"]
    },
    {
      id: 7,
      titre: "Identité Restaurant Fusion",
      categorie: "identite",
      description: "Identité visuelle pour un restaurant de cuisine fusion asiatique",
      client: "Sakura Fusion",
      annee: "2023",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      tags: ["Logo", "Menu Design", "Signalétique"]
    },
    {
      id: 8,
      titre: "Packaging Cosmétiques Bio",
      categorie: "packaging",
      description: "Design éco-responsable pour une ligne de cosmétiques naturels",
      client: "Pure Nature",
      annee: "2023",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
      tags: ["Packaging", "Écologique", "Premium"]
    },
    {
      id: 9,
      titre: "Affiches Concert Jazz",
      categorie: "affiches",
      description: "Collection d'affiches vintage pour une série de concerts jazz",
      client: "Jazz Club Abidjan",
      annee: "2023",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      tags: ["Affiche", "Vintage", "Musique"]
    },
    {
      id: 10,
      titre: "App Mobile Fitness",
      categorie: "web",
      description: "Design d'interface pour une application de coaching sportif",
      client: "FitCoach Pro",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      tags: ["Mobile App", "UI/UX", "Fitness"]
    },
    {
      id: 11,
      titre: "Illustrations Marque Mode",
      categorie: "illustration",
      description: "Illustrations fashion pour une marque de vêtements urbains",
      client: "Street Essence",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      tags: ["Fashion", "Illustration", "Digital"]
    },
    {
      id: 12,
      titre: "Branding Hôtel Boutique",
      categorie: "branding",
      description: "Identité visuelle luxueuse pour un hôtel boutique",
      client: "Le Palais d'Or",
      annee: "2024",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      tags: ["Branding", "Luxe", "Hospitalité"]
    }
  ];

  const projetsFiltres = categorieActive === 'tous' 
    ? projets 
    : projets.filter(p => p.categorie === categorieActive);

  const ouvrirModal = (projet) => {
    setProjetModal(projet);
  };

  const fermerModal = () => {
    setProjetModal(null);
  };

  const naviguerProjet = (direction) => {
    const indexActuel = projetsFiltres.findIndex(p => p.id === projetModal.id);
    let nouvelIndex;
    
    if (direction === 'prev') {
      nouvelIndex = indexActuel > 0 ? indexActuel - 1 : projetsFiltres.length - 1;
    } else {
      nouvelIndex = indexActuel < projetsFiltres.length - 1 ? indexActuel + 1 : 0;
    }
    
    setProjetModal(projetsFiltres[nouvelIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Barre d'information supérieure */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail size={14} />
              contact@danie-info.design
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} />
              +225 07 00 00 00 00
            </span>
          </div>
          <span className="font-medium">Portfolio de projets créatifs</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Danie Info
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Accueil</a>
              <a href="#" className="text-orange-600 font-medium">Galerie</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">À propos</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all flex items-center gap-2 font-medium">
                <Briefcase size={18} />
                Faire une Prestation
              </button>
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              {menuVisible ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuVisible && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-center text-gray-700 hover:text-orange-600 py-2 font-medium">Accueil</a>
              <a href="#" className="block text-center text-orange-600 py-2 font-medium">Galerie</a>
              <a href="#" className="block text-center text-gray-700 hover:text-orange-600 py-2 font-medium">À propos</a>
              <a href="#" className="block text-center text-gray-700 hover:text-orange-600 py-2 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block animate-bounce-slow mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                200+ Projets Créatifs
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ma <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Galerie</span> Créative
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Découvrez une sélection de mes meilleurs projets en design graphique, branding et illustration. Chaque création raconte une histoire unique.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-orange-100">
                <span className="text-2xl font-bold text-orange-600">200+</span>
                <span className="text-gray-600 ml-2">Projets</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-orange-100">
                <span className="text-2xl font-bold text-orange-600">50+</span>
                <span className="text-gray-600 ml-2">Clients</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-orange-100">
                <span className="text-2xl font-bold text-orange-600">5+</span>
                <span className="text-gray-600 ml-2">Années</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres et Options */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Catégories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategorieActive(cat.id)}
                  className={`px-4 py-2 rounded-full transition-all font-medium ${
                    categorieActive === cat.id
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                      : 'bg-orange-50 text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {cat.nom}
                </button>
              ))}
            </div>

            {/* Options d'affichage */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">
                {projetsFiltres.length} projet{projetsFiltres.length > 1 ? 's' : ''}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLayoutGrid('2cols')}
                  className={`p-2 rounded-lg transition-colors ${
                    layoutGrid === '2cols' ? 'bg-orange-600 text-white' : 'bg-orange-50 text-gray-700'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setLayoutGrid('3cols')}
                  className={`p-2 rounded-lg transition-colors ${
                    layoutGrid === '3cols' ? 'bg-orange-600 text-white' : 'bg-orange-50 text-gray-700'
                  }`}
                >
                  <LayoutGrid size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille de Projets */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 md:gap-8 ${
            layoutGrid === '2cols' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {projetsFiltres.map((projet, index) => (
              <div
                key={projet.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 cursor-pointer"
                onClick={() => ouvrirModal(projet)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn size={48} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Voir le projet</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-orange-600">
                    {projet.annee}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {projet.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {projet.titre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{projet.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{projet.client}</span>
                    <span className="text-orange-600 font-medium flex items-center gap-1">
                      Voir plus →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Projet */}
      {projetModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{projetModal.titre}</h2>
              <button
                onClick={fermerModal}
                className="p-2 hover:bg-orange-50 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="relative mb-8 rounded-2xl overflow-hidden">
                <img
                  src={projetModal.image}
                  alt={projetModal.titre}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Client</p>
                  <p className="text-lg font-bold text-gray-900">{projetModal.client}</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Année</p>
                  <p className="text-lg font-bold text-gray-900">{projetModal.annee}</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Catégorie</p>
                  <p className="text-lg font-bold text-gray-900 capitalize">
                    {categories.find(c => c.id === projetModal.categorie)?.nom}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{projetModal.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {projetModal.tags.map((tag, i) => (
                    <span key={i} className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t">
                <button
                  onClick={() => naviguerProjet('prev')}
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  <ChevronLeft size={20} />
                  Projet précédent
                </button>
                <button
                  onClick={() => naviguerProjet('next')}
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  Projet suivant
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-orange-100">
            Travaillons ensemble pour créer quelque chose d'exceptionnel. Je suis disponible pour de nouveaux projets passionnants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
              <Briefcase size={20} />
              Démarrer un projet
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105">
              Télécharger mon portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-400">Danie Info</h3>
              </div>
              <p className="text-orange-200">Infographiste Professionnel</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-orange-300">Contact</h4>
              <div className="space-y-2 text-sm text-orange-200">
                <p>contact@danie-info.design</p>
                <p>+225 07 00 00 00 00</p>
                <p>Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-orange-300">Suivez-moi</h4>
              <p className="text-sm text-orange-200">
                © 2024 Danie Info. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp */}
      <a
        href="https://wa.me/22507000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 z-50 animate-bounce-slow"
      >
        <MessageCircle size={28} />
      </a>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}