import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TLiftLog } from "@/types/liftType";

export const LiftLogsTable = ({
  title,
  logs,
}: {
  title: string;
  logs: TLiftLog[];
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-[318px] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="min-w-20">Weight</TableHead>
              <TableHead className="w-14">Reps</TableHead>
              <TableHead className="w-14">Sets</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log: any, rank) => (
              <TableRow key={log.id}>
                <TableCell className="text-right">
                  <span className="text-xs text-muted-foreground">#</span>
                  {` ${rank + 1}`}
                </TableCell>
                <TableCell>{log.userFullName}</TableCell>
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
