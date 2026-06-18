import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import NetflixPage from "./pages/NetflixPage";
import SpotifyResumePage from "./pages/SpotifyResumePage";
import SpotifyAlbumPage from "./pages/SpotifyAlbumPage";
import MetaPage from "./pages/MetaPage";
import NvidiaPage from "./pages/NvidiaPage";

/**
 * Route table.
 *
 * Routes nested under <Layout /> get the floating pill nav bar.
 * Themed alt-art pages (Netflix / Spotify / Meta / NVIDIA) intentionally
 * skip the layout — they have their own immersive chrome.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Route>

      <Route path="/netflix" element={<NetflixPage />} />
      <Route path="/spotify" element={<SpotifyResumePage />} />
      <Route path="/spotify/:slug" element={<SpotifyAlbumPage />} />
      <Route path="/meta" element={<MetaPage />} />
      <Route path="/nvidia" element={<NvidiaPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
