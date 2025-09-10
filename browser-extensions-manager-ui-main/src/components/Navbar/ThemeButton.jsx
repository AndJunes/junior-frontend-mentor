// src/components/Navbar/ThemeButton.jsx
import "./ThemeButton.css";

export default function ThemeButton({ isDark, setIsDark }) {
  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      className="theme-button"
      onClick={handleClick}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo oscuro activado" : "Modo claro activado"}
    >
      <div className="button-content">
        <div className="icon-container">
          <img
            src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
            alt={isDark ? "Sol" : "Luna"}
            className="theme-icon"
          />
        </div>
      </div>
    </button>
  );
}