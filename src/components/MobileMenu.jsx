import { useEffect, useRef } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
      aria-hidden={!menuOpen}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      {navLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 delay-${
            index * 100
          } ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          aria-label={`Navigate to ${link.label} section`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};