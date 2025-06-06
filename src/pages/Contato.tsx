
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main 
        className="flex-1 relative bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.postimg.cc/8zv3MSJF/La-Casita-Cardapio-page-0014.jpg')"
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center bg-white/35 backdrop-blur-sm rounded-lg shadow-xl p-16 mx-4">
          <h1 className="text-6xl font-bold text-amber-900 mb-8">Contato</h1>
          <div className="text-4xl font-semibold text-gray-600 transform rotate-12 bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg">
            UNDER DEVELOPMENT
          </div>
          <p className="text-lg text-gray-600 mt-8">Esta página está em desenvolvimento</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
