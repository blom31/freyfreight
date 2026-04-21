import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TopNavBar } from "./components/TopNavBar/TopNavbar";
import { Hero } from "./components/Hero/Hero";

export function App() {
  return (
    <Router>
      <div>
        <TopNavBar />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
