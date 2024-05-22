import { addLift, getData } from "@/actions/lift-actions";
import AddLiftForm from "@/components/form/add-lift-form";
import LiftLogs from "@/components/lift-logs";
import { toUTCDate } from "@/lib/toUTCDate";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function Home() {
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
          <AddLiftForm createLift={createLift} />
          <LiftLogs />
        </SignedIn>
      </div>
    </div>
  );
}
