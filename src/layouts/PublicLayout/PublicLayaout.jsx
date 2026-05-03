import { Outlet } from "react-router-dom";
import { TopNavBar } from "../../components/TopNavBar/TopNavBar";
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
