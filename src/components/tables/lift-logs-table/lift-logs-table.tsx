import { DataTable } from "./data-table";
import { columns } from "./columns";

import { TLiftLog } from "@/types/liftType";

export const LiftLogsTable = ({
  title,
  logs,
}: {
  title: string;
  logs: TLiftLog[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold lg:text-2xl">{title}</h2>
      <div className="h-[234px] min-h-[234px] overflow-auto">
        <DataTable columns={columns} data={logs} />
      </div>
    </div>
  );
};
