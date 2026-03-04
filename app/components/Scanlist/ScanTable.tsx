"use client";
import { StatusBadge } from "./Studybadge";
import { SeverityChip } from "./SeverityChip";
import { useRouter } from "next/navigation";

interface Scan {
  id: string;
  name: string;
  type: string;
  status: string;
  progress: number;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  lastScan: string;
}

export default function ScanTable({
  scans,
}: {
  scans: Scan[];
}) {
  const router = useRouter();
  return (
    <div className="bg-(--surface) border border-(--border) rounded-xl mb-10 overflow-hidden">
      {}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm min-w-225">
          <thead className="border-b border-(--border) text-(--text-muted)">
            <tr className="text-left">
              <th className="px-6 py-4 font-medium">Scan Name</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Progress</th>
              <th className="px-6 py-4 font-medium">Vulnerability</th>
              <th className="px-6 py-4 font-medium text-right">Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => router.push(`/activescan/${scan.id}`)}
                className="cursor-pointer border-t border-(--border) hover:bg-(--surface)/60 transition"
              >
                <td className="px-6 py-5 font-medium text-(--text-primary)">
                  {scan.name}
                </td>
                <td className="px-6 py-5 text-(--text-secondary)">
                  {scan.type}
                </td>
                <td className="px-6 py-5">
                  <StatusBadge status={scan.status} />
                </td>
                <td className="px-6 py-5 w-55">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-(--border)">
                      <div
                        className="h-2 rounded-full bg-(--primary)"
                        style={{ width: `${scan.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-(--text-secondary)">
                      {scan.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <SeverityChip color="var(--critical)" value={scan.vulnerabilities.critical} />
                    <SeverityChip color="var(--high)" value={scan.vulnerabilities.high} />
                    <SeverityChip color="var(--medium)" value={scan.vulnerabilities.medium} />
                    <SeverityChip color="var(--low)" value={scan.vulnerabilities.low} />
                  </div>
                </td>
                <td className="px-6 py-5 text-right text-(--text-muted)">
                  {scan.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {}
      <div className="md:hidden divide-y divide-(--border)">
        {scans.map((scan) => (
          <div
            key={scan.id}
            onClick={() => router.push(`/activescan/${scan.id}`)}
            className="p-4 space-y-3 cursor-pointer hover:bg-(--surface)/60 transition"
          >
            {}
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-(--text-primary)">
                  {scan.name}
                </p>
                <p className="text-xs text-(--text-secondary)">
                  {scan.type}
                </p>
              </div>
              <StatusBadge status={scan.status} />
            </div>
            {}
            <div>
              <div className="flex items-center justify-between text-xs text-(--text-secondary) mb-1">
                <span>Progress</span>
                <span>{scan.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-(--border)">
                <div
                  className="h-2 rounded-full bg-(--primary)"
                  style={{ width: `${scan.progress}%` }}
                />
              </div>
            </div>
            {}
            <div className="flex items-center gap-2 flex-wrap">
              <SeverityChip color="var(--critical)" value={scan.vulnerabilities.critical} />
              <SeverityChip color="var(--high)" value={scan.vulnerabilities.high} />
              <SeverityChip color="var(--medium)" value={scan.vulnerabilities.medium} />
              <SeverityChip color="var(--low)" value={scan.vulnerabilities.low} />
            </div>
            {}
            <div className="text-xs text-(--text-muted)">
              Last Scan: {scan.lastScan}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}