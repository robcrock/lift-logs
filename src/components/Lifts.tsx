"use client";
import { FC, useState } from "react";
import { liftType } from "@/types/liftType";
import Lift from "./Lift";
import AddLift from "./AddLift";

interface Props {
  lifts: liftType[];
}

const Lifts: FC<Props> = ({ lifts }) => {
  // State to manage the list of todo items
  const [liftItems, _] = useState<liftType[]>(lifts);

  // Function to change the text of a lift item
  // const changeLiftText = (id: number, text: string) => {
  //   setLiftItems((prev) =>
  //     prev.map((lift) => (lift.id === id ? { ...lift, text } : lift))
  //   );
  // editLift(id, text);
  // };

  // Function to toggle the "done" status of a lift item
  // const toggleIsLiftDone = (id: number, isDone: boolean) => {
  //   setLiftItems((prev) =>
  //     prev.map((lift) =>
  //       lift.id === id ? { ...lift, done: !lift.done } : lift
  //     )
  //   );
  // toggleLift(id, isDone);
  // };

  // Function to delete a lift item
  // const deleteLiftItem = (id: number) => {
  //   setLiftItems((prev) => prev.filter((lift) => lift.id !== id));
  // deleteLift(id);
  // };

  // Rendering the Lift List component
  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">To-do app</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through liftItems and rendering Lift component for each */}
        {liftItems.map((lift) => (
          <Lift
            key={lift.id}
            lift={lift}
            // changeLiftText={changeLiftText}
            // toggleIsLiftDone={() => toggleIsLiftDone(lift.id, !lift.done)}
            // deleteLiftItem={deleteLiftItem}
          />
        ))}
      </div>
      {/* Adding Lift component for creating new lifts */}
      <AddLift />
    </main>
  );
};

export default Lifts;
