interface Props {
  value: string;
  label: string;
}

export default function Alert({ value, label }: Props) {
  return (
    <div className="bg-white rounded-xl border border-black/20 p-4">
      <div>
        <p className="text-(--primary)">{label}</p>
        <h3 className="font-semibold text-(--secondary)">{value}</h3>
      </div>
    </div>
  );
}
