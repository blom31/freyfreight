import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TopNavBar } from "./components/TopNavBar/TopNavbar";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { Stats } from "./components/Stats/Stats";
import { Cta } from "./components/Cta/Cta";

export function App() {
  return (
    <Router>
      <div className="app-container">
        <TopNavBar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />

                  <Features />

                  <Stats />

                  <Cta />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
