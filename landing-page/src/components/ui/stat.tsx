interface Props {
  variant?: "default" | "primary";
  value: string;
  label: string;
}

export default function Stat({ variant = "default", value, label }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 ${variant === "primary" ? "bg-white/10 rounded-xl p-4" : ""}`}
    >
      <h2 className="font-bold text-white">{value}</h2>
      <h3 className="text-white/60">{label}</h3>
    </div>
  );
}
