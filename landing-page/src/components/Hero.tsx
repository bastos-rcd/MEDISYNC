import { ArrowRight, User } from "lucide-react";
import { useTranslation } from "react-i18next";

import Badge from "./ui/badge";
import Title from "./ui/title";
import Button from "./ui/button";
import Stat from "./ui/stat";
import Alert from "./ui/alert";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-linear-150 lg:bg-linear-90 from-(--primary) to-(--secondary)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 lg:px-20 py-18 lg:py-28">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-8">
          <Badge label={t("hero.badge")} />

          <Title
            start={t("hero.title.start")}
            param={t("hero.title.param")}
            end={t("hero.title.end")}
          />

          <h3 className="text-white/80">{t("hero.description")}</h3>

          <div className="w-full flex flex-col justify-center lg:justify-start lg:flex-row gap-4">
            <Button
              size="large"
              onClick={() => window.open(t("application.link"), "_blank")}
            >
              <div className="flex items-center gap-2">
                {t("application.label")}
                <ArrowRight className="w-5" />
              </div>
            </Button>

            <Button
              variant="white"
              size="large"
              onClick={() => window.open(t("form.link"), "_blank")}
            >
              {t("form.label")}
            </Button>
          </div>

          <div className="w-full flex flex-row justify-between lg:justify-evenly items-center">
            {Array.from(t("hero.stats")).map((stat: any, i: number) => (
              <Stat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="flex flex-col bg-white/90 rounded-xl gap-6 p-6">
            <h3 className="font-semibold">{t("hero.calendar.title")}</h3>

            <div className="grid grid-cols-7 gap-2">
              {Array.from(t("hero.calendar.days")).map(
                (day: any, i: number) => (
                  <p key={i} className="text-center text-black/60">
                    {day}
                  </p>
                ),
              )}

              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center aspect-square rounded-lg ${
                    i === 3 || i === 7 || i === 10
                      ? "bg-(--secondary)/80 text-white"
                      : "bg-(--secondary)/20 text-black"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {Array.from(t("hero.calendar.users")).map(
                (user: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center bg-white/80 rounded-lg gap-2 p-2"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-(--secondary)/20">
                      <User size={15} className="text-(--secondary)" />
                    </div>

                    <div className="flex-1">
                      <p className="font-medium text-(--primary)">
                        {user.name}
                      </p>
                      <p className="text-(--primary)/80">{user.schedule}</p>
                    </div>

                    <span className="w-2 h-2 rounded-full bg-(--secondary)" />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="absolute -top-6 -right-10">
            <Alert
              value={t("hero.alerts.1.value")}
              label={t("hero.alerts.1.label")}
            />
          </div>

          <div className="absolute -bottom-12 -left-6">
            <Alert
              value={t("hero.alerts.0.value")}
              label={t("hero.alerts.0.label")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
