"use client"
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Sparkles, Loader2, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.",{style: { background: "#16a34a", color: "#fff" }});
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Une erreur est survenue lors de l’envoi du message. Veuillez réessayer plus tard.", {style: { background: "#dc2626", color: "#fff" }});
          setIsLoading(false);
        }
      );
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/raphaelk225",
      color: "hover:bg-neutral-700 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/raphael-kouamelan-9b337733a",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:raphael.kouamelan@epitech.eu",
      color: "hover:bg-red-500 hover:text-white",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raphael.kouamelan@epitech.eu",
      link: "mailto:raphael.kouamelan@epitech.eu",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+225 05 05 63 36 85",
      link: "tel:+2250505633685",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Rue Du Littoral, Port-Bouet",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-effect rounded-full border-primary-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-neutral-200 text-sm sm:text-base">Contact</span>
          </div>
          <h2 className="text-neutral-50 mb-4">Discutons de votre projet</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me
            contacter. Je serais ravi d'échanger avec vous !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-5 sm:p-6 border-neutral-700/50 flex items-start gap-4 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-neutral-500 mb-1 text-sm">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-neutral-100 hover:text-primary-400 transition-colors text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-neutral-100 text-sm sm:text-base">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-xl p-5 sm:p-6 border-neutral-700/50 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-neutral-50 mb-4 text-base sm:text-lg">Retrouvez-moi sur</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg glass-effect border-neutral-700/50 flex items-center justify-center text-neutral-400 ${social.color} transition-all duration-300`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="relative glass-effect rounded-xl p-5 sm:p-6 border-primary-500/30 overflow-hidden card-glow animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/30 to-secondary-600/30 rounded-full filter blur-2xl"></div>
              
              <div className="relative z-10">
                <h4 className="text-neutral-50 mb-2 text-base sm:text-lg">Disponibilité</h4>
                <p className="text-neutral-300 mb-4 text-sm sm:text-base">
                  Je suis actuellement disponible pour un premier stage. Temps plein ou partiel.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-green-400 text-sm sm:text-base">Disponible immédiatement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass-effect rounded-2xl p-6 sm:p-8 border-neutral-700/50 shadow-2xl shadow-primary-500/10 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-neutral-50 mb-6 text-xl sm:text-2xl">Envoyez-moi un message</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-neutral-300 mb-2 text-sm sm:text-base"
                >
                  Nom complet
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  name="name"
                  className="rounded-lg bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 focus:border-primary-500 focus:ring-primary-500/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-neutral-300 mb-2 text-sm sm:text-base"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@example.com"
                  name="email"
                  className="rounded-lg bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 focus:border-primary-500 focus:ring-primary-500/20"
                  required
                />
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-neutral-300 mb-2 text-sm sm:text-base"
                >
                  Objet
                </label>
                <Input
                  id="text"
                  type="text"
                  name="title"
                  placeholder="Ex: Demande de collaboration, Question technique..."
                  className="rounded-lg bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 focus:border-primary-500 focus:ring-primary-500/20"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-300 mb-2 text-sm sm:text-base"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre question..."
                  rows={6}
                  className="rounded-lg resize-none bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 focus:border-primary-500 focus:ring-primary-500/20"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className=" w-full cursor-pointer bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg group shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>

            <p className="text-neutral-500 text-center mt-6 text-xs sm:text-sm">
              Je réponds généralement sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}