"use client";

import { useRef, useState } from "react";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "../ui/popover";

import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const SubmitFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button variant="secondary" disabled={pending}>
      {pending ? "Adding log..." : "Add Log"}
    </Button>
  );
};

const AddLift = ({ createLift }: { createLift: any }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [date, setDate] = useState<Date>();

  console.log("date", date);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log a New Lift</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          action={(formData: FormData) => {
            formRef.current?.reset();
            console.log("formData", formData);
            createLift(date, formData);
          }}
          className="grid gap-4"
        >
          <div className="flex flex-col space-y-2">
            <Label htmlFor="date">Lift Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="lift">Lift Type</Label>
              <Select defaultValue="bench" name="lift">
                <SelectTrigger>
                  <SelectValue placeholder="Select lift" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bench">Bench Press</SelectItem>
                  <SelectItem value="press">Overhead Press</SelectItem>
                  <SelectItem value="deadlift">Deadlift</SelectItem>
                  <SelectItem value="squat">Squat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input
                    placeholder="Enter weight"
                    type="number"
                    name="weight"
                  />
                </div>
                <div className="flex self-end rounded-md shadow-sm">
                  <Select defaultValue="lbs" name="unit">
                    <SelectTrigger>
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lbs">lbs</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sets">Sets</Label>
              <Input placeholder="Enter sets" type="number" name="sets" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reps">Reps</Label>
              <Input placeholder="Enter reps" type="number" name="reps" />
            </div>
          </div>
          <SubmitFormButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default AddLift;
