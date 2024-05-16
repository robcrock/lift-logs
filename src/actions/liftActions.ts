"use server";

import { revalidatePath } from "next/cache";

import db from "@/db/drizzle";
import { lift } from "@/db/schema";

export const getData = async () => {
  const data = await db.select().from(lift);
  return data;
};

export const addLift = async (userId: string, formData: FormData) => {
  await db.insert(lift).values({
    userId,
    date: formData.get("date"),
    lift: formData.get("lift"),
    sets: formData.get("sets"),
    reps: formData.get("reps"),
    weight: formData.get("weight"),
  });

  revalidatePath("/");
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
