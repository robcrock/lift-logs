"use client";

import { useRef } from "react";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SubmitFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button variant="secondary" disabled={pending}>
      {pending ? "Adding log..." : "Add Log"}
    </Button>
  );
};

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
      <Select name="lift">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Lift" />
        </SelectTrigger>
        <SelectContent className="text-slate">
          <SelectItem value="deadlift">Deadlift</SelectItem>
          <SelectItem value="squat">Squat</SelectItem>
          <SelectItem value="bench">Bench</SelectItem>
          <SelectItem value="press">Press</SelectItem>
        </SelectContent>
      </Select>
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
      <Select name="lift">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="unit" />
        </SelectTrigger>
        <SelectContent className="text-slate">
          <SelectItem value="lbs">lbs</SelectItem>
          <SelectItem value="kgs">kgs</SelectItem>
        </SelectContent>
      </Select>
      <SubmitFormButton />
    </form>
  );
};

export default AddLift;
