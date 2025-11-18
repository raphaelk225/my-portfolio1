import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import post from "../../src/assets/post-it.png"
import freeads from "../../src/assets/freeads.jpeg"
import yowl from "../../src/assets/yowl.png"
import dashboard from "../../src/assets/dashboard.png"
import rotten from "../../src/assets/rotten.jpeg"
import trello from "../../src/assets/Trello.png"

const projects = [
  {
    id: 1,
    title: "Site web Post-it - Vue.js/Projet Individuel",
    description:
      "Site web SPA permettant de gérer des post-it (CRUD) via Vue.js, avec navigation interne (Vue Router), stockage local (LocalStorage), puis stockage en ligne via Fetch API. Architecture basée sur composants, props/events et lifecycle hooks.",
    problem: "Les PME avaient besoin d'une solution simple pour visualiser leurs KPIs.",
    task: "Composants Vue, routing, data binding et communication via props/events , Stockage local puis distant via API (Fetch) , Implémentation du CRUD complet des post-it",
    image: post,
    stack: [ "VueJS", "Fetch API ", "Bootstrap", "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Site web de petites annonces - Laravel",
    description:
      "Développement d’une plateforme de petites annonces avec authentification, vérification d’e-mail, gestion complète des utilisateurs et annonces (CRUD), upload de photos, moteur de recherche et filtres avancés.",
    problem: "Besoin d'une boutique en ligne moderne avec une UX optimale.",
    task: "Interface utilisateur ,CRUD Annonces (Ads), Système de filtres.",
    image: freeads,
    stack: ["Laravel", "MVC architecture", "MySQL", "Tailwind CSS",  "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "YOWL - Web app de commentaires communautaires",
    description:
      "Conception et développement d’une application web (Laravel + Vue.js) permettant de commenter tout contenu Internet. Spécifications, UI/UX, API sécurisée, MVP.",
    problem: "Les équipes avaient du mal à coordonner leurs tâches efficacement.",
    task: " Conception de maquettes , Interface utilisateur , Création du Dashboard KPI, Affichage des publications",
    image: yowl,
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind Css", "Git/GitHub","Postman"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "my_rotten_tomatoes - Site de présentation et avis sur films",
    description:
      "Site web Next.js intégrant front-office (consultation, notation, commentaires, favoris) et back-office administrateur (gestion comptes & films, statistiques). Intégration TMDb API pour le catalogue films.",
    problem: "Les équipes avaient du mal à coordonner leurs tâches efficacement.",
    task: " CRUD complet pour films et comptes utilisateurs",
    image: rotten,
    stack: ["Next.js", "API TMDb","MongoDB","Tailwind Css", "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  ,
  {
    id: 5,
    title: "Dashboard - Web app type Netvibes",
    description:
      "Application ReactJS + NestJS permettant aux utilisateurs de créer un dashboard personnalisé avec widgets configurables, intégration de services externes et authentification sécurisée (OAuth2).",
    problem: "Les équipes avaient du mal à coordonner leurs tâches efficacement.",
    task: " CRUD complet pour films et comptes utilisateurs",
    image: dashboard,
    stack: ["ReactJS", "NestJS", "OAuth2", "API REST","Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "TrellTech - Intégration API Trello",
    description:
      "Application mobile de gestion de projets avec intégration complète de l’API Trello (workspaces, boards, lists, cards, membres). Architecture modulaire, UI/UX soignée, stratégie de tests et documentation technique complète.",
    problem: "Les équipes avaient du mal à coordonner leurs tâches efficacement.",
    task: " Implémentation d’OAuth, dashboard utilisateur.",
    image: trello,
    stack: ["React Native","OAuth2", "API Trello","Tailwind Css", "Postman", "Git/GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projets" className="py-12 sm:py-16 md:py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-neutral-200 text-sm sm:text-base">Réalisations</span>
          </div>
          <h2 className="text-neutral-50 mb-4">Projets Récents</h2>
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
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-80"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <Badge className="glass-effect text-neutral-100 backdrop-blur-sm border-primary-500/30 text-xs sm:text-sm">
                    {project.role}
                  </Badge>
                </div>
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
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg shadow-lg shadow-primary-500/20 text-sm"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-400 mb-4 text-sm sm:text-base">
            Vous voulez voir plus de projets ?
          </p>
          <Button
            variant="outline"
            className="rounded-lg border-neutral-700 hover:border-primary-500 hover:text-primary-400 glass-effect text-sm sm:text-base"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Voir mon GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}