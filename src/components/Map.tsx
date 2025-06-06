
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Map = () => {
  const openDirections = () => {
    const address = "R Gonçalves Ledo, 93, Santa Cruz do Sul - RS, Brazil";
    const encodedAddress = encodeURIComponent(address);
    
    // Try to open in Google Maps app first, fallback to web
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

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
          <MapPin className="mr-2 h-4 w-4" />
          Como Chegar
        </Button>
      </div>

      {/* Embed Google Maps directions directly */}
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8234567891234!2d-52.42671231234567!3d-29.71751234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194d123456789a%3A0x123456789abcdef0!2sR.%20Gon%C3%A7alves%20Ledo%2C%2093%20-%20Higien%C3%B3polis%2C%20Santa%20Cruz%20do%20Sul%20-%20RS%2C%2096820-746%2C%20Brazil!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="La Casita Location"
        />
      </div>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Informações de Localização</h3>
        <div className="space-y-2 text-amber-800">
          <p><strong>Endereço:</strong> R Gonçalves Ledo, 93 - Higienópolis</p>
          <p><strong>Cidade:</strong> Santa Cruz do Sul - RS</p>
          <p><strong>CEP:</strong> 96820-746</p>
          <p><strong>Telefone:</strong> (51) 3717-xxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
