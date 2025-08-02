import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuCoffee } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCode } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function App() {
  const [displayedText, setDisplayedText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const titles = ["Software Engineer", "Gamer", "Coffee Connoisseur", "Frenchie dad"];
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "Rosendo Inzunza | Portfolio";
  }, []);

  // Looping typewriter effect
  useEffect(() => {
    const currentTitle = titles[loopIndex % titles.length];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex]);

  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 font-sans text-gray-900 dark:text-white bg-transparent z-10">
      {/* Blurred background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="./public/ro.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-lg scale-110"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6 z-10">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only"
          />
          <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative">
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-5" : ""
                }`}
            />
          </div>
        </label>
      </div>

      {/* Glass card */}
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-4xl w-full border border-white/20 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I’m Rosendo Inzunza
            </h1>
            <div className="text-blue-500 text-2xl min-h-[2.5rem]">
              <span>{displayedText}</span>
              <span className="inline-block animate-blink ml-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                |
              </span>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 text-md space-y-2">
              <li className="flex items-center gap-3">
                <LuCoffee className="text-lg" />
                Fueled by cold brew
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineLocationMarker className="text-lg" />
                Based in California, US
              </li>
              <li className="flex items-center gap-3">
                <FiCode className="text-lg" />
                Software Engineer at Cloudflare
              </li>
              <li className="flex items-center gap-3">
                <MdOutlineEmail className="text-lg" />
                rosendoinzunza@gmail.com
              </li>
            </ul>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img
              src="./public/ro.jpg"
              alt="Ro Inzunza"
              className="w-48 h-48 rounded-full shadow-lg object-cover border border-white/30"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-8">
          <a
            href="https://github.com/roinzunza"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-white/20 transition border border-white/30 shadow-sm"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rosendoinzunza"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-white/20 transition border border-white/30 shadow-sm"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/ro.inzunza"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-white/20 transition border border-white/30 shadow-sm"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/about"
          className="inline-block px-4 py-2 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white/50 dark:hover:bg-white/20 transition"
        >
          About Me →
        </Link>
        <Link
          to="/resume"
          className="inline-block px-4 py-2 mt-2 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white/50 dark:hover:bg-white/20 transition"
        >
          Resume →
        </Link>

      </div>
    </main>
  );
}

export default App;
