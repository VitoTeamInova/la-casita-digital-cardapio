
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="text-sm">
            <a
              href="https://www.teaminova.com"
              className="hover:text-amber-200 transition-colors duration-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              A TeamInova Solution
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/company/team-inova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-200 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:info@teaminova.com"
              className="text-white hover:text-amber-200 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
