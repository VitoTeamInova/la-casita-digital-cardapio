
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { map } from "lucide-react";

const Map = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  // La Casita coordinates (approximate based on the address)
  const laCasitaCoordinates = [-52.4267, -29.7175]; // Santa Cruz do Sul coordinates

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      
      mapboxgl.default.accessToken = token;
      
      mapRef.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: laCasitaCoordinates,
        zoom: 15,
      });

      // Add marker for La Casita
      new mapboxgl.default.Marker({ color: '#d97706' })
        .setLngLat(laCasitaCoordinates)
        .setPopup(
          new mapboxgl.default.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-bold text-amber-900">La Casita</h3>
                <p class="text-sm">Confeitaria Uruguaiana</p>
                <p class="text-xs">R Gonçalves Ledo, 93 - Higienópolis</p>
                <p class="text-xs">Santa Cruz do Sul - RS</p>
              </div>
            `)
        )
        .addTo(mapRef.current);

      // Add navigation controls
      mapRef.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }
  };

  const openDirections = () => {
    const address = "R Gonçalves Ledo, 93, Santa Cruz do Sul - RS, Brazil";
    const encodedAddress = encodeURIComponent(address);
    
    // Try to open in Google Maps app first, fallback to web
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white/35 backdrop-blur-sm rounded-lg shadow-xl p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Como Chegar</h2>
        <div className="text-amber-800 mb-4">
          <p className="font-semibold">La Casita - Confeitaria Uruguaiana</p>
          <p className="text-sm">R Gonçalves Ledo, 93 - Higienópolis</p>
          <p className="text-sm">Santa Cruz do Sul - RS, 96820-746</p>
        </div>
        
        <Button 
          onClick={openDirections}
          className="bg-amber-700 hover:bg-amber-800 text-white mb-4"
        >
          <map className="mr-2 h-4 w-4" />
          Como Chegar
        </Button>
      </div>

      {showTokenInput ? (
        <div className="text-center">
          <p className="text-amber-800 mb-4">Para visualizar o mapa, insira seu token do Mapbox:</p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Cole seu token do Mapbox aqui"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white">
              Carregar Mapa
            </Button>
          </form>
          <p className="text-xs text-amber-700 mt-2">
            Obtenha seu token gratuito em{" "}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-amber-900"
            >
              mapbox.com
            </a>
          </p>
        </div>
      ) : (
        <div 
          ref={mapContainer} 
          className="w-full h-96 rounded-lg shadow-lg"
          style={{ minHeight: '400px' }}
        />
      )}
    </div>
  );
};

export default Map;
