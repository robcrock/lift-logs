"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createTodo: (value: any) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [date, setDate] = useState("");
  const [lift, setLift] = useState("");
  const [numSets, setNumSets] = useState("");
  const [numReps, setNumReps] = useState("");
  const [weightAmt, setWeightAmt] = useState("");

  // Event handler for input change
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const handleLift = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLift(e.target.value);
  };

  const handleSets = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNumSets(e.target.value);
  };

  const handleReps = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNumReps(e.target.value);
  };

  const handleWeight = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setWeightAmt(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo({
      id: String(Math.floor(Math.random() * 1000)),
      date,
      lift,
      numSets,
      numReps,
      weightAmt,
    });
    setDate("");
    setLift("");
    setNumSets("");
    setNumReps("");
    setWeightAmt("");
  };

  // Rendering the AddTodo component
  return (
    <div className="w-full flex gap-1 mt-2">
      {/* Input field for entering new todo text */}
      <input
        type="date"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
        onChange={handleDate}
        value={date}
      />
      <input
        type="text"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
        onChange={handleLift}
        value={lift}
      />
      <input
        type="number"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
        onChange={handleSets}
        value={numSets}
      />
      <input
        type="number"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
        onChange={handleReps}
        value={numReps}
      />
      <input
        type="number"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none text-black"
        onChange={handleWeight}
        value={weightAmt}
      />
      {/* Button for adding a new todo */}
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
