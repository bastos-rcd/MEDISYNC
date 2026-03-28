import { useTranslation } from "react-i18next";

import Badge from "./ui/badge";
import Title from "./ui/title";
import Button from "./ui/button";
import Icon from "./ui/icon";
import Card from "./ui/card";

export default function Prices() {
  const { t } = useTranslation();

  return (
    <section
      id="prices"
      className="bg-linear-90 from-(--primary) to-(--secondary)"
    >
      <div className="flex flex-col items-center text-center gap-10 px-10 lg:px-20 py-10 lg:py-18">
        <Badge label={t("prices.badge")} />

        <Title
          start={t("prices.title.start")}
          param={t("prices.title.param")}
          end={t("prices.title.end")}
        />

        <p className="lg:w-1/2 text-white/80">{t("prices.description")}</p>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 justify-center">
          <Button
            size="large"
            onClick={() => window.open(t("application.link"), "_blank")}
          >
            {t("application.label")}
          </Button>

          <Button
            variant="white"
            size="large"
            onClick={() => window.open(t("form.link"), "_blank")}
          >
            <div className="flex flex-row items-center gap-2">
              <Icon icon="message-square" color="white" size={15} />
              {t("form.label")}
            </div>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          {Array.from(t("prices.cards")).map((price: any, index: number) => (
            <Card
              key={index}
              title={price.name}
              description={price.price}
              features={price.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
