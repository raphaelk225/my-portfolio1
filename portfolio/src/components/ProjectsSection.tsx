import { ExternalLink, Lock, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dashboard from "../assets/dashboard.png";
import rotten from "../assets/rotten.jpeg";
import trello from "../assets/Trello.png";
import yobalo from "../assets/yobalo.png";

const projects = [
  {
    id: 1,
    title: "Dashboard - Web app type Netvibes",
    description:
      "Application ReactJS + NestJS permettant aux utilisateurs de créer un dashboard personnalisé avec widgets configurables, intégration de services externes et authentification sécurisée (OAuth2).",
    task: "Widgets configurables, authentification OAuth2, intégration d'APIs externes.",
    image: dashboard,
    stack: ["ReactJS", "NestJS", "OAuth2", "API REST", "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "TrellTech - Intégration API Trello",
    description:
      "Application mobile de gestion de projets avec intégration complète de l'API Trello (workspaces, boards, lists, cards, membres). Architecture modulaire, UI/UX soignée, stratégie de tests et documentation technique complète.",
    task: "Implémentation d'OAuth, profil utilisateur, gestion des boards et cartes.",
    image: trello,
    stack: ["React Native", "OAuth2", "API Trello", "Tailwind CSS", "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "my_rotten_tomatoes - Avis & critiques de films",
    description:
      "Site web Next.js intégrant front-office (consultation, notation, commentaires, favoris) et back-office administrateur (gestion comptes & films, statistiques). Intégration TMDb API pour le catalogue films.",
    task: "CRUD complet pour films et comptes utilisateurs, intégration API TMDb.",
    image: rotten,
    stack: ["Next.js", "API TMDb", "MongoDB", "Tailwind CSS", "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Yobalo — Livraison de proximité",
    description:
      "Plateforme de livraison de proximité mettant en relation les habitants d'un même quartier avec des livreurs situés à moins d'un kilomètre d'eux.",
    task: "Page client, référencement SEO, intégration OpenStreetMap.",
    image: yobalo,
    stack: ["Wordpress", "React Native", "React JS", "Laravel", "OpenStreetMap", "JWT", "MySQL", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "https://yobalo.com/",
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projets" className="py-12 sm:py-16 md:py-20 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-neutral-200 text-sm sm:text-base">Réalisations</span>
          </div>
          <h2 className="text-neutral-50 mb-4">Projets académiques & personnels</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Découvrez une sélection de mes derniers projets, alliant créativité
            technique et résolution de problèmes concrets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-2 border-primary-500/20 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-900">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-80"></div>
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <Badge className="glass-effect text-green-300 backdrop-blur-sm border-green-500/50 bg-green-500/20 text-xs sm:text-sm">
                      Live
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 space-y-4">
                <h3 className="text-neutral-50 text-xl sm:text-2xl">{project.title}</h3>

                <div className="space-y-2 text-sm sm:text-base">
                  <div>
                    <span className="text-neutral-300">{project.description}</span>
                  </div>
                  <div>
                    <span className="text-secondary-400">Tâches réalisées : </span>
                    <span className="text-neutral-300">{project.task}</span>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 border-neutral-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button
                      className="flex-1 bg-linear-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 text-sm transition-all duration-300"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                      Voir le projet
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="flex-1 rounded-lg text-sm bg-neutral-800/60 text-neutral-500 border border-neutral-700/50"
                    >
                      <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                      Privé / En cours
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
