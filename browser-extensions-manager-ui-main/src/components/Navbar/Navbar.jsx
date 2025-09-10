// src/components/Navbar/Navbar.jsx
import Logo from "../../images/logo.svg?react"; // <-- nota el ?react
import ThemeButton from "./ThemeButton.jsx";
import "./Navbar.css";

export default function Navbar({ isDark, setIsDark }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Logo className="logo" />
      </div>
      <ThemeButton isDark={isDark} setIsDark={setIsDark} />
    </nav>
  );
}
