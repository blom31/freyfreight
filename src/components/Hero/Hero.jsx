import React, { useState } from "react";
import TrackingSearch from "../TrackingSearch/TrackingSearch";
import TrackingDetails from "../TrackingDetails/TrackingDetails";

export function Hero() {
  const [trackingResult, setTrackingResult] = useState(null);

  const handleSearch = (guideNumber) => {
    // Datos simulados para demostración
    setTrackingResult({
      clientName: "Juan Pérez",
      idNumber: "12345678",
      trackingNumber: guideNumber,
      weight: "2.5 kg",
      status: "En tránsito",
      statusClass: "transit",
    });
  };

  return (
    <section className="hero">
      <div className="hero__blobs">
        <div className="hero__blob-1"></div>
        <div className="hero__blob-2"></div>
      </div>

      <div className="hero__content">
        {/* Título principal (H1) separado */}
        <h1 className="hero__title">
          Rastreo de <span className="hero__title-gradient">Precisión</span> en
          Tiempo Real
        </h1>

        {/* Descripción (Párrafo) separado */}
        <p className="hero__description">
          La evolución de la logística en tus manos. Transparencia total desde
          el origen hasta el destino.
        </p>

        {/* Componente de búsqueda independiente */}
        <TrackingSearch onSearch={handleSearch} />

        {/* Detalles del rastreo */}
        <TrackingDetails trackingData={trackingResult} />

        <div className="hero__partners">
          <img
            alt="Partner Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSv5cVXjlhEdO73Etltnqf1-RC30DloGkHppgo9xIb5FEPFJY1-VDwtJcrW5SCO4JdejVq5yaFss6qdutkS0IYja80L8OmtIU-6fQy_ncV3U1Cl85gDAAQYYZvaE0YP391vWfUkIqRhjyvDMkiWFVtetemKiJPHk-glH-Qt6UxCPMsHpKR9UBnQC0oD-kf_gYLMmKZgYEXpu7sK85Fa0olj-tRLBdY3kgy_-ng432C2xcdYbCKEsGtDHUdjNDRUf1DLvCf5Tr5ee0"
          />
          <span className="hero__partner-text">FEYFREIGHT</span>
        </div>
      </div>
    </section>
  );
}
