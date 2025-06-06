
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cardapio = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main 
        className="flex-1 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://i.postimg.cc/8zv3MSJF/La-Casita-Cardapio-page-0014.jpg')"
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">Cardápio</h1>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white/35 backdrop-blur-sm rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Categorias</h2>
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
              <div className="bg-white/35 backdrop-blur-sm rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-amber-900 mb-6">{selectedCategory}</h3>
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
      </main>

      <Footer />
    </div>
  );
};

export default Cardapio;
