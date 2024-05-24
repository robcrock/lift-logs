import MyLiftLogs from "@/components/my-logs";
import React from "react";

export default async function MyLogs() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Logs</h1>
          <p className="text-gray-500 dark:text-gray-400">
            View your personal lift logs and progress.
          </p>
        </div>
        <MyLiftLogs />
      </div>
    </div>
  );
}
