import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout/PublicLayaout";
import { AdminLayout } from "./layouts/AdminLayout/AdminLayout";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { Stats } from "./components/Stats/Stats";
import { Cta } from "./components/Cta/Cta";

export function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<PublicLayout />}></Route>
            <Route
              index
              element={
                <>
                  <Hero />
                  <Features />
                  <Stats />
                  <Cta />
                </>
              }
            />
            <Route />

            {/* Rutas de Administración (usan AdminLayout) */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route
                index
                element={<h2>Dashboard Administrativo (Próximamente)</h2>}
              />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
