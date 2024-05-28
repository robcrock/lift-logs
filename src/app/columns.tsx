"use client";

import { TLiftLog } from "@/types/liftType";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TLiftLog>[] = [
  {
    accessorKey: "rowNumber",
    header: "Rank",
  },
  {
    accessorKey: "userFullName",
    header: "Name",
  },
  {
    accessorKey: "weight",
    header: "Max Wt.",
  },
  {
    accessorKey: "reps",
    header: "Max Reps",
  },
  {
    accessorKey: "sets",
    header: "Sets",
  },
];
