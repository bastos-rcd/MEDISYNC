interface Props {
  label: string;
}

export default function Badge({ label }: Props) {
  return (
    <div className="inline-flex items-center rounded-full bg-(--secondary)/20 text-white gap-2 px-3 py-2">
      <span className="w-2 h-2 rounded-full bg-(--tertiary) animate-pulse" />
      <span>{label}</span>
    </div>
  );
}
