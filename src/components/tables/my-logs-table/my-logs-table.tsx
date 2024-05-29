import { BarChart } from "@/components/charts";
import { columns } from "./columns";
import { DataTable } from "./data-table";

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
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <BarChart data={logs} />
        <div className="h-[234px] min-h-[234px] overflow-auto">
          <DataTable columns={columns} data={logs} />
        </div>
      </section>
    </div>
  );
};
