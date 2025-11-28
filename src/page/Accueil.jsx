import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronUp, MessageCircle, Briefcase } from 'lucide-react';

export default function Accueil() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [btnHautVisible, setBtnHautVisible] = useState(false);
  const [sectionActuelle, setSectionActuelle] = useState('accueil');

  useEffect(() => {
    const gererScroll = () => {
      setBtnHautVisible(window.scrollY > 400);
      
      const sections = ['accueil', 'apropos', 'galerie', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setSectionActuelle(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', gererScroll);
    return () => window.removeEventListener('scroll', gererScroll);
  }, []);

  const allerEnHaut = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const naviguerVers = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuVisible(false);
    }
  };

  const projets = [
    {
      titre: "Identité Visuelle",
      description: "Création complète d'identité de marque",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
    },
    {
      titre: "Design Packaging",
      description: "Conception d'emballages innovants",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop"
    },
    {
      titre: "Affiches Publicitaires",
      description: "Campagnes visuelles impactantes",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    },
    {
      titre: "Design Web",
      description: "Interfaces modernes et élégantes",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop"
    },
    {
      titre: "Illustrations",
      description: "Créations artistiques sur mesure",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop"
    },
    {
      titre: "Branding",
      description: "Stratégies visuelles de marque",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop"
    }
  ];

  const competences = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Figma",
    "CorelDRAW",
    "After Effects"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Barre d'information supérieure */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-1.5 md:py-2 px-3 md:px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-1.5 md:gap-2">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <Mail size={12} className="md:w-3.5 md:h-3.5" />
              contact@danie-info.design
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} className="md:w-3.5 md:h-3.5" />
              +225 07 00 00 00 00
            </span>
          </div>
          <div className="hidden md:block text-center sm:text-right">
            <span className="font-medium text-xs sm:text-sm">Infographiste freelance pour marques ambitieuses.</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">D</span>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Danie Info
              </span>
            </div>
            
            {/* Menu desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {['accueil', 'apropos', 'galerie', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => naviguerVers(item)}
                  className={`capitalize transition-colors font-medium ${
                    sectionActuelle === item 
                      ? 'text-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item === 'apropos' ? 'À propos' : item}
                </button>
              ))}
              <button
                onClick={() => naviguerVers('contact')}
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all flex items-center gap-2 font-medium"
              >
                <Briefcase size={18} />
                Faire une Prestation
              </button>
            </div>

            {/* Bouton menu mobile */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              {menuVisible ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuVisible && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              {['accueil', 'apropos', 'galerie', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => naviguerVers(item)}
                  className="block w-full text-center capitalize text-gray-700 hover:text-orange-600 py-2 font-medium"
                >
                  {item === 'apropos' ? 'À propos' : item}
                </button>
              ))}
              <button
                onClick={() => naviguerVers('contact')}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2 font-medium"
              >
                <Briefcase size={18} />
                Faire une Prestation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Section Accueil */}
      <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <div className="inline-block animate-bounce-slow">
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                  +5 ans d'expérience
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bonjour, je suis <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Daniel</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-amber-800 font-semibold">Infographiste Professionnel</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Avec plus de 5 ans d'expérience, je transforme vos idées en créations visuelles exceptionnelles qui font la différence.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <button
                  onClick={() => naviguerVers('contact')}
                  className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:shadow-xl transition-all shadow-lg transform hover:scale-105 text-sm md:text-base"
                >
                  Me Contacter
                </button>
                <button
                  onClick={() => naviguerVers('galerie')}
                  className="border-2 border-orange-600 text-orange-600 px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-orange-50 transition-all transform hover:scale-105 text-sm md:text-base"
                >
                  Voir Mes Travaux
                </button>
              </div>
            </div>
            <div className="relative animate-float mt-6 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <span className="text-6xl sm:text-7xl md:text-8xl font-bold relative z-10">D</span>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              À Propos de <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Passionné par le design graphique depuis plus de 5 ans, je me spécialise dans la création d'identités visuelles uniques et percutantes. Mon approche combine créativité, technique et stratégie pour donner vie à vos projets.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Chaque projet est une nouvelle opportunité de créer quelque chose d'exceptionnel. Je travaille en étroite collaboration avec mes clients pour comprendre leur vision et la transformer en réalité visuelle.
              </p>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 md:p-6 rounded-2xl border border-orange-100">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Mon Expertise</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center text-sm sm:text-base text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></span>
                    Identité visuelle & Branding
                  </li>
                  <li className="flex items-center text-sm sm:text-base text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></span>
                    Design d'emballage
                  </li>
                  <li className="flex items-center text-sm sm:text-base text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></span>
                    Affiches & Supports publicitaires
                  </li>
                  <li className="flex items-center text-sm sm:text-base text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></span>
                    Illustrations & Design web
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 md:p-8 rounded-2xl border border-orange-100">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Compétences</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {competences.map((comp, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-3 md:p-4 rounded-xl shadow-sm text-center text-xs sm:text-sm md:text-base text-gray-700 font-medium hover:shadow-md transition-shadow border border-orange-100"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {comp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-4 md:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">5+</div>
                  <div className="text-xs sm:text-sm mt-1 md:mt-2">Années d'Expérience</div>
                </div>
                <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white p-4 md:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">200+</div>
                  <div className="text-xs sm:text-sm mt-1 md:mt-2">Projets Réalisés</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-4 md:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm mt-1 md:mt-2">Satisfaction Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="galerie" className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Mes <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Créations</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Découvrez une sélection de mes réalisations récentes qui illustrent mon savoir-faire et ma créativité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {projets.map((projet, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-orange-600 transition-colors">{projet.titre}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{projet.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => naviguerVers('contact')}
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:shadow-xl transition-all shadow-lg transform hover:scale-105 inline-flex items-center gap-2 text-sm md:text-base"
            >
              <Briefcase size={18} className="md:w-5 md:h-5" />
              Démarrer un Projet
            </button>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Contactez-<span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-5 md:space-y-8">
              <div className="flex items-start space-x-3 md:space-x-4 group">
                <div className="bg-orange-100 p-3 md:p-4 rounded-full group-hover:bg-orange-600 transition-colors flex-shrink-0">
                  <Phone className="text-orange-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Téléphone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+225 07 00 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 group">
                <div className="bg-orange-100 p-3 md:p-4 rounded-full group-hover:bg-orange-600 transition-colors flex-shrink-0">
                  <Mail className="text-orange-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 break-words">contact@danie-info.design</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 group">
                <div className="bg-orange-100 p-3 md:p-4 rounded-full group-hover:bg-orange-600 transition-colors flex-shrink-0">
                  <MapPin className="text-orange-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Localisation</h3>
                  <p className="text-sm sm:text-base text-gray-600">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 md:p-8 rounded-2xl border border-orange-100">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Disponibilité</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">
                  Je suis actuellement disponible pour de nouveaux projets et collaborations. Contactez-moi pour discuter de vos besoins.
                </p>
                <div className="flex items-center gap-2 text-orange-600 font-medium text-sm sm:text-base">
                  <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
                  Disponible maintenant
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 md:p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1.5 md:mb-2">Nom Complet</label>
                  <input
                    type="text"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1.5 md:mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1.5 md:mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-medium mb-1.5 md:mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2.5 md:py-3 rounded-xl hover:shadow-xl transition-all shadow-lg font-medium transform hover:scale-105 text-sm md:text-base"
                >
                  Envoyer le Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3 md:mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400">Danie Info</h3>
              </div>
              <p className="text-sm sm:text-base text-orange-200">Infographiste Professionnel</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base text-orange-300">Navigation</h4>
              <div className="space-y-1.5 md:space-y-2">
                {['accueil', 'apropos', 'galerie', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => naviguerVers(item)}
                    className="block text-sm sm:text-base text-orange-200 hover:text-orange-400 transition-colors capitalize mx-auto md:mx-0"
                  >
                    {item === 'apropos' ? 'À propos' : item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base text-orange-300">Suivez-moi</h4>
              <p className="text-xs sm:text-sm md:text-base text-orange-200">
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
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-br from-green-500 to-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 z-50 animate-bounce-slow"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle size={24} className="md:w-7 md:h-7" />
      </a>

      {/* Bouton retour en haut */}
      {btnHautVisible && (
        <button
          onClick={allerEnHaut}
          className="fixed bottom-20 right-4 md:bottom-24 md:right-6 bg-gradient-to-br from-amber-900 to-amber-800 text-white p-2.5 md:p-3 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-500 transition-all hover:scale-110 z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp size={20} className="md:w-6 md:h-6" />
        </button>
      )}

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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
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