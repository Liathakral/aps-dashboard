import FindingCard from "./FindingCard";
export default function FindingLog() {
  return (
    <div className="h-full bg-(--surface)">

      {/* Header */}
      <div className="px-6 py-4 border-b border-(--border)">
        <h3 className="text-sm font-medium text-(--text-primary)">
          Finding Log
        </h3>
      </div>

      {/* Cards */}
      <div className="p-6 space-y-6 overflow-y-auto h-155">

        <FindingCard
          severity="Critical"
          title="SQL Injection in Authentication Endpoint"
          endpoint="/api/users/profile"
          description="Time-based blind SQL injection confirmed on user-controlled input."
        />

        <FindingCard
          severity="High"
          title="Unauthorized Access to User Metadata"
          endpoint="/api/auth/login"
          description="Authenticated low-privilege user accessed metadata of other users."
        />

        <FindingCard
          severity="Medium"
          title="Broken Authentication Rate Limiting"
          endpoint="/api/search"
          description="No effective rate limiting detected on login attempts."
        />

      </div>
    </div>
  );
}