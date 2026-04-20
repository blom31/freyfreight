/**
 * Componente TopNavBar
 ** Barra de navegación.
 * dividida en  sub-componentes fundamentales:
 * - Logo: Identidad de marca.
 * - NavLinks: Enlaces de navegación del sitio.
 * - NavActions: Botones de interacción (Login y Registro).
 */
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";

export function TopNavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/*  Logo */}
        <Logo />

        {/* Lista de Enlaces  */}
        <NavLinks />

        {/* Botones de Acción */}
        <NavActions />
      </div>
    </nav>
  );
}
