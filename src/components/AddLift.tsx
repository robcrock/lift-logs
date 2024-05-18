"use client";

import { useRef } from "react";
import { Button } from "./Button";

const AddLift = ({ createLift }: { createLift: any }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={(formData: FormData) => {
        formRef.current?.reset();
        createLift(formData);
      }}
      className="w-full flex gap-1 mt-2"
    >
      <input
        type="date"
        name="date"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
      />
      <input
        type="text"
        name="lift"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
      />
      <input
        type="number"
        name="sets"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
      />
      <input
        type="number"
        name="reps"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
      />
      <input
        type="number"
        name="weight"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
      />
      <Button />
    </form>
  );
};

export default AddLift;
