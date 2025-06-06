
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Quem Somos", path: "/" },
    { name: "Cardapio", path: "/cardapio" },
    { name: "Produtos", path: "/produtos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-64">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://i.postimg.cc/zBkYW1Qw/La-Casita-Cardapio-page-0001.jpg"
                alt="La Casita Logo"
                className="h-56 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-lg font-medium transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? "text-amber-700"
                      : "text-gray-700 hover:text-amber-700"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-amber-700 transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
