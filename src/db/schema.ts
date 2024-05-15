import { text, pgTable, numeric, date } from "drizzle-orm/pg-core";

export const lift = pgTable("lift", {
  id: numeric("id").primaryKey(),
  lift: text("lift").notNull(),
  date: date("date").notNull(),
  numSets: numeric("num_sets").notNull(),
  numReps: numeric("num_reps").notNull(),
  weightAmt: numeric("weight_amt").notNull(),
});
