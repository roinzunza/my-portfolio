import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import SpotifyResumePage from "./pages/SpotifyResumePage.tsx";
import SpotifyAlbumPage from "./pages/SpotifyAlbumPage.tsx";
import NetflixPage from "./pages/NetflixPage.tsx";
import NvidiaPage from "./pages/NvidiaPage.tsx";
import MetaPage from "./pages/MetaPage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/spotify" element={<SpotifyResumePage />} />
        <Route path="/spotify/:slug" element={<SpotifyAlbumPage />} />
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/nvidia" element={<NvidiaPage />} />
        <Route path="/meta" element={<MetaPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
