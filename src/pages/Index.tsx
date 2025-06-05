
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
          <div className="text-center mb-12 bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-xl">
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

          {/* About Text with Image */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Somos uma confeitaria e cafeteria com alma e significados, onde cada elemento conta uma história. 
                  Oferecemos produtos únicos e artesanais que resgatam o sabor afetivo da cultura uruguaia.
                </p>
                <p>
                  Com o compromisso inabalável com a qualidade, nossos produtos são elaborados de forma artesanal 
                  com os melhores ingredientes de origem. Utilizamos alguns dos principais ingredientes como: 
                  farinhas, manteiga, queijos e doce de leite de origem uruguaia e argentina, sendo nossas receitas 
                  todas sem conservantes ou aditivos.
                </p>
                <p>
                  Nosso café especial (+84 pontos) vem diretamente do produtor na Serra do Caparaó - MG. 
                  Torrado sob demanda, garantimos um café sempre fresco, de origem e que harmoniza perfeitamente 
                  com nossas delícias!
                </p>
                <p>
                  Somos o sabor do Uruguai feito com o coração brasileiro, por isso resgatamos memórias e criamos 
                  experiência através de aromas e sabores, unindo o melhor dos dois países UY | BR.
                </p>
                <p className="font-semibold text-amber-700">Com Carinho,<br/>La Casita.</p>
              </div>
              
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/zf9jqbX3/La-Casita-Cardapio-page-0002.jpg"
                  alt="La Casita"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
