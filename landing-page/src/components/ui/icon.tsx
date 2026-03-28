import {
  User,
  Zap,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface Props {
  size?: number;
  color?: "white";
  icon: "user" | "shield" | "zap" | "heart" | "arrow-right" | "check-circle";
}

export default function Icon({ icon, size, color }: Props) {
  switch (icon) {
    case "user":
      return (
        <User
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "shield":
      return (
        <Shield
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "zap":
      return (
        <Zap size={size || 25} className={`text-${color || "(--secondary)"}`} />
      );
    case "heart":
      return (
        <Heart
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "arrow-right":
      return (
        <ArrowRight
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "check-circle":
      return (
        <CheckCircle
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
  }
}
