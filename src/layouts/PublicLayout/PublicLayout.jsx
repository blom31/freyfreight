/**
 * PublicLayout Component
 *
 * Este layout envuelve todas las páginas públicas (como la landing page).
 * Mantiene la barra de navegación superior y el pie de página comunes.
 * El contenido específico de cada página se renderiza dentro de <Outlet />.
 */

import { Outlet } from "react-router-dom";
import { TopNavBar } from "../../components/TopNavBar/TopNavbar";
import { Footer } from "../../components/Footer/Footer";

export function PublicLayout() {
  return (
    <div className="public-layout">
      <TopNavBar />
      <main className="public-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
