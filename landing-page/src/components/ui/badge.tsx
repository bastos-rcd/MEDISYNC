interface Props {
  variant?: "default" | "secondary";
  label: string;
}

export default function Badge({ variant = "default", label }: Props) {
  return (
    <div className="w-fit inline-flex items-center rounded-full bg-(--secondary)/10 gap-2 px-3 py-2">
      <span className="w-2 h-2 rounded-full bg-(--tertiary) animate-pulse" />
      <span
        className={`text-${variant === "secondary" ? "(--secondary) font-semibold" : "white"}`}
      >
        {label}
      </span>
    </div>
  );
}
