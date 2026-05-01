export function FeatureCard({ icon, title, description, isSecondary }) {
  return (
    <div
      className={`feature-card ${isSecondary ? "feature-card--secondary" : ""}`}
    >
      <div className="feature-card__icon-container">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}
