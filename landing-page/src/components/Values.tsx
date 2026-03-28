import { useTranslation } from "react-i18next";

import Badge from "./ui/badge";
import Title from "./ui/title";
import Description from "./ui/description";
import Card from "./ui/card";
import Icon from "./ui/icon";

export default function Values() {
  const { t } = useTranslation();

  return (
    <section
      id="values"
      className="flex flex-col justify-center items-center gap-10 px-10 lg:px-20"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary" label={t("values.badge")} />

        <Title
          variant="primary"
          start={t("values.title.start")}
          param={t("values.title.param")}
          end={t("values.title.end")}
        />

        <Description content={t("values.description")} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Array.from(t("values.cards")).map((value: any, index: number) => (
          <Card
            key={index}
            icon={<Icon icon={value.icon} />}
            title={value.title}
            description={value.description}
            features={value.features}
          />
        ))}
      </div>
    </section>
  );
}
