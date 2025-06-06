
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SettingsFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsForm = ({ isOpen, onClose }: SettingsFormProps) => {
  const [settings, setSettings] = useState({
    siteName: 'La Casita',
    siteSubtitle: 'Confeitaria Uruguaiana',
    address: 'R Gonçalves Ledo, 93 - Higienópolis, Santa Cruz do Sul - RS, 96820-746',
    hours: 'Seg a Sab - 7h30 às 23h | Dom - 11h às 22h',
    mainLogo: 'https://i.postimg.cc/zBkYW1Qw/La-Casita-Cardapio-page-0001.jpg',
    coffeeLogo: 'https://img.freepik.com/vetores-premium/uruguai-icona-de-xicara-de-cafe-design-de-ilustracao-do-logotipo-da-cafeteria_1055966-99.jpg?w=2000',
    backgroundImage: 'https://i.postimg.cc/8zv3MSJF/La-Casita-Cardapio-page-0014.jpg',
    aboutImage: 'https://i.postimg.cc/C5PyPsSz/La-Casita-Cardapio-page-0002.jpg'
  });

  const handleInputChange = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // This would normally save to a backend/database
    console.log('Settings saved:', settings);
    alert('Settings saved! (This is a demo - settings would be saved to database)');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleInputChange('siteName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Subtitle
            </label>
            <input
              type="text"
              value={settings.siteSubtitle}
              onChange={(e) => handleInputChange('siteSubtitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours
            </label>
            <input
              type="text"
              value={settings.hours}
              onChange={(e) => handleInputChange('hours', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Logo URL
            </label>
            <input
              type="url"
              value={settings.mainLogo}
              onChange={(e) => handleInputChange('mainLogo', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Coffee Logo URL
            </label>
            <input
              type="url"
              value={settings.coffeeLogo}
              onChange={(e) => handleInputChange('coffeeLogo', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Image URL
            </label>
            <input
              type="url"
              value={settings.backgroundImage}
              onChange={(e) => handleInputChange('backgroundImage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Section Image URL
            </label>
            <input
              type="url"
              value={settings.aboutImage}
              onChange={(e) => handleInputChange('aboutImage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 p-6 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-amber-700 hover:bg-amber-800">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
