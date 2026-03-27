interface Props {
  variant?: "default" | "outline";
  size?: "normal" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = "default",
  size = "normal",
  children,
  onClick,
}: Props) {
  return (
    <button
      className={`flex justify-center items-center rounded-xl font-bold border-2
        ${size === "large" ? "px-6 py-3" : "px-4 py-1.5"}
        ${
          variant === "outline"
            ? "text-(--primary) hover:text-white border-(--primary) hover:bg-(--primary)"
            : "text-white border-(--secondary) bg-(--secondary) hover:bg-(--secondary)/80 hover:border-(--secondary)/80"
        }
        hover:cursor-pointer transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
