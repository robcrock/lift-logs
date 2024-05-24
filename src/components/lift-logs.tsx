import type { TLiftLog } from "@/types/liftType";
import { LiftLogsTable } from "./tables";

const LiftLogs = async ({ logs }: { logs: TLiftLog[] }) => {
  return (
    <div className="space-y-8">
      <LiftLogsTable
        title="Deadlift"
        logs={logs.filter(({ lift }) => lift === "deadlift")}
      />
      <LiftLogsTable
        title="Squat"
        logs={logs.filter(({ lift }) => lift === "squat")}
      />
      <LiftLogsTable
        title="Bench Press"
        logs={logs.filter(({ lift }) => lift === "bench")}
      />
      <LiftLogsTable
        title="Overhead Press"
        logs={logs.filter(({ lift }) => lift === "press")}
      />
    </div>
  );
};

export default LiftLogs;
