"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import { liftType } from "@/types/liftType";

export const getData = async () => {
  const data = await db.select().from(lift);
  return data;
};

export const addLift = async (userId: string, formData: FormData) => {
  const values: liftType = {
    userId,
    lift: formData.get("lift") as string,
    date: formData.get("date") as string,
    sets: formData.get("sets") as string,
    reps: formData.get("reps") as string,
    weight: formData.get("weight") as string,
  };

  await db.insert(lift).values(values);

  revalidatePath("/");
};
