import { ArrowRight, CheckCircle } from "lucide-react";

const prices = [
  {
    name: "Starter",
    price: "45€/mois",
    features: ["Jusqu'à 15 salariés"],
  },
  {
    name: "Pro",
    price: "120€/mois",
    features: ["Jusqu'à 30 salariés", "+ 5€/mois/salarié"],
  },
  {
    name: "Premium",
    price: "350€/mois",
    features: ["Personnalisable"],
  },
];

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

export default function Prices() {
  return (
    <section className="w-full flex flex-col items-center text-center bg-linear-90 from-(--primary) to-(--secondary) gap-8 p-12">
      <div className="w-fit inline-flex items-center rounded-full bg-(--secondary)/20 text-white gap-2 px-2.5 py-1.5">
        <span className="w-2 h-2 rounded-full bg-(--tertiary) animate-pulse" />
        <span>Commencez dès aujourd'hui</span>
      </div>

      <h1 className="font-bold text-white">
        Prêt à transformer vos{" "}
        <span className="relative">
          <span>plannings</span>
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
        ?
      </h1>

      <h3 className="lg:w-1/2 text-white/80">
        Découvrez comment MediSync peut simplifier la gestion de vos équipes et
        apporter sérénité à votre établissement de santé.
      </h3>

      <div className="lg:w-1/2 flex flex-row gap-4 justify-center">
        <LinkButton href="https://medisync-scheduler-pro.vercel.app/">
          Tester l'application
          <ArrowRight className="w-8" />
        </LinkButton>

        <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeuTzbgUBJB8y8WhDP9kMNFpFsUhymFF-29K6CM2T1LG-L8Sg/viewform?usp=header">
          Donnez votre avis
        </LinkButton>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        {prices.map((price) => (
          <div
            key={price.name}
            className="lg:min-w-1/3 lg:max-w-1/3 flex flex-col rounded-lg bg-white border border-black/50 gap-4 p-8"
          >
            <h2 className="font-bold text-(--primary)">{price.name}</h2>
            <h3 className="text-(--secondary)">{price.price}</h3>
            <ul className="flex flex-col gap-2">
              {price.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-(--secondary)" />
                  <span className="text-(--primary)">{feature}</span>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
