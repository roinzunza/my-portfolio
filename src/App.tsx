import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import RosendoOriginsPage from "./pages/RosendoOriginsPage";
import NetflixPage from "./pages/NetflixPage";
import SpotifyResumePage from "./pages/SpotifyResumePage";
import SpotifyAlbumPage from "./pages/SpotifyAlbumPage";
import MetaPage from "./pages/MetaPage";
import NvidiaPage from "./pages/NvidiaPage";

const ForgePage = lazy(() => import("./forge/ForgePage"));

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
        <Route path="/rosendo" element={<RosendoOriginsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route
          path="/forge"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ForgePage />
            </Suspense>
          }
        />
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

function RouteFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#08090d",
        color: "#727a8d",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 13,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      Loading…
    </div>
  );
}
