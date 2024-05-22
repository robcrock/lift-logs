import { format, parseISO } from 'date-fns';

export function toUTCDate(date: Date): string {
  // Format the date to UTC without time zone information
  return format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
}
