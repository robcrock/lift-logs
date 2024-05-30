"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import type { TLiftLog, TLiftType, TMyLog } from "@/types/liftType";
import { User, currentUser } from "@clerk/nextjs/server";
import { and, sql, desc, eq, like } from "drizzle-orm";
import { AddFormFields } from "@/components/form/add-lift-form";
import { toFriendlyDate } from "@/lib/toFriendlyDate";

export const getLogsByUser = async (
  user: User | null,
  liftType: string,
): Promise<TMyLog[] | null> => {
  if (!user) return null;

  const data = await db
    .select({
      id: lift.id,
      date: lift.date,
      lift: lift.lift,
      weight: lift.weight,
      reps: lift.reps,
      sets: lift.sets,
    })
    .from(lift)
    .where(and(eq(lift.userId, user.id), like(lift.lift, `${liftType}`)))
    .orderBy(desc(lift.date));

  return data.map((log) => {
    log.date = toFriendlyDate(log.date);
    return log;
  });
};

// Define the function to get the max weight by user
export const getMaxWeightByUser = async (): Promise<TLiftLog[] | null> => {
  // Define the CTE for ranking the lifts
  const rankedLifts = db
    .select({
      userId: lift.userId,
      userFullName: lift.userFullName,
      lift: lift.lift,
      date: lift.date,
      sets: lift.sets,
      reps: lift.reps,
      weight: lift.weight,
      unit: lift.unit,
      rank: sql`ROW_NUMBER() OVER (
        PARTITION BY ${lift.userId}, ${lift.lift}
        ORDER BY ${lift.weight} DESC, ${lift.reps} DESC, ${lift.sets} DESC
      )`.as("rank"),
    })
    .from(lift)
    .as("rankedLifts");

  // Define the final query to select the top-ranked lifts
  const finalQuery = db
    .select({
      userId: rankedLifts.userId,
      userFullName: rankedLifts.userFullName,
      lift: rankedLifts.lift,
      date: rankedLifts.date,
      sets: rankedLifts.sets,
      reps: rankedLifts.reps,
      weight: rankedLifts.weight,
      unit: rankedLifts.unit,
    })
    .from(rankedLifts)
    .where(sql`${rankedLifts.rank} = 1`)
    .orderBy(
      desc(rankedLifts.weight),
      desc(rankedLifts.reps),
      desc(rankedLifts.sets),
    );

  // Execute the query
  const data = await finalQuery;

  return data;
};

export const addLift = async (data: AddFormFields) => {
  const user = await currentUser();

  const { date, lift: liftData, sets, reps, weight, unit } = data;

  const convertedWeight =
    unit === "kg" ? Number(weight) * 2.20462 : Number(weight);

  if (!user) return null;

  const values: TLiftType = {
    userId: user.id,
    userFullName: user.fullName || "",
    lift: liftData,
    date: String(date),
    sets: String(sets),
    reps: String(reps),
    weight: String(convertedWeight),
    unit: unit,
  };

  await db.insert(lift).values(values);

  revalidatePath("/");
};
