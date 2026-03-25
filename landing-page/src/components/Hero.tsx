import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className="flex justify-center items-center font-bold rounded-lg bg-(--secondary) text-white hover:bg-(--secondary)/80 transition-colors px-6 py-3"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center lg:text-left">
    <h2 className="font-bold text-white">{value}</h2>
    <h3 className="text-white/60">{label}</h3>
  </div>
);

export default function Hero() {
  return (
    <section className="flex text-center lg:text-left bg-linear-90 from-(--primary) to-(--secondary) px-8 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-center lg:items-start gap-8">
          <div className="w-fit inline-flex items-center rounded-full bg-(--secondary)/20 text-white gap-2 px-2.5 py-1.5">
            <span className="w-2 h-2 rounded-full bg-(--tertiary) animate-pulse" />
            <span>Solution de planification intelligente</span>
          </div>

          <h1 className="font-bold text-white">
            Vos plannings,{" "}
            <span className="relative">
              <span className="text-(--tertiary) bg-linear-to-r from-teal-light to-mint">
                simplifiés
              </span>
              <svg
                className="absolute -bottom-1 left-0"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="var(--tertiary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            en un clic
          </h1>

          <h3 className="text-white/80">
            MediSync transforme la complexité de la planification des équipes de
            santé en une tâche simple et automatisée. Respectez les contraintes,
            gagnez du temps, apaisez vos équipes.
          </h3>

          <div className="w-full flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <LinkButton href="https://medisync-scheduler-pro.vercel.app/">
              Tester l'application
              <ArrowRight className="w-8" />
            </LinkButton>
            <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeuTzbgUBJB8y8WhDP9kMNFpFsUhymFF-29K6CM2T1LG-L8Sg/viewform?usp=header">
              Donnez votre avis
            </LinkButton>
          </div>

          <div className="flex flex-row justify-between lgjustify-center items-center gap-20 px-40">
            <Stat value="100%" label="Conformité" />
            <Stat value="1 clic" label="Génération" />
            <Stat value="24/7" label="Disponible" />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="bg-white/80 rounded-xl shadow-card p-6">
            <h3 className="font-semibold mb-6">Planning Équipe Soins</h3>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                <div key={i} className="text-center font-medium text-black/50">
                  {day}
                </div>
              ))}

              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center font-medium ${
                    i === 3 || i === 7 || i === 10
                      ? "bg-(--secondary) text-white"
                      : "bg-(--secondary)/10 text-black"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center bg-white/25 rounded-lg gap-2 p-2">
                <div className="w-8 h-8 rounded-full bg-(--secondary)/20 flex items-center justify-center">
                  <User size={16} className="text-(--secondary)" />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-(--primary)">Dr. Martin</p>
                  <p className="text-(--primary)/80">08:00 - 16:00</p>
                </div>

                <span className="w-2 h-2 rounded-full bg-(--secondary)" />
              </div>

              <div className="flex items-center bg-white/25 rounded-lg gap-2 p-2">
                <div className="w-8 h-8 rounded-full bg-(--secondary)/20 flex items-center justify-center">
                  <User size={16} className="text-(--secondary)" />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-(--primary)">Inf. Dubois</p>
                  <p className="text-(--primary)/80">14:00 - 22:00</p>
                </div>

                <span className="w-2 h-2 rounded-full bg-(--secondary)" />
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-6 bg-white rounded-xl border border-black/25 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-(--secondary)/20 flex items-center justify-center">
                <Clock size={20} className="text-(--secondary)" />
              </div>
              <div>
                <p className="text-(--primary)/80">Temps économisé</p>
                <p className="font-semibold text-(--primary)">4h / semaine</p>
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-8 -left-6 bg-white rounded-xl border border-black/25 p-4 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-(--secondary)/20 flex items-center justify-center">
                <Calendar size={20} className="text-(--secondary)" />
              </div>
              <div>
                <p className="text-(--primary)/80">Conflits</p>
                <p className="font-semibold text-(--primary)">0 détecté</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
