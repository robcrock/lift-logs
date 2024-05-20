import { liftType } from "@/types/liftType";
import { parseISO, format } from "date-fns";
import { getData } from "@/actions/liftActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LiftTable = ({ title, logs }: { title: string; logs: liftType[] }) => {
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
              <TableHead>Sets</TableHead>
              <TableHead>Reps</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log: any, rank) => (
              <TableRow key={log.id}>
                <TableCell>{`# ${rank + 1}`}</TableCell>
                <TableCell>{log.userFullName}</TableCell>
                <TableCell className="font-medium">{`${log.weight} ${log.unit}`}</TableCell>
                <TableCell>{log.sets}</TableCell>
                <TableCell>{log.reps}</TableCell>
                <TableCell>
                  {format(parseISO(log.date), "MMM dd, yy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const LiftLogs = async () => {
  const data = await getData();

  return (
    <div className="space-y-6">
      <LiftTable
        title="Bench Press"
        logs={data.filter(({ lift }) => lift === "bench")}
      />
      <LiftTable
        title="Overhead Press"
        logs={data.filter(({ lift }) => lift === "press")}
      />
      <LiftTable
        title="Deadlift"
        logs={data.filter(({ lift }) => lift === "deadlift")}
      />
      <LiftTable
        title="Squat"
        logs={data.filter(({ lift }) => lift === "squat")}
      />
    </div>
  );
};

export default LiftLogs;
