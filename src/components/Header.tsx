
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("quem-somos");

  const menuItems = [
    { name: "Quem Somos", path: "#quem-somos", sectionId: "quem-somos" },
    { name: "Cardapio", path: "#cardapio", sectionId: "cardapio" },
    { name: "Produtos", path: "#produtos", sectionId: "produtos" },
    { name: "Como Chegar", path: "#como-chegar", sectionId: "como-chegar" },
    { name: "Contato", path: "#contato", sectionId: "contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.sectionId));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Special handling for cardapio section to scroll to the top of the image container
      if (sectionId === 'cardapio') {
        const headerHeight = 160; // Height of the header
        const targetPosition = element.offsetTop - headerHeight;
        window.scrollTo({ 
          top: targetPosition, 
          behavior: 'smooth' 
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-amber-800/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('quem-somos')}>
                <img
                  src="https://i.postimg.cc/zBkYW1Qw/La-Casita-Cardapio-page-0001.jpg"
                  alt="La Casita Logo"
                  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </button>
            </div>
            
            {/* Cafe Name and Title */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-amber-100 mb-1">La Casita</h1>
              <h2 className="text-lg font-semibold text-amber-200 mb-2">Confeitaria Uruguaiana</h2>
              
              <div className="text-amber-300 space-y-1">
                <p className="text-xs italic">R Gonçalves Ledo, 93 - Higienópolis, Santa Cruz do Sul - RS, 96820-746</p>
                <div className="text-xs font-medium">
                  <p>Seg a Sab - 7h30 às 23h</p>
                  <p>Dom - 11h às 22h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                    activeSection === item.sectionId
                      ? "text-amber-200"
                      : "text-amber-100 hover:text-amber-200"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-200 transform transition-transform duration-300 origin-left ${
                    activeSection === item.sectionId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-amber-800/95 backdrop-blur-sm">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 ${
                    activeSection === item.sectionId
                      ? "text-amber-200 bg-amber-700/50"
                      : "text-amber-100 hover:text-amber-200 hover:bg-amber-700/30"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
