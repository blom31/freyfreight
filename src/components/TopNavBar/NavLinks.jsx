/**
 ** Componente NavLinks
 * contiene la lista de enlaces de navegación principales.
 * Utiliza el componente 'Link' de react-router-dom que permite la navegacion sin recargar pag..
 */
import { Link } from "react-router-dom";

export function NavLinks() {
  return (
    <div className="navbar__links">
      <Link className="navbar__link navbar__link--active" to="/">
        Track
      </Link>
      <Link className="navbar__link" to="/servicios">
        Servicios
      </Link>
      <Link className="navbar__link" to="/solucion">
        Solución
      </Link>
      <Link className="navbar__link" to="/soporte">
        Soporte
      </Link>
    </div>
  );
}
