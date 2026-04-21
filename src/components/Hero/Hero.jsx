export function Hero() {
  return (
    <section className="hero">
      <div className="hero__blobs">
        <div className="hero__blob-1"></div>
        <div className="hero__blob-2"></div>
      </div>

      <div className="hero__content">
        {/* Título principal (H1) separado */}
        <h1 className="hero__title">
          <span className="hero__title-gradient">Rastreo de Precisión</span>
          <br></br> en Tiempo Real
        </h1>

        {/* Descripción (Párrafo) separado */}
        <p className="hero__description">
          La evolución de la logística en tus manos. Transparencia total desde
          el origen hasta el destino.
        </p>

        {/* Componente de búsqueda independiente */}
        {/* <TrackingSearch /> */}

        <div className="hero__partners">
          <img
            alt="Partner Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSv5cVXjlhEdO73Etltnqf1-RC30DloGkHppgo9xIb5FEPFJY1-VDwtJcrW5SCO4JdejVq5yaFss6qdutkS0IYja80L8OmtIU-6fQy_ncV3U1Cl85gDAAQYYZvaE0YP391vWfUkIqRhjyvDMkiWFVtetemKiJPHk-glH-Qt6UxCPMsHpKR9UBnQC0oD-kf_gYLMmKZgYEXpu7sK85Fa0olj-tRLBdY3kgy_-ng432C2xcdYbCKEsGtDHUdjNDRUf1DLvCf5Tr5ee0"
          />
          <span className="hero__partner-text">FREYFREIGHT</span>
        </div>
      </div>
    </section>
  );
}
