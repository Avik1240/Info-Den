import { useEffect } from 'react';

export default function MapComponent() {
  useEffect(() => {
    // Initialize map only after component mounts
    const L = require('leaflet');
    
    // Fix for default marker icon
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    // Initialize map with dark theme
    const map = L.map('map').setView([40.7128, -74.0060], 13);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: 'OpenStreetMap, CartoDB',
      maxZoom: 19
    }).addTo(map);
    
    L.marker([40.7128, -74.0060]).addTo(map)
      .bindPopup('InfoDen Bookstore')
      .openPopup();

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
}
