import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TopNavBar } from "./components/TopNavBar/TopNavbar";

export function App() {
  return (
    <Router>
      <div>
        <TopNavBar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Bienvenido a Fey Freight</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
