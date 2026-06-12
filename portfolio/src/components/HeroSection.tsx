import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ImagePro from "../assets/photo-pro2.jpeg";

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-glow"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Right content - Photo */}
          <div
            className="relative flex justify-center order-1 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-linear-to-br from-primary-500 to-secondary-600 rounded-3xl rotate-6 scale-105 opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-primary-400 to-secondary-500 rounded-2xl rotate-12 opacity-30 animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-secondary-400 to-primary-500 rounded-2xl -rotate-12 opacity-30 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 ring-1 ring-white/10">
                <ImageWithFallback
                  src={ImagePro}
                  alt="Raphael KOUAMELAN - Développeur Full-Stack"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 glass-effect rounded-2xl shadow-lg p-3 sm:p-4 border-primary-500/30 card-glow">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-neutral-100 text-xs sm:text-sm whitespace-nowrap">
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Left content */}
          <div className="space-y-2 sm:space-y-4 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-neutral-200 text-sm sm:text-base">
                Bienvenue sur mon portfolio
              </span>
            </div>

            <h1 className="text-neutral-50 animate-slide-in">
              Raphael KOUAMELAN
            </h1>

            <h3
              className="gradient-text animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              Développeur Fullstack Junior | Fintech & APIs de Paiement
            </h3>

            <p
              className="text-neutral-300 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              Développeur Fullstack avec une expérience concrète en environnement fintech,
              où j'ai contribué au développement de plateformes de paiement à fort volume
              transactionnel. Spécialisé dans les APIs de paiement, Mobile Money et
              l'intégration de solutions fintech en production réelle.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12 animate-slide-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            onClick={() =>
              document
                .getElementById("realisations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="min-w-[200px] h-12 px-5 text-sm font-semibold bg-linear-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Voir mes réalisations
            <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="min-w-[200px] h-12 px-5 text-sm font-semibold rounded-xl border-neutral-600 hover:border-primary-500 hover:text-primary-400 glass-effect hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Mail className="mr-2 w-4 h-4 shrink-0" />
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
