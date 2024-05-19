import { addLift, getData } from "@/actions/liftActions";
import AddLiftForm from "@/components/form/add-lift-form";
import LiftLogs from "@/components/lift-logs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();

  const createLift = async (date: string, formData: FormData) => {
    "use server";
    console.log("date", date);
    console.log("formData", formData);
    await addLift(date, formData);
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
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Bench Press</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="font-medium">315 lbs</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>May 15, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell className="font-medium">295 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>May 8, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell className="font-medium">275 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>May 1, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Emily Davis</TableCell>
                    <TableCell className="font-medium">265 lbs</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>April 24, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>David Wilson</TableCell>
                    <TableCell className="font-medium">255 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>April 17, 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Overhead Press</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="font-medium">185 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>May 12, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell className="font-medium">175 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>May 5, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell className="font-medium">165 lbs</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>April 28, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Emily Davis</TableCell>
                    <TableCell className="font-medium">155 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>April 21, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>David Wilson</TableCell>
                    <TableCell className="font-medium">145 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>April 14, 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Deadlift</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="font-medium">455 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>May 18, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell className="font-medium">435 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>May 11, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell className="font-medium">415 lbs</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>May 4, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Emily Davis</TableCell>
                    <TableCell className="font-medium">405 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>April 27, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>David Wilson</TableCell>
                    <TableCell className="font-medium">395 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>April 20, 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Squat</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="font-medium">405 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>May 17, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell className="font-medium">385 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>May 10, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell className="font-medium">365 lbs</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>May 3, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Emily Davis</TableCell>
                    <TableCell className="font-medium">345 lbs</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>April 26, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>David Wilson</TableCell>
                    <TableCell className="font-medium">325 lbs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell>April 19, 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          {/* <main className="flex mx-auto max-w-4xl w-full min-h-screen flex-col items-center p-16">
            <div className="text-5xl font-medium">Lifts Logged</div>
            <LiftLogs logs={data} />
          </main> */}
        </SignedIn>
      </div>
    </div>
  );
}
