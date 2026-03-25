import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className="text-(--primary) hover:text-(--secondary) transition-colors"
    href={href}
  >
    {children}
  </a>
);

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className="flex justify-center items-center font-bold rounded-lg bg-(--secondary) text-white hover:bg-(--secondary)/80 transition-colors px-2.5 py-1.5"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[color-mix(in_srgb,black,transparent_80%)] flex flex-row justify-between items-center gap-20 p-2">
      <a href="/">
        <img src="/logo-desktop.webp" className="hidden lg:block w-20" />
        <img src="/logo-mobile.webp" className="block lg:hidden w-10" />
      </a>

      <div className="hidden lg:flex flex-row gap-4">
        <NavLink href="#values">Nos Valeurs</NavLink>
        <NavLink href="#about">Qui sommes-nous ?</NavLink>
        <NavLink href="#features">Fonctionnalités</NavLink>
      </div>

      <div className="hidden lg:flex flex-row gap-4">
        <LinkButton href="https://medisync-scheduler-pro.vercel.app/">
          Accéder à l'application
        </LinkButton>
      </div>

      <button
        className="lg:hidden p-2 text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {isOpen && (
        <div className="absolute lg:hidden left-0 top-full w-full bg-white border-b border-[color-mix(in_srgb,black,transparent_80%)] flex flex-col items-start gap-6 p-4">
          <NavLink href="#values">Nos Valeurs</NavLink>
          <NavLink href="#about">Qui sommes-nous ?</NavLink>
          <NavLink href="#features">Fonctionnalités</NavLink>
          <LinkButton href="https://medisync-scheduler-pro.vercel.app/">
            Accéder à l'application
          </LinkButton>
        </div>
      )}
    </header>
  );
}
