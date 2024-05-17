import { getData } from "@/actions/liftActions";
import Lifts from "@/components/Lifts";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <p className="text-lg text-white">Sign in to see the top lifters</p>
      </SignedOut>
      <SignedIn>
        <Lifts lifts={data} />
      </SignedIn>
    </main>
  );
}
