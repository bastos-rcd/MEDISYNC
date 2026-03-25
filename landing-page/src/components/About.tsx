import { CheckCircle } from "lucide-react";

const benefits = [
  "Modéliser les profils des salariés et exigences des services",
  "Générer un planning cohérent et conforme en un seul clic",
  "Respecter les contraintes horaires, temps partiels et autres",
  "Garantir la conformité aux réglementations de travail",
];

const stats = [
  { value: "CHU", label: "Hôpitaux" },
  { value: "Cliniques", label: "Humaines & Vétérinaires" },
  { value: "100%", label: "Automatisé" },
  { value: "0", label: "Conflits" },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-10"
    >
      <div className="w-full flex flex-col text-left gap-8">
        <h1 className="text-(--primary) font-bold">
          <span className="text-(--secondary)">Medisync</span> : La
          planification intelligente pour la santé
        </h1>

        <p className="text-(--primary)">
          Chez <strong>Medisync</strong>, notre mission est de rétablir
          l'équilibre au cœur de votre organisation. Nous avons conçu une
          solution de planification intelligente, automatique et hautement
          paramétrable pour démanteler la complexité du scheduling.
        </p>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-(--secondary)" />
              <span className="text-(--primary)">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="pl-4 border-l-4 border-(--secondary)">
          <p className="font-semibold text-(--primary) italic">
            "Libérer les Ressources Humaines du fardeau logistique. Un planning
            bien fait est le premier pas vers des soins bien donnés."
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col text-white relative bg-linear-120 from-(--primary) to-(--secondary) rounded-2xl gap-4 lg:gap-8 p-4 lg:p-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-(--secondary)/20 flex items-center justify-center">
              <h2 className="font-bold">M</h2>
            </div>
            <div>
              <h3 className="font-bold">Medisync</h3>
              <p className="text-white/60">
                La simplicité au service de la vie
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 lg:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4">
                <h2 className="font-bold">{stat.value}</h2>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute -bottom-12 -left-8 bg-white rounded-xl border border-black/20 p-4">
          <p className="text-(--primary)">Résultat</p>
          <h3 className="font-bold text-(--secondary)">Sérénité des équipes</h3>
        </div>
      </div>
    </section>
  );
}
