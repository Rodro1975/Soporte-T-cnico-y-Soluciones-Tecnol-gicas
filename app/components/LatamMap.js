import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import L from "leaflet"; // Importar Leaflet aquí

// Cargar Leaflet.js de forma dinámica para evitar problemas con el renderizado del lado del servidor
const Map = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Definir los datos del mapa, como la ubicación y el zoom
const center = [0, -60];
const zoom = 3;

// Definir las ubicaciones de los países con pines
const countryLocations = [
  {
    name: "Argentina",
    position: [-38.4161, -63.6167],
    iconUrl: "/images/argentina.png",
  },
  {
    name: "Brazil",
    position: [-14.235, -51.9253],
    iconUrl: "/images/brazil.png",
  },
  {
    name: "Colombia",
    position: [4.5709, -74.2973],
    iconUrl: "/images/colombia.png",
  },
  {
    name: "México",
    position: [23.87009076603085, -104.26721507255856],
    iconUrl: "/images/mexico.png",
  },
  {
    name: "Canadá",
    position: [60.000433609499986, -112.25976490889597],
    iconUrl: "/images/canada.png",
  },
  // Añadir más países y posiciones según sea necesario
];

// Configurar el icono personalizado
const getCustomIcon = (iconUrl) =>
  new L.Icon({
    iconUrl: iconUrl,
    iconSize: [32, 32], // Tamaño del icono
    iconAnchor: [16, 32], // Ancla del icono (posición respecto al marcador)
    popupAnchor: [0, -32], // Ancla del popup (posición respecto al icono)
  });

const LatamMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.fitBounds([
        [-60, -80],
        [10, -30],
      ]);
    }
  }, []);

  return (
    <Map
      center={center}
      zoom={zoom}
      style={{ height: "500px", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countryLocations.map((country) => (
        <Marker
          key={country.name}
          position={country.position}
          icon={getCustomIcon(country.iconUrl)}
        >
          <Popup>{country.name}</Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default LatamMap;
