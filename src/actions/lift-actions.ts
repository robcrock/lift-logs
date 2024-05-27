"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import type { TLiftLog, TLiftType, TMyLog } from "@/types/liftType";
import { currentUser } from "@clerk/nextjs/server";
import { sql, desc, eq } from "drizzle-orm";
import { AddFormFields } from "@/components/form/add-lift-form";
import { toFriendlyDate } from "@/lib/toFriendlyDate";

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

// Define the function to get the max weight by user
export const getMaxWeightByUser = async (): Promise<TLiftLog[] | null> => {
  // Define the first part of the query to get the max weight by user
  const maxWeightByUser = db
    .select({
      userId: lift.userId,
      lift: lift.lift,
      maxWeight: sql`MAX(${lift.weight})`.as("maxWeight"),
    })
    .from(lift)
    .groupBy(lift.userId, lift.lift)
    .as("maxWeightByUser");

  // Define the second part of the query to get the max weight details
  const maxWeightDetails = db
    .select({
      id: lift.id,
      userId: lift.userId,
      userFullName: lift.userFullName,
      lift: lift.lift,
      maxWeight: maxWeightByUser.maxWeight,
      reps: lift.reps,
      sets: lift.sets,
    })
    .from(lift)
    .innerJoin(
      maxWeightByUser,
      sql`${maxWeightByUser.lift} = ${lift.lift} 
      AND ${maxWeightByUser.maxWeight} = ${lift.weight} 
      AND ${maxWeightByUser.userId} = ${lift.userId}`,
    )
    .as("maxWeightDetails");

  // Perform the final selection
  const finalQuery = db
    .select()
    .from(maxWeightDetails)
    .orderBy(maxWeightDetails.lift, desc(maxWeightByUser.maxWeight));

  // Execute the query
  const data = await finalQuery;

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
