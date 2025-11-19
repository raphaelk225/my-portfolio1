import {
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Projets", href: "#projets" },
    { label: "Compétences", href: "#competences" },
    { label: "Parcours", href: "#parcours" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/raphaelk225",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raphael-kouamelan-9b337733a",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:raphael.kouamelan@epitech.eu",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-neutral-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-neutral-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-600/5 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="text-sm sm:text-base">RK</span>
              </div>
              <span className="text-white text-base sm:text-lg">
                Raphael Kouamelan
              </span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md text-sm sm:text-base">
              Développeur Full-Stack Junior passionné par la
              création d'applications web modernes et
              performantes. Toujours à la recherche de nouveaux
              défis techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white mb-4 text-base sm:text-lg">
              Liens rapides
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm sm:text-base inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-white mb-4 text-base sm:text-lg">
              Réseaux sociaux
            </h5>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-effect border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-600/20 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <p className="text-neutral-500 mb-2 text-xs sm:text-sm">
                Contact direct
              </p>
              <a
                href="mailto:raphael.kouamelan@epitech.eu"
                className="text-neutral-400 mr-4 hover:text-primary-400 transition-colors text-sm sm:text-base inline-block break-all"
              >
                raphael.kouamelan@epitech.eu
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-center sm:text-left text-xs sm:text-sm">
              © {currentYear} Raphael Kouamelan. Tous droits
              réservés.
            </p>

            <p className="text-neutral-500 text-center sm:text-right text-xs sm:text-sm">
              Portfolio créé avec React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}