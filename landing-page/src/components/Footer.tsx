const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className="text-white/60 hover:text-(--secondary) transition-colors"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between bg-(--primary) gap-6 p-10">
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-bold text-white">
          Medi<span className="text-(--secondary)">Sync</span>
        </h3>

        <p className="text-white/60 font-light italic">
          La simplicité au service de la vie
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#values">Nos Valeurs</Link>
        <Link href="#about">Qui sommes-nous ?</Link>
        <Link href="#features">Fonctionnalités</Link>
        <Link href="#prices">Tarifs</Link>
      </div>

      <div className="text-white/60 font-light">
        © {new Date().getFullYear()} MediSync. Tous droits réservés.
      </div>
    </footer>
  );
}
