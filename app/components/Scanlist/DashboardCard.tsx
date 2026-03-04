import {
  AlertCircle,
  AlertTriangle,
  AlertOctagon,
  Search,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
type DashboardCardProps = {
  title: string;
  value: number;
  variant: "critical" | "high" | "medium" | "low";
  change: number;
};
export default function DashboardCard({
  title,
  value,
  variant,
  change,
}: DashboardCardProps) {
  const isIncrease = change > 0;
  const severityConfig = {
    critical: {
      icon: <AlertOctagon size={16} />,
      color: "var(--critical)",
    },
    high: {
      icon: <AlertTriangle size={16} />,
      color: "var(--high)",
    },
    medium: {
      icon: <AlertCircle size={16} />,
      color: "var(--medium)",
    },
    low: {
      icon: <Search size={16} />,
      color: "var(--low)",
    },
  }[variant];
  return (
    <div className="bg-(--surface) border border-(--border) rounded-xl p-6 w-full shadow-sm">
      {}
      <div className="flex items-center justify-between">
        <p className="text-m font-medium text-(--text-muted)">
          {title}
        </p>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: `${severityConfig.color}20`,
            color: severityConfig.color,
          }}
        >
          {severityConfig.icon}
        </div>
      </div>
      {}
      {}
      <div className="flex items-center justify-center gap-1.5 mt-2">
         <h2 className="text-3xl font-semibold  text-(--text-primary)">
        {value}
      </h2>
        {isIncrease ? (
          <ArrowUpRight size={14} className="text-(--critical)" />
        ) : (
          <ArrowDownRight size={14} className="text-(--low)" />
        )}
        <span
          className={`text-xs font-medium ${
            isIncrease ? " text-(--text-primary)" : "text-(--critical)"
          }`}
        >
          {isIncrease ? "+" : ""}
          {change}%{" "}
          {isIncrease ? "increase" : "decrease"} than yesterday
        </span>
      </div>
    </div>
  );
}