import { text, pgTable, numeric, date, timestamp } from "drizzle-orm/pg-core";

export const lift = pgTable("lift", {
  id: text("id").primaryKey().notNull(),
  lift: text("lift").notNull(),
  date: date("date").notNull(),
  numSets: numeric("num_sets").notNull(),
  numReps: numeric("num_reps").notNull(),
  weightAmt: numeric("weight_amt").notNull(),
  createdAt: timestamp("create_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
