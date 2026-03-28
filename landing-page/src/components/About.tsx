import { useTranslation } from "react-i18next";

import Title from "./ui/title";
import Badge from "./ui/badge";
import Description from "./ui/description";
import Icon from "./ui/icon";
import Stat from "./ui/stat";
import Alert from "./ui/alert";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 px-10 lg:px-20"
    >
      <div className="w-full flex flex-col text-left gap-8">
        <Badge variant="secondary" label={t("about.badge")} />

        <Title
          variant="primary"
          start={t("about.title.start")}
          param={t("about.title.param")}
          end={t("about.title.end")}
        />

        <Description content={t("about.description")} />

        <div className="space-y-4">
          {Array.from(t("about.benefits")).map(
            (benefit: any, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <Icon icon="check-circle" size={15} />
                <span className="text-(--primary)">{benefit}</span>
              </div>
            ),
          )}
        </div>

        <div className="pl-4 border-l-4 border-(--secondary)">
          <p className="font-semibold text-(--primary) italic">
            "{t("about.quote")}"
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="bg-linear-120 from-(--primary) to-(--secondary) rounded-2xl gap-4 lg:gap-8 p-4 lg:p-8">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {Array.from(t("about.stats")).map((stat: any, index: number) => (
              <Stat
                key={index}
                variant="primary"
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute -bottom-12 -left-8">
          <Alert
            value={t("about.alert.value")}
            label={t("about.alert.label")}
          />
        </div>
      </div>
    </section>
  );
}
