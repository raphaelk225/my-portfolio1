import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { Icon: Github, href: "https://github.com/raphaelk225", label: "GitHub", color: "hover:bg-neutral-700 hover:text-white" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/raphael-kouamelan-9b337733a", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
  { Icon: Mail, href: "mailto:raphael.kouamelan@epitech.eu", label: "Email", color: "hover:bg-red-500 hover:text-white" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container-custom">
        {/* Main content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-primary-500 via-secondary-500 to-primary-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary-500/30">
                RK
              </div>
              <span className="text-neutral-50 font-semibold">Raphael Kouamelan</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              Développeur Fullstack Junior spécialisé en fintech et APIs de paiement.
              Contributeur à des plateformes de paiement utilisées par des milliers de marchands
              en Afrique.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-lg glass-effect border-neutral-700/50 flex items-center justify-center text-neutral-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-neutral-50 font-semibold mb-4 text-sm">Liens rapides</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact direct */}
          <div>
            <h5 className="text-neutral-50 font-semibold mb-4 text-sm">Contact direct</h5>
            <div className="space-y-3">
              <a
                href="mailto:raphael.kouamelan@epitech.eu"
                className="block text-neutral-400 hover:text-primary-400 text-sm break-all transition-colors duration-200"
              >
                raphael.kouamelan@epitech.eu
              </a>
              <a
                href="https://github.com/raphaelk225"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                github.com/raphaelk225
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-6">
          <p className="text-center text-neutral-600 text-xs">
            © {currentYear} Raphael Kouamelan. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
