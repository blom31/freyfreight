import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <div className="features__header-content">
          <h2 className="features__title">
            Infraestructura del Mañana,{" "}
            <span className="features__title-highlight">Hoy</span>.
          </h2>
          <p className="features__subtitle">
            No solo movemos paquetes. Coreografiamos datos y transporte para una
            sincronización perfecta.
          </p>
        </div>
        <div className="features__label">Nuestras Capacidades</div>
      </div>
      <div className="features__grid">
        <FeatureCard
          icon="satellite_alt"
          title="Rastreo Satelital"
          description="Localización GPS con precisión de 2 metros en tiempo real, integrado con mapas dinámicos."
        />
        <FeatureCard
          icon="verified_user"
          title="Seguridad Blindada"
          description="Protocolos de encriptación y monitoreo de sensores para asegurar la integridad de cada envío."
          isSecondary={true}
        />
        <FeatureCard
          icon="bolt"
          title="Entrega Ultra Rápida"
          description="Rutas optimizadas por IA para reducir los tiempos de tránsito hasta en un 40%."
        />
      </div>
    </section>
  );
}
