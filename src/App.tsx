import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiIceCube } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCode } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import CodeRain from "./components/CodeRain";

const styles = `
  .home-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
  }

  .home-card {
    width: 100%;
    max-width: 640px;
    background: #141414;
    border: 1px solid #262626;
    border-radius: 16px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .home-profile {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .home-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #262626;
    flex-shrink: 0;
  }

  .home-name {
    font-size: 22px;
    font-weight: 800;
    color: #f0f0f0;
    letter-spacing: -0.3px;
  }

  .home-typewriter {
    font-size: 14px;
    color: #60CD8B;
    min-height: 22px;
    font-weight: 500;
  }

  .home-divider {
    height: 1px;
    background: #262626;
  }

  .home-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .home-info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #aaa;
  }

  .home-info-item svg {
    color: #60CD8B;
    flex-shrink: 0;
  }

  .home-socials {
    display: flex;
    gap: 10px;
  }

  .home-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #1e1e1e;
    border: 1px solid #2e2e2e;
    color: #aaa;
    font-size: 16px;
    text-decoration: none;
    transition: border-color 0.15s, color 0.15s;
  }

  .home-social-btn:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }

  .home-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .home-nav-link {
    font-size: 12px;
    font-weight: 500;
    color: #aaa;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid #2e2e2e;
    background: #1e1e1e;
    transition: border-color 0.15s, color 0.15s;
  }

  .home-nav-link:hover {
    border-color: #60CD8B;
    color: #60CD8B;
  }
`;

const titles = ["Software Engineer", "Gamer", "Coffee Connoisseur", "Frenchie dad"];

function App() {
  const [displayedText, setDisplayedText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "Rosendo Inzunza | Portfolio";
    document.documentElement.classList.add("dark");
  }, []);

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

  return (
    <>
      <style>{styles}</style>
      <div className="home-page">
        <CodeRain />
        <div className="home-card" style={{ position: "relative", zIndex: 1 }}>

          {/* Profile */}
          <div className="home-profile">
            <img
              src={`${import.meta.env.BASE_URL}ro.jpg`}
              alt="Rosendo Inzunza"
              className="home-avatar"
            />
            <div>
              <div className="home-name">Rosendo Inzunza</div>
              <div className="home-typewriter">
                {displayedText}<span style={{ opacity: 0.6 }}>|</span>
              </div>
            </div>
          </div>

          <div className="home-divider" />

          {/* Info */}
          <div className="home-info">
            <div className="home-info-item"><FiCode size={14} /> Software Engineer at Cloudflare</div>
            <div className="home-info-item"><HiOutlineLocationMarker size={14} /> Based in California, US</div>
            <div className="home-info-item"><MdOutlineEmail size={14} /> rosendoinzunza@gmail.com</div>
            <div className="home-info-item"><GiIceCube size={14} /> Fueled by coffee</div>
          </div>

          <div className="home-divider" />

          {/* Socials */}
          <div className="home-socials">
            <a href="https://github.com/roinzunza" target="_blank" rel="noopener noreferrer" className="home-social-btn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rosendoinzunza" target="_blank" rel="noopener noreferrer" className="home-social-btn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/ro.inzunza" target="_blank" rel="noopener noreferrer" className="home-social-btn">
              <FaInstagram />
            </a>
          </div>

          {/* Nav */}
          <div className="home-nav">
            <Link to="/about" className="home-nav-link">About Me →</Link>
            <Link to="/resume" className="home-nav-link">Resume →</Link>
            <Link to="/projects" className="home-nav-link">What I'm Building →</Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
