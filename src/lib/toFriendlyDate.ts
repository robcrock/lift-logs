import { format } from "date-fns";

export function toFriendlyDate(date: string): string {
  const d = new Date(date);
  return format(d, "MMM do, yy");
}
