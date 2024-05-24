import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TMyLog } from "@/types/liftType";

export const MyLogsTable = async ({
  title,
  logs,
}: {
  title: string;
  logs: TMyLog[];
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-[318px] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead className="min-w-20">Weight</TableHead>
              <TableHead className="w-14">Reps</TableHead>
              <TableHead className="w-14">Sets</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log: TMyLog) => (
              <TableRow key={log.id}>
                <TableCell>{log.date}</TableCell>
                <TableCell className="text-end font-medium">
                  {`${log.weight} `}
                  <span className="text-xs text-muted-foreground">lbs</span>
                </TableCell>
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
