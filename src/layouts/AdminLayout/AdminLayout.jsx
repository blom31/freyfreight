import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Aquí irá el Sidebar en el próximo hito */}
      <main className="admin-layout__main">
        <div className="admin-layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
