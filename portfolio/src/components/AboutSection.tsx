import { GraduationCap, Award, Code, Heart, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "En cours",
    title: "FORMATION DÉVELOPPEMENT FULLSTACK",
    company: "WECODE (Coding Academy - Epitech",
    icon: Code,
  },
  {
    year: "En cours",
    title: "LICENCE INFORMATIQUE ET SCIENCE DU NUMERIQUE(Spécialisation Base de Données)",
    company: "UNIVERSITÉ VIRTUELLE DE CÔTE D'IVOIRE",
    icon: GraduationCap,
  },
  {
    year: "2022-2023",
    title: "BACCALAURÉAT SERIE D",
    company: "LYCÉE MODERNE DE PORT-BOUET",
    icon: GraduationCap,
  },
  // {
  //   year: "2022",
  //   title: "Certification Full-Stack",
  //   company: "FreeCodeCamp",
  //   description:
  //     "Obtention de la certification Full-Stack Developer avec projets finaux validés.",
  //   icon: Award,
  // },
];

const values = [
  {
    title: "Code propre",
    description: "J'écris du code lisible, maintenable et bien documenté.",
    emoji: "✨",
  },
  {
    title: "Apprentissage continu",
    description:
      "Je me forme constamment aux nouvelles technologies et best practices.",
    emoji: "📚",
  },
  {
    title: "Esprit d'équipe",
    description:
      "Je collabore efficacement et partage mes connaissances avec mes pairs.",
    emoji: "🤝",
  },
  {
    title: "Résolution de problèmes",
    description:
      "J'aime analyser les défis et trouver des solutions créatives et efficaces.",
    emoji: "🎯",
  },
];

export function AboutSection() {
  return (
    <section id="parcours" className="py-12 sm:py-16 md:py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
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

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Left - Photo and intro */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 border-primary-500/30 card-glow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/30">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-neutral-50 mb-2 text-xl sm:text-2xl">
                    Développeur passionné
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base">
                    Depuis mon premier "Hello World", je suis tombé amoureux du
                    code.
                  </p>
                </div>
              </div>

              <p className="text-neutral-300 mb-4 text-sm sm:text-base">
                En tant que développeur full-stack junior, je combine créativité
                et rigueur technique pour créer des applications web modernes et
                performantes. J'ai une appétence particulière pour le frontend et
                l'expérience utilisateur, tout en maîtrisant les aspects backend.
              </p>

              {/* <p className="text-neutral-300 text-sm sm:text-base">
                Mon objectif est de rejoindre une équipe dynamique où je pourrai
                continuer à apprendre, contribuer à des projets ambitieux et
                grandir en tant que développeur.
              </p> */}
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-4 sm:p-5 border-neutral-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{value.emoji}</div>
                  <h5 className="text-neutral-50 mb-1 text-sm sm:text-base">{value.title}</h5>
                  <p className="text-neutral-400 text-xs sm:text-sm">{value.description}</p>
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
                    <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-4 border-neutral-950 shadow-lg shadow-primary-500/50"></div>

                    {/* Content */}
                    <div className="glass-effect rounded-xl  p-5 sm:p-6 border-neutral-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center border border-primary-500/20">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                          </div>
                          <div>
                            <h4 className="text-neutral-50 text-base sm:text-lg">{item.title}</h4>
                            <p className="text-neutral-400 text-sm">{item.company}</p>
                          </div>
                        </div>
                      </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 text-primary-300 rounded-lg shrink-0 border border-primary-500/20 text-sm w-fit">
                          {item.year}
                        </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 border-neutral-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            <div className="text-center">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-primary-400" />
              <h4 className="text-neutral-50 mb-2 text-base sm:text-lg">Certifications</h4>
              {/* <p className="text-neutral-400 text-sm sm:text-base">
                Full-Stack Developer, JavaScript Algorithms
              </p> */}
            </div>
            <div className="text-center">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-secondary-400" />
              <h4 className="text-neutral-50 mb-2 text-base sm:text-lg">Formation</h4>
              {/* <p className="text-neutral-400 text-sm sm:text-base">
                École du Code, Formation intensive 6 mois
              </p> */}
            </div>
            <div className="text-center">
              <Code className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-primary-400" />
              <h4 className="text-neutral-50 mb-2 text-base sm:text-lg">Projets Open Source</h4>
              {/* <p className="text-neutral-400 text-sm sm:text-base">
                Contributions régulières sur GitHub
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
