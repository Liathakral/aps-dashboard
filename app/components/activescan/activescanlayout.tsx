import ScanProgressHeader from "./ScanProgressHeader";
import LiveConsole from "./LiveConsole";
import FindingLog from "./FindingLog";
import StatusBar from "./StatusBar";
export default function ActiveScanLayout() {
  return (
    <div className="flex flex-col flex-1 gap-10 min-w-0 overflow-hidden">
      {}
      <div className="bg-(--surface) border  border-(--border) rounded-xl p-4 sm:p-6">
        <ScanProgressHeader />
      </div>
      {}
     <div className="grid grid-cols-1 lg:grid-cols-12 min-w-0 w-full bg-(--surface) border border-(--border) rounded-xl mb-10 overflow-hidden">
        {}
       <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-(--border) min-w-0 overflow-hidden">
          <LiveConsole />
        </div>
        {}
        <div className="lg:col-span-4">
          <FindingLog />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}