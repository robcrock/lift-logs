"use client";
import { FC, useOptimistic } from "react";
import { liftType } from "@/types/liftType";
import Lift from "./Lift";
import AddLift from "./AddLift";
import { addLift } from "@/actions/liftActions";
import { User } from "@clerk/nextjs/server";

interface Props {
  initialLifts: liftType[];
}

const Lifts: FC<Props> = ({ initialLifts }) => {
  const [optimisticLifts, setOptimisticLifts] = useOptimistic(initialLifts);

  const createLift = async (formData: FormData) => {
    setOptimisticLifts((prevLifts: any) => {
      const state = [
        ...prevLifts,
        {
          id: Math.random().toString(36).substr(2, 9),
          userId: "1" as string,
          fullName: "Hello" as string,
          lift: formData.get("lift") as string,
          date: formData.get("date") as string,
          sets: formData.get("sets") as string,
          reps: formData.get("reps") as string,
          weight: formData.get("weight") as string,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      return state;
    });

    await addLift(formData);
  };

  return (
    <main className="flex mx-auto max-w-4xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">Lifts Logged</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {optimisticLifts.map((initialLift) => (
          <Lift key={initialLift.id} lift={initialLift} />
        ))}
      </div>
      <AddLift createLift={createLift} />
    </main>
  );
};

export default Lifts;
