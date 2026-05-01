import { StatItem } from "./StatItem";
import { Testimonial } from "./Testimonial";

export function Stats() {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          <StatItem
            number="10M+"
            label="Paquetes Entregados"
            isPrimary={true}
          />
          <StatItem
            number="99.9%"
            label="Tasa de Seguridad"
            isPrimary={false}
          />
          <StatItem number="150+" label="Países Cubiertos" isPrimary={true} />
          <StatItem number="2.5s" label="Latency Tracker" isPrimary={false} />
        </div>
        <div className="stats__testimonial">
          <Testimonial
            quote="Kinetic Horizon ha transformado nuestra cadena de suministro. La visibilidad que nos brindan es simplemente de otro nivel tecnológico."
            authorName="Ricardo Valladares"
            authorRole="Director de Operaciones, Global Tech"
            authorImg="https://lh3.googleusercontent.com/aida-public/AB6AXuA5KvqPkm9yPBPiqgEuOsEO4TWd4nvkyQbAsP9T1Mf6AJkDLn0JNA_g7k_mzO_Pm9lXUzJxZz7ULnWosc4OUgohdgqWD3ltQbYI9beTGPwC_rhi4XVeQzfu8U-qKLz7HJZEt6LWjm6YJyeO089xC7CVz6Sx22gB_WaZqQRX3bzQEpyDe4jfwp3RUz5QfgjuLWssMME38fQplbCrmuhg7bovulIt09Jf0ZhUVXgyc_espvxrdmfqbsMXDsYpjHi1A3PBRJYxtSTlMfI"
          />
        </div>
      </div>
    </section>
  );
}
