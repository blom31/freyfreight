import React, { useState } from "react";

/**
 * TrackingSearch Componente
 *
 * Este componente maneja la entrada del número de guía y dispara la búsqueda.
 * En el futuro, se conectará a un backend Express con Prisma y PostgreSQL.
 */
const TrackingSearch = ({ onSearch }) => {
  const [guideNumber, setGuideNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guideNumber.trim()) {
      if (onSearch) {
        onSearch(guideNumber);
      } else {
        console.log("Buscando guía:", guideNumber);
        // Aquí se realizaría la llamada a la API en el futuro
      }
    }
  };

  return (
    <form className="tracking-search" onSubmit={handleSubmit}>
      <div className="tracking-search__input-container">
        <span className="material-symbols-outlined tracking-search__icon">
          package_2
        </span>
        <input
          className="tracking-search__input"
          placeholder="Ingresa tu número de guía..."
          type="text"
          value={guideNumber}
          onChange={(e) => setGuideNumber(e.target.value)}
        />
      </div>
      <button className="tracking-search__button" type="submit">
        <span>Rastrear</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </form>
  );
};

export default TrackingSearch;
