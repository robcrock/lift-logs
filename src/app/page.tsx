import { getMaxWeightByUser } from "@/actions/lift-actions";
import { AddLiftDrawer } from "@/components/add-lift-drawer";
import LiftLogs from "@/components/lift-logs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { TLiftLog } from "@/types/liftType";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = (await getMaxWeightByUser()) as TLiftLog[];

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
          {data && <LiftLogs logs={data} />}
          <AddLiftDrawer />
        </SignedIn>
      </div>
    </div>
  );
}
