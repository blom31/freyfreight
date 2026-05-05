/**
 * AdminLayout Component
 *
 * Layout base para el panel de control (Dashboard).
 * En el siguiente hito, este layout incluirá el Sidebar.
 * Por ahora, solo actúa como un contenedor base.
 */
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Aquí se añadirá el Sidebar en el siguiente hito */}
      <main className="admin-layout__main">
        <div className="admin-layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
