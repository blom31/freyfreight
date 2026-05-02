import React from "react";

/**
 * TrackingDetails Component
 *
 * Muestra los detalles del paquete una vez que se ha realizado una búsqueda exitosa.
 */
const TrackingDetails = ({ trackingData }) => {
  if (!trackingData) return null;

  return (
    <div className="tracking-details">
      <h3 className="tracking-details__title">Resultados del Rastreo</h3>

      <div className="tracking-details__grid">
        <div className="tracking-details__item">
          <span className="tracking-details__label">Nombre del cliente</span>
          <span className="tracking-details__value">
            {trackingData.clientName}
          </span>
        </div>

        <div className="tracking-details__item">
          <span className="tracking-details__label">Número de ID</span>
          <span className="tracking-details__value">
            {trackingData.idNumber}
          </span>
        </div>

        <div className="tracking-details__item">
          <span className="tracking-details__label">Número de Envío</span>
          <span className="tracking-details__value">
            {trackingData.trackingNumber}
          </span>
        </div>

        <div className="tracking-details__item">
          <span className="tracking-details__label">Peso</span>
          <span className="tracking-details__value">{trackingData.weight}</span>
        </div>

        <div className="tracking-details__item tracking-details__item--status">
          <span className="tracking-details__label">Estado del paquete</span>
          <span
            className={`tracking-details__status tracking-details__status--${trackingData.statusClass || "default"}`}
          >
            {trackingData.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetails;
