interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Link({ href, children, onClick }: Props) {
  return (
    <a
      className="text-(--primary) hover:text-(--secondary) transition-colors"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
