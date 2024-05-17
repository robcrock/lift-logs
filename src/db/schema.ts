import {
  text,
  pgTable,
  numeric,
  date,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const lift = pgTable("lift", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  lift: text("lift").notNull(),
  date: date("date").notNull(),
  sets: numeric("sets").notNull(),
  reps: numeric("reps").notNull(),
  weight: numeric("weight").notNull(),
  createdAt: timestamp("create_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
