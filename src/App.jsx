import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App