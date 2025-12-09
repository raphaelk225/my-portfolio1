import {
  Code2,
  Server,
  Database,
  Wrench,
  Smartphone,
  Palette,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML / CSS", level: "Avancé" },
      { name: "JavaScript / TypeScript", level: "Intermédiaire" },
      { name: "React.js", level: "Intermédiaire" },
      { name: "Next.js", level: "Intermédiaire" },
      { name: "Tailwind CSS", level: "Avancé" },
      { name: "Vue.js", level: "Intermédiaire" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: "Intermédiaire" },
      { name: "NestJS", level: "Intermédiaire" },
      { name: "PHP", level: "Intermédiaire" },
      { name: "Laravel", level: "Intermédiaire" },
      { name: "REST API", level: "Avancé" },
      { name: "Python", level: "Débutant" },
    ],
  },
  {
    id: 3,
    title: "Base de données",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MySQL", level: "Intermédiaire" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "Flask", level: "Débutant" },
    ],
  },
  {
    id: 4,
    title: "Outils & DevOps",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git / GitHub", level: "Avancé" },
      { name: "Docker", level: "Débutant" },
      { name: "Vercel", level: "Intermédiaire" },
      { name: "Postman", level: "Avancé" },
      { name: "Linux", level: "Avancé" },
    ],
  },
  {
    id: 5,
    title: "Mobile",
    icon: Smartphone,
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "React Native", level: "Intermédiaire" },
      { name: "Responsive Design", level: "Avancé" },
    ],
  },
  {
    id: 6,
    title: "Design & UI/UX",
    icon: Palette,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Figma", level: "Intermédiaire" },
      { name: "UI Design", level: "Intermédiaire" },
      { name: "Adobe XD", level: "Débutant" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Avancé":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Intermédiaire":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Débutant":
      return "bg-neutral-700/50 text-neutral-400 border-neutral-600/50";
    default:
      return "bg-neutral-700/50 text-neutral-400 border-neutral-600/50";
  }
};

const getLevelWidth = (level: string) => {
  switch (level) {
    case "Avancé":
      return "w-full";
    case "Intermédiaire":
      return "w-2/3";
    case "Débutant":
      return "w-1/3";
    default:
      return "w-1/3";
  }
};

export function SkillsSection() {
  return (
    <section id="competences" className="py-12 sm:py-16 md:py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-neutral-200 text-sm sm:text-base">Expertise</span>
          </div>
          <h2 className="text-neutral-50 mb-4">Compétences Techniques</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Un éventail de compétences acquises à travers mes projets et ma
            formation continue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="glass-effect rounded-2xl p-5 sm:p-6 border-neutral-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-neutral-50 text-lg sm:text-xl">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-neutral-300 text-sm sm:text-base">{skill.name}</span>
                        <span
                          className={`px-2 py-0.5 sm:py-1 rounded-md border text-xs ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} ${getLevelWidth(
                            skill.level
                          )} transition-all duration-500 shadow-lg`}
                          style={{ 
                            boxShadow: `0 0 10px rgba(var(--tw-gradient-from), 0.5)` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 glass-effect rounded-2xl p-6 sm:p-8 border-primary-500/30 card-glow">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-lg sm:text-xl gradient-text">Apprentissage continu</div>
              <p className="text-neutral-400 text-sm sm:text-base">
                Je me forme régulièrement aux nouvelles technologies
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-lg sm:text-xl gradient-text">Meilleure Pratique</div>
              <p className="text-neutral-400 text-sm sm:text-base">
                Code propre, tests et documentation
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-lg sm:text-xl gradient-text">Méthodologie Agile</div>
              <p className="text-neutral-400 text-sm sm:text-base">
                Scrum, Kanban et livraisons itératives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
