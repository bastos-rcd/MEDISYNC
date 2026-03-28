interface Props {
  variant?: "default" | "light";
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Link({ variant, href, children, onClick }: Props) {
  return (
    <a
      className={`${
        variant == "light"
          ? "text-white hover:text-(--secondary)"
          : "text-(--primary) hover:text-(--secondary)"
      } transition-colors`}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
