import { liftType } from "@/types/liftType";
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Sets</TableHead>
            <TableHead>Reps</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log: any) => (
            <TableRow key={log.id}>
              <TableCell>{log.userFullName}</TableCell>
              <TableCell className="font-medium">{`${log.weight} ${log.unit}`}</TableCell>
              <TableCell>{log.sets}</TableCell>
              <TableCell>{log.reps}</TableCell>
              <TableCell>{log.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
