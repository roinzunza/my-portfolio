import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import SpotifyResumePage from "./pages/SpotifyResumePage.tsx";
import SpotifyAlbumPage from "./pages/SpotifyAlbumPage.tsx";
import NetflixPage from "./pages/NetflixPage.tsx";
import NvidiaPage from "./pages/NvidiaPage.tsx";
import MetaPage from "./pages/MetaPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/spotify" element={<SpotifyResumePage />} />
        <Route path="/spotify/:slug" element={<SpotifyAlbumPage />} />
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/nvidia" element={<NvidiaPage />} />
        <Route path="/meta" element={<MetaPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
