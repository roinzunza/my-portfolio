import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen px-6 py-12 font-sans text-gray-900 dark:text-white bg-transparent z-10">
      {/* Glassy blurred background */}
      <div className="absolute inset-0 -z-10">
        <img
src={`${import.meta.env.BASE_URL}ro.jpg`}
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-lg scale-110"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-sm" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
{projectsData.map((project) => (
  <div
    key={project.title}
    className="group perspective"
  >
    <div className="relative h-64 w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
      {/* Front */}
      <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white p-4 rounded-xl shadow-md border border-white/20 backface-hidden">
        <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">{project.tech.join(", ")}</p>
        <p className="text-xs text-blue-400 mt-4">Click to flip</p>
      </div>

      {/* Back */}
      <div className="absolute inset-0 bg-white/20 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white p-4 rounded-xl shadow-md border border-white/20 transform rotate-y-180 backface-hidden">
        <p className="text-sm mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm"
        >
          View Project →
        </a>
      </div>
    </div>
  </div>
))}

      </div>

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
