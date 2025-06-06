
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Download, Upload } from "lucide-react";

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
    backgroundImage: 'https://i.postimg.cc/8zv3MSJF/La-Casita-Cardapio-page-0014.jpg',
    aboutImage: 'https://i.postimg.cc/C5PyPsSz/La-Casita-Cardapio-page-0002.jpg',
    postresImage: 'https://i.postimg.cc/wx0djgLg/La-Casita-Cardapio-page-0003.jpg',
    tortasDocesImage: 'https://i.postimg.cc/c4CGK2BY/La-Casita-Cardapio-page-0004.jpg',
    tortasSalgadasImage: 'https://i.postimg.cc/3Jq521tq/La-Casita-Cardapio-page-0005.jpg',
    panchosImage: 'https://i.postimg.cc/nL8yPzbY/La-Casita-Cardapio-page-0006.jpg',
    mediaLunasImage: 'https://i.postimg.cc/85NqT0C7/La-Casita-Cardapio-page-0007.jpg',
    alfaJoresImage: 'https://i.postimg.cc/90fK7wZV/La-Casita-Cardapio-page-0008.jpg',
    boxPresenteImage: 'https://i.postimg.cc/fb99M8PQ/Box-Presente-page-0001.jpg',
    dulceDeLeiteImage: 'https://i.postimg.cc/rwb46BQ9/Box-Presente-page-0002.jpg',
    ervaMatesImage: 'https://i.postimg.cc/Vk5tVfB6/Box-Presente-page-0003.jpg',
    chaMatesImage: 'https://i.postimg.cc/05fJ5MVj/Box-Presente-page-0009.jpg',
    porcoesImage: 'https://i.postimg.cc/C1pf5jyB/Box-Presente-page-0005.jpg',
    cafesImage: 'https://i.postimg.cc/hvSzbctK/Box-Presente-page-0007.jpg',
    azeitesImage: 'https://i.postimg.cc/QC0BfwF1/Box-Presente-page-0008.jpg'
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

  const handleExport = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'la-casita-settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSettings = JSON.parse(e.target?.result as string);
          setSettings(importedSettings);
          alert('Settings imported successfully!');
        } catch (error) {
          alert('Error importing settings. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Import/Export Section */}
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <Button onClick={handleExport} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Settings
            </Button>
            <div>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
                id="import-file"
              />
              <label htmlFor="import-file">
                <Button asChild className="flex items-center gap-2">
                  <span>
                    <Upload className="h-4 w-4" />
                    Import Settings
                  </span>
                </Button>
              </label>
            </div>
          </div>

          {/* Basic Site Information */}
          <div className="grid md:grid-cols-2 gap-6">
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

          {/* Main Images */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Images</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
          </div>

          {/* Menu Category Images */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu Category Images</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postres Image URL
                </label>
                <input
                  type="url"
                  value={settings.postresImage}
                  onChange={(e) => handleInputChange('postresImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tortas Doces Image URL
                </label>
                <input
                  type="url"
                  value={settings.tortasDocesImage}
                  onChange={(e) => handleInputChange('tortasDocesImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tortas Saladas Image URL
                </label>
                <input
                  type="url"
                  value={settings.tortasSalgadasImage}
                  onChange={(e) => handleInputChange('tortasSalgadasImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Panchos Image URL
                </label>
                <input
                  type="url"
                  value={settings.panchosImage}
                  onChange={(e) => handleInputChange('panchosImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MediaLunas Image URL
                </label>
                <input
                  type="url"
                  value={settings.mediaLunasImage}
                  onChange={(e) => handleInputChange('mediaLunasImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AlfaJores Image URL
                </label>
                <input
                  type="url"
                  value={settings.alfaJoresImage}
                  onChange={(e) => handleInputChange('alfaJoresImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Product Category Images */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Category Images</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Box Presente Image URL
                </label>
                <input
                  type="url"
                  value={settings.boxPresenteImage}
                  onChange={(e) => handleInputChange('boxPresenteImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dulce de Leite Image URL
                </label>
                <input
                  type="url"
                  value={settings.dulceDeLeiteImage}
                  onChange={(e) => handleInputChange('dulceDeLeiteImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Erva Mates Image URL
                </label>
                <input
                  type="url"
                  value={settings.ervaMatesImage}
                  onChange={(e) => handleInputChange('ervaMatesImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cha Mates Image URL
                </label>
                <input
                  type="url"
                  value={settings.chaMatesImage}
                  onChange={(e) => handleInputChange('chaMatesImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Porcoes Image URL
                </label>
                <input
                  type="url"
                  value={settings.porcoesImage}
                  onChange={(e) => handleInputChange('porcoesImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cafe's Image URL
                </label>
                <input
                  type="url"
                  value={settings.cafesImage}
                  onChange={(e) => handleInputChange('cafesImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Azeites Image URL
                </label>
                <input
                  type="url"
                  value={settings.azeitesImage}
                  onChange={(e) => handleInputChange('azeitesImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
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
