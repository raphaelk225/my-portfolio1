import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import CV from "../assets/CV-KOUAMELAN_OTCHOUMOU_RAPHAEL-1.pdf"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#projets", label: "Projets" },
    { href: "#competences", label: "Compétences" },
    { href: "#parcours", label: "Parcours" },
    { href: "#contact", label: "Contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV-Raphael-Kouamelan.pdf"; 
    link.click();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg shadow-primary-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            className="flex items-center gap-2 sm:gap-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg shadow-primary-500/30">
              <span className="text-sm sm:text-base ">RK</span>
            </div>
            <span className="hidden sm:block text-neutral-50">
              Raphael Kouamelan
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-primary-400 transition-colors text-sm xl:text-base relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop & Tablet */}
          {/* <div className="hidden md:block">
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all text-sm xl:text-base"
            >
              <Download className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-2" />
              <span className="hidden lg:inline">Télécharger le CV</span>
              <span className="lg:hidden">CV</span>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-primary-400 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[60px] bg-neutral-950/95 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container-custom py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-200 hover:text-primary-400 transition-all py-3 border-b border-neutral-800 hover:border-primary-500/50 text-lg animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}