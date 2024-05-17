"use client";
import { FC, useState } from "react";
import { liftType } from "@/types/liftType";
import Lift from "./Lift";
import AddLift from "./AddLift";

interface Props {
  lifts: liftType[];
}

const Lifts: FC<Props> = ({ lifts }) => {
  return (
    <main className="flex mx-auto max-w-4xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">Lifts Logged</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {lifts.map((lift) => (
          <Lift key={lift.id} lift={lift} />
        ))}
      </div>
      <AddLift />
    </main>
  );
};

export default Lifts;
