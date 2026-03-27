import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

import Link from "./ui/link";
import Button from "./ui/button";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/20">
      <nav className="flex flex-row justify-between items-center gap-20 p-2 lg:p-0 lg:px-20">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <img src="/logo-desktop.webp" className="hidden lg:block w-20" />
          <img src="/logo-mobile.webp" className="block lg:hidden w-20" />
        </Link>

        <div className="hidden lg:flex flex-row gap-4">
          {Array.from(t("navigation")).map((item: any, index: number) => (
            <Link key={index} href={item.link}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex flex-row gap-4">
          <Button
            variant="outline"
            onClick={() => window.open(t("form.link"), "_blank")}
          >
            {t("form.label")}
          </Button>

          <Button onClick={() => window.open(t("application.link"), "_blank")}>
            {t("application.label")}
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-6 p-4">
            {Array.from(t("navigation")).map((item: any, index: number) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
              >
                <h3>{item.label}</h3>
              </Link>
            ))}

            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="large"
                onClick={() => {
                  window.open(t("form.link"), "_blank");
                  setIsOpen(false);
                }}
              >
                <h3>{t("form.label")}</h3>
              </Button>

              <Button
                size="large"
                onClick={() => {
                  window.open(t("application.link"), "_blank");
                  setIsOpen(false);
                }}
              >
                <h3>{t("application.label")}</h3>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
