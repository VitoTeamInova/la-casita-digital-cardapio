
import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import SettingsForm from "./SettingsForm";

const Footer = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm mb-4">
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
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="text-white hover:text-amber-200 transition-colors duration-300"
                  title="Settings"
                >
                  <Mail size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <SettingsForm 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
};

export default Footer;
