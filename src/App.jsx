import './App.css';
import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Prevent FOUC: hide content until loading screen completes
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-black text-gray-100`}
        aria-hidden={!isLoaded}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        {/* Footer */}
        <footer className="w-full bg-black/80 border-t border-blue-900/30 py-8 mt-8 text-center text-gray-400 text-sm z-20 relative">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
            <div>
              © {new Date().getFullYear()} Mihai Florea. All rights reserved.
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:contact.florea@proton.me"
                className="hover:text-blue-400 transition-colors"
                aria-label="Email Mihai"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/mihai-alexandru-florea"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Mihai Alexandru Florea"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/florea-mihai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="GitHub Mihai Alexandru Florea"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
