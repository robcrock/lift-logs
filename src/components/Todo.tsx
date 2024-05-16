"use client";
import { FC, useState } from "react";
import { liftType } from "@/types/liftType";

interface Props {
  lift: liftType;
  // changeTodoText: (id: number, text: string) => void;
  // toggleIsTodoDone: (id: number, done: boolean) => void;
  // deleteTodoItem: (id: number) => void;
}

// const Todo: FC<Props> = ({ lift, changeTodoText, deleteTodoItem }) => {
const Todo: FC<Props> = ({ lift }) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  // const [text, setText] = useState(todo.text);

  // Event handler for text input change
  // const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };

  // Event handler for initiating the edit mode
  // const handleEdit = () => {
  //   setEditing(true);
  // };

  // Event handler for saving the edited text
  // const handleSave = async () => {
  //   changeTodoText(lift.id, text);
  //   setEditing(false);
  // };

  // Event handler for canceling the edit mode
  // const handleCancel = () => {
  //   setEditing(false);
  //   setText(todo.text);
  // };

  // Event handler for deleting a todo item
  // const handleDelete = () => {
  //   if (confirm("Are you sure you want to delete this todo?")) {
  //     deleteTodoItem(todo.id);
  //   }
  // };

  console.log("lift", lift);

  // Rendering the Todo component
  return (
    <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      {/* Input field for todo text */}
      {/* <input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`${
          todo.done ? "line-through" : ""
        } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full text-black`}
      /> */}
      {/* Action buttons for editing, saving, canceling, and deleting */}
      {/* <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Todo;
