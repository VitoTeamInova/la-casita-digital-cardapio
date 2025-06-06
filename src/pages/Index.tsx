
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Postres");

  const menuCategories = [
    { name: "Postres", image: "https://i.postimg.cc/wx0djgLg/La-Casita-Cardapio-page-0003.jpg" },
    { name: "Tortas Doces", image: "https://i.postimg.cc/c4CGK2BY/La-Casita-Cardapio-page-0004.jpg" },
    { name: "Tortas Saladas", image: "https://i.postimg.cc/3Jq521tq/La-Casita-Cardapio-page-0005.jpg" },
    { name: "Panchos", image: "https://i.postimg.cc/nL8yPzbY/La-Casita-Cardapio-page-0006.jpg" },
    { name: "MediaLunas", image: "https://i.postimg.cc/85NqT0C7/La-Casita-Cardapio-page-0007.jpg" },
    { name: "AlfaJores", image: "https://i.postimg.cc/90fK7wZV/La-Casita-Cardapio-page-0008.jpg" },
  ];

  const getCurrentImage = () => {
    const category = menuCategories.find(cat => cat.name === selectedCategory);
    return category ? category.image : menuCategories[0].image;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5551999994477"; // +55 (51) 9 9999 4477 formatted for WhatsApp
    const message = "Olá! Gostaria de saber mais sobre La Casita Confeitaria.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content with Background */}
      <main 
        className="flex-1 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://i.postimg.cc/8zv3MSJF/La-Casita-Cardapio-page-0014.jpg')"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Quem Somos Section */}
        <section id="quem-somos" className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white/35 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/C5PyPsSz/La-Casita-Cardapio-page-0002.jpg"
                  alt="La Casita"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div id="cardapio-separator" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="bg-amber-300/50 h-1" />
        </div>

        {/* Cardapio Section */}
        <section id="cardapio" className="relative z-10 min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <div className="bg-white/75 backdrop-blur-sm rounded-lg shadow-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-4">Cardapio</h2>
                  <nav className="space-y-2">
                    {menuCategories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.name
                            ? "bg-amber-700 text-white shadow-md"
                            : "text-gray-700 hover:bg-amber-100/50 hover:text-amber-700"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Menu Content */}
              <div className="md:col-span-3">
                <div className="bg-white/55 backdrop-blur-sm rounded-lg shadow-lg p-4">
                  <div className="flex justify-center">
                    <img
                      src={getCurrentImage()}
                      alt={selectedCategory}
                      className="max-w-full h-auto rounded-lg shadow-md transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Section */}
        <section id="produtos" className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center bg-white/35 backdrop-blur-sm rounded-lg shadow-xl p-16 mx-4">
            <h1 className="text-6xl font-bold text-amber-900 mb-8">Produtos</h1>
            <div className="text-4xl font-semibold text-gray-600 transform rotate-12 bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg">
              UNDER DEVELOPMENT
            </div>
            <p className="text-lg text-gray-600 mt-8">Esta página está em desenvolvimento</p>
          </div>
        </section>

        {/* Como Chegar Section */}
        <section id="como-chegar" className="relative z-10 min-h-screen flex items-center justify-center py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Map />
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <div className="text-center bg-white/35 backdrop-blur-sm rounded-lg shadow-xl p-16">
              <h1 className="text-6xl font-bold text-amber-900 mb-8">Contato</h1>
              <div className="text-4xl font-semibold text-gray-600 transform rotate-12 bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg">
                UNDER DEVELOPMENT
              </div>
              <p className="text-lg text-gray-600 mt-8">Esta página está em desenvolvimento</p>
            </div>
            
            {/* WhatsApp Button */}
            <div className="absolute bottom-4 left-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
                title="Fale conosco no WhatsApp"
              >
                <MessageCircle size={24} />
                <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
