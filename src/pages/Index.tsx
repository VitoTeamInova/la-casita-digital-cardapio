import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Postres");
  const [selectedProduct, setSelectedProduct] = useState("Box Presente");

  const menuCategories = [
    { name: "Postres", image: "https://i.postimg.cc/wx0djgLg/La-Casita-Cardapio-page-0003.jpg" },
    { name: "Tortas Doces", image: "https://i.postimg.cc/c4CGK2BY/La-Casita-Cardapio-page-0004.jpg" },
    { name: "Tortas Saladas", image: "https://i.postimg.cc/3Jq521tq/La-Casita-Cardapio-page-0005.jpg" },
    { name: "Panchos", image: "https://i.postimg.cc/nL8yPzbY/La-Casita-Cardapio-page-0006.jpg" },
    { name: "MediaLunas", image: "https://i.postimg.cc/85NqT0C7/La-Casita-Cardapio-page-0007.jpg" },
    { name: "AlfaJores", image: "https://i.postimg.cc/90fK7wZV/La-Casita-Cardapio-page-0008.jpg" },
  ];

  const productCategories = [
    { name: "Box Presente", image: "https://i.postimg.cc/fb99M8PQ/Box-Presente-page-0001.jpg" },
    { name: "Dulce de Leite", image: "https://i.postimg.cc/rwb46BQ9/Box-Presente-page-0002.jpg" },
    { name: "Erva Mates", image: "https://i.postimg.cc/Vk5tVfB6/Box-Presente-page-0003.jpg" },
    { name: "Cha Mates", image: "https://i.postimg.cc/05fJ5MVj/Box-Presente-page-0009.jpg" },
    { name: "Porcoes", image: "https://i.postimg.cc/C1pf5jyB/Box-Presente-page-0005.jpg" },
    { name: "Cafe's", image: "https://i.postimg.cc/hvSzbctK/Box-Presente-page-0007.jpg" },
    { name: "Azeites", image: "https://i.postimg.cc/QC0BfwF1/Box-Presente-page-0008.jpg" },
  ];

  const getCurrentImage = () => {
    const category = menuCategories.find(cat => cat.name === selectedCategory);
    return category ? category.image : menuCategories[0].image;
  };

  const getCurrentProductImage = () => {
    const product = productCategories.find(prod => prod.name === selectedProduct);
    return product ? product.image : productCategories[0].image;
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
        
        {/* Quem Somos Section with Testimonials */}
        <section id="quem-somos" className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Testimonials on the left */}
              <div className="text-white space-y-8">
                <div>
                  <p className="text-lg leading-relaxed">
                    "Excelente café, medialunas maravilhosas, muito autênticas, ótimo atendimento e ambiente acolhedor. Recomendado! JS"
                  </p>
                </div>
                
                <div>
                  <p className="text-lg leading-relaxed">
                    "Finalmente um lugar aconchegante para tomar um ótimo café e produtos artesanais do Uruguai!! Isso é especial, um verdadeiro tesouro em Santa Cruz do Sul!! FS"
                  </p>
                </div>
                
                <div>
                  <p className="text-lg leading-relaxed">
                    "Ótimo ambiente e atendimento! Irei regularmente! O café e os produtos deles são caseiros e de ótima qualidade."
                  </p>
                </div>
              </div>
              
              {/* Image on the right */}
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
        <section id="produtos" className="relative z-10 min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <div className="bg-white/75 backdrop-blur-sm rounded-lg shadow-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-4">Produtos</h2>
                  <nav className="space-y-2">
                    {productCategories.map((product) => (
                      <button
                        key={product.name}
                        onClick={() => setSelectedProduct(product.name)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          selectedProduct === product.name
                            ? "bg-amber-700 text-white shadow-md"
                            : "text-gray-700 hover:bg-amber-100/50 hover:text-amber-700"
                        }`}
                      >
                        {product.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Product Content */}
              <div className="md:col-span-3">
                <div className="bg-white/55 backdrop-blur-sm rounded-lg shadow-lg p-4">
                  <div className="flex justify-center">
                    <img
                      src={getCurrentProductImage()}
                      alt={selectedProduct}
                      className="max-w-full h-auto rounded-lg shadow-md transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
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
