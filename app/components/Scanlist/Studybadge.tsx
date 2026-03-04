export const StatusBadge = ({ status }: { status: string }) => {
  const base =
    "px-3 py-1 rounded-full text-xs font-medium";

  if (status === "Completed") {
    return (
      <span
        className={`${base} bg-(--low)/15 text-(--low)`}
      >
        Completed
      </span>
    );
  }

  if (status === "Scheduled") {
    return (
      <span
        className={`${base} bg-gray-400/15 text-(--text-secondary)`}
      >
        Scheduled
      </span>
    );
  }

  if (status === "Failed") {
    return (
      <span
        className={`${base} bg-(--critical)/15 text-(--critical)`}
      >
        Failed
      </span>
    );
  }

  return null;
}