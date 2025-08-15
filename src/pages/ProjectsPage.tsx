import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { useState } from "react";

export default function ProjectsPage() {
  const screenshots = ["listings.png", "profile.png", "apps.png", "edit.png"];

  return (
    <main className="relative min-h-screen px-6 py-12 font-sans text-gray-900 dark:text-white bg-transparent z-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${import.meta.env.BASE_URL}ro.jpg`}
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-lg scale-110"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-sm" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Projects</h1>

      {projectsData.map((project) => (
        <div
          key={project.title}
          className="max-w-6xl mx-auto mb-16 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 overflow-hidden"
        >
          {/* Info */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {project.tech.join(", ")}
            </p>
            <p className="text-base mb-4">{project.description}</p>
            <a
              href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Project →
            </a>
          </div>

          {/* Screenshot carousel */}
          <Carousel images={screenshots} />
        </div>
      ))}

      {/* Back to Home */}
      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white/50 dark:hover:bg-white/20 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

type CarouselProps = { images: string[] };

function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="relative w-full overflow-hidden bg-black/10">
        <img
          src={`${import.meta.env.BASE_URL}${images[index]}`}
          alt={`Screenshot ${index + 1}`}
          className="w-full max-h-[600px] object-contain cursor-pointer transition hover:opacity-80"
          onClick={() => setExpanded(true)}
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/40 rounded-full text-white text-lg"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/40 rounded-full text-white text-lg"
        >
          ›
        </button>
      </div>

      {/* Fullscreen modal */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setExpanded(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}${images[index]}`}
            alt={`Expanded screenshot ${index + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
