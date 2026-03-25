import {
  Users,
  Settings,
  Calendar,
  BarChart3,
  Bell,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestion des Personas",
    description:
      "Créez et gérez les profils de chaque salarié avec leurs contraintes horaires, temps partiels et forfaits spécifiques.",
  },
  {
    icon: Settings,
    title: "Paramétrage Service",
    description:
      "Configurez les règles de votre service : horaires, nombre de personnes, règles internes et contraintes légales.",
  },
  {
    icon: Calendar,
    title: "Génération Automatique",
    description:
      "Générez des plannings cohérents et conformes en un seul clic, respectant toutes les contraintes définies.",
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord",
    description:
      "Visualisez en temps réel l'état de vos plannings, les heures travaillées et les indicateurs clés.",
  },
  {
    icon: Bell,
    title: "Alertes Intelligentes",
    description:
      "Recevez des notifications en cas de conflit potentiel ou de non-conformité détectée.",
  },
  {
    icon: Shield,
    title: "Conformité Garantie",
    description:
      "Assurez le respect des réglementations de travail et des accords collectifs automatiquement.",
  },
];

export default function Features() {
  return (
    <section id="features" className="flex flex-col gap-10 items-center px-10">
      <div className="w-full lg:max-w-1/2 flex flex-col text-center gap-6">
        <h1 className="text-(--primary) font-bold">
          Tout ce dont vous avez{" "}
          <span className="text-(--secondary)">besoin</span>
        </h1>
        <p className="text-(--primary)">
          Une suite complète d'outils pour transformer la gestion de vos
          plannings et libérer du temps pour ce qui compte vraiment : le soin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl border border-black/20 gap-4 p-8"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-(--tertiary)/20 text-(--secondary)">
              <feature.icon size={25} />
            </div>

            <h3 className="font-bold text-(--primary)">{feature.title}</h3>
            <p className="text-(--primary)">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
