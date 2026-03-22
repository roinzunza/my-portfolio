import { GiCoffeeCup } from "react-icons/gi";

const COUNT = 14;

type FloaterConfig = {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const floaters: FloaterConfig[] = Array.from({ length: COUNT }, (_, i) => ({
  id: i,
  left: `${(i / COUNT) * 100 + Math.random() * (100 / COUNT)}%`,
  size: 18 + Math.floor(Math.random() * 22),
  duration: 12 + Math.random() * 16,
  delay: -(Math.random() * 20),
  opacity: 0.08 + Math.random() * 0.14,
}));

const css = `
  @keyframes floatUp {
    0%   { transform: translateY(100vh) rotate(-10deg); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(-120px) rotate(10deg); opacity: 0; }
  }

  @keyframes sway {
    0%, 100% { margin-left: 0px; }
    50%       { margin-left: 20px; }
  }

  .floater {
    position: fixed;
    bottom: 0;
    color: #60CD8B;
    animation: floatUp linear infinite, sway ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }
`;

export default function CodeRain() {
  return (
    <>
      <style>{css}</style>
      {floaters.map((f) => (
        <div
          key={f.id}
          className="floater"
          style={{
            left: f.left,
            fontSize: f.size,
            opacity: f.opacity,
            animationDuration: `${f.duration}s, ${f.duration * 0.6}s`,
            animationDelay: `${f.delay}s, ${f.delay * 0.4}s`,
          }}
        >
          <GiCoffeeCup />
        </div>
      ))}
    </>
  );
}
