import {
  GraduationCap,
  Code,
  Heart,
  Sparkles,
  BriefcaseBusiness,
  Link2,
  Shield,
  BookOpen,
  Users,
} from "lucide-react";

const timeline = [
  {
    year: "Janv. 2025 – Aujourd'hui",
    title: "Développeur Fullstack Junior",
    company: "FeexPay SA",
    icon: BriefcaseBusiness,
    description: [
      "Refactorisation du Dashboard Marchand : migration Nuxt.js → Next.js (TypeScript, Tailwind CSS).",
      "Développement du SDK React FeexPay v2 pour l'intégration des solutions de paiement.",
      "Intégration API Moov Africa (PayIn/PayOut) : webhooks, gestion des statuts, retry automatique.",
      "Système QuickLink QR Code pour liens de paiement partageables.",
      "Support technique marchands via WhatsApp, Telegram et sessions live.",
    ],
  },
  {
    year: "Déc. 2024 – Janv. 2025",
    title: "Développeur Frontend React (Stage)",
    company: "BICENTS SARL",
    icon: BriefcaseBusiness,
    description: [
      "Réalisation complète du site vitrine à partir des maquettes Figma.",
      "Interfaces React pixel-perfect et responsive.",
      "Internationalisation (i18n) multilingue.",
      "Composants réutilisables et cohérence UI/UX.",
    ],
  },
  {
    year: "Juin 2025 – Déc. 2025 (en cours)",
    title: "Coding Academy — Développement Fullstack",
    company: "WeCode · Epitech Afrique",
    icon: Code,
    description: [],
  },
  {
    year: "2023 – En cours",
    title: "Licence Informatique & Science du Numérique (Spécialisation Bases de Données)",
    company: "Université Virtuelle de Côte d'Ivoire (UVCI)",
    icon: GraduationCap,
    description: [],
  },
  {
    year: "2022 – 2023",
    title: "Baccalauréat Série D",
    company: "Lycée Moderne de Port-Bouet",
    icon: GraduationCap,
    description: [],
  },
];

const values = [
  {
    title: "APIs & Intégration",
    description: "Conception et intégration d'APIs de paiement en production réelle.",
    Icon: Link2,
  },
  {
    title: "Sécurité & Fiabilité",
    description: "Application des bonnes pratiques de sécurité applicative et d'intégrité des données.",
    Icon: Shield,
  },
  {
    title: "Apprentissage continu",
    description: "Formation permanente aux nouvelles technologies et au secteur fintech.",
    Icon: BookOpen,
  },
  {
    title: "Collaboration",
    description: "Travail en équipe distribuée, support technique et documentation.",
    Icon: Users,
  },
];

export function AboutSection() {
  return (
    <section
      id="parcours"
      className="py-12 sm:py-16 md:py-20 bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-neutral-200 text-sm sm:text-base">À propos</span>
          </div>
          <h2 className="text-neutral-50 mb-4">Mon Parcours</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Passionné par la technologie et le développement web, je transforme
            mes idées en applications concrètes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Left - Intro + values */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border-primary-500/30 card-glow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-primary-600 to-secondary-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/30">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-neutral-50 mb-2 text-xl sm:text-2xl">
                    Développeur passionné
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base">
                    Depuis mon premier "Hello World", je suis tombé amoureux du code.
                  </p>
                </div>
              </div>

              <p className="text-neutral-300 mb-4 text-sm sm:text-base">
                Développeur Fullstack avec une expérience concrète en environnement fintech,
                j'ai contribué au développement et à la maintenance de plateformes de paiement
                à fort volume transactionnel. Je comprends les enjeux de performance, de sécurité
                applicative et d'intégrité des données financières — dans un secteur où chaque
                ligne de code a un impact direct sur des milliers de transactions.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="glass-effect rounded-xl p-4 sm:p-5 border-neutral-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-600/20 border border-primary-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                  </div>
                  <h5 className="text-neutral-50 mb-1 text-sm sm:text-base">{title}</h5>
                  <p className="text-neutral-400 text-xs sm:text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 className="text-neutral-50 mb-6 sm:mb-8 text-xl sm:text-2xl">
              Formations & Expériences
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-6 sm:pl-8 pb-8 border-l-2 border-neutral-800 last:border-l-0 last:pb-0 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 border-4 border-neutral-950 shadow-lg shadow-primary-500/50"></div>

                    <div className="glass-effect rounded-xl p-5 sm:p-6 border-neutral-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center border border-primary-500/20 shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-neutral-50 text-base sm:text-lg leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-primary-400 text-sm">{item.company}</p>
                        </div>
                      </div>

                      {item.description.length > 0 && (
                        <ul className="mb-3 space-y-1">
                          {item.description.map((line, i) => (
                            <li key={i} className="text-neutral-400 text-xs sm:text-sm flex gap-1.5 items-start">
                              <span className="text-primary-500 mt-1 shrink-0">·</span>
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}

                      <span className="inline-block px-3 py-1 bg-linear-to-r from-primary-600/20 to-secondary-600/20 text-primary-300 rounded-lg border border-primary-500/20 text-sm">
                        {item.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
