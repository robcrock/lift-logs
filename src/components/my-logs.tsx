import { MyLogsTable } from "./tables";
import { getLogsByUser } from "@/actions/lift-actions";

const MyLiftLogs = async () => {
  const logs = await getLogsByUser();

  if (!logs) return;

  return (
    <div className="space-y-8">
      <MyLogsTable
        title="Deadlift"
        logs={logs.filter(({ lift }) => lift === "deadlift")}
      />
      <MyLogsTable
        title="Squat"
        logs={logs.filter(({ lift }) => lift === "squat")}
      />
      <MyLogsTable
        title="Bench Press"
        logs={logs.filter(({ lift }) => lift === "bench")}
      />
      <MyLogsTable
        title="Overhead Press"
        logs={logs.filter(({ lift }) => lift === "press")}
      />
    </div>
  );
};

export default MyLiftLogs;
