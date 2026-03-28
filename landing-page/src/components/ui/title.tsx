interface Props {
  start: string;
  param: string;
  end: string;
}

export default function Title({ start, param, end }: Props) {
  return (
    <h1 className="font-bold text-white">
      {start}

      <span className="relative">
        <span className="text-(--tertiary) bg-linear-to-r from-teal-light to-mint">
          {param}
        </span>
        <svg
          className="absolute -bottom-1 left-0"
          viewBox="0 0 200 8"
          fill="none"
        >
          <path
            d="M2 6C50 2 150 2 198 6"
            stroke="var(--tertiary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {end}
    </h1>
  );
}
