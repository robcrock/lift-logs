import { getLogsByUser } from "@/actions/lift-actions";
import LiftLogs from "@/components/lift-logs";
import React from "react";

export default async function MyLogs() {
  const data = await getLogsByUser();
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Logs</h1>
          <p className="text-gray-500 dark:text-gray-400">
            View your personal lift logs and progress.
          </p>
        </div>
        {data && <LiftLogs logs={data} />}
      </div>
    </div>
  );
}
