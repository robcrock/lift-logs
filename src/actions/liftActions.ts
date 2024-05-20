"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import { liftType, maxLiftType } from "@/types/liftType";
import { currentUser } from "@clerk/nextjs/server";
import { sql, desc } from "drizzle-orm";

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

export const addLift = async (date: string, formData: FormData) => {
  const user = await currentUser();

  console.log("formData", formData);

  const convertedWeight =
    formData.get("unit") === "kg"
      ? Number(formData.get("weight")) * 2.20462
      : Number(formData.get("weight"));

  const values: liftType = {
    userId: user?.id as string,
    userFullName: user?.fullName as string,
    lift: formData.get("lift") as string,
    date,
    sets: formData.get("sets") as string,
    reps: formData.get("reps") as string,
    weight: convertedWeight as unknown as string,
    unit: formData.get("unit") as string,
  };

  await db.insert(lift).values(values);

  revalidatePath("/");
};
