import { addLift, getMaxWeightByUser } from "@/actions/lift-actions";
import AddLiftForm from "@/components/form/add-lift-form";
import LiftLogs from "@/components/lift-logs";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { toUTCDate } from "@/lib/toUTCDate";
import type { TLiftLog } from "@/types/liftType";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getMaxWeightByUser();

  const createLift = async (data: any) => {
    "use server";
    const utcDate = toUTCDate(data.date);
    await addLift({ ...data, date: utcDate });
  };

  return (
    <div key="1" className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Lift Log</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Track your progress and personal bests.
          </p>
        </div>
        <SignedOut>
          <p className="text-lg text-white">Sign in to see the top lifters</p>
        </SignedOut>
        <SignedIn>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Log a New Lift</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Log a New Lift</DrawerTitle>
              </DrawerHeader>
              <AddLiftForm createLift={createLift} />
            </DrawerContent>
          </Drawer>
          {data && <LiftLogs logs={data} />}
        </SignedIn>
      </div>
    </div>
  );
}
