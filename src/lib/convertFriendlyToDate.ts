import { parse } from "date-fns";

export function convertFriendlyToDate(dateStr: string) {
  // Replace ordinal suffixes if they exist
  const cleanedDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");

  // Parse the cleaned string into a date object
  // Assuming 'Sep 14, 23' means September 14, 2023
  const date = parse(cleanedDateStr, "MMM d, yy", new Date());

  return date;
}
