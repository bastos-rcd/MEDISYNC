import { useTranslation } from "react-i18next";

import Badge from "./ui/badge";
import Title from "./ui/title";
import Description from "./ui/description";
import Icon from "./ui/icon";
import Card from "./ui/card";

export default function Features() {
  const { t } = useTranslation();

  return (
    <section
      id="features"
      className="flex flex-col justify-center items-center gap-10 px-10 lg:px-20"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary" label={t("features.badge")} />

        <Title
          variant="primary"
          start={t("features.title.start")}
          param={t("features.title.param")}
          end={t("features.title.end")}
        />

        <Description content={t("features.description")} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from(t("features.cards")).map((feature: any, index: number) => (
          <Card
            key={index}
            icon={<Icon icon={feature.icon} />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
