import {
  User,
  Users,
  Zap,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
  Settings,
  Calendar,
  BarChart3,
  Bell,
  MessageSquare,
} from "lucide-react";

interface Props {
  size?: number;
  color?: "white";
  icon:
    | "user"
    | "shield"
    | "zap"
    | "heart"
    | "arrow-right"
    | "check-circle"
    | "users"
    | "settings"
    | "calendar"
    | "bar-chart-3"
    | "bell"
    | "message-square";
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
    case "users":
      return (
        <Users
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "settings":
      return (
        <Settings
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "calendar":
      return (
        <Calendar
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "bar-chart-3":
      return (
        <BarChart3
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "bell":
      return (
        <Bell
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
    case "message-square":
      return (
        <MessageSquare
          size={size || 25}
          className={`text-${color || "(--secondary)"}`}
        />
      );
  }
}
