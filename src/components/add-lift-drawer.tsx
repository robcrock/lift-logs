import React from "react";

import { PlusIcon } from "@radix-ui/react-icons";
import AddLiftForm from "./form/add-lift-form";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { toUTCDate } from "@/lib/toUTCDate";
import { addLift } from "@/actions/lift-actions";

export const AddLiftDrawer = async () => {
  const createLift = async (data: any) => {
    "use server";
    const utcDate = toUTCDate(data.date);
    await addLift({ ...data, date: utcDate });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 z-50 h-10 w-10 rounded-full bg-primary p-3 text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          variant="outline"
        >
          <PlusIcon className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Log a New Lift</DrawerTitle>
        </DrawerHeader>
        <AddLiftForm createLift={createLift} />
      </DrawerContent>
    </Drawer>
  );
};
