import { columns } from "@/app/my-logs/columns";
import { DataTable } from "@/app/my-logs/data-table";

import { TMyLog } from "@/types/liftType";

export const MyLogsTable = async ({
  title,
  logs,
}: {
  title: string;
  logs: TMyLog[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-[234px] min-h-[234px] overflow-auto">
        <DataTable columns={columns} data={logs} />
      </div>
    </div>
  );
};
