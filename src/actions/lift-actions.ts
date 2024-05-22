"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import { liftType } from "@/types/liftType";
import { currentUser } from "@clerk/nextjs/server";
import { sql, desc } from "drizzle-orm";
import { AddFormFields } from "@/components/form/add-lift-form";

export const getData = async () => {
  const data = await db.select().from(lift);
  return data;
};

export const getMaxWeightByUser = async () => {
  const data = await db
    .select({
      userId: lift.userId,
      userFullName: lift.userFullName,
      lift: lift.lift,
      maxWeight: sql`ROUND(MAX(${lift.weight}))`,
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

  const values: liftType = {
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
