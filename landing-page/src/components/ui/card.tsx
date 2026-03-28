interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export default function Card({ icon, title, description, features }: Props) {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-black/20 gap-4 p-8">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-(--tertiary)/20 text-(--secondary)">
        {icon}
      </div>

      <h3 className="font-bold text-(--primary)">{title}</h3>
      <p className="text-(--primary)">{description}</p>

      {features && (
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full mt-2 bg-(--secondary)/50" />
              <span className="text-(--primary)">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
