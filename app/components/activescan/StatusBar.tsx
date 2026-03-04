export default function StatusBar() {
  return (
<div className="bg-(--surface) border-t border-(--border) py-3 pr-10 pl-3 absolute bottom-0 left-0 right-0 flex flex-wrap gap-6 text-xs text-(--text-muted)">      <span>Sub-agents: 0</span>
        {}
      <div className="flex items-center gap-6 text-(--text-muted)">
        <StatusItem label="Sub-Agents" value="0" />
        <DividerDot />
        <StatusItem label="Parallel Executions" value="2" />
        <DividerDot />
        <StatusItem label="Operations" value="1" />
      </div>
      {}
      <div className="ml-auto flex items-center gap-6 text-(--text-muted)">
        <SeverityItem label="Critical" value="0" color="(--critical)" />
        <SeverityItem label="High" value="0" color="(--high)" />
        <SeverityItem label="Medium" value="0" color="(--medium)" />
        <SeverityItem label="Low" value="0" color="(--low)" />
      </div>
    </div>
  );
}
interface StatusItemProps {
  label: string;
  value: string;
}

function StatusItem({ label, value }: StatusItemProps) {
  return (
    <span>
      {label}: <span className="text-(--text-primary)">{value}</span>
    </span>
  );
}

interface SeverityItemProps {
  label: string;
  value: string;
  color: string;
}

function SeverityItem({ label, value, color }: SeverityItemProps) {
  return (
    <span>
      {label}:{" "}
      <span className={`text-${color}`}>
        {value}
      </span>
    </span>
  );
}
function DividerDot() {
  return (
    <span className="w-1 h-1 bg-(--text-muted) rounded-full" />
  );
}