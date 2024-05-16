"use server";

import { revalidatePath } from "next/cache";

import db from "@/db/drizzle";
import { lift } from "@/db/schema";
import { liftType } from "@/types/liftType";

export const getData = async () => {
  const data = await db.select().from(lift);
  return data;
};

export const addLift = async (data: liftType) => {
  console.log("data", data);
  const { userId, date, lift: liftData, numSets, numReps, weightAmt } = data;

  try {
    await db.insert(lift).values({
      userId,
      date,
      lift: liftData,
      numSets,
      numReps,
      weightAmt,
    });
    revalidatePath("/"); // Ensure this function is defined or imported
  } catch (error) {
    console.error("Failed to insert lift data:", error);
    // Handle the error appropriately, possibly rethrowing or returning an error response
  }
};

// export const deleteTodo = async (id: number) => {
//   await db.delete(todo).where(eq(todo.id, id));

//   revalidatePath("/");
// };

// export const toggleTodo = async (id: number, done: boolean) => {
//   await db
//     .update(todo)
//     .set({
//       done: done,
//     })
//     .where(eq(todo.id, id));

//   revalidatePath("/");
// };

// export const editTodo = async (id: number, text: string) => {
//   await db
//     .update(todo)
//     .set({
//       text: text,
//     })
//     .where(eq(todo.id, id));

//   revalidatePath("/");
// };
