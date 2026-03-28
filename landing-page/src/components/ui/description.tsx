interface Props {
  content: string;
}

export default function Description({ content }: Props) {
  return <p className="text-(--primary)">{content}</p>;
}
