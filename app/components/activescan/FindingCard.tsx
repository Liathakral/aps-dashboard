interface FindingCardProps {
  severity: "Critical" | "High" | "Medium";
  title: string;
  endpoint: string;
  description: string;
}

export default function FindingCard({ severity, title, endpoint, description }: FindingCardProps) {
  const colors: Record<string, string> = {
    Critical: "bg-red-500",
    High: "bg-orange-500",
    Medium: "bg-yellow-500",
  };

  return (
    <div className="bg-(--surface) border border-(--border) rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-center">
        <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${colors[severity]}`}>
          {severity}
        </span>

        <span className="text-xs text-(--text-muted)">
          10:45:23
        </span>
      </div>

      <h4 className="mt-4 text-sm font-semibold text-(--text-primary)">
        {title}
      </h4>

      <p className="mt-1 text-xs text-(--primary)">
        {endpoint}
      </p>

      <p className="mt-3 text-xs text-(--text-secondary) leading-relaxed">
        {description}
      </p>
    </div>
  );
}