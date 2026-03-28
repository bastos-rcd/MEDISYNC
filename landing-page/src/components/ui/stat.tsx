interface Props {
  value: string;
  label: string;
}

export default function Stat({ value, label }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-white">{value}</h2>
      <h3 className="text-white/60">{label}</h3>
    </div>
  );
}
