"use client";

import { liftType } from "@/types/liftType";

const Log = ({ lift }: { lift: liftType }) => {
  return (
    <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      <ul className="flex gap-4">
        <li>{lift.userFullName}</li>
        <li>{lift.lift}</li>
        <li>{lift.date}</li>
        <li>{lift.sets}</li>
        <li>{lift.reps}</li>
        <li>{lift.weight}</li>
      </ul>
    </div>
  );
};

export default Log;
