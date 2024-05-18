"use client";
import { FC } from "react";
import { liftType } from "@/types/liftType";
import Log from "./log";

interface Props {
  logs: liftType[];
}

const LiftLogs: FC<Props> = ({ logs }) => {
  return (
    <div className="w-full flex flex-col mt-8 gap-2">
      {logs.map((log) => (
        <Log key={log.id} lift={log} />
      ))}
    </div>
  );
};

export default LiftLogs;
