import { BarChart } from "@/components/charts";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { getLogsByUser } from "@/actions/lift-actions";
import { currentUser } from "@clerk/nextjs/server";

export const MyLogsTable = async ({
  title,
  liftType,
}: {
  title: string;
  liftType: string;
}) => {
  const user = await currentUser();
  const logs = await getLogsByUser(user, liftType);

  if (!logs) return null;

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
