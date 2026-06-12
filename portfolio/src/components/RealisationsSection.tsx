import { Monitor, CreditCard, Package, Link2, Globe, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const realisations = [
  {
    id: 1,
    Icon: Monitor,
    title: "Refactorisation Dashboard Marchand",
    description:
      "Migration complète de Nuxt.js vers Next.js (React / TypeScript / Tailwind CSS). Reconstruction de l'ensemble des pages, composants et appels API.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS"],
  },
  {
    id: 2,
    Icon: CreditCard,
    title: "Intégration API Moov Africa (PayIn & PayOut)",
    description:
      "Développement des endpoints de collecte (PayIn via USSD Mobile Money) et de décaissement (PayOut) côté backend NestJS. Gestion des webhooks, mise à jour des statuts transactionnels et mécanismes de retry sur timeout.",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Webhooks"],
  },
  {
    id: 3,
    Icon: Package,
    title: "SDK React FeexPay v2",
    description:
      "Développement de la v2 du SDK React officiel FeexPay, permettant aux développeurs tiers d'intégrer facilement les solutions de paiement dans leurs applications.",
    stack: ["React", "TypeScript", "API REST"],
  },
  {
    id: 4,
    Icon: Link2,
    title: "QuickLink QR Code",
    description:
      "Développement d'un système de génération de liens de paiement directs, partageables sous forme de QR code, envoyés directement aux clients pour initier leurs paiements sans redirection complexe.",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    id: 5,
    Icon: Globe,
    title: "Gestion des restrictions par pays & réseau",
    description:
      "Implémentation d'un système de configuration fine des opérateurs disponibles par pays et par réseau (JSONB PostgreSQL), vérifié à chaque initiation de transaction.",
    stack: ["NestJS", "PostgreSQL", "JSONB"],
  },
];

export function RealisationsSection() {
  return (
    <section
      id="realisations"
      className="py-12 sm:py-16 md:py-20 bg-neutral-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-600/10 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-neutral-200 text-sm sm:text-base">FeexPay — En production</span>
          </div>
          <h2 className="text-neutral-50 mb-4">Réalisations professionnelles</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Ce que j'ai concrètement livré en production chez FeexPay
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {realisations.map(({ id, Icon, title, description, stack }, index) => (
            <div
              key={id}
              className="glass-effect rounded-2xl p-5 sm:p-6 border-neutral-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary-600/20 border border-primary-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-neutral-50 text-lg sm:text-xl mb-3">{title}</h3>
              <p className="text-neutral-300 text-sm sm:text-base mb-4 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary-600/20 text-primary-300 border-primary-500/30 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
