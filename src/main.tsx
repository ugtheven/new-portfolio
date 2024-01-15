import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route /*, Navigate*/,
} from "react-router-dom";
import "./index.scss";
import App from "./App";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
// import Resume from "./Pages/Resume/Resume";
// import Skills from "./Pages/Skills/Skills";
import Waiting from "./Pages/Waiting/Waiting";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Waiting />} />
          <Route path="/skills" element={<Waiting />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
