export const SeverityChip = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  return (
    <span
      className="
        min-w-7
        text-center
        px-2 py-1
        rounded-md
        text-xs
        font-semibold
        text-white
      "
      style={{ backgroundColor: color }}
    >
      {value}
    </span>
  );
}