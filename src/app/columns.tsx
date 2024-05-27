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
    header: "Weight (lbs)",
  },
  {
    accessorKey: "reps",
    header: "Reps",
  },
  {
    accessorKey: "sets",
    header: "Sets",
  },
];
