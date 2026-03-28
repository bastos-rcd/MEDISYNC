import { useTranslation } from "react-i18next";

import Title from "./ui/title";
import Link from "./ui/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-(--primary)">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center gap-10 px-10 lg:px-20 py-10">
        <div className="flex flex-col items-start gap-2">
          <Title
            start={t("footer.title.start")}
            param={t("footer.title.param")}
            end={t("footer.title.end")}
          />

          <p className="text-white/60 font-light italic">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {Array.from(t("nav")).map((item: any) => (
            <Link variant="light" href={item.link}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-white/60 font-light">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
