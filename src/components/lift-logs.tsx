import type { TLiftLog } from "@/types/liftType";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LiftTable = ({ title, logs }: { title: string; logs: TLiftLog[] }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-[318px] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Reps</TableHead>
              <TableHead>Sets</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log: any, rank) => (
              <TableRow key={log.id}>
                <TableCell>{`# ${rank + 1}`}</TableCell>
                <TableCell>{log.userFullName}</TableCell>
                <TableCell className="text-end font-medium">{`${log.weight} lbs`}</TableCell>
                <TableCell className="text-end">{log.reps}</TableCell>
                <TableCell className="text-end">{log.sets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const LiftLogs = async ({ logs }: { logs: TLiftLog[] }) => {
  return (
    <div className="space-y-6">
      <LiftTable
        title="Deadlift"
        logs={logs.filter(({ lift }) => lift === "deadlift")}
      />
      <LiftTable
        title="Squat"
        logs={logs.filter(({ lift }) => lift === "squat")}
      />
      <LiftTable
        title="Bench Press"
        logs={logs.filter(({ lift }) => lift === "bench")}
      />
      <LiftTable
        title="Overhead Press"
        logs={logs.filter(({ lift }) => lift === "press")}
      />
    </div>
  );
};

export default LiftLogs;
