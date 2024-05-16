import React from "react";
import { useFormStatus } from "react-dom";

export const Button = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
    >
      Add
    </button>
  );
};
