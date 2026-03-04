import {
  Search,
  Map,
  FlaskConical,
  ShieldCheck,
  FileText,
} from "lucide-react";
const steps = [
  { label: "Spidering", icon: Search },
  { label: "Mapping", icon: Map },
  { label: "Testing", icon: FlaskConical },
  { label: "Validating", icon: ShieldCheck },
  { label: "Reporting", icon: FileText },
];
const metadata = [
  { label: "Scan Type", value: "Grey Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350" },
];
export default function ScanProgressHeader() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {}
      <div className="flex items-center gap-6">
        {}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
          <div className="absolute inset-0 rounded-full bg-(--background) border border-(--border)" />
          <div className="absolute inset-3 rounded-full bg-[#0B0F19] flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-semibold text-(--primary)">
              0%
            </span>
            <span className="text-[10px] sm:text-[11px] text-gray-400 mt-1">
              In Progress
            </span>
          </div>
        </div>
        {}
        <div className="hidden lg:block h-24 w-px bg-(--border)" />
      </div>
      {}
      <div className="flex-1">
        {}
        <div className="relative overflow-x-auto pb-4">
          <div className="min-w-150 relative pt-2">
            {}
            <div className="absolute top-5 left-6 right-6 h-px bg-(--border)" />
            <div className="flex justify-between relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === 0;
                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className={`
                        w-10 h-10 sm:w-12 sm:h-12
                        rounded-full flex items-center justify-center border
                        ${
                          isActive
                            ? "bg-(--primary) border-(--primary) text-white shadow-lg"
                            : "bg-(--background) border-(--border) text-(--text-muted)"
                        }
                      `}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-xs mt-2 text-(--text-secondary)">
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {}
        <div className="mt-6 border-t border-(--border) pt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {metadata.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-(--text-muted)">
                  {item.label}
                </p>
                <p className="text-sm font-medium mt-1 text-(--text-primary)">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}