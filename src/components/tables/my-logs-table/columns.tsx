"use client";

import { TMyLog } from "@/types/liftType";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TMyLog>[] = [
  {
    accessorKey: "date",
    header: "Date",
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
