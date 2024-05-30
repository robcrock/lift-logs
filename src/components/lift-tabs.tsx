"use client";

import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function LiftTabs({
  tableOne,
  tableTwo,
  tableThree,
  tableFour,
}: {
  tableOne: ReactNode;
  tableTwo: ReactNode;
  tableThree: ReactNode;
  tableFour: ReactNode;
}) {
  return (
    <Tabs defaultValue="benchPress" className="flex w-full flex-col gap-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="benchPress">Bench Press</TabsTrigger>
        <TabsTrigger value="overheadPress">Overhead Press</TabsTrigger>
        <TabsTrigger value="deadlift">Deadlift</TabsTrigger>
        <TabsTrigger value="squat">Squat</TabsTrigger>
      </TabsList>
      <TabsContent value="benchPress">{tableOne}</TabsContent>
      <TabsContent value="overheadPress">{tableTwo}</TabsContent>
      <TabsContent value="deadlift">{tableThree}</TabsContent>
      <TabsContent value="squat">{tableFour}</TabsContent>
    </Tabs>
  );
}
