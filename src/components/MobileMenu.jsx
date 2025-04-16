import { useEffect, useRef } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, navLinks, active }) => {
  const menuRef = useRef();

  // Close menu on outside click, but ignore the toggle button
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the toggle button was clicked, do nothing
      if (
        event.target.closest('[aria-label="Toggle navigation menu"]')
      ) {
        return;
      }
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
      {/* Navigation Links */}
      {navLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold my-4 transition-transform duration-300 delay-${
            index * 100
          } ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          } ${
            active === link.href
              ? "text-blue-400"
              : "text-white hover:text-blue-400"
          }`}
          aria-label={`Navigate to ${link.label} section`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};