import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Error } from "./pages/error/error";
import { About } from "./pages/about/about";
import { Portfolio } from "./pages/portfolio/portfolio";
import { NavBar } from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./main";
import { Cursor } from "./components/custom-cursor/Cursor";

function App() {
  const isToggleValue = useSelector(
    (state: RootState) => state.buttons.isToggle
  );

  return (
    <div
      className="App"
      style={{
        backgroundColor: isToggleValue ? "#1f1f1f" : "#fff",
        color: isToggleValue ? "#fff" : "#000",
      }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Cursor />
      </Router>
    </div>
  );
}

export default App;
