import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TopNavBar } from "./components/TopNavBar/TopNavbar";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";

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
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
