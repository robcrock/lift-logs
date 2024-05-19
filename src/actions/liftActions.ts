"use server";

import { revalidatePath } from "next/cache";
import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import { liftType } from "@/types/liftType";
import { currentUser } from "@clerk/nextjs/server";

export const getData = async () => {
  const data = await db.select().from(lift);
  return data;
};

export const addLift = async (formData: FormData) => {
  const user = await currentUser();

  const values: liftType = {
    userId: user?.id as string,
    userFullName: user?.fullName as string,
    lift: formData.get("lift") as string,
    date: formData.get("date") as string,
    sets: formData.get("sets") as string,
    reps: formData.get("reps") as string,
    weight: formData.get("weight") as string,
    unit: formData.get("unit") as string,
  };

  await db.insert(lift).values(values);

  revalidatePath("/");
};
