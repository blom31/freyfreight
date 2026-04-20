import logo from "../../assets/logo.png";

/** Componente Logo */

export function Logo() {
  return (
    <div>
      <div className="navbar__logo">
        <img src={logo} alt="Fey Freight Brand Identity" />
        <span className="navbar__logo-text">FREYFREIGHT</span>
      </div>
    </div>
  );
}
