import { addLift, getData } from "@/actions/liftActions";
import AddLiftForm from "@/components/form/add-lift-form";
import LiftLogs from "@/components/lift-logs";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();

  const createLift = async (formData: FormData) => {
    "use server";
    await addLift(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <p className="text-lg text-white">Sign in to see the top lifters</p>
      </SignedOut>
      <SignedIn>
        <main className="flex mx-auto max-w-4xl w-full min-h-screen flex-col items-center p-16">
          <div className="text-5xl font-medium">Lifts Logged</div>
          <AddLiftForm createLift={createLift} />
          <LiftLogs logs={data} />
        </main>
      </SignedIn>
    </main>
  );
}
