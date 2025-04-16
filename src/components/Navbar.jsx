import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Highlight active section as user scrolls
  const [active, setActive] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll spy for active link
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY + 100;
      let current = "#home";
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el && scroll >= el.offsetTop) current = link.href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-xl transition-all"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-2xl font-extrabold tracking-tight text-white flex items-center gap-1"
            aria-label="Navigate to Home section"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2 shadow-[0_0_8px_#3b82f6]"></span>
            Mihai <span className="text-blue-400">Florea</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`w-9 h-9 flex flex-col justify-center items-center md:hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition z-50`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            style={{ position: "fixed", top: 24, right: 24 }} // ensures it's always in the top-right
          >
            <span
              className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white rounded my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded transition-colors font-medium text-sm tracking-wide ${
                  active === link.href
                    ? "text-blue-400 bg-blue-500/10 shadow-[0_2px_8px_rgba(59,130,246,0.08)]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* MobileMenu is rendered here, not in App.jsx */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        active={active}
      />
    </nav>
  );
};