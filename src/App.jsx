
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import RepoDetails from "./pages/RepoDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repositories />} />
        <Route path="/repos/:username/:repoName" element={<RepoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
