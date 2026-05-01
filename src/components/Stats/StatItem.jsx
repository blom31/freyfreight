export function StatItem({ number, label, isPrimary }) {
  return (
    <div>
      <div
        className={`stats__item-number stats__item-number--${isPrimary ? "primary" : "secondary"}`}
      >
        {number}
      </div>
      <div className="stats__item-label">{label}</div>
    </div>
  );
}
