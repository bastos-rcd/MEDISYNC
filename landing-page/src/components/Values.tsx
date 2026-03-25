import { Shield, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Fiabilité et Précision",
    description:
      "Des plannings rigoureux et sans conflit, où chaque contrainte est respectée.",
    features: [
      "Conformité aux réglementations de travail",
      "Réduction du risque d'erreurs humaines",
      "Plannings sans conflits garantis",
    ],
  },
  {
    icon: Zap,
    title: "Efficacité et Innovation",
    description: "Transformez des heures de travail manuel en un clic.",
    features: [
      "Automatisation intelligente",
      "Interface intuitive et puissante",
      "Gain de temps considérable",
    ],
  },
  {
    icon: Heart,
    title: "Équilibre et Sérénité",
    description:
      "L'humain au cœur du planning, avec respect des rythmes de chacun.",
    features: [
      "Respect des contraintes de vie",
      "Transparence totale sur les affectations",
      "Réduction du stress des équipes",
    ],
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="flex flex-col justify-center items-center gap-10 px-10"
    >
      <div className="w-full lg:max-w-1/2 flex flex-col text-center gap-6">
        <h1 className="text-(--primary) font-bold">
          Les piliers de notre{" "}
          <span className="text-(--secondary)">engagement</span>
        </h1>
        <p className="text-(--primary)">
          Trois valeurs fondamentales guident notre mission : offrir une
          solution de planification qui allie précision technique et humanité.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:p-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl border border-black/20 gap-4 p-8"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-(--tertiary)/20 text-(--secondary)">
              <value.icon size={25} />
            </div>

            <h3 className="font-bold text-(--primary)">{value.title}</h3>
            <p className="text-(--primary)">{value.description}</p>

            <ul className="space-y-2">
              {value.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-(--secondary)/50" />
                  <span className="text-(--primary)">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
