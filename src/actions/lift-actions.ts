"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import type { TLiftLog, TLiftType, TMyLog } from "@/types/liftType";
import { currentUser } from "@clerk/nextjs/server";
import { sql, desc, eq } from "drizzle-orm";
import { AddFormFields } from "@/components/form/add-lift-form";
import { format } from "date-fns";
import { toFriendlyDate } from "@/lib/toFriendlyDate";

export const getData = async () => {
  const data = await db.select().from(lift);
  return data;
};

export const getLogsByUser = async (): Promise<TMyLog[] | null> => {
  const user = await currentUser();

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
    .where(eq(lift.userId, user.id))
    .orderBy(desc(lift.date));

  return data.map((log) => {
    log.date = toFriendlyDate(log.date);
    return log;
  });
};

export const getMaxWeightByUser = async (): Promise<TLiftLog[] | null> => {
  const data = await db
    .select({
      userId: lift.userId,
      userFullName: lift.userFullName,
      lift: lift.lift,
      weight: sql`MAX(${lift.weight})`,
      reps: lift.reps,
      sets: lift.sets,
    })
    .from(lift)
    .groupBy(lift.userId, lift.userFullName, lift.lift, lift.sets, lift.reps)
    .orderBy(desc(sql`MAX(${lift.weight})`), desc(lift.reps));

  return data;
};

export const addLift = async (data: AddFormFields) => {
  const user = await currentUser();

  const { date, lift: liftData, sets, reps, weight, unit } = data;

  console.log("data", data);

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
