import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white"
            aria-label="Navigate to Home section"
          >
            Mihai <span className="text-blue-500">Florea</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            &#9776;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-t border-white/10 shadow-lg md:hidden transition-transform duration-300"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={`Navigate to ${link.label} section`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};