import { BarChart } from "@/components/charts";
import { columns } from "./tables/my-logs-table/columns";
import { DataTable } from "./tables/my-logs-table/data-table";

import { getLogsByUser } from "@/actions/lift-actions";
import { currentUser } from "@clerk/nextjs/server";
import { LiftStat } from "./tables/cards";
import { DumbbellIcon, MedalIcon, NotebookTextIcon } from "lucide-react";

export const LiftTabContent = async ({
  title,
  liftType,
}: {
  title: string;
  liftType: string;
}) => {
  const user = await currentUser();
  const logs = await getLogsByUser(user, liftType);

  const maxAmount = Math.max(
    ...(logs?.map((log) => Number(log.weight)) || [0]),
  );
  const minAmount = Math.min(
    ...(logs?.map((log) => Number(log.weight)) || [0]),
  );

  if (!logs) return null;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        <LiftStat
          label={"Lifts Logs"}
          icon={NotebookTextIcon}
          amount={String(logs.length)}
          description={"The Lifts You Have Logged"}
        />
        <LiftStat
          label={"Personl Best"}
          icon={MedalIcon}
          amount={String(maxAmount)}
          description={"Best Lift to Date"}
        />
        <LiftStat
          label={"Strength Gained"}
          icon={DumbbellIcon}
          amount={String(maxAmount - minAmount)}
          description={"See How Far You Have Come"}
        />
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <BarChart data={logs} />
        <div className="h-[234px] min-h-[234px] overflow-auto">
          <DataTable columns={columns} data={logs} />
        </div>
      </section>
    </div>
  );
};
