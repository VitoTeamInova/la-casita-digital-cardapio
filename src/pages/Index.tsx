
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
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
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Name and Title */}
          <div className="text-center mb-12 bg-white/60 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h1 className="text-5xl font-bold text-amber-900 mb-4">La Casita</h1>
            <h2 className="text-3xl font-semibold text-amber-700 mb-6">Confeitaria Uruguaiana</h2>
            
            <div className="text-gray-700 space-y-2">
              <p className="text-sm italic">R Gonçalves Ledo, 93 - Higienópolis, Santa Cruz do Sul - RS, 96820-746</p>
              <div className="text-sm font-medium">
                <p>Seg a Sab - 7h30 às 23h</p>
                <p>Dom - 11h às 22h</p>
              </div>
            </div>
          </div>

          {/* Content Image */}
          <div className="bg-white/65 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/C5PyPsSz/La-Casita-Cardapio-page-0002.jpg"
                alt="La Casita"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
